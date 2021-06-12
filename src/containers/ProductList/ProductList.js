import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/Pagination";
import LayoutMode from "../../components/LayoutMode/LayoutMode";

import { brandFilter } from "../../pipes/brandFilter";
import { orderByFilter } from "../../pipes/orderByFilter";
import { paginationPipe } from "../../pipes/paginationFilter";

const ProductList = () => {
  const { perPage, currentPage, pagesToShow } = useSelector(
    (state) => state.pagination
  );

  const [estado, setEstado] = useState({
    colValue: "col-lg-4",
    gridValue: 3,
  });

  const products = useSelector((state) => {
    const brands = state.brandFilter;
    const orderBy = state.orderBy;

    const filterByBrandArr = brandFilter(state.cart.products, brands);
    const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);

    return filterByOrderArr;
  });

  const changeLayout = (n) => {
    let realGridValue;

    if (n === 4) {
      realGridValue = 3;
    } else {
      realGridValue = 4;
    }

    setEstado({
      gridValue: n,
      colValue: `col-lg-${realGridValue}`,
    });
  };

  return (
    <div className="col-lg-9">
      <div className="row mb-3">
        <div className="col-12 d-none d-lg-block d-xl-block">
          <div className="card ">
            <div className="card-header d-flex justify-content-end">
              <span className="mr-3">Cambiar Columnas: </span>
              <LayoutMode
                len={3}
                isActive={estado.gridValue === 3}
                click={() => changeLayout(3)}
              />
              <LayoutMode
                len={4}
                isActive={estado.gridValue === 4}
                click={() => changeLayout(4)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {paginationPipe(products, { perPage, currentPage }).map((product) => {
          let classes = `${estado.colValue} col-md-6 mb-4`;
          return (
            <div className={classes} key={product.id}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-end">
        <Pagination
          totalItemsCount={products.length}
          currentPage={currentPage}
          perPage={perPage}
          pagesToShow={pagesToShow}
        />
      </div>
    </div>
  );
};

export default ProductList;
