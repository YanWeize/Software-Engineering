import React from 'react';
import DB_Connection from '../API/DB_Connection.js';
import ItemPage from './ItemPage.js';
import { Modal, Form, Button } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Charts from './Charts.js'
import Map from './Map.js';


const dbConnection = new DB_Connection();

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // Critère de filtre dynamique
            Recherche: {
                Titre_R: [],
                Acronyme_R: [],
                TypeCoop_R: [],
                Bailleur_R: [],
                Motcle_R: [],
                ID_R: [],
                Pays_R: [],
                Institution_R: [],
            },


            
            ListeCritèreRecherche: {
                ListeInstitutionParPays: [{
                    label: "",
                    y: 0,
                }],
                ListeInstitution: [{
                    label: "",
                    y: 0,
                }],
                ListePays: [{
                    label: "",
                    y: 0,
                }],
                ListeAcronyme: [],
                ListeBailleurs: [{
                    label: "",
                    y: 0,
                }],
                ListeMotcle: [{
                    label: "",
                    number: 0,
                }],
                ListeTitre: [],
            },

            Projet: [{
                Titre: "",
                Acronyme: "",
                TypeCoop: "",
                Budget: "",
                Bailleur: "",
                MotsCles: "",
                DateDebut: "",
                DateFin: "",
                Resume: "",
                ID: "",
                Consortium: [{
                    Institution: "",
                    Pays: "",
                    Role: "",
                    Equipe: "",
                    PI: "",
                }],

            }],
            tableContent: [],
            activeItem: 0,
            active: false,
            activeList: [{
                Titre: "",
                Acronyme: "",
                TypeCoop: "",
                Budget: "",
                Bailleur: "",
                MotsCles: "",
                DateDebut: "",
                DateFin: "",
                Resume: "",
                Role: "",
                ID: "",
                Consortium: [{
                    Institution: "",
                    Pays: "",
                    Role: "",
                    Equipe: "",
                    PI: "",
                }],

            }],
            mapShow: false,
            chartShow: false,

        }
        this.handleClick = this.handleClick.bind(this);
        this.showMap = this.showMap.bind(this);
        this.showChart = this.showChart.bind(this);

        //this.handleSubmit = this.handleSubmit.bind(this);
    };

    filterData(ProjectList) {

        var isFiltered = false;

        if (this.state.Recherche.Institution_R !== undefined && this.state.Recherche.Institution_R !== []) {
            isFiltered = true;
            ProjectList = this.InstitutionFiltre(this.state.Recherche.Institution_R, ProjectList);
        }
        if (this.state.Recherche.Pays_R !== undefined && this.state.Recherche.Pays_R !== []) {
            isFiltered = true;
            ProjectList = this.PaysFiltre(this.state.Recherche.Pays_R, ProjectList);
        }
        if (this.state.Recherche.Acronyme_R !== undefined && this.state.Recherche.Acronyme_R !== []) {
            isFiltered = true;
            ProjectList = this.AcronymeFiltre(this.state.Recherche.Acronyme_R, ProjectList);
        }
        if (this.state.Recherche.Bailleur_R !== undefined && this.state.Recherche.Bailleur_R !== []) {
            isFiltered = true;
            ProjectList = this.BailleurFiltre(this.state.Recherche.Bailleur_R, ProjectList);
        }
        if (this.state.Recherche.TypeCoop_R !== undefined && this.state.Recherche.TypeCoop_R !== []) {
            isFiltered = true;
            ProjectList = this.TypeCoopFiltre(this.state.Recherche.TypeCoop_R, ProjectList);
        }
        if (this.state.Recherche.Motcle_R !== undefined && this.state.Recherche.Motcle_R !== []) {
            isFiltered = true;
            ProjectList = this.MotCleFiltre(this.state.Recherche.Motcle_R, ProjectList);
        }
        if (this.state.Recherche.Titre_R !== undefined && this.state.Recherche.Titre_R !== []) {
            isFiltered = true;
            ProjectList = this.TitreFiltre(this.state.Recherche.Titre_R, ProjectList);
        }
        if (isFiltered === true) {
            return ProjectList;
        }
        else {
            return this.state.Projet;
        }
    }


    MotCleFiltre(criteria, ProjectList) {
        var check = false
        var List = [];
        if (criteria !== undefined) {
            for (let i = 0; i < criteria.length; i++) {
                for (let j = 0; j < ProjectList.length; j++) {
                    check = false;
                    if (typeof ProjectList[j].MotsCles !== 'undefined' && ProjectList[j].MotsCles !== [""]) {
                        for (let k = 0; k < ProjectList[j].MotsCles.length; k++) {
                            if (ProjectList[j].MotsCles[k] === criteria[i] && criteria[i] !== undefined) {
                                check = true;
                            }
                        }
                        if (check === true) {
                            List.push(ProjectList[j]);
                        }
                    }
                }
            }
        }
        return List;
    }

    AcronymeFiltre(criteria, ProjectList) {
        var List = [];
        if (criteria !== undefined) {
            for (var i = 0; i < criteria.length; i++) {
                for (var j = 0; j < ProjectList.length; j++) {
                    if (ProjectList[j].Acronyme === criteria[i]) {
                        List.push(ProjectList[j]);
                    }
                }
            }
        }
        return List;
    }

    TypeCoopFiltre(criteria, ProjectList) {
        var List = [];
        if (criteria !== undefined) {
            for (var i = 0; i < criteria.length; i++) {
                for (var j = 0; j < ProjectList.length; j++) {
                    if (ProjectList[j].TypeCoop === criteria[i] && criteria[i] !== undefined) {
                        List.push(ProjectList[j]);
                    }
                }
            }
        }
        return List;
    }

    BailleurFiltre(criteria, ProjectList) {
        var List = [];
        if (criteria !== undefined) {
            for (var i = 0; i < criteria.length; i++) {
                for (var j = 0; j < ProjectList.length; j++) {
                    if (ProjectList[j].Bailleur === criteria[i].label && criteria[i].label !== undefined) {
                        List.push(ProjectList[j]);

                    }
                }
            }
        }
        return List;
    }


    TitreFiltre(criteria, ProjectList) {
        var List = [];
        if (criteria !== undefined) {
            for (var i = 0; i < criteria.length; i++) {
                for (var j = 0; j < ProjectList.length; j++) {
                    if (ProjectList[j].Titre === criteria[i]) {
                        List.push(ProjectList[j]);
                    }
                }
            }
        }
        return List;
    }

    InstitutionFiltre(criteria, ProjectList) {
        var check = false
        var List = [];
        if (criteria !== undefined) {
            for (let i = 0; i < criteria.length; i++) {
                for (let j = 0; j < ProjectList.length; j++) {
                    check = false;
                    for (let k = 0; k < ProjectList[j].Consortium.length; k++) {
                        if (ProjectList[j].Consortium[k].Institution === criteria[i].label && criteria[i].label !== undefined) {
                            check = true;
                        }
                    }
                    if (check === true) {
                        List.push(ProjectList[j]);
                    }
                }
            }
        }
        return List;
    }

    PaysFiltre(criteria, ProjectList) {
        var check = false
        var List = [];
        if (criteria !== undefined) {
            for (let i = 0; i < criteria.length; i++) {
                for (let j = 0; j < ProjectList.length; j++) {
                    check = false;
                    for (let k = 0; k < ProjectList[j].Consortium.length; k++) {
                        if (ProjectList[j].Consortium[k].Pays === criteria[i].label && criteria[i].label !== undefined) {
                            check = true;
                        }
                    }
                    if (check === true) {
                        List.push(ProjectList[j]);
                    }
                }
            }
        }
        return List;
    }


    /* Section des algo de tri des données pour les critère de recherche dans les filtres */

    // Tri des institutions pour retirer tous les doublons et compter les occurrences de chacun dans l'array
    triInstitutions(projectList) {
        var insitution_array = [];
        for (let i = 0; i < projectList.length; i++) {
            for (let j = 0; j < projectList[i].Consortium.length; j++) {
                insitution_array.push(projectList[i].Consortium[j].Institution);
            }
        }

        var result = [];
        var number = [];
        for (let t = 0; t < insitution_array.length; t++) {
            if (result.includes(insitution_array[t])) {
                let index = result.indexOf(insitution_array[t])
                number[index] = number[index] + 1;
            }
            else {
                result.push(insitution_array[t]);
                let index = result.indexOf(insitution_array[t]);
                number[index] = 1;

            }
        }

        for (let y = 0; y < result.length; y++) {
            this.state.ListeCritèreRecherche.ListeInstitution.push({ label: result[y], y: number[y] });
        }
    }

    // Tri des pays pour retirer tous les doublons et compter les occurrences de chacun dans l'array

    triPays(projectList) {
        var pays_array = [];
        for (let i = 0; i < projectList.length; i++) {
            for (let j = 0; j < projectList[i].Consortium.length; j++) {
                pays_array.push(projectList[i].Consortium[j].Pays);
            }
        }

        var result = [];
        var number = [];
        for (let t = 0; t < pays_array.length; t++) {
            if (result.includes(pays_array[t])) {
                let index = result.indexOf(pays_array[t])
                number[index] = number[index] + 1;
            }
            else {
                result.push(pays_array[t]);
                let index = result.indexOf(pays_array[t]);
                number[index] = 1;
            }
        }
        for (let y = 0; y < result.length; y++) {
            this.state.ListeCritèreRecherche.ListePays.push({ label: result[y], y: number[y] });
        }

    }

    // Tri des bailleurs pour retirer tous les doublons et compter les occurrences de chacun dans l'array

    triBailleurs(projectList) {
        var bailleur_array = [];
        for (let i = 0; i < projectList.length; i++) {
            bailleur_array.push(projectList[i].Bailleur);
        }

        var result = [];
        var number = [];
        for (let t = 0; t < bailleur_array.length; t++) {
            if (result.includes(bailleur_array[t])) {
                let index = result.indexOf(bailleur_array[t])
                number[index] = number[index] + 1;
            }
            else {
                result.push(bailleur_array[t]);
                let index = result.indexOf(bailleur_array[t]);
                number[index] = 1;

            }
        }
        for (let y = 0; y < result.length; y++) {
            this.state.ListeCritèreRecherche.ListeBailleurs.push({ label: result[y], number: number[y] });
        }
    }

    // tri de tous les critères de recherche pour les filtres et les <Autocomplete> (liste d'affichage de suggestion de remplissage d'input)
    
    triDoublonAutocomplete() {
        this.triInstitutions(this.state.Projet);
        this.triPays(this.state.Projet);
        this.triBailleurs(this.state.Projet)
        for (let i = 0; i < this.state.Projet.length; i++) {
            for (let k = 0; k < this.state.Projet[i].MotsCles.length; k++) {
                if (!this.state.ListeCritèreRecherche.ListeMotcle.includes(this.state.Projet[i].MotsCles[k])) {
                    this.state.ListeCritèreRecherche.ListeMotcle.push(this.state.Projet[i].MotsCles[k]);
                }
            }
            if (!this.state.ListeCritèreRecherche.ListeAcronyme.includes(this.state.Projet[i].Acronyme)) {
                this.state.ListeCritèreRecherche.ListeAcronyme.push(this.state.Projet[i].Acronyme);
            }
            if (!this.state.ListeCritèreRecherche.ListeTitre.includes(this.state.Projet[i].Titre)) {
                this.state.ListeCritèreRecherche.ListeTitre.push(this.state.Projet[i].Titre);
            }
        }

    }

    /* Fetch des données depuis le Back-End */

    componentDidMount() {
        dbConnection
            .fetchProjets()
            .then(res => {
                const data = res.data;
                var temp;
                var consortium = [];
                var table = [];
                var tableContent = [];
                for (var i = 0; i < data.length; i++) {

                    for (var j = 0; j < data[i].Consortium.length; j++) {
                        consortium.push({
                            Institution: data[i].Consortium[j].Institution,
                            Pays: data[i].Consortium[j].Pays,
                            Role: data[i].Consortium[j].Role,
                            Equipe: data[i].Consortium[j].Equipe,
                            PI: data[i].Consortium[j].PI,
                        })
                    }

                    temp = {
                        ID: data[i]._id,
                        Titre: data[i].Titre,
                        Acronyme: data[i].Acronyme,
                        TypeCoop: data[i].TypeCoop,
                        Bailleur: data[i].Bailleur,
                        Budget: data[i].Budget,
                        DateDebut: data[i].Datedebut,
                        DateFin: data[i].Datefin,
                        MotsCles: data[i].MotsCles,
                        Resume: data[i].Resume,
                        Consortium: consortium,
                    };
                    table.push(temp);

                    consortium = [];

                    // Remplissage d'un array qui va être afficher dans le render() (Permet un affichage dynamique des données)
                    tableContent.push(
                        <tr className="table-row table-line row">
                            <td className="table-cell col-1 align-middle"><button onClick={this.handleClick.bind(this, i)} className="btn btn-primary acronyme" value={i}>{data[i].Acronyme}</button></td>
                            <td className="table-cell col-6 align-middle">{data[i].Titre}</td>
                            <td className="table-cell col-1 align-middle">{data[i].TypeCoop}</td>
                            <td className="table-cell text-center align-middle col-1">{data[i].Consortium.length}</td>
                            <td className="table-cell col-1">{data[i].Bailleur}</td>
                            <td className="table-cell  align-middle col-2 text-center" style={{ padding: "8px 0px" }}>{data[i].Budget}</td>
                        </tr>
                    )
                    temp = null;
                }

                this.setState({ Projet: table, tableContent: tableContent, activeList: table });

                this.triDoublonAutocomplete();
            })
    };



    /* Section de setup de filtre dans State */

    setAllFilter(newBailleur, newTitre, newMotcle, newPays, newInstitution) {
        this.setBailleur_R(newBailleur);
        this.setTitre_R(newTitre);
        this.setInstitution_R(newInstitution);
        this.setPays_R(newPays);
        this.setMotcle_R(newMotcle);
    }

    setBailleur_R(newBailleur) {
        if (newBailleur !== undefined) {
            this.setState({ Recherche: { Bailleur_R: newBailleur } });
        }
    }

    setTitre_R(newTitre) {
        if (newTitre !== undefined) {
            this.setState({ Recherche: { Titre_R: newTitre } })
        }
    }

    setMotcle_R(newMotCle) {
        if (newMotCle !== undefined) {
            this.setState({ Recherche: { Motcle_R: newMotCle } })
        }
    }

    setPays_R(newPays) {
        if (newPays !== undefined) {
            this.setState({ Recherche: { Pays_R: newPays } });
        }
    }

    setInstitution_R(newInstitution) {
        if (newInstitution !== undefined) {
            this.setState({ Recherche: { Institution_R: newInstitution } });
        }
    }

    setAcronyme_R(newAcronyme) {
        if (newAcronyme !== undefined) {
            this.setState({ Recherche: { Acronyme_R: newAcronyme } });
        }
    }

    /* Fin Section setup de filtre dans State */


    /* Section Button Click */

    showMap() {
        this.setState({ mapShow: !this.state.mapShow });
    }

    showChart() {
        this.setState({ chartShow: !this.state.chartShow });
    }

    // Validation de filtrage
    handleSubmit() {
        var ProjectList = this.filterData(this.state.Projet);
        var tableContent = []
        console.log("CLICK")
        for (var i = 0; i < ProjectList.length; i++) {

            tableContent.push(
                <tr className="table-row table-line row">
                    <td className="table-cell col-1 align-middle"><button onClick={this.handleClick.bind(this, i)} className="btn btn-primary acronyme" value={i}>{ProjectList[i].Acronyme}</button></td>
                    <td className="table-cell col-6 align-middle">{ProjectList[i].Titre}</td>
                    <td className="table-cell col-1 align-middle">{ProjectList[i].TypeCoop}</td>
                    <td className="table-cell text-center align-middle col-1">{ProjectList[i].Consortium.length}</td>
                    <td className="table-cell col-1">{ProjectList[i].Bailleur}</td>
                    <td className="table-cell align-middle col-2 text-center" style={{ padding: "8px 0px" }}>{ProjectList[i].Budget}</td>
                </tr>
            )
        }

        if (ProjectList[0] === undefined) {
            this.setState({ activeList: this.state.Projet });
        }
        else {
            this.setState({ tableContent: tableContent, activeList: ProjectList });
        }
        this.forceUpdate();
    }

    /* Fonction de changement de page vers un objet ciblé */
    handleClick(i) {
        this.setState({ active: !this.state.active });
        if (this.state.active !== true) {
            this.setState({ activeItem: i });
        }
    }

    /*Fin Section Button Click*/


    render() {
        return (

            <div className="container-fluid">
                <Button onClick={this.showMap.bind(this)}>Show Map</Button>
                {this.state.mapShow && <Map data={this.state.ListeCritèreRecherche}></Map>}
                <Button onClick={this.showChart.bind(this)}>Show Charts</Button>
                {this.state.chartShow && <Charts data={this.state.ListeCritèreRecherche} activeChart={this.state.activeChart} projet={this.state.Projet}></Charts>}

                <br></br>
                <div className="search-section container-fluid">
                    <Form>
                        <Form.Group className="mb-3 row justify-content-around">
                            <Form.Label className="search-bar-s-label col-12 ">Recherche par critères</Form.Label>
                            <Autocomplete
                                multiple
                                filterSelectedOptions

                                options={this.state.ListeCritèreRecherche.ListeAcronyme}

                                onChange={(eventA, newAcronyme) => { this.setAcronyme_R(newAcronyme) }}

                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Acronyme" />}
                                // getOptionLabel={option => option.ListeAcronyme}
                                style={{ width: 300, margin: 10 }}
                            />
                            <Autocomplete
                                multiple
                                filterSelectedOptions

                                options={this.state.ListeCritèreRecherche.ListeTitre}
                                sx={{ width: 300 }}
                                onChange={(eventT, newTitre) => { this.setTitre_R(newTitre) }}
                                renderInput={(params) => <TextField {...params} label="Titre" />}

                                style={{ width: 300, margin: 10 }}
                            />
                            <Autocomplete
                                multiple
                                filterSelectedOptions

                                options={this.state.ListeCritèreRecherche.ListeInstitution}
                                sx={{ width: 300 }}
                                onChange={(eventI, newInstitution) => { this.setInstitution_R(newInstitution) }}

                                renderInput={(params) => <TextField {...params} label="Institution" />}
                                getOptionLabel={option => option.label}
                                style={{ width: 300, margin: 10 }}
                            />
                            <Autocomplete
                                multiple
                                filterSelectedOptions

                                options={this.state.ListeCritèreRecherche.ListeMotcle}
                                sx={{ width: 300 }}
                                onChange={(eventM, newMotCle) => { this.setMotcle_R(newMotCle) }}
                                renderInput={(params) => <TextField {...params} label="MotsClés" />}

                                style={{ width: 300, margin: 10 }}
                            />
                            <Autocomplete
                                multiple
                                filterSelectedOptions

                                options={this.state.ListeCritèreRecherche.ListeBailleurs}
                                sx={{ width: 300 }}
                                onChange={(eventB, newBailleur) => { this.setBailleur_R(newBailleur) }}
                                renderInput={(params) => <TextField {...params} label="Bailleur" />}
                                // getOptionLabel={option => option.ListeBailleur}
                                style={{ width: 300, margin: 10 }}
                            />
                            <Autocomplete
                                multiple
                                filterSelectedOptions

                                options={this.state.ListeCritèreRecherche.ListePays}
                                sx={{ width: 300 }}
                                onChange={(eventB, newPays) => { this.setPays_R(newPays) }}
                                renderInput={(params) => <TextField {...params} label="Pays" />}
                                // getOptionLabel={option => option.ListeBailleur}
                                style={{ width: 300, margin: 10 }}
                            />
                            <Button variant="primary" className="col-1" style={{ height: "60px", margin: "10px" }} onClick={this.handleSubmit.bind(this)}>Recherche</Button>
                        </Form.Group>
                    </Form>
                </div>
                <Modal show={this.state.active} onHide={() => this.handleClick()}>
                    <Modal.Header closeButton>{this.state.activeList[this.state.activeItem].Titre}</Modal.Header>
                    <Modal.Body>
                        <ItemPage data={this.state.activeList[this.state.activeItem]} />
                    </Modal.Body>
                </Modal>
                <table className="table table-striped table-hover">
                    <thead className="table-header tableheader " >
                        <tr >
                            <th scope="col">Acronyme</th>
                            <th scope="col">Titre du Projet</th>
                            <th scope="col">Type de Coopération</th>
                            <th scope="col">Consortium</th>
                            <th scope="col">Bailleur</th>
                            <th scope="col">Budget</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {this.state.tableContent}
                    </tbody>
                </table>
            </div>
        );
    }
}

