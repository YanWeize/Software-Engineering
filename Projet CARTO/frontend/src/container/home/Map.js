import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { Button } from 'react-bootstrap';
export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initPos: [51.505, -0.09],

            tableConvertGPS: [
                {
                    Pays: "Afghanistan",
                    Lat: "33.7680065",
                    Long: "66.2385139",
                    value: 0
                },
                {
                    Pays: "Afrique du Sud",
                    Lat: "-28.8166236",
                    Long: "24.991639",
                    value: 0
                },
                {
                    Pays: "Albanie",
                    Lat: "41.000028",
                    Long: "19.9999619",
                    value: 0
                },
                {
                    Pays: "Algérie",
                    Lat: "28.0000272",
                    Long: "2.9999825",
                    value: 0
                },
                {
                    Pays: "Allemagne",
                    Lat: "51.0834196",
                    Long: "10.4234469",
                    value: 0
                },
                {
                    Pays: "Australie",
                    Lat: "-24.7761086",
                    Long: "134.755",
                    value: 0
                },
                {
                    Pays: "Autriche",
                    Lat: "47.59397",
                    Long: "14.12456",
                    value: 0
                },
                {
                    Pays: "Azerbaïdjan",
                    Lat: "40.3936294",
                    Long: "47.7872508",
                    value: 0
                },
                {
                    Pays: "Bangladesh",
                    Lat: "24.4769288",
                    Long: "90.2934413",
                    value: 0
                },
                {
                    Pays: "Belgique ",
                    Lat: "50.6402809",
                    Long: "4.6667145",
                    value: 0
                },
                {
                    Pays: "Brésil",
                    Lat: "-10.3333333",
                    Long: "-53.2",
                    value: 0
                },
                {
                    Pays: "Bulgarie",
                    Lat: "42.6073975",
                    Long: "25.4856617",
                    value: 0
                },
                {
                    Pays: "Burkina Faso",
                    Lat: "12.0753083",
                    Long: "-1.6880314",
                    value: 0
                },
                {
                    Pays: "Cambodge",
                    Lat: "12.5433216",
                    Long: "104.8144914",
                    value: 0
                },
                {
                    Pays: "Cameroun",
                    Lat: "4.6125522",
                    Long: "13.1535811",
                    value: 0
                },
                {
                    Pays: "Canada",
                    Lat: "61.0666922",
                    Long: "-107.991707",
                    value: 0
                },
                {
                    Pays: "Chine",
                    Lat: "35.000074",
                    Long: "104.999927",
                    value: 0
                },
                {
                    Pays: "Chypre",
                    Lat: "34.9823018",
                    Long: "33.1451285",
                    value: 0
                },
                {
                    Pays: "Colombie",
                    Lat: "4.099917",
                    Long: "-72.9088133",
                    value: 0
                },
                {
                    Pays: "Corée du Sud",
                    Lat: "36.638392",
                    Long: "127.6961188",
                    value: 0
                },
                {
                    Pays: "Côte d'Ivoire",
                    Lat: "7.9897371",
                    Long: "-5.5679458",
                    value: 0
                },
                {
                    Pays: "Croatie",
                    Lat: "45.5643442",
                    Long: "17.0118954",
                    value: 0
                },
                {
                    Pays: "Cuba",
                    Lat: "23.0131338",
                    Long: "-80.8328748",
                    value: 0
                },
                {
                    Pays: "Danemark",
                    Lat: "55.670249",
                    Long: "10.3333283",
                    value: 0
                },
                {
                    Pays: "Égypte",
                    Lat: "26.2540493",
                    Long: "29.2675469",
                    value: 0
                },
                {
                    Pays: "Équateur",
                    Lat: "-1.3397668",
                    Long: "-79.3666965",
                    value: 0
                },
                {
                    Pays: "Espagne",
                    Lat: "39.3260685",
                    Long: "-4.8379791",
                    value: 0
                },
                {
                    Pays: "Estonie",
                    Lat: "58.7523778",
                    Long: "25.3319078",
                    value: 0
                },
                {
                    Pays: "États-Unis",
                    Lat: "39.7837304",
                    Long: "-100.445882",
                    value: 0
                },
                {
                    Pays: "Éthiopie",
                    Lat: "10.2116702",
                    Long: "38.6521203",
                    value: 0
                },
                {
                    Pays: "Finlande",
                    Lat: "63.2467777",
                    Long: "25.9209164",
                    value: 0
                },
                {
                    Pays: "France",
                    Lat: "46.603354",
                    Long: "1.8883335",
                    value: 0
                },
                {
                    Pays: "France (Polynésie)",
                    Lat: "-17.0243749",
                    Long: "-144.6434898",
                    value: 0
                },
                {
                    Pays: "Gambie",
                    Lat: "13.470062",
                    Long: "-15.4900464",
                    value: 0
                },
                {
                    Pays: "Géorgie",
                    Lat: "41.6809707",
                    Long: "44.0287382",
                    value: 0
                },
                {
                    Pays: "Grèce",
                    Lat: "38.9953683",
                    Long: "21.9877132",
                    value: 0
                },
                {
                    Pays: "Guinée",
                    Lat: "10.7226226",
                    Long: "-10.7083587",
                    value: 0
                },
                {
                    Pays: "Hong-Kong",
                    Lat: "22.2793278",
                    Long: "114.1628131",
                    value: 0
                },
                {
                    Pays: "Hongrie",
                    Lat: "47.1817585",
                    Long: "19.5060937",
                    value: 0
                },
                {
                    Pays: "Inde",
                    Lat: "22.3511148",
                    Long: "78.6677428",
                    value: 0
                },
                {
                    Pays: "Indonésie",
                    Lat: "-2.4833826",
                    Long: "117.8902853",
                    value: 0
                },
                {
                    Pays: "Iran ",
                    Lat: "32.6475314",
                    Long: "54.5643516",
                    value: 0
                },
                {
                    Pays: "Irlande",
                    Lat: "52.865196",
                    Long: "-7.9794599",
                    value: 0
                },
                {
                    Pays: "Israël",
                    Lat: "30.8124247",
                    Long: "34.8594762",
                    value: 0
                },
                {
                    Pays: "Italie",
                    Lat: "42.6384261",
                    Long: "12.674297",
                    value: 0
                },
                {
                    Pays: "Japon",
                    Lat: "36.5748441",
                    Long: "139.2394179",
                    value: 0
                },
                {
                    Pays: "Kenya",
                    Lat: "1.4419683",
                    Long: "38.4313975",
                    value: 0
                },
                {
                    Pays: "Laos",
                    Lat: "20.0171109",
                    Long: "103.378253",
                    value: 0
                },
                {
                    Pays: "Lettonie",
                    Lat: "56.8406494",
                    Long: "24.7537645",
                    value: 0
                },
                {
                    Pays: "Lituanie",
                    Lat: "55.3500003",
                    Long: "23.7499997",
                    value: 0
                },
                {
                    Pays: "Luxembourg",
                    Lat: "49.8158683",
                    Long: "6.1296751",
                    value: 0
                },
                {
                    Pays: "Madagascar",
                    Lat: "-18.9249604",
                    Long: "46.4416422",
                    value: 0
                },
                {
                    Pays: "Mali",
                    Lat: "16.3700359",
                    Long: "-2.2900239",
                    value: 0
                },
                {
                    Pays: "Malte",
                    Lat: "35.8885993",
                    Long: "14.4476911",
                    value: 0
                },
                {
                    Pays: "Maroc",
                    Lat: "31.1728205",
                    Long: "-7.3362482",
                    value: 0
                },
                {
                    Pays: "Mexique",
                    Lat: "23.6585116",
                    Long: "-102.0077097",
                    value: 0
                },
                {
                    Pays: "Mozambique",
                    Lat: "-19.302233",
                    Long: "34.9144977",
                    value: 0
                },
                {
                    Pays: "Myanmar",
                    Lat: "17.1750495",
                    Long: "95.9999652",
                    value: 0
                },
                {
                    Pays: "Niger",
                    Lat: "17.7356214",
                    Long: "9.3238432",
                    value: 0
                },
                {
                    Pays: "Nigéria",
                    Lat: "9.6000359",
                    Long: "7.9999721",
                    value: 0
                },
                {
                    Pays: "Norvège",
                    Lat: "60.5000209",
                    Long: "9.0999715",
                    value: 0
                },
                {
                    Pays: "Nouvelle-Calédonie",
                    Lat: "-21.3019905",
                    Long: "165.4880773",
                    value: 0
                },
                {
                    Pays: "Ouganda",
                    Lat: "1.5333554",
                    Long: "32.2166578",
                    value: 0
                },
                {
                    Pays: "Ouzbékistan",
                    Lat: "41.32373",
                    Long: "63.9528098",
                    value: 0
                },
                {
                    Pays: "Papouasie Nouvelle-Guinée",
                    Lat: "-5.6816069",
                    Long: "144.2489081",
                    value: 0
                },
                {
                    Pays: "Pays-Bas",
                    Lat: "52.2434979",
                    Long: "5.6343227",
                    value: 0
                },
                {
                    Pays: "Pérou",
                    Lat: "-6.8699697",
                    Long: "-75.0458515",
                    value: 0
                },
                {
                    Pays: "Pologne",
                    Lat: "52.215933",
                    Long: "19.134422",
                    value: 0
                },
                {
                    Pays: "Polynésie française",
                    Lat: "-17.0243749",
                    Long: "-144.6434898",
                    value: 0
                },
                {
                    Pays: "Portugal",
                    Lat: "40.0332629",
                    Long: "-7.8896263",
                    value: 0
                },
                {
                    Pays: "République Centrafricaine",
                    Lat: "7.0323598",
                    Long: "19.9981227",
                    value: 0
                },
                {
                    Pays: "République Tchèque",
                    Lat: "49.8167003",
                    Long: "15.4749544",
                    value: 0
                },
                {
                    Pays: "Roumanie",
                    Lat: "45.9852129",
                    Long: "24.6859225",
                    value: 0
                },
                {
                    Pays: "Royaume-Uni",
                    Lat: "54.7023545",
                    Long: "-3.2765753",
                    value: 0
                },
                {
                    Pays: "Russie",
                    Lat: "64.6863136",
                    Long: "97.7453061",
                    value: 0
                },
                {
                    Pays: "Sénégal",
                    Lat: "14.4750607",
                    Long: "-14.4529612",
                    value: 0
                },
                {
                    Pays: "Serbie",
                    Lat: "44.1534121",
                    Long: "20.55144",
                    value: 0
                },
                {
                    Pays: "Slovaquie",
                    Lat: "48.7411522",
                    Long: "19.4528646",
                    value: 0
                },
                {
                    Pays: "Slovénie",
                    Lat: "45.8133113",
                    Long: "14.4808369",
                    value: 0
                },
                {
                    Pays: "Soudan",
                    Lat: "14.5844444",
                    Long: "29.4917691",
                    value: 0
                },
                {
                    Pays: "Suède",
                    Lat: "59.6749712",
                    Long: "14.5208584",
                    value: 0
                },
                {
                    Pays: "Suisse",
                    Lat: "46.7985624",
                    Long: "8.2319736",
                    value: 0
                },
                {
                    Pays: "Syrie",
                    Lat: "34.6401861",
                    Long: "39.0494106",
                    value: 0
                },
                {
                    Pays: "Tanzanie",
                    Lat: "-6.5247123",
                    Long: "35.7878438",
                    value: 0
                },
                {
                    Pays: "Thaïlande",
                    Lat: "14.8971921",
                    Long: "100.83273",
                    value: 0
                },
                {
                    Pays: "Tunisie",
                    Lat: "33.8439408",
                    Long: "9.400138",
                    value: 0
                },
                {
                    Pays: "Turquie",
                    Lat: "38.9597594",
                    Long: "34.9249653",
                    value: 0
                },
                {
                    Pays: "Ukraine",
                    Lat: "49.4871968",
                    Long: "31.2718321",
                    value: 0
                },
                {
                    Pays: "Uruguay",
                    Lat: "-32.8755548",
                    Long: "-56.0201525",
                    value: 0
                },
                {
                    Pays: "Vietnam",
                    Lat: "15.9266657",
                    Long: "107.9650855",
                    value: 0
                },
                {
                    Pays: "Zimbabwe",
                    Lat: "-18.4554963",
                    Long: "29.7468414",
                    value: 0
                },
            ],

            tableContent: [],
            listePays: [],
            updated: false,
           
            
        }
        this.updateValue = this.updateValue.bind(this);
    }



    componentDidMount() {
        var temp = [];
        for (var i = 0; i < this.state.tableConvertGPS.length; i++) {
            temp.push(
                <Marker position={[this.state.tableConvertGPS[i].Lat, this.state.tableConvertGPS[i].Long]}>
                    <Popup>{this.state.tableConvertGPS[i].Pays} : {this.state.tableConvertGPS[i].value} </Popup>
                </Marker>)

        }
        this.setState({ tableContent: temp });

    }


    updateValue() {
        var array_coord = this.state.tableConvertGPS;
        var array_pays = []
        for (var t = 0; t < array_coord.length; t++) {
            array_pays.push(array_coord[t].Pays);
        }
        for (var i = 0; i < array_pays.length; i++) {
            for (var j = 0; j < this.props.data.ListePays.length; j++) {
                if (this.props.data.ListePays[j].label === array_pays[i]) {
                    let index = array_pays.indexOf(this.props.data.ListePays[j].label);
                    array_coord[index].value = this.props.data.ListePays[j].y;
                }
            }
        }
        var temp = [];
        this.setState({ tableConvertGPS: array_coord });
        for (var r = 0; r < this.state.tableConvertGPS.length; r++) {
            temp.push(
                <Marker position={[this.state.tableConvertGPS[r].Lat, this.state.tableConvertGPS[r].Long]}>
                    <Popup>{this.state.tableConvertGPS[r].Pays} : {this.state.tableConvertGPS[r].value} </Popup>
                </Marker>)
        }
        this.setState({ tableContent: temp });
    }



    


    render() {
        return (
            <div> <br></br>
                <Button onClick={this.updateValue.bind(this)}> Refresh</Button>
                <MapContainer style={this.state.style} center={this.state.initPos} zoom={6} scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.state.tableContent}
                </MapContainer>
            </div>
        )
    }

}