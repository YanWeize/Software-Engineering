import axios from 'axios';

export default class DB_Connection {
    fetchProjets() {
        return axios.get("http://localhost:3000/Projets", { crossDomain: true });
    }

    fetchProjetsByID(id) {
        return axios
            .get(`http://localhost:3000/Projets/${id}`, { crossDomain: true });
    }
    fetchProjetsByAcronym(acronym) {
        return axios.get(`http://localhost:3000/Projets/${acronym}`, { crossDomain: true });
    }

}