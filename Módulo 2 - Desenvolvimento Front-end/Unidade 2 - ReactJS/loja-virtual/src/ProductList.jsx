import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { ProductForm } from "./ProductForm";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      });
  }, []);

  function handleAddProduct(newProduct) {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  }

  if (loading) {
    return (
      <div className="flex justify-content-center align-items-center p-5">
        <i className="pi pi-spin pi-spinner text-4xl text-primary mr-2"></i>
        <span className="text-xl">Carregando produtos...</span>
      </div>
    );
  }

  return (
    <div className="p-3 max-w-screen-xl mx-auto">
      <ProductForm onAddProduct={handleAddProduct} />

      <h2 className="mb-4">Catálogo de Produtos ({products.length})</h2>

      <div className="grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 sm:col-6 md:col-4 lg:col-3 p-2"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
