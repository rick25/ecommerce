import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./OrderFilter.scss";
import {
  ORDER_BY_ASC,
  ORDER_BY_DESC,
  orderByAsc,
  orderByDesc,
  clearOrderBy,
} from "../../redux/actions/order";

const OrderFilter = () => {
  const dispatch = useDispatch();

  let removeSelected;
  const [selected, setSelected] = useState("");

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelected(value);

    if (value === ORDER_BY_ASC) {
      dispatch(orderByAsc());
    } else {
      dispatch(orderByDesc());
    }
  };

  const removeFilter = (e) => {
    const buttons = document.getElementsByName("orderByPrice");

    buttons.forEach((el) => {
      el.checked = false;
    });

    dispatch(clearOrderBy());
    setSelected("");
  };

  if (selected) {
    removeSelected = (
      <span onClick={removeFilter} className="text-remove-selected text-right">
        Quitar
      </span>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Precio {removeSelected} </h3>
      </div>
      <ul className="list-group flex-row  flex-wrap">
        <li className="list-group-item flex-fill">
          <label className="custom-radio-btn">
            {" "}
            Menor a mayor
            <input
              value={ORDER_BY_ASC}
              type="radio"
              onChange={handleRadioChange}
              name="orderByPrice"
              className="custom-radio-btn__input"
            />
            <span className="custom-radio-btn__span"></span>
          </label>
        </li>
        <li className="list-group-item flex-fill">
          <label className="custom-radio-btn">
            {" "}
            Mayor a menor
            <input
              value={ORDER_BY_DESC}
              onChange={handleRadioChange}
              type="radio"
              name="orderByPrice"
              className="custom-radio-btn__input"
            />
            <span className="custom-radio-btn__span"></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default OrderFilter;
