import { Request, Response } from 'express';
import { pool } from '../database'
import { QueryResult } from 'pg';
import { work } from './backend/select';
import { parse } from 'querystring';
import { Croquis } from './backend/croquis'
import { worshop } from "../controllers/backend/finca";
import { CLIENT_RENEG_LIMIT } from 'tls';
import { ciclos} from './backend/ciclo'
import { deflateRawSync } from 'zlib';
 class getPredios {
 
  async words (req: Request, res: Response) {

     //  const predio = await work.getPredio()
     let claves:any = await ciclos.ciclo()
     
for (let index = 50; index < 60; index++) {
    const element = claves[index];
    
    setTimeout( async() => {
        const idpredio = await  work.getPrediobyid(element.clave);

    const fincaPredio = await work.getfinca(element.clave);

   

    const croquis = await Croquis.croquis(idpredio[0], 1000,700,0.5)

    let respuesta: any={
        predio: idpredio[0], 
        finca: fincaPredio[0],
        croquis: croquis
    }
    const ficha = await worshop.finca(respuesta)
     

  

    }, 60000);


}


 
     




       res.json(claves)
        }

 async getPrediobyid(req: Request, res: Response){



    const id = req.params.id;

    const idpredio = await  work.getPrediobyid(id);

    const fincaPredio = await work.getfinca(id);

    console.log(fincaPredio[0])
    console.log(idpredio[0]);

    const croquis = await Croquis.croquis(idpredio[0], 600,500,0)

    let respuesta: any={
        predio: idpredio[0], 
        finca: fincaPredio[0],
        croquis: croquis
    }
    const ficha = await worshop.finca(respuesta)
    

 
    res.json(respuesta)

    
        }

    

    }

export const croqui =  new getPredios();




