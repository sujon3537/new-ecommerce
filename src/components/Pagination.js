import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
];

function Items({ currentItems }) {
  return <>{currentItems && currentItems.map((item) => <Product />)}</>;
}

const Pagination = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-1 flex-wrap gap-y-5">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        pageClassName="bg-bgColor py-1 px-3 hover:bg-primary font-work text-base font-regular"
        pageLinkClassName="page-link"
        previousClassName="bg-bgColor py-1 px-2 hover:bg-primary font-work text-base font-regular"
        previousLinkClassName="page-link"
        nextClassName="bg-bgColor py-1 px-2 hover:bg-primary font-work text-base font-regular"
        nextLinkClassName="page-link"
        activeClassName="bg-primary"
        containerClassName="flex gap-x-3.5 mt-8"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
