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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Croquis = void 0;
const axios_1 = __importDefault(require("axios"));
const query_string_1 = __importDefault(require("query-string"));
class croquis {
    croquis(predio, width, height, buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            const clave = predio.Clave;
            predio.geom = JSON.parse(predio.geom);
            const bbox = function fbbox(geometry) {
                const outerRing = geometry.coordinates[0];
                let [xmax, ymax] = outerRing[0];
                let [xmin, ymin] = outerRing[0];
                outerRing.forEach(coords => {
                    xmax = Math.max(xmax, coords[0]);
                    xmin = Math.min(xmin, coords[0]);
                    ymax = Math.max(ymax, coords[1]);
                    ymin = Math.min(ymin, coords[1]);
                });
                return [xmin, ymin, xmax, ymax];
            };
            const croquisBbox = bbox(predio.geom);
            const scaleOpt = this.calcDynamicScale(croquisBbox, buffer, width, height);
            const areax = croquisBbox[2] + croquisBbox[0];
            const areay = croquisBbox[3] + croquisBbox[1];
            // await highlightPolygon(predio.Geometry as Polygon);
            const imageUrl = this.getMapUrl({
                x: areax / 2,
                y: areay / 2
            }, {
                width: scaleOpt.width,
                height: scaleOpt.height,
                area_x: scaleOpt.area_x,
                area_y: scaleOpt.area_y,
                dpi: 180,
                url: 'http://187.216.152.105:8080/geoserver/VuTepa-local/wms'
                // url: 'http://192.168.10.5:8080/geoserver/VuTepa-local/wms'
                /*                 url: 'http://187.216.152.105:8080/geoserver/VuTepa-local/wms'
                 */ 
            }, clave);
            const response = yield axios_1.default.get(imageUrl, { responseType: 'arraybuffer' });
            return `data:${response.headers['content-type']};base64,${Buffer.from(
            // String.fromCharCode(...new Uint8Array(response.data)),
            response.data, 'binary').toString('base64')}`;
        });
    }
    getMapUrl({ x, y }, { dpi = 320, url, width, height, area_x, area_y }, clave = '14-003-093-01-0001-003-019-00005-000000') {
        const bbox = [x - area_x / 1.5, y - area_y / 1.5, x + area_x / 1.5, y + area_y / 1.5];
        const query = {
            SERVICE: 'WMS',
            REQUEST: 'GetMap',
            VERSION: '1.3.0',
            LAYERS: 'VuTepa-local:Tepatitlan-Catastro,VuTepa-local:Predio.',
            STYLES: ',SelecionPrueba',
            FORMAT: 'image/png',
            TRANSPARENT: 'true',
            HEIGHT: Math.round((height * dpi) / 100),
            WIDTH: Math.round((width * dpi) / 100),
            CRS: 'EPSG:6368',
            BBOX: bbox.join(','),
            CQL_FILTER: `1=1;Clave_Catastral='${clave}'`,
            format_options: 'dpi=' + dpi
        };
        return url + '?' + query_string_1.default.stringify(query);
    }
    calcDynamicScale(bbox, buffer, imageWidth, imageHeight) {
        const dx = Math.abs(bbox[0] - bbox[2]) + buffer;
        const dy = Math.abs(bbox[1] - bbox[3]) + buffer;
        // pixeles / 72 * 2.54 * 10
        const fx = (imageWidth / 100) * 2.54;
        const fy = (imageHeight / 100) * 2.54;
        const scaleFactor = Math.max(Math.ceil(dx / fx), Math.ceil(dy / fy));
        return {
            name: '1:' + 30 * scaleFactor,
            meter: 30 * scaleFactor,
            width: imageWidth,
            height: imageHeight,
            area_x: fx * scaleFactor,
            area_y: fy * scaleFactor
        };
    }
}
exports.Croquis = new croquis();
