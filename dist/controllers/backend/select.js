"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work = void 0;
const database_1 = require("../../database");
class predio {
    getPredio() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield database_1.pool.query('SELECT * FROM numbers."finca_final"');
            return response;
        });
    }
    getPrediobyid(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(clave);
            // const resspuesta = await pool.query(`SELECT "id", ST_AsGeoJSON(geom), "idpredio", "clave", "folio", "municipio", "localida_1", "ubicación", "calles", "conjunto", "region", "regimen", "usos", "destinos", "edificacio", "ocupacion", "estado", "alteracion", "corriente", "datacion", "nombre", "inmueble", "intervenci", "observacio", "identifica"
            // FROM numbers.fincas1 where "clave" = $1 `, [clave])
            const resspuesta = yield database_1.pool.query(`SELECT "IDPredio", "Clave",ST_AsGeoJSON(geom) as geom, "Localidad", "Colonia", "Ubicacion", "NumeroExterior", "NumeroInterior", "EsCondominio", "SuperficieDocumento"
    FROM mapa."Predio" where "Clave" = $1`, [clave] /*' SELECT * FROM mapa."Predio1" WHERE id::text = $1', [id]*/);
            return resspuesta.rows;
        });
    }
    getfinca(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(clave);
            const respuesta = yield database_1.pool.query(`SELECT "id", ST_AsGeoJson(geom) as geom, "idpredio", "clave", "superficie", "folio", "municipio", "localida_1", "calle", "entre_call", "conjunto", "region", "regimen", "clasificac", "usos", "niveles", "ocupacion", "estado", "alteracion", "corriente", "datacion", "autor", "inmueble", "observacio", "fotos", "fotos_2", "fotos_3", "fotos_4"
      FROM numbers.finca_final where clave like $1`, [clave]);
            return respuesta.rows;
        });
    }
}
exports.work = new predio();
// const  resspuesta = await pool.query(`SELECT "IDPredio", "Clave",ST_AsGeoJSON(geom) as geom, "Localidad", "Colonia", "Ubicacion", "NumeroExterior", "NumeroInterior", "EsCondominio", "SuperficieDocumento"
// FROM mapa."Predio" where "Clave" = $1`, [clave]/*' SELECT * FROM mapa."Predio1" WHERE id::text = $1', [id]*/);
