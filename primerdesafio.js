class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar campos obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      // Validar código único
      if (this.products.some(product => product.code === code)) {
        console.error("El código del producto ya existe");
        return;
      }
  
      const product = {
        id: this.nextId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      console.log("Producto agregado:", product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.error("Producto no encontrado");
      }
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  
  productManager.addProduct("Producto 1", "Descripción 1", 19.99, "imagen1.jpg", "P001", 10);
  productManager.addProduct("Producto 2", "Descripción 2", 29.99, "imagen2.jpg", "P002", 5);
  
  console.log(productManager.getProducts());
  
  const productById = productManager.getProductById(1);
  console.log(productById);
  
  const nonExistentProduct = productManager.getProductById(3); // Producto no encontrado en consola