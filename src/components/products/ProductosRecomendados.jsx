import React from "react";

import { products } from "../../ProductsApi/products";
import { CardProduct } from "./CardProduct";

export const ProductosRecomendados = ({ id }) => {
  return (
    <>
      <div className="my-14">
        <h2 className="text-center text-lg uppercase">Más productos</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-2 gap-y-8 max-w-6xl mx-auto px-6 my-12">
        {products.map((product, index) => {
          if (index < 9 && product.id !== id) {
            return (
              <CardProduct
                key={index}
                id={product.id}
                image={product.image}
                title={product.name}
                precio={product.price}
                oferta={product.oferta}
                precioOferta={product.precio_oferta}
              />
            );
          }
        })}
      </div>
    </>
  );
};
