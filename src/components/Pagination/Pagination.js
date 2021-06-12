import React from "react";
import { useDispatch } from "react-redux";
import { goPage, nextPage, prevPage } from "../../redux/actions/paginaton";

const Pagination = (props) => {
  const dispatch = useDispatch();

  const isOnLastPage = () => {
    return props.perPage * props.currentPage >= props.totalItemsCount;
  };

  const totalPages = () => {
    return Math.ceil(props.totalItemsCount / props.perPage) || 0;
  };

  const getMin = () => {
    return props.perPage * props.currentPage - props.perPage + 1;
  };

  const getMax = () => {
    let max = props.perPage * props.currentPage;
    if (max > props.totalItemsCount) {
      max = props.totalItemsCount;
    }
    return max;
  };

  const getPages = () => {
    const c = Math.ceil(props.totalItemsCount / props.perPage);
    const p = props.currentPage || 1;
    const pagesToShow = props.pagesToShow || 9;
    const pages = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  };

  const pages = getPages().map((pageNum) => {
    let buttonClass = "page-item";

    if (pageNum === props.currentPage) {
      buttonClass += " active";
    }

    return (
      <li
        key={pageNum}
        className={buttonClass}
        onClick={() => {
          dispatch(goPage(pageNum));
        }}
      >
        <button className="page-link">{pageNum}</button>
      </li>
    );
  });

  let prevButtonClass = "page-item";

  if (props.currentPage === 1) {
    prevButtonClass += " disabled";
  }

  const prevButton = (
    <li className={prevButtonClass}>
      <button
        className="page-link"
        onClick={() => {
          dispatch(prevPage());
        }}
        tabIndex="-1"
      >
        Anterior
      </button>
    </li>
  );

  let nextButtonClass = "page-item";

  if (isOnLastPage()) {
    nextButtonClass += " disabled";
  }

  const nextButton = (
    <li className={nextButtonClass}>
      <button
        disabled={isOnLastPage()}
        className="page-link"
        onClick={() => {
          dispatch(nextPage());
        }}
      >
        Siguiente
      </button>
    </li>
  );

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {prevButton}
        {pages}
        {nextButton}
      </ul>
    </nav>
  );
};

export default Pagination;
