// const itemsData = [
//   {
//     id: 1,
//     name: "Gin Bosque",
//     price: 2800,
//     description: "Gin Nacional. Origen: Patagonia",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     stock: 81,
//   },
//   {
//     id: 2,
//     name: "Gin Sur",
//     price: 3500,
//     description: "Gin Nacional. Origen: Patagonia",

//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     stock: 91,
//   },
//   {
//     id: 3,
//     name: "Johnny Walker Black Label",
//     price: 4800,
//     description: "Cada botella de ETIQUETA NEGRA ha estado dos décadas en planificación y utiliza whisky de las mejores destilerías de toda Escocia añejadas en las mejores barricas de whisky. Cada whisky es madurado de una forma ligeramente diferente, debido a las complejidades de la madera, el clima y la ubicación",

//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Whisky",
//     outlet: false,
//     stock: 4,
//   },
//   {
//     id: 4,
//     name: "Gin Bulldog",
//     price: 4000,
//     description: "Gin Importado. Origen: Inglaterra",
//     promotion: 1985,
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     outlet: false,
//     stock: 58,
//   },
//   {
//     id: 5,
//     name: "Glenlivet 12",
//     price: 13000,
//     description:
//       "Clásico Single Malt de Speyside. Suave, balanceado, frutado y floral. De final liso, cálido y elegante.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Whisky",
//     stock: 1,
//   },
//   {
//     id: 6,
//     name: "Glenfiddich 12 Años",
//     price: 14000,
//     description:
//       "Dulce con notas frutales. Se aprecian mantequilla, crema, malta y un sutil sabor a roble. Un acabado largo, liso y suave",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Whisky",
//     outlet: false,
//     stock: 62,
//   },
//   {
//     id: 7,
//     name: "Talisker Whisky",
//     price: 25000,
//     description:
//       "De cuerpo completo, posee una rica dulzura de frutos secos con nubes de humo y fuertes sabores de malta, de cebada, calentamiento e intenso.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Whisky",
//     stock: 5,
//   },
//   {
//     id: 8,
//     name: "Cardhu 12 Años",
//     price: 24000,
//     description:
//       "Suave, redondo, dulzor amable, turba suave. Un poco de humo susurra palabras dulces. Acabado largo, seco y ahumado, maltoso con toques de turba. ",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Whisky",
//     outlet: false,
//     stock: 88,
//   },
//   {
//     id: 9,
//     name: "Aberlour 12 Años",
//     price: 12000,
//     description:
//       "Equilibrado con un rico chocolate, caramelo, canela y jengibre picante.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Whisky",
//     outlet: false,
//     stock: 58,
//   },
//   {
//     id: 10,
//     name: "Bombay Sapphire",
//     price: 5000,
//     description:
//       "Equilibrio dulce y seco con un carácter añadido de especias y limón, y notas subyacentes ligeramente amaderadas.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     outlet: false,
//     stock: 30,
//   },
//   {
//     id: 11,
//     name: "Tanqueray Gin",
//     price: 5100,
//     description:
//       "Su especial e inconfundible sabor, es suave y equilibrado, con notas de limón y enebro y con un final largo y especiado.",

//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     outlet: false,
//     stock: 79,
//   },
//   {
//     id: 12,
//     name: "Hendricks Gin",
//     price: 12900,
//     description:
//       "Cuerpo medio a ligero, mezcla aromática de especias y aromas florales. Suave cosquilleo en los labios y final persistente con notas florales y cítricas, la suavidad de pepino es evidente.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     outlet: false,
//     stock: 7,
//   },
//   {
//     id: 13,
//     name: "Beefeater Gin 1 Litro",
//     price: 5945,
//     description:
//       "Con notas secas de piel de naranja y pimienta negra. La entrada en el paladar es nítida y definitiva, seco y equilibrado botánicamente. Su terminación es una carrera maravillosa de enebro",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     outlet: false,
//     stock: 72,
//   },
//   {
//     id: 14,
//     name: "Fernet Branca 750 m",
//     price: 1500,
//     description:
//       "Producto del ingenio y la visión de Bernandino Branca, nace en 1845 una bebida única para la época. Ella es resultado de la combinación de hierbas, cortezas, raíces, frutos y cuidado artesanal, a la que su creador bautizó con el nombre de fernet. Así nació Fernet Branca.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Otras",
//     outlet: false,
//     stock: 43,
//   },
//   {
//     id: 15,
//     name: "Fernet 1882 750 ml",
//     price: 1202,
//     description:
//       "Fernet 1882 es una bebida con alcohol de extractos vegetales muy consumida en Argentina, sobre todo en la región de Córdoba, lugar donde se elabora este licor.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Otras",
//     outlet: false,
//     stock: 24,
//   },
//   {
//     id: 16,
//     name: "Grey Goose Vodka",
//     price: 18400,
//     description:
//       "Aroma: Claro, fresco, con un elegante aroma floral acentuado por una sutil nota cítrica. Sabor: Inicialmente suave con un dulzor que envuelve gradualmente la textura y redondea con un toque de almendra",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Otras",
//     outlet: false,
//     stock: 74,
//   },
//   {
//     id: 17,
//     name: "Absolut Blue Vodka",
//     price: 4800,
//     description:
//       "El primero de todos los Absolut, producido en 1979. Modo de consumo: Puro, con hielo o en tragos.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Otras",
//     stock: 56,
//   },
//   {
//     id: 18,
//     name: "Belvedere Vodka 1500 ml",
//     price: 32900,
//     description:
//       "Al sabor es suave y cremoso. Predominan sabores como centeno, cítricos y vainilla. Suave y redondo hasta el final.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Otras",
//     stock: 40,
//   },
//   {
//     id: 19,
//     name: "Martin Millers Gin",
//     price: 15500,
//     description:
//       "Tiene un agradable aroma y gusto cítrico fuerte, con notas medias de enebro y un increíble retrogusto limpio y suave.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     outlet: false,
//     stock: 62,
//   },
//   {
//     id: 20,
//     name: "Gin Mare",
//     price: 26400,
//     description:
//       "Aromas de Mediterráneo, que pueden llegar a ser sorprendentes en una ginebra: notas de romero y tomillo, albahaca, y aromas de enebro.",
//     image: "https://source.unsplash.com/random/300x200?sig=${Math.random()}",
//     category: "Gin",
//     outlet: false,
//     stock: 38,
//   },
// ];

// export default itemsData;
