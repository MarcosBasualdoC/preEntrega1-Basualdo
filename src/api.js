
const products = [
    { id: 1, name: 'Colchon Cannon', description: 'Descripción del Producto 1', categoryId: 1, image: "https://colchoneriaballester.com.ar/wp-content/uploads/2022/06/PRINCESS80.jpg" },
    { id: 2, name: 'Colchon Simmons', description: 'Descripción del Producto 2', categoryId: 1, image: "https://simmonsarg.vteximg.com.br/arquivos/ids/158362-1000-1000/colchon-deepsleep-foam-1plaza-190-90.jpg?v=637462351653300000" },
    { id: 3, name: 'Colchon Deseo', description: 'Descripción del Producto 3', categoryId: 1, image: "https://dapas.com.ar/wp-content/uploads/2016/12/Colchon-Diamante-2.jpg" },
    { id: 4, name: 'Sommier Cannon', description: 'Descripción del Producto 4', categoryId: 2, image: "https://www.torca.com.ar/thumb/59909-1_800x800.jpg" },
    { id: 5, name: 'Sommier Simmons', description: 'Descripción del Producto 5', categoryId: 2, image: "https://simmonsarg.vteximg.com.br/arquivos/ids/158072-1000-1000/Sommier-Spa-Therapy-200-160.png?v=637455358408670000" },
    { id: 6, name: 'Sommier Deseo', description: 'Descripción del Producto 6', categoryId: 2, image: "https://dapas.com.ar/wp-content/uploads/2022/08/CONJUNTO-TERRA-2P-2021.jpg" },
    { id: 7, name: 'Sabanas Cannon', description: 'Descripción del Producto 7', categoryId: 3, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/314/499/products/20201027_144407-011-728b1cc13eb4e9cdfe16038218241699-1024-1024.jpeg" },
    { id: 8, name: 'Sabanas Simmons', description: 'Descripción del Producto 8', categoryId: 3, image: "https://http2.mlstatic.com/D_NQ_NP_876513-MLA42557045023_072020-O.webp" },
    { id: 9, name: 'Sabanas Deseo', description: 'Descripción del Producto 9', categoryId: 3, image: "https://static.dafiti.com.ar/p/alcoyana-7849-91582-1-zoom.jpg" },
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
        const product = products.find((p) => p.id === id);
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
  
  