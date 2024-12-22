import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const BreedList: React.FC = () => {
  const breeds = useSelector((state: any) => state.breeds.breeds);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const totalPages = Math.ceil(breeds.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = breeds.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ width: '90%', height: '100%' }}>
      <table
        className="table table-bordered border-primary"
        style={{ marginTop: '5rem', marginLeft: '5%', marginRight: '5%' }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Life Expectancy</th>
            <th>Male Weight</th>
            <th>Female Weight</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((breed: any) => (
            <tr key={breed.id}>
              <td>{breed.id}</td>
              <td>{breed.name}</td>
              <td>
                {breed.life_min} - {breed.life_max} years
              </td>
              <td>
                {breed.male_weight_min} - {breed.male_weight_max} kg
              </td>
              <td>
                {breed.female_weight_min} - {breed.female_weight_max} kg
              </td>
              <td>{breed.type}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="text-center">
              <button
                className="btn btn-outline-primary mx-1"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <span className="mx-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BreedList;
