import PersonaSchema from '../model/Persona';

export async function getAll() {
    try {
        
        const list = await PersonaSchema.find();

        return list;

    } catch (error) {
        return error;
    }
}