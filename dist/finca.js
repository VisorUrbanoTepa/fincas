"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worshop = void 0;
const { pdfMake } = require("pdfmake/build/pdfmake");
const { pdfFonts } = require("pdfmake/build/vfs_fonts");
const mm2inches = (mm) => mm / 25.4;
const inches2mm = (inches) => inches * 25.4;
const inches2pixel = (inches) => Math.round(inches * 72);
const mm2pixel = (mm) => inches2pixel(mm2inches(mm));
class pdffinca {
    finca(ini) {
        const fontss = {
            Roboto: {
                normal: Buffer.from(require("pdfmake/build/vfs_fonts.js").pdfMake.vfs["Roboto-Regular.ttf"], "base64"),
                bold: Buffer.from(require("pdfmake/build/vfs_fonts.js").pdfMake.vfs["Roboto-Medium.ttf"], "base64"),
            }
        };
        var pdfPrinter = require('pdfmake');
        var printer = new pdfPrinter(fontss);
        var fs = require('fs');
        var docDefinition = {
            pageSize: 'LETTER',
            pageOrientation: 'Landscape',
            pageMargins: [mm2pixel(10), mm2pixel(10), mm2pixel(10), mm2pixel(10)],
            background: [
                {
                    image: './images/fincaspatrimoniales.png',
                    width: 788,
                    absolutePosition: { x: 0, y: 340 },
                }
            ],
            content: [
                {
                    layout: 'noBorders',
                    table: {
                        widths: ['*'],
                        body: [
                            [
                                {
                                    layout: 'noBorders',
                                    table: {
                                        widths: [300, '*'],
                                        body: [
                                            [
                                                {
                                                   // layout: 'noBorders',
                                                    table: {
                                                        widths: ['*', '*', '*'],
                                                        body: [
                                                            [
                                                                {
                                                                    image: './images/LOGO.png',
                                                                    width: 60,
                                                                    height: 60,
                                                                    alignment: 'center',
                                                                    border: [true, true, false, true]
                                                                },
                                                                {
                                                                    text: '', border: [false, true, false, true]
                                                                },
                                                                {
                                                                    image: './images/logovu.png',
                                                                    width: 85,
                                                                    height: 50,
                                                                    alignment: 'left',
                                                                    border: [false, true, true, true]
                                                                }
                                                            ],
                                                            [{ text: '', colSpan: 3, border: [false, false, false, false] }, {}, {}],
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
                                                                                    text: 'CATALOGO PATRIMONIO CULTURAL',
                                                                                    alignment: 'center',
                                                                                    fontSize: 6.5,
                                                                                }],
                                                                            [{
                                                                                    text: 'BIENES INMUEBLE 2020',
                                                                                    alignment: 'center',
                                                                                    fontSize: 6.5,
                                                                                }],
                                                                        ]
                                                                    },
                                                                    border: [false, false, false, false], colSpan: 3,
                                                                }, {}, {},
                                                            ],
                                                            [
                                                                {
                                                                    text: 'LOCALIZACIÓN',
                                                                    alignment: 'left',
                                                                    bold: true,
                                                                    fontSize: 8,
                                                                    colSpan: 3,
                                                                    border: [false, false, false, false]
                                                                }, {}, {}
                                                            ],
                                                            [{
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto',],
                                                                        body: [
                                                                            [{ text: 'Estado:', bold: true, fontSize: 6, border: [false, false, false, false] }, { text: 'Jalisco', fontSize: 6, bold: true, margin: [0, 0, 0.1, 0] }, { text: 'Municipio:', fontSize: 6, bold: true, border: [false, false, false, false] }, { text: 'Tepatitlán De Morelos', fontSize: 6, bold: true, border: [false, false, false, false] }, { text: 'Localidad:', fontSize: 6, bold: true, border: [false, false, false, false] }, { text: 'Tepatitlán', fontSize: 6, bold: true, border: [false, false, false, false] }],
                                                                            [{ text: 'Calle y número:', bold: true, fontSize: 6, border: [false, false, false, false] }, { text: 'Hidalgo 107', fontSize: 6, bold: true, border: [false, false, false, false], colSpan: 2 }, {}, { text: 'Nombre:', fontSize: 6, bold: true, border: [false, false, false, false] }, { text: 'Templo de San Antonio de Padua', fontSize: 6, bold: true, border: [false, false, false, false], colSpan: 2 }, {}],
                                                                            [{ text: 'Clave Catastral:', bold: true, fontSize: 6, border: [false, false, false, false] }, { text: '14-003-093-01-0001-003-019-00005-000000', fontSize: 6, bold: true, border: [false, false, false, false], colSpan: 5 }, {}, {}, {}, {}]
                                                                        ]
                                                                    },
                                                                    colSpan: 3, border: [false, false, false, false]
                                                                }, {}, {}],
                                                            [
                                                                {
                                                                    text: 'CARACTERÍSTICAS',
                                                                    alignment: 'left',
                                                                    bold: true,
                                                                    fontSize: 8,
                                                                    colSpan: 3,
                                                                    border: [false, false, false, false]
                                                                }, {}, {}
                                                            ],
                                                            [{
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto',],
                                                                        body: [
                                                                            [{ text: 'Regimen de propiedad:', fontSize: 6, border: [false, false, false, false] }, { text: 'Federal', fontSize: 6, bold: true, margin: [0, 0, 0.1, 0] }, { text: 'Municipio:', fontSize: 6, border: [false, false, false, false] }, { text: 'Tepatitlán De Morelos', fontSize: 6, bold: true, border: [false, false, false, false] }, { text: 'Localidad:', fontSize: 6, border: [false, false, false, false] }, { text: 'Tepatitlán', fontSize: 6, bold: true, border: [false, false, false, false] }],
                                                                            [{ text: 'Uso Original:', fontSize: 6, border: [false, false, false, false] }, { text: 'Equipamiento', fontSize: 6, bold: true, border: [false, false, false, false], colSpan: 2 }, {}, { text: 'Uso actual:', fontSize: 6, border: [false, false, false, false] }, { text: 'Equipamiento', fontSize: 6, bold: true, border: [false, false, false, false], colSpan: 2 }, {}],
                                                                            [{ text: 'Niveles de Edificacíon:', fontSize: 6, border: [false, false, false, false] }, { text: '4', fontSize: 6, bold: true, border: [false, false, false, false] }, { text: 'Ocupación:', fontSize: 6, }, { text: 'Si', fontSize: 6, bold: true, }, {}, {}]
                                                                        ]
                                                                    },
                                                                    colSpan: 3, border: [false, false, false, false]
                                                                }, {}, {}],
                                                            [
                                                                {
                                                                    text: 'IDENTIFICACIÓN',
                                                                    alignment: 'left',
                                                                    bold: true,
                                                                    fontSize: 8,
                                                                    colSpan: 3,
                                                                    border: [false, false, false, false]
                                                                }, {}, {}
                                                            ],
                                                            [{
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['auto', 'auto', 'auto', 'auto'],
                                                                        body: [
                                                                            [{ text: 'Corriente Arquitectónica:', fontSize: 6 }, { text: 'Electrica', bold: true, fontSize: 6 }, { text: 'Dotación:', fontSize: 6 }, { text: '1900 - 1920', bold: true, fontSize: 6 }],
                                                                        ]
                                                                    },
                                                                    colSpan: 3, border: [false, false, false, false]
                                                                }, {}, {}],
                                                            [
                                                                {
                                                                    text: 'ASPECTO LEGALES',
                                                                    alignment: 'left',
                                                                    bold: true,
                                                                    fontSize: 8,
                                                                    colSpan: 3,
                                                                    border: [false, false, false, false]
                                                                }, {}, {}
                                                            ],
                                                            [{
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['auto', '*'],
                                                                        body: [
                                                                            [{ text: 'Clasificación:', fontSize: 6 }, { text: 'Monumento por determinacion de ley', bold: true, fontSize: 6 }],
                                                                            [{ text: 'Instancia Normativa:', fontSize: 6 }, { text: 'INAH, Insitituo Nacional de Atropología e Historía', bold: true, fontSize: 6 }],
                                                                            [{ text: 'Nivel máximo de intervención:', fontSize: 6 }, { text: 'Conservacíon, restauracíon especializada', bold: true, fontSize: 6 }]
                                                                        ]
                                                                    },
                                                                    colSpan: 3, border: [false, false, false, false]
                                                                }, {}, {}],
                                                            [
                                                                {
                                                                    text: 'ESTADO ACTUAL',
                                                                    alignment: 'left',
                                                                    bold: true,
                                                                    fontSize: 8,
                                                                    colSpan: 3,
                                                                    border: [false, false, false, false]
                                                                }, {}, {}
                                                            ],
                                                            [{
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['auto', '*', 'auto', '*'],
                                                                        body: [
                                                                            [{ text: 'Alteraciones:', fontSize: 6 }, { text: 'Modificada', bold: true, fontSize: 6 }, { text: 'Estado constructivo:', fontSize: 6 }, { text: 'Bueno', bold: true, fontSize: 6 }],
                                                                        ]
                                                                    },
                                                                    colSpan: 3, border: [false, false, false, false]
                                                                }, {}, {}],
                                                            [
                                                                {
                                                                    text: 'VALORES QUE JUSTIFICAN SU PROTECCÍON',
                                                                    alignment: 'left',
                                                                    bold: true,
                                                                    fontSize: 8,
                                                                    colSpan: 3,
                                                                    border: [false, false, false, false]
                                                                }, {}, {}
                                                            ],
                                                            [{
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['auto', '*'],
                                                                        body: [
                                                                            [{ text: 'Fachada:', fontSize: 6 }, { text: 'Orientada al sur, un sólo cuerpo, tiene rodapie de piedra braza y mamposteria de adobe, presenta vanos con arcos medio punto con marcos de cantera y herreria de forja. Remata con un pretil de cantera.', bold: true, fontSize: 6 }],
                                                                        ]
                                                                    },
                                                                    colSpan: 3, border: [false, false, false, false]
                                                                }, {}, {}],
                                                            [
                                                                {
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['auto', '*'],
                                                                        body: [
                                                                            [{}, {}],
                                                                            [{ text: 'Elementos singulares:', fontSize: 6 }, { text: 'Decoración zoomorfa en cantera.', bold: true, fontSize: 6 }],
                                                                            [{ text: 'Resena histórica:', fontSize: 6 }, { text: 'Habitada por la familia o personaje durante la epoca', bold: true, fontSize: 6 }],
                                                                        ]
                                                                    },
                                                                    colSpan: 3, border: [false, false, false, false]
                                                                },
                                                                {}, {}
                                                            ]
                                                        ],
                                                    },
                                                },
                                                {
                                                    table: {
                                                        body: [
                                                            [{
                                                                    image: './images/manzana.png',
                                                                    width: 300,
                                                                    height: 160,
                                                                    alignment: 'center',
                                                                    border: [true, true, true, true]
                                                                }],
                                                            [{ text: '', border: [false, false, false, false] }],
                                                            [{ text: '', border: [false, false, false, false] }],
                                                            [{
                                                                    image: './images/vaticano.jpeg',
                                                                    width: 410,
                                                                    height: 260,
                                                                    alignment: 'center',
                                                                    border: [false, false, false, false]
                                                                }],
                                                            [{ text: '', border: [false, false, false, false] }],
                                                            [{ text: '', border: [false, false, false, false] }],
                                                            [
                                                                {
                                                                    layout: 'noBorders',
                                                                    table: {
                                                                        widths: ['*', 'auto', '*', 'auto', '*'],
                                                                        body: [
                                                                            [{
                                                                                    image: './images/vaticano.jpeg',
                                                                                    width: 110,
                                                                                    height: 80,
                                                                                    alignment: 'center',
                                                                                    border: [true, true, true, true]
                                                                                },
                                                                                { text: '', border: [false, false, false, false] },
                                                                                {
                                                                                    image: './images/vaticano.jpeg',
                                                                                    width: 110,
                                                                                    height: 80,
                                                                                    alignment: 'center',
                                                                                    border: [true, true, true, true]
                                                                                },
                                                                                { text: '', border: [false, false, false, false] },
                                                                                {
                                                                                    image: './images/vaticano.jpeg',
                                                                                    width: 110,
                                                                                    height: 80,
                                                                                    alignment: 'center',
                                                                                    border: [true, true, true, true]
                                                                                }]
                                                                        ]
                                                                    },
                                                                    border: [false, false, false, false]
                                                                }
                                                            ]
                                                        ]
                                                    }
                                                },
                                            ]
                                        ]
                                    },
                                }
                            ]
                        ]
                    }
                }
            ]
        };
        let ram = Math.floor(Math.random() * 1000);
        const url = "pdf/" + ram + ".pdf";
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream(url));
        pdfDoc.end();
        return url;
    }
}
exports.worshop = new pdffinca();
