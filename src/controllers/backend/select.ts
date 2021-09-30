import { Request, response, Response } from 'express';
import { pool } from '../../database'
import { QueryResult } from 'pg';
import { Croquis } from './croquis';

  class predio{
         async getPredio() {
        const response = await pool.query('SELECT * FROM numbers."finca_final"');
        return response;
  } 
  async getPrediobyid( clave:any ){
    console.log(clave)

    // const resspuesta = await pool.query(`SELECT "id", ST_AsGeoJSON(geom), "idpredio", "clave", "folio", "municipio", "localida_1", "ubicación", "calles", "conjunto", "region", "regimen", "usos", "destinos", "edificacio", "ocupacion", "estado", "alteracion", "corriente", "datacion", "nombre", "inmueble", "intervenci", "observacio", "identifica"
    // FROM numbers.fincas1 where "clave" = $1 `, [clave])
    const  resspuesta = await pool.query(`SELECT "IDPredio", "Clave",ST_AsGeoJSON(geom) as geom, "Localidad", "Colonia", "Ubicacion", "NumeroExterior", "NumeroInterior", "EsCondominio", "SuperficieDocumento"
    FROM mapa."Predio" where "Clave" = $1`, [clave]/*' SELECT * FROM mapa."Predio1" WHERE id::text = $1', [id]*/);
    return resspuesta.rows;
    }    

    async getfinca(clave: any){
      console.log(clave)

      const respuesta = await pool.query(`SELECT "id", ST_AsGeoJson(geom) as geom, "idpredio", "clave", "superficie", "folio", "municipio", "localida_1", "calle", "entre_call", "conjunto", "region", "regimen", "clasificac", "usos", "niveles", "ocupacion", "estado", "alteracion", "corriente", "datacion", "autor", "inmueble", "observacio", "fotos", "fotos_2", "fotos_3", "fotos_4"
      FROM numbers.finca_final where clave like $1`, [clave])
  
      return respuesta.rows
    }
}

export const work = new predio();

// const  resspuesta = await pool.query(`SELECT "IDPredio", "Clave",ST_AsGeoJSON(geom) as geom, "Localidad", "Colonia", "Ubicacion", "NumeroExterior", "NumeroInterior", "EsCondominio", "SuperficieDocumento"
// FROM mapa."Predio" where "Clave" = $1`, [clave]/*' SELECT * FROM mapa."Predio1" WHERE id::text = $1', [id]*/);
 