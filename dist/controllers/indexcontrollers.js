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
exports.croqui = void 0;
const select_1 = require("./backend/select");
const croquis_1 = require("./backend/croquis");
const finca_1 = require("../controllers/backend/finca");
const ciclo_1 = require("./backend/ciclo");
class getPredios {
    words(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //  const predio = await work.getPredio()
            let claves = yield ciclo_1.ciclos.ciclo();
            for (let index = 50; index < 60; index++) {
                const element = claves[index];
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    const idpredio = yield select_1.work.getPrediobyid(element.clave);
                    const fincaPredio = yield select_1.work.getfinca(element.clave);
                    const croquis = yield croquis_1.Croquis.croquis(idpredio[0], 1000, 700, 0.5);
                    let respuesta = {
                        predio: idpredio[0],
                        finca: fincaPredio[0],
                        croquis: croquis
                    };
                    const ficha = yield finca_1.worshop.finca(respuesta);
                }), 60000);
            }
            res.json(claves);
        });
    }
    getPrediobyid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const idpredio = yield select_1.work.getPrediobyid(id);
            const fincaPredio = yield select_1.work.getfinca(id);
            console.log(fincaPredio[0]);
            console.log(idpredio[0]);
            const croquis = yield croquis_1.Croquis.croquis(idpredio[0], 600, 500, 0);
            let respuesta = {
                predio: idpredio[0],
                finca: fincaPredio[0],
                croquis: croquis
            };
            const ficha = yield finca_1.worshop.finca(respuesta);
            res.json(respuesta);
        });
    }
}
exports.croqui = new getPredios();
