import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BrandFilter.scss";
import { brands } from "../../data/brands";
import {
  addBrandToFilter,
  removeBrandFromFilter,
} from "../../redux/actions/brands";

const BrandFilter = () => {
  const dispatch = useDispatch();

  const brandItemsCount = useSelector((state) => {
    const brandItemsCount = {};

    state.shop.products.forEach((p) => {
      brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });

    return brandItemsCount;
  });

  const handleSelectBox = (e) => {
    if (e.target.checked) {
      dispatch(addBrandToFilter(e.target.name));
    } else {
      dispatch(removeBrandFromFilter(e.target.name));
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h3>Marcas</h3>
      </div>
      <ul className="list-group flex-row flex-wrap">
        {brands.map((brand) => (
          <li key={brand} className="list-group-item flex-50">
            <label className="custom-checkbox text-capitalize">
              {" "}
              {brand} ({brandItemsCount[brand]})
              <input
                type="checkbox"
                name={brand}
                className="custom-checkbox__input"
                onInput={handleSelectBox}
              />
              <span className="custom-checkbox__span"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
