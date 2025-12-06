import React from "react";
import Card from "../../components/ui/Card";
import { useUsers } from "../../api/userApi";
import Pagination from "../../components/Pagination";
import usePagination from "../../hook/usePagination";
export default function UserList() {
  const { data: users = [], isLoading } = useUsers();
  const { currentPageItems, pageCount, goToPage, currentPage } = usePagination(
    users,
    6
  );

  if (isLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPageItems.map((u) => (
          <Card key={u.id} user={u} />
        ))}
      </div>

      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={goToPage}
      />
    </div>
  );
}
