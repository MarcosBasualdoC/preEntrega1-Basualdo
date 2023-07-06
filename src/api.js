
const products = [
    { id: 1, name: 'Colchon Cannon', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "colchones", image: "https://colchoneriaballester.com.ar/wp-content/uploads/2022/06/PRINCESS80.jpg" },
    { id: 4, name: 'Sommier Cannon', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sommiers", image: "https://www.torca.com.ar/thumb/59909-1_800x800.jpg" },
    { id: 6, name: 'Sommier Deseo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sommiers", image: "https://dapas.com.ar/wp-content/uploads/2022/08/CONJUNTO-TERRA-2P-2021.jpg" },
    { id: 7, name: 'Sabanas Cannon', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sabanas", image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/314/499/products/20201027_144407-011-728b1cc13eb4e9cdfe16038218241699-1024-1024.jpeg" },
    { id: 13, name: 'Sommier Belmo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sommiers", image: "https://simmonsarg.vtexassets.com/arquivos/ids/160671/BB2_02-1P-J-Lat.png?v=638112898840300000" },
    { id: 14, name: 'Sabanas Vivendi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sabanas", image: "https://m.media-amazon.com/images/I/613IAW-s4sL._AC_UF894,1000_QL80_.jpg" },
    { id: 8, name: 'Sabanas Simmons', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sabanas", image: "https://http2.mlstatic.com/D_NQ_NP_876513-MLA42557045023_072020-O.webp" },
    { id: 2, name: 'Colchon Simmons', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "colchones", image: "https://simmonsarg.vteximg.com.br/arquivos/ids/158362-1000-1000/colchon-deepsleep-foam-1plaza-190-90.jpg?v=637462351653300000" },
    { id: 11, name: 'Colchon Rosen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "colchones", image: "https://promart.vteximg.com.br/arquivos/ids/7094989-1000-1000/image-dc45da85c04f4d70afc5b1e11eab0eab.jpg?v=638210821439200000" },
    { id: 3, name: 'Colchon Deseo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "colchones", image: "https://dapas.com.ar/wp-content/uploads/2016/12/Colchon-Diamante-2.jpg" },
    { id: 9, name: 'Sabanas Alcoyana', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sabanas", image: "https://static.dafiti.com.ar/p/alcoyana-7849-91582-1-zoom.jpg" },
    { id: 10, name: 'Colchon Elegante', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "colchones", image: "https://colchonessanjuan.com.ar/wp-content/uploads/2022/01/adapt.jpg" },
    { id: 5, name: 'Sommier Simmons', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sommiers", image: "https://simmonsarg.vteximg.com.br/arquivos/ids/158072-1000-1000/Sommier-Spa-Therapy-200-160.png?v=637455358408670000" },
    { id: 12, name: 'Sommier Elegante', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sommiers", image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/122/816/products/som-imperial1-f7e9e704ef39d42a2916023576920337-640-0.jpg" },
    { id: 15, name: 'Sabanas Rosen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sagittis tellus. Sed tempus elit neque, quis vehicula quam sollicitudin vehicula. Donec congue sed turpis a consectetur. Donec risus lacus, laoreet non nulla pharetra, hendrerit ultrices enim. Quisque sapien lacus, posuere sed fringilla sed, vestibulum suscipit felis. Praesent sit amet gravida turpis. Duis sed tortor ac enim tincidunt rhoncus.', categoryId: "sabanas", image: "https://ca8d8e4618.clvaw-cdnwnd.com/623f501baf571602391db24f3447b2d6/200005787-2d67c2d67e/foresta_3.jpg?ph=ca8d8e4618" },
  ];
  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  
  const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const productId = parseInt(id);
        const product = products.find((p) => p.id === productId);
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Producto no encontrado'));
        }
      }, 1000);
    });
  };
  

  
const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const categoryProducts = products.filter((p) => p.categoryId === categoryId);
        resolve(categoryProducts);
      }, 1000);
    });
  };

  

  export { getProducts, getProductById, getProductsByCategory };
  
  