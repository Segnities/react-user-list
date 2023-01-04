import React from "react";
import { usePagination } from "../../../hooks/usePagination";

import "./index.scss";

const MyPagination = ({ totalPages, changePage }) => {
  const pagination = usePagination(totalPages);
  return (  
    <div className="pagination-wrapper">
      {pagination.map((page) => (
        <button key={page} onClick={() => changePage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default MyPagination;