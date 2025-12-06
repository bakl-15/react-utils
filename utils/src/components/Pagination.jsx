import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Suivant >"
      previousLabel="< Précédent"
      onPageChange={(e) => onPageChange(e.selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      containerClassName="flex gap-2 justify-center mt-6 text-white"
      pageClassName="px-3 py-1 rounded border cursor-pointer"
      activeClassName="bg-blue-600"
      previousClassName="px-3 py-1 rounded border cursor-pointer"
      nextClassName="px-3 py-1 rounded border cursor-pointer"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
}
