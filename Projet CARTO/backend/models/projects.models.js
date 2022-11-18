const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    _id: {
        $oid: {
            type: String,
            required: true,
        }
    },
    Acronyme: {
        type: String,
        required: false,
    },
    Consortium: [{
        Insitution: {
            type: String,
            required: false,
        },
        Pays: {
            type: String,
            required: false,
        },
        Role: {
            type: String,
            required: false,
        },
        Equipe: {
            type: String,
            required: false,
        },
        PI: { type: String, required: false },


    }],
    Titre: {
        type: String,
        required: true,
    },
    Budget: {
        type: String,
        required: false,
    },

    Bailleur: {
        type: String,
        required: false,
    },
    TypeCoop: {
        type: String,
        required: false,
    },
    Datedebut: {
        type: String,
        required: false,
    },
    Datefin: {
        type: String,
        required: false,
    },
    Motcle1: {
        type: String,
        required: false,
    },
    Motcle2: {
        type: String,
        required: false,
    },
    Motcle3: {
        type: String,
        required: false,
    },
    Motcle4: {
        type: String,
        required: false,
    },
    Motcle5: {
        type: String,
        required: false,
    },
    Resume: {
        type: String,
        required: false,
    },
    ReferenceProjet: {
        type: String,
        required: false,
    },
});


const Project = mongoose.model("Projet", projectSchema, "Projets");

module.exports = { Project };