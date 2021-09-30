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
exports.getpredio = void 0;
const database_1 = require("../../database");
class Getpredio {
    getpredio(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const predio = yield database_1.pool.query(`SELECT "IDPredio", "Clave",ST_AsGeoJSON(geom) as geom, "Localidad", "Colonia", "Ubicacion", "NumeroExterior", "NumeroInterior", "EsCondominio", "SuperficieDocumento" FROM mapa."Predio" where "Clave" = $1`, [clave]);
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.getpredio = new Getpredio();
