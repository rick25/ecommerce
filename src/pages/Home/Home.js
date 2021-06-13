import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import fetchProducts from "../../redux/actions/products";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container" style={{ paddingTop: "6rem" }}>
      <div className="row">
        <FilterBar />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
