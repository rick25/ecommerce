import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BrandFilter.scss";
import ReactLoading from "react-loading";
import {
  addBrandToFilter,
  fetchBrands,
  removeBrandFromFilter,
} from "../../redux/actions/brands";

const BrandFilter = () => {
  const dispatch = useDispatch();

  const { loading, brands, error } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const { brandItemsCount, brandFilter } = useSelector((state) => {
    const brandItemsCount = {};

    state.products.products.forEach((p) => {
      brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });

    return {
      brandItemsCount,
      brandFilter: state.brandFilter,
    };
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
        {loading && (
          <div className={`col-md-12 text-center`}>
            <ReactLoading type="spokes" color="#5a32a8" />
          </div>
        )}
        {error && <span className="text-danger">{error}</span>}
        {brands.map((brand) => (
          <li key={brand} className="list-group-item flex-50">
            <label className="custom-checkbox text-capitalize">
              {" "}
              {brand} ({brandItemsCount[brand]})
              <input
                type="checkbox"
                name={brand}
                className="custom-checkbox__input"
                onChange={handleSelectBox}
                checked={brandFilter.includes(brand)}
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
