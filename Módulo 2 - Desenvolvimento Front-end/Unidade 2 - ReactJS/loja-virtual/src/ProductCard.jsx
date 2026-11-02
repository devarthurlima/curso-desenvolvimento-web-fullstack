import { Card } from "@primereact/ui/card";
import { Button } from "@primereact/ui/button";

export function ProductCard({ product }) {
  return (
    <Card.Root className="h-full flex flex-column justify-content-between shadow-2 border-round overflow-hidden">
      <div className="flex justify-content-center align-items-center p-3 bg-white">
        <img
          src={product.image}
          alt={product.title}
          style={{ height: "180px", objectFit: "contain", maxWidth: "100%" }}
        />
      </div>

      <Card.Body className="flex flex-column flex-grow-1 justify-content-between p-3">
        <div>
          <span className="text-xs font-semibold uppercase text-500">
            {product.category}
          </span>
          <Card.Title className="text-base font-bold mt-1 mb-2">
            {product.title.length > 45
              ? `${product.title.substring(0, 45)}...`
              : product.title}
          </Card.Title>
          <Card.Content className="p-0">
            <p className="text-sm text-600 m-0">
              {product.description.length > 90
                ? `${product.description.substring(0, 90)}...`
                : product.description}
            </p>
          </Card.Content>
        </div>

        <Card.Footer className="flex justify-content-between align-items-center mt-3 pt-2 border-top-1 surface-border">
          <span className="text-xl font-bold text-primary">
            ${Number(product.price).toFixed(2)}
          </span>
          <Button size="small">
            <i className="pi pi-shopping-cart mr-2"></i>
            Comprar
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
}
