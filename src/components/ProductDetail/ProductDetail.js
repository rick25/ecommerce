import React from "react";
import { useDispatch } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter";
import { addProductToCart } from "../../redux/actions/shop";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const {
    title,
    brand,
    price,
    cpu,
    camera,
    size,
    display,
    battery,
    memory,
    description,
  } = props.product;

  const onCart = () => {
    dispatch(addProductToCart(props.product));
  };

  return (
    <aside className="col-sm-7">
      <article className="card-body p-5">
        <h3 className="title mb-3">{title}</h3>

        <p className="price-detail-wrap">
          <span className="price h3 text-warning">
            <span className="currency">$</span>
            <span className="num">{formatMoney(price)}</span>
          </span>
        </p>
        <dl className="item-property">
          <dt>Descripción</dt>
          <dd>
            <p className="text-capitalize">{description}</p>
          </dd>
        </dl>
        <dl className="param param-feature">
          <dt>Marca</dt>
          <dd className="text-capitalize">{brand}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Dimensiones</dt>
          <dd>{size}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Cámara</dt>
          <dd>{camera}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>CPU</dt>
          <dd>{cpu}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Memoria</dt>
          <dd>{memory}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Pantalla</dt>
          <dd>{display}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Batería</dt>
          <dd>{battery}</dd>
        </dl>
        <hr />
        <hr />
        <button
          onClick={onCart}
          className="btn btn-lg btn-outline-primary text-uppercase"
        >
          <i className="fa fa-shopping-cart" /> Agregar al carrito
        </button>
      </article>
    </aside>
  );
};

export default ProductDetail;
