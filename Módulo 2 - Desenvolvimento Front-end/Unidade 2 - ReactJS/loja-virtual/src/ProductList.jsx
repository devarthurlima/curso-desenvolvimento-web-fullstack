import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductList() {
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

  if (loading) {
    return (
      <div className="flex justify-content-center align-items-center p-5">
        <i className="pi pi-spin pi-spinner text-4xl text-primary mr-2"></i>
        <span className="text-xl">Carregando produtos...</span>
      </div>
    );
  }

  return (
    <div className="p-3">
      <h2 className="mb-4">Catálogo de Produtos ({products.length})</h2>

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="col-12 md:col-6 lg:col-4 p-2">
            <div className="p-3 border-1 surface-border border-round">
              <strong>{product.title}</strong>
              <p className="text-primary font-bold mt-2">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
