import Title from 'components/title'
import Image from 'next/image'
import { ProductInterface } from 'pages'
import React, { useState } from 'react'
import { firstCharMakeCap } from 'utils'
import FloatButton from './floatButton'
import Pagination from './pagination'

interface ProductsContainerProps {
  products: ProductInterface[]
  categories: string[]
}

export default function ProductsContainer({
  products,
  categories,
}: ProductsContainerProps) {
  const [sortBy, setSortBy] = useState(
    'id' as 'title' | 'id' | 'price' | 'category'
  )
  const [sortOrder, setSortOrder] = useState('asc')
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage] = useState<number>(10)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value)
    setCurrentPage(1)
  }

  const handleSort = (column: 'title' | 'id' | 'price' | 'category') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortOrder('asc')
    }
  }

  let sortedData = products.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1
    }
  })

  if (category) {
    sortedData = sortedData.filter((s) => s.category === category)
  }

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(sortedData.length / rowsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <div className="shadoe m-auto my-4 w-content">
        <div className="flex items-center justify-between">
          <Title>Products</Title>
          <div className="flex items-center">
            <div>Filter: </div>
            <select
              value={category}
              onChange={handleChangeCategory}
              className="ml-3 rounded p-2"
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option value={c}>{firstCharMakeCap(c)}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2 rounded-sm bg-white">
          <table>
            <thead>
              <tr className="border-b border-border-gray text-left">
                <th className="w-1/6 px-4 py-2">Image</th>
                <th
                  onClick={() => handleSort('title')}
                  className="flex-1 cursor-pointer px-4 py-2"
                >
                  Title
                </th>
                <th
                  onClick={() => handleSort('category')}
                  className="w-1/6 cursor-pointer px-4 py-2"
                >
                  Category
                </th>
                <th
                  onClick={() => handleSort('price')}
                  className="w-1/6 cursor-pointer px-4 py-2 text-center"
                >
                  Price
                </th>
                <th className="w-1/12 px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row) => {
                return (
                  <tr key={row.id} className="border-b border-border-gray">
                    <td className="w-1/6 px-4 py-2">
                      <Image src={row.image} height={50} width={60} />
                    </td>
                    <td className="flex-1 px-4 py-2">{row.title}</td>
                    <td className="w-1/6 px-4 py-2">
                      {firstCharMakeCap(row.category)}
                    </td>
                    <td className="w-1/6 px-4 py-2 text-center">
                      ${row.price}
                    </td>
                    <td className="w-1/12 px-4 py-2 text-center">
                      <button className="text-primary">Buy</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Pagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            length={sortedData.length}
          />
        </div>
      </div>
      <FloatButton />
    </>
  )
}
