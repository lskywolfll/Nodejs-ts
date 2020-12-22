import { Response } from 'express';


export function Success(res: Response, data:Object, status:number = 200){
    res.status(status).json({
        ok: true,
        data
    });
}

export function Error(res: Response, err:Object, status:number = 500){
    res.status(status).json({
        ok: true,
        err
    });
}