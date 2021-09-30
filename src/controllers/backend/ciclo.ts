import {pool} from './../../database'

class Ciclo {

    async  ciclo( ) {
            try {
                const query = await pool.query(`
                SELECT 
                    id,
                    clave
                FROM
                 numbers.finca_final
                 order by clave 
                `);
                let claves = query.rows 
                return claves;

            } catch (error) {
                return error;
            }
    }
}


export const  ciclos = new Ciclo();