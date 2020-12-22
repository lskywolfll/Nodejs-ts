import * as dao from '../dao/persona.dao';
import { Success, Error } from '../helper/Respuesta';
import { Request, Response } from 'express';
import { persona } from '../interface/model/Persona';

export async function getAll(_req: Request, res: Response){
    try {
        const data:Array<persona> = await dao.getAll();

        return Success(res, data);

    } catch (error) {
        return Error(res, error);
    }
}

