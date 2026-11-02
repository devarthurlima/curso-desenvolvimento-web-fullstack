import { useState } from "react";
import { Card } from "@primereact/ui/card";
import { InputText } from "@primereact/ui/inputtext";
import { Textarea } from "@primereact/ui/textarea";
import { Button } from "@primereact/ui/button";

export function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !price || !description.trim()) {
      alert("Preencha pelo menos o título, o preço e a descrição!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      price: parseFloat(price),
      category: category.trim() || "geral",
      image: image.trim() || "https://placehold.co/300x300?text=Novo+Produto",
      description,
    };

    onAddProduct(newProduct);

    setTitle("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
  }

  return (
    <Card.Root className="mb-5 shadow-2 border-round">
      <Card.Body className="p-4">
        <Card.Title className="text-xl font-bold mb-3">
          Adicionar Novo Produto
        </Card.Title>
        <Card.Content className="p-0">
          <form onSubmit={handleSubmit} className="grid formgrid p-fluid">
            <div className="field col-12 md:col-6 mb-3">
              <label
                htmlFor="title"
                className="block font-semibold mb-2 text-sm"
              >
                Título do Produto *
              </label>
              <InputText
                id="title"
                className="w-full"
                placeholder="Ex: Teclado Mecânico RGB"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="field col-12 md:col-3 mb-3">
              <label
                htmlFor="price"
                className="block font-semibold mb-2 text-sm"
              >
                Preço ($) *
              </label>
              <InputText
                id="price"
                type="number"
                step="0.01"
                className="w-full"
                placeholder="Ex: 199.90"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="field col-12 md:col-3 mb-3">
              <label
                htmlFor="category"
                className="block font-semibold mb-2 text-sm"
              >
                Categoria
              </label>
              <InputText
                id="category"
                className="w-full"
                placeholder="Ex: electronics"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="field col-12 mb-3">
              <label
                htmlFor="image"
                className="block font-semibold mb-2 text-sm"
              >
                URL da Imagem (opcional)
              </label>
              <InputText
                id="image"
                className="w-full"
                placeholder="https://exemplo.com/imagem.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="field col-12 mb-3">
              <label
                htmlFor="description"
                className="block font-semibold mb-2 text-sm"
              >
                Descrição *
              </label>
              <Textarea
                id="description"
                rows={3}
                className="w-full"
                placeholder="Descreva os detalhes do produto..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-12 flex justify-content-end">
              <Button type="submit">
                <i className="pi pi-plus mr-2"></i>
                Adicionar Produto
              </Button>
            </div>
          </form>
        </Card.Content>
      </Card.Body>
    </Card.Root>
  );
}
