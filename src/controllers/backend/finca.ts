import  images  from './images';


const { pdfMake } = require("pdfmake/build/pdfmake");
const { pdfFonts } = require("pdfmake/build/vfs_fonts");

const mm2inches = (mm: number): number => mm / 25.4;
const inches2mm = (inches: number): number => inches * 25.4;
const inches2pixel = (inches: number): number => Math.round(inches * 72);
const mm2pixel = (mm: number): number => inches2pixel(mm2inches(mm));





class pdffinca {

 



    async finca(datos: any) {

        const fontss = {
            Roboto: {
                normal: Buffer.from(
                    require("pdfmake/build/vfs_fonts.js").pdfMake.vfs["Roboto-Regular.ttf"],
                    "base64"
    
                ),
                bold: Buffer.from(
                    require("pdfmake/build/vfs_fonts.js").pdfMake.vfs["Roboto-Medium.ttf"],
                    "base64"
                ),
    
            }
        };

        var pdfPrinter = require('pdfmake');
        var  printer = new pdfPrinter(fontss);


        var fs = require('fs');

        var docDefinition = {
            pageSize: 'LETTER',
            pageOrientation: 'Landscape',
            pageMargins: [mm2pixel(10), mm2pixel(10), mm2pixel(10), mm2pixel(10)],
            background: [
                {
                    image: './images/fincas21.jpg',
                    width: 788,
                    absolutePosition: { x: 0, y: 340 },
                }
              ],
              
             

            content:[
                {
                    layout: 'noBorders',
                    table:{
                        widths: ['*'],
                        body:[
                            [
                                {
                                    layout: 'noBorders',
                                    table:{
                                        widths:[300,'*'],
                                        body:[
                                            [
                                                {
                                             layout: 'noBorders',
                                           
                                            table:{
                                                widths:['*','*','*'],
                                                body:[
                                                   [
                                                { 
                                                    image: images.images.tepa1,
                                                    width: 40,
                                                    height: 50,
                                                    alignment: 'center',
                                                  
                                                },
                                                { 
                                                    image: images.images.logovu,
                                                    width: 70,
                                                    height: 40,
                                                    alignment: 'center',
                                                   
                                                },
                                                {
                                                    image: './images/cultura.jpg',
                                                    width: 85,
                                                    height: 40,
                                                    alignment: 'center',
                                                 
                                                }
                                                     ],
                                                  
                                                    [{text: '', colSpan: 3,  border: [false, false, false, false]},{},{}],

                                                    [
                                                        {
                                                        
                                                            layout: 'noBorders',
                                                            table: {
           
                                                                widths: ['*'],
                                                                body: [
                                                                  
                                                                   [{}],
                                                                   [{}],
                                                                    [{
                                                                        text: 'GOBIERNO MUNICIPAL DE TEPATITLÁN DE MORELOS, JALISCO',
                                                                         alignment: 'center',
                                                                         fontSize: 7,
                                                                         bold: true,
                                                                        
                                                                    }],
                                                                    [{
                                                                        text: 'CATÁLOGO PATRIMONIO CULTURAL',
                                                                        alignment: 'center',
                                                                        fontSize: 6.5,
                                                                      
                                                                    }],
                                                                    [{
                                                                     
                                                                        text: 'BIENES INMUEBLES 2020',
                                                                        alignment: 'center',
                                                                        fontSize: 6.5,
                                                                    }],
                                                                    
                                                                    
                            
                                                                ]
                                                            },
                                                            border: [false, false, false, false], colSpan: 3,
                                                    
                                                    },{},{},
                                                ],
                                                [{},{},{}],
                                                [{},{},{}],
                                                [{},{},{}],
                                                [{},{},{}],
                                                
                                                     [
                                                         {
                                                        text: 'LOCALIZACIÓN',
                                                        alignment: 'center',
                                                        bold: true,
                                                        fontSize: 8,
                                                        colSpan: 3,  
                                                        border: [false, false, false, false],
                                                        fillColor: '#d53032',
                                                        color:  '#FFFFFF',
                                                     },{},{}
                                                    ],
                                                    [{
                                                        layout: 'noBorders',
                                                        table:{
                                                            widths: ['auto','auto','auto','auto','auto','auto',],
                                                            body:[
                                                                [{text: 'Estado:', bold:true, fontSize: 6, border: [false, false, false, false]}, {text: 'Jalisco', fontSize: 6, bold:true, margin: [0, 0, 0.1, 0]},{text: 'Municipio:', fontSize: 6, bold:true, border: [false, false, false, false]},{text: 'Tepatitlán De Morelos', fontSize: 6, bold:true, border: [false, false, false, false]},{text: 'Localidad:', fontSize: 6, bold:true, border: [false, false, false, false]},{text: datos.finca.localida_1, fontSize: 6, bold:true, border: [false, false, false, false]}],
                                                                [{text: 'Calle y número:', bold:true, fontSize: 6, border: [false, false, false, false]}, {text: datos.finca.calle, fontSize: 6, bold:true, border: [false, false, false, false], colSpan:2},{},{text: 'Entre Calles', fontSize: 6, bold:true, border: [false, false, false, false]},{text: datos.finca.entre_call, fontSize: 6, bold:true, border: [false, false, false, false], colSpan: 2},{}],   
                                                                [{text: 'Clave Catastral:', bold:true, fontSize: 6, border: [false, false, false, false]}, {text: datos.finca.clave, fontSize: 6, bold:true, border: [false, false, false, false], colSpan:5},{},{},{},{}]
                                                            ]
                                                        }
                                                        ,colSpan: 3,  border: [false, false, false, false]},{},{}],

                                                        [{},{},{}],
                                                        [{},{},{}],
                                                        [{},{},{}],
                                                      

                                                        [
                                                            {
                                                           text: 'CARACTERÍSTICAS',
                                                           alignment: 'center',
                                                           bold: true,
                                                           fontSize: 8,
                                                           colSpan: 3,  
                                                           border: [false, false, false, false],
                                                           fillColor: '#d53032',
                                                           color:  '#FFFFFF',
                                                        },{},{}
                                                       ],
                                                       [{
                                                        layout: 'noBorders',
                                                        table:{
                                                            widths: ['auto','auto','auto','auto','auto','auto',],
                                                            body:[
                                                                [{text: 'Régimen de propiedad:', fontSize: 6, border: [false, false, false, false]}, {text: datos.finca.regimen, fontSize: 6, bold:true, margin: [0, 0, 0.1, 0]},{text: 'Municipio:', fontSize: 6, border: [false, false, false, false]},{text: 'Tepatitlán De Morelos', fontSize: 6, bold:true, border: [false, false, false, false]},{text: 'Localidad:', fontSize: 6, border: [false, false, false, false]},{text: datos.finca.localida_1, fontSize: 6, bold:true, border: [false, false, false, false]}],
                                                                [{text: 'Uso Original:', fontSize: 6, border: [false, false, false, false]}, {text: datos.finca.clasificac, fontSize: 6, bold:true, border: [false, false, false, false], colSpan:2},{},{text: "Uso Actual", fontSize: 6, border: [false, false, false, false]},{text: datos.finca.usos, fontSize: 6, bold:true, border: [false, false, false, false], colSpan: 2},{}],   
                                                                [{text: 'Niveles de Edificacíon:', fontSize: 6, border: [false, false, false, false]}, {text: datos.finca.niveles, fontSize: 6, bold:true, border: [false, false, false, false]},{text: 'Ocupación:', fontSize: 6,},{text: datos.finca.ocupacion, fontSize: 6, bold:true,},{},{}]
                                                            ]
                                                        }
                                                        ,colSpan: 3,  border: [false, false, false, false]},{},{}],
                                                        [{},{},{}],
                                                        [{},{},{}],
                                                        [{},{},{}],
                                                        [
                                                            { 
                                                                text: 'IDENTIFICACIÓN',
                                                                alignment: 'center',
                                                                bold: true,
                                                                fontSize: 8,
                                                                colSpan: 3,  
                                                                border: [false, false, false, false],
                                                                fillColor: '#d53032',
                                                                color:  '#FFFFFF',
                                                            },{},{}
                                                        ],
                                                        [{
                                                            layout: 'noBorders',
                                                            table:{
                                                                widths:['auto','auto', 'auto', 'auto'],
                                                                body:[
                                                                    [{text: 'Corriente Arquitectónica:', fontSize: 6},{text: datos.finca.corriente, bold: true, fontSize: 6},{text: 'Datación:', fontSize: 6},{text: datos.finca.datacion, bold: true, fontSize: 6}],
                                                                   
                                                                ]
                                                            }
                                                        ,colSpan:3,  border: [false, false, false, false]},{},{}],
                                                        [{},{},{}],
                                                        [{},{},{}],
                                                        [{},{},{}],
                                                        [
                                                            { 
                                                                text: 'ASPECTO LEGAL',
                                                                alignment: 'center',
                                                                bold: true,
                                                                fontSize: 8,
                                                                colSpan: 3,  
                                                                border: [false, false, false, false],
                                                                fillColor: '#d53032',
                                                                color:  '#FFFFFF',
                                                            },{},{}
                                                        ],
                                                        [{
                                                            layout: 'noBorders',
                                                            table:{
                                                                widths:['auto','*'],
                                                                body:[
                                                                    [{text: 'Clasificación:', fontSize: 6},{text: datos.finca.inmueble, bold: true, fontSize: 6}],
                                                                   // [{text: 'Instancia Normativa:', fontSize: 6},{text: 'INAH, Insitituo Nacional de Atropología e Historía', bold: true, fontSize: 6}],
                                                                    // [{text: 'Nivel máximo de intervención:', fontSize: 6},{text: "123", bold: true, fontSize: 6}]
                                                                ]
                                                            }
                                                        ,colSpan:3,  border: [false, false, false, false]},{},{}],

                                                   

                                                      
                                                        // [
                                                        //     { 
                                                        //         text: 'ESTADO ACTUAL',
                                                        //         alignment: 'left',
                                                        //         bold: true,
                                                        //         fontSize: 8,
                                                        //         colSpan: 3,  
                                                        //         border: [false, false, false, false]
                                                        //     },{},{}
                                                        // ],
                                                        // [{
                                                        //     layout: 'noBorders',
                                                        //     table:{
                                                        //         widths:['auto','*','auto', '*'],
                                                        //         body:[
                                                        //             [{text: 'Alteraciones:', fontSize: 6},{text: 'Modificada', bold: true, fontSize: 6},{text: 'Estado constructivo:', fontSize: 6}, {text: 'Bueno', bold: true, fontSize: 6}],
                                                        //         ]
                                                        //     }
                                                        // ,colSpan:3,  border: [false, false, false, false]},{},{}],
                                                        // [
                                                        //     { 
                                                        //         text: 'VALORES QUE JUSTIFICAN SU PROTECCÍON',
                                                        //         alignment: 'left',
                                                        //         bold: true,
                                                        //         fontSize: 8,
                                                        //         colSpan: 3,  
                                                        //         border: [false, false, false, false]
                                                        //     },{},{}
                                                        // ],
                                                        // [{
                                                        //     layout: 'noBorders',
                                                        //     table:{
                                                        //         widths:['auto','*'],
                                                        //         body:[
                                                        //             [{text: 'Fachada:', fontSize: 6},{text: 'Orientada al sur, un sólo cuerpo, tiene rodapie de piedra braza y mamposteria de adobe, presenta vanos con arcos medio punto con marcos de cantera y herreria de forja. Remata con un pretil de cantera.', bold: true, fontSize: 6}],
                                                        //         ]
                                                        //     }
                                                        // ,colSpan:3,  border: [false, false, false, false]},{},{}],

                                                        // [
                                                        //     {
                                                        //         layout: 'noBorders',
                                                        //         table:{
                                                        //             widths:['auto','*'],
                                                        //             body:[
                                                        //                 [{},{}],
                                                        //                 [{text: 'Elementos singulares:', fontSize: 6},{text: 'Decoración zoomorfa en cantera.', bold: true, fontSize: 6}],
                                                        //                 [{text: 'Resena histórica:', fontSize: 6},{text: 'Habitada por la familia o personaje durante la epoca', bold: true, fontSize: 6}],
                                                        //             ]
                                                        //         }  
                                                        // , colSpan: 3,  border: [false, false, false, false]},
                                                        // {},{}]

                                                ],
                                                
                                            },
                                           
                                        }, 
                                        {
                                           table: {
                                               body:[
                                                [{
                                                    image: datos.croquis,
                                                     width: 300,
                                                     height: 160,
                                                    alignment: 'center',
                                                    border: [true, true, true, true]
                                                }],
                                                [{text:'',  border: [false, false, false, false]}],
                                                [{text:'',  border: [false, false, false, false]}],
                                                [{
                                                   
                                                    image: "./image/"+ datos.finca.fotos + ".JPG",
                                                    width: 410,
                                                    height: 260,
                                                    alignment: 'center',
                                                    border: [false, false, false, false]
                                                }],
                                                [{text:'',  border: [false, false, false, false]}],
                                                [{text:'',  border: [false, false, false, false]}],
                                                [
                                                    {
                                                        layout: 'noBorders',
                                                    table:{
                                                        
                                                        widths:['*','auto','*','auto','*'],
                                                        body: [
                                                            [{
                                                           image: "./image/"+ datos.finca.fotos_2 + ".JPG",
                                                                width: 110,
                                                                height: 80,
                                                                alignment: 'center',
                                                                border: [true, true, true, true]
                                                            },
                                                            {text:'',  border: [false, false, false, false]},
                                                            {
                                                                image: "./image/"+ datos.finca.fotos_3 + ".JPG",
                                                                width:110,
                                                                height: 80,
                                                                alignment: 'center',
                                                                border: [true, true, true, true]
                                                            },
                                                            {text:'',  border: [false, false, false, false]},
                                                            {
                                                                image: "./image/"+ datos.finca.fotos_4 + ".JPG",
                                                                width: 110,
                                                                height: 80,
                                                                alignment: 'center',
                                                                border: [true, true, true, true]
                                                            }]
                                                        ]
                                                    }
                                                ,  border: [false, false, false, false]}
                                                    ]
                                               ]
                                           }
                                        },
                                    ]]
                                    },
                                }
                            ]
                        ]
                    }
                }
            ]

        };


    
        //let ram = Math.floor(Math.random()*1000);
        const url= "pdf/"+ datos.finca.clave + ".pdf";
        console.log(url)
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream(url));
        pdfDoc.end();
        return url;
    }
}
export const worshop = new pdffinca();
