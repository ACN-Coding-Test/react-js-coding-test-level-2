import React, { useState } from 'react'

interface PaginationProps {
  length: number
  currentPage: number
  handlePageChange: (page: number) => void
}

export default function Pagination({
  length,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  const [rowsPerPage] = useState<number>(10)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(length / rowsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="my-4 flex justify-center">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`${
            currentPage == page ? 'bg-primary' : 'bg-light-gray'
          } m-2 rounded-full py-2 px-4 font-bold text-white hover:bg-primary`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}
