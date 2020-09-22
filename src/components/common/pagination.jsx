import React from "react";
import PropTypes from "prop-types";
import "../../css/pagination.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  let pages = [];
  if (pageCount === 1) return null;
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <nav className="">
      <ul className="pagination">
        {pages.map((p) => (
          <li key={p} className="page-item">
            <a
              className={p === currentPage ? "page-link active" : "page-link"}
              onClick={() => {
                onPageChange(p);
              }}
              href="#nogo"
            >
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
