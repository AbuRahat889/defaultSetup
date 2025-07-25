// components/Pagination.tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-end items-center p-6">
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          onClick={goToPreviousPage}
          // disabled={currentPage === 1}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(
            (page) =>
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
          )
          .map((page, index, array) => (
            <React.Fragment key={page}>
              {index > 0 && array[index - 1] !== page - 1 && (
                <span className="px-2">...</span>
              )}
              <Button
                variant={currentPage === page ? "secondary" : "primary"}
                onClick={() => onPageChange(page)}
                className={`h-8 w-8 flex items-center ${
                  currentPage === page
                    ? "bg-[#ff9500] text-white border-2 border-[#ff9500]"
                    : "bg-white border-2"
                }`}
              >
                {page}
              </Button>
            </React.Fragment>
          ))}

        <Button
          variant="ghost"
          onClick={goToNextPage}
          // disabled={currentPage === totalPages}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

// const totalPages = data?.data?.meta?.totalPage || 1;
// const currentItems = data?.data?.data || [];
// <Pagination
//   currentPage={currentPage}
//   totalPages={totalPages}
//   onPageChange={setCurrentPage}
// />;
