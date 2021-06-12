import React from "react";
import { useSelector } from "react-redux";
import ProductDetailComponent from "../../components/ProductDetail/ProductDetail";
import ProductSlider from "../../components/ProductSlider/ProductSlider";

const ProductDetail = (props) => {
  const product = useSelector((state) =>
    state.cart.products.find((product) => product.id === +props.match.params.id)
  );

  return (
    <div className="container" style={{ padding: "6rem 0" }}>
      <div className="card">
        <div className="row">
          <ProductSlider images={product.images} />
          <ProductDetailComponent product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
