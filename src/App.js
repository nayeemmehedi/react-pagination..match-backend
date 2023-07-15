import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';

const App = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.dataLength/ itemsPerPage);

  console.log(data)

  useEffect(() => {
    fetch(`http://localhost:3001/data?page=${currentPage}&limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((Data) => setData(Data))
      .catch((error) => console.log(error));
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Render your paginated data here */}
      <ul>
        {data?.paginatedData?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Render the pagination component */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default App;
