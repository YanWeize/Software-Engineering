import React from 'react';
import { Accordion } from 'react-bootstrap'

export default class ItemPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopUp: this.props.active,

        }
    }

    createConsortium(consortium) {
        /* Fonction de récup des partenaire + affichage en HTML */
        var consortiumContent = [];
        var coordinatorContent = [];
        for (var i = 0; i < consortium.length; i++) {

            if (consortium[i].Role === "participant" || consortium[i].Role === "") {

                consortiumContent.push(
                    <div className="consortium">
                        <div className="row justify-content-between ">
                            <div className="col-3">
                                {consortium[i].Institution}
                            </div>
                            <div className="col-3">
                                {consortium[i].Pays}
                            </div>
                            <div className="col-3">
                                {consortium[i].Equipe}
                            </div>
                            <div className="col-3">
                                {consortium[i].PI}
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                coordinatorContent.push(
                    <div className="consortium-coordinateur">
                        <div className="row justify-content-between ">
                            <div className="col-3">
                                {consortium[i].Institution}
                            </div>
                            <div className="col-3">
                                {consortium[i].Pays}
                            </div>
                            <div className="col-3">
                                {consortium[i].Equipe}
                            </div>
                            <div className="col-3">
                                {consortium[i].PI}
                            </div>
                        </div>
                    </div>
                )
            }
        }
        consortiumContent.unshift(coordinatorContent);
        return consortiumContent;
    }

    keyWordRender() {

        var rendering = "";
        if (typeof this.props.data.MotsCles !== 'undefined' && this.props.data.MotsCles !== [""]) {

            for (var i = 0; i < this.props.data.MotsCles.length; i++) {
                if (this.props.data.MotsCles[i] !== undefined) {
                    rendering += this.props.data.MotsCles[i] + " / ";

                }
            }
        }
        return rendering;

    }


    render() {

        return (
            <div className='container-fluid pop-up'>
                <div className='header-project contrainer'>
                    <div className='row justify-content-center'>
                        <h5 className='col-8 titre-item'>
                            {this.props.data.Titre}
                        </h5>
                    </div>
                    <br></br>
                    <div className="row justify-content-between">
                        <h5 className='col-4'>
                            {this.props.data.Acronyme}
                        </h5>
                        <h5 className="col-4 coop-type">
                            {this.props.data.TypeCoop}
                        </h5>
                    </div>
                </div>
                <br></br>
                <div className='keyWord'>Mots-Clés : {this.keyWordRender()}</div>
                <br></br>

                <div className='resumer'>
                    <p>
                        {this.props.data.Resume}
                    </p>
                </div>
                <div className='container donor'>
                    <div className=' row justify-content-between'>
                        <p className='col-6'> {this.props.data.Bailleur}</p>
                        <p className='col-6 date-project'>Début : {this.props.data.DateDebut}</p>
                        <p className='col-6'>Budget : {this.props.data.Budget}</p>
                        <p className='col-6 date-project'>Fin : {this.props.data.DateFin}</p>
                    </div>
                </div>
                <br></br>
                <Accordion defaultActiveKey="0" className="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Consortium  : {this.props.data.Consortium.length} Partenaires</Accordion.Header>
                        <Accordion.Body>
                            {this.createConsortium(this.props.data.Consortium)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        );
    };
}

