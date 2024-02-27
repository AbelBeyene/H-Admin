import { useState, useEffect } from 'react';

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON Placeholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    fetch('/api/cv-data')
      .then(response => response.json())
      .then(data => setTableData(data.cv)) // Assuming your CV data is nested within a "cv" property
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="sm:-mx-5 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-5 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-brightGreen text-white  font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">ID</th>
                  <th scope="col" className="px-6 py-4">First Name</th>
                  <th scope="col" className="px-6 py-4">Second name</th>
                  <th scope="col" className="px-6 py-4">Gender</th>
                  <th scope="col" className="px-6 py-4">Email</th>
                  <th scope="col" className="px-6 py-4">Phone</th>
                  <th scope="col" className="px-6 py-4">City</th>
                  <th scope="col" className="px-6 py-4">Street Ad.</th>
                  <th scope="col" className="px-6 py-4">Post No</th>
                  <th scope="col" className="px-6 py-4">Current Job</th>
                  <th scope="col" className="px-6 py-4">Language</th>
                  <th scope="col" className="px-6 py-4">Experiance</th>
                  <th scope="col" className="px-6 py-4">Cv</th>
                </tr>
              </thead>
              <tbody >
                {tableData.map(row => (
                  <tr key={row.id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{row.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.username}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.phone}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.website}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.company && 
                        `${row.company.name} - ${row.company.catchPhrase}`}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.address && 
                        `${row.address.street}, ${row.address.suite}, ${row.address.city}`}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{row.phone}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.phone}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.phone}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.phone}</td>
                   <td className='cursor-pointer'> <a href={tableData.cvUrl} download="cv.docx">Download CV</a>    </td> 
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="flex ml-96 mt-4">
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          // onClick={prevPage}
          // disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          // onClick={nextPage}
          // disabled={currentRows.length < pageSize}
        >
          Next
        </button>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
