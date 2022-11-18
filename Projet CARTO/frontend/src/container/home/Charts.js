import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'
import { Button } from 'react-bootstrap';


export default class Charts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listeInstitutParPays: [{
                label: "",
                y: 0,
            }],
            recherchePays: "",
            selector: 0,
            update: true,

        }
        this.getChartSample = this.getChartSample.bind(this);
        this.triMixInstitutionPays = this.triMixInstitutionPays.bind(this);
        this.changeSelector = this.changeSelector.bind(this);
    }

    
    triNombreOccurence(liste) {
        var result = []
        liste.sort((a, b) => { return a.y - b.y });
        for (var i = 0; i < liste.length; i++) {
            if (liste[i].label !== "France" && liste[i].label !== "Institut Pasteur (Paris)") {
                if (liste[i].y > 5) {
                    result.push({ label: liste[i].label, y: liste[i].y, click: this.getChartSample.bind(this) });
                }
            }
        }

        return result;

    }

    //Redirection du graph en fonction du selecteur
    graphSelector(selector) {
        if (this.state.update === true) {
            if (selector === 0) {
                this.setState({ affiche: this.triNombreOccurence(this.props.data.ListeInstitution), titre: "Graphique Institut", update: false })
            }
            else if (selector === 1) {
                this.setState({ affiche: this.triNombreOccurence(this.props.data.ListePays), titre: "Graphique Pays", update: false })
            }
            else if (selector === 2) {
                this.setState({ affiche: this.triMixInstitutionPays(this.state.recherchePays), titre: "Graphique Institut de : " + this.state.recherchePays, update: false }) //
            }
        }
    }


    //Tri des institut en fonction de leur pays (entrée : pays recherché / Sortie : liste des institut du pays)

    triMixInstitutionPays(recherchePays) {
        var result = [];
        var number = [];
        var listPays = [];
        for (let i = 0; i < this.props.projet.length; i++) {
            for (let j = 0; j < this.props.projet[i].Consortium.length; j++) {
                if (this.props.projet[i].Consortium[j].Pays === recherchePays) {
                    console.log(this.props.projet[i].Consortium[j].Pays)
                    if (result.includes(this.props.projet[i].Consortium[j].Institution)) {
                        let index = result.indexOf(this.props.projet[i].Consortium[j].Institution);
                        number[index] = number[index] + 1;
                    }
                    else {
                        result.push(this.props.projet[i].Consortium[j].Institution);
                        listPays.push(this.props.projet[i].Consortium[j].Pays);
                        let index = result.indexOf(this.props.projet[i].Consortium[j].Institution);
                        number[index] = 1;
                    }
                }
            }
        }


        var liste = [];

        for (let i = 0; i < number.length; i++) {
            liste.push({ label: result[i], y: number[i] });
        }
        liste.sort((a, b) => { return a.y - b.y });
        var jsonObject = liste.map(JSON.stringify);



        var uniqueSet = new Set(jsonObject);
        var uniqueArray = Array.from(uniqueSet).map(JSON.parse);

        console.log(uniqueArray);
        return uniqueArray;
    }

    //Recupération du label sur le graphique lors d'un click

    getChartSample(e) {
        console.log(e.dataPoint.label);

        this.setState({ recherchePays: e.dataPoint.label });
        console.log(this.triMixInstitutionPays(e.dataPoint.label));

    }

    // Switch de graphique en fonction du bouton

    changeSelector(num) {
        this.setState({ selector: num, update: true });
    }


    render() {
        this.graphSelector(this.state.selector);
        var option = {
            animationEnabled: true,
            click: this.getChartSample.bind(this),
            title: {
                text: this.state.titre,
            },
            data: [{
                type: "pie",
                startAngle: -90,
                indexLabel: "{label}:{y}",
                dataPoints: this.state.affiche,
            }],

        }
        return (
            <div className="chart-container">
                <div className="chart-button-container">
                    <Button variant="secondary" className="col-1 chart-button" onClick={this.changeSelector.bind(this, 0)}>Institution</Button >
                    <Button variant="secondary" className="col-1 chart-button" onClick={this.changeSelector.bind(this, 1)}>Pays</Button>
                    <Button variant="secondary" className="col-1 chart-button" onClick={this.changeSelector.bind(this, 2)}>Institut par pays</Button>
                </div>
                <CanvasJSChart options={option} containerProps={{
                    width: '75%', height: '400px', padding: '0 12%',
                }}></CanvasJSChart>

            </div >
        )
    }
}