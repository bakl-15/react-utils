import { useState, useMemo } from "react";

export default function usePagination(items = [], itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const currentPageItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = (page) => {
    if (page >= 0 && page < pageCount) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    pageCount,
    currentPageItems,
    goToPage,
  };
}
