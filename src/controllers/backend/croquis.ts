import { Polygon } from 'geojson';
import axios from 'axios';
import querystring from 'query-string';



class croquis {


    async croquis(predio: any, width: any, height: any, buffer: any) {

        const clave = predio.Clave
        predio.geom = JSON.parse(predio.geom);

        const bbox = function fbbox(geometry: Polygon) {
 

           
            const outerRing = geometry.coordinates[0];
            let [xmax, ymax] = outerRing[0];
            let [xmin, ymin] = outerRing[0];

            outerRing.forEach(coords  => {
                xmax = Math.max(xmax, coords[0]);
                xmin = Math.min(xmin, coords[0]);
                ymax = Math.max(ymax, coords[1]);
                ymin = Math.min(ymin, coords[1]);
            });
            return [xmin, ymin, xmax, ymax];
        }

        const croquisBbox = bbox(predio.geom);
        const scaleOpt = this.calcDynamicScale(croquisBbox, buffer, width, height);
        const areax = croquisBbox[2] + croquisBbox[0];
        const areay = croquisBbox[3] + croquisBbox[1];

        // await highlightPolygon(predio.Geometry as Polygon);

        const imageUrl = this.getMapUrl(
            {
                x: areax / 2,
                y: areay / 2
            },
            {
                width: scaleOpt.width,
                height: scaleOpt.height,
                area_x: scaleOpt.area_x,
                area_y: scaleOpt.area_y,
                dpi: 180,
                url: 'http://187.216.152.105:8080/geoserver/VuTepa-local/wms'
               // url: 'http://192.168.10.5:8080/geoserver/VuTepa-local/wms'
/*                 url: 'http://187.216.152.105:8080/geoserver/VuTepa-local/wms'
 */            },
            clave
        );

        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        return `data:${response.headers['content-type']};base64,${Buffer.from(
            // String.fromCharCode(...new Uint8Array(response.data)),
            response.data,
            'binary'
        ).toString('base64')}`;
    }

    private getMapUrl(
        { x, y }: { x: number; y: number },
        {
            dpi = 320,
            url,
            width,
            height,
            area_x,
            area_y
        }: { dpi: number; url: string; width: number; height: number; area_x: number; area_y: number },
        clave: string = '14-003-093-01-0001-003-019-00005-000000'
    ) {
        const bbox = [x - area_x / 1.5, y - area_y / 1.5, x + area_x / 1.5, y + area_y / 1.5];
        const query = {
            SERVICE: 'WMS',
            REQUEST: 'GetMap',
            VERSION: '1.3.0',
            LAYERS: 'VuTepa-local:Tepatitlan-Catastro,VuTepa-local:Predio.',
            STYLES: ',SelecionPrueba',
            FORMAT: 'image/png',
            TRANSPARENT: 'true',
            HEIGHT: Math.round((height * dpi) /    100),
            WIDTH: Math.round((width * dpi) / 100),
            CRS: 'EPSG:6368',
            BBOX: bbox.join(','),
            CQL_FILTER: `1=1;Clave_Catastral='${clave}'`,
            format_options: 'dpi=' + dpi
        };
        return url + '?' + querystring.stringify(query);
    }

    private calcDynamicScale(bbox: number[], buffer: number, imageWidth: number, imageHeight: number) {
        const dx = Math.abs(bbox[0] - bbox[2]) + buffer;
        const dy = Math.abs(bbox[1] - bbox[3]) + buffer;

        // pixeles / 72 * 2.54 * 10
        const fx = (imageWidth / 100) * 2.54;
        const fy = (imageHeight / 100) * 2.54;

        const scaleFactor = Math.max(Math.ceil(dx / fx), Math.ceil(dy / fy));

        return {
            name: '1:' + 30 * scaleFactor,
            meter:30 * scaleFactor,
            width: imageWidth, 
            height: imageHeight,
            area_x: fx * scaleFactor,
            area_y: fy * scaleFactor
        };
    }
}



export const Croquis = new croquis();
