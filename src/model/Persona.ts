import { Schema, model } from 'mongoose';

const Persona = new Schema({
    Nombre: {
        type: String,
        required: true
    },
    Edad:{
        type: Number,
        required: true
    }
});

export default model("Persona", Persona);