import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Search, Edit, Inject } from '@syncfusion/ej2-react-grids';

// import { employeesData, employeesGrid } from '../data/dummy.js';
import { Header, Footer, Table } from '../components';
import product6 from '../data/product6.jpg';
import product5 from '../data/product5.jpg';

const Employee = () => {
  // const editing = { allowDeleting: true, allowEditing: true };

  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*'}
        alt="employee"
      />
      <p>'Nancy Davolio'</p>
      {/* <img src={props.image} /> */}
      {/* <p>{props.Name}</p> */}
    </div>
  );
  
  const gridEmployeeCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      {/* <GrLocation /> */}
      <span>USA</span>
      {/* <span>{props.Country}</span> */}
    </div>
  );

  const employeesGrid = [
    { headerText: 'Employee',
      width: '150',
      template: gridEmployeeProfile(),
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Title',
      headerText: 'Designation',
      width: '170',
      textAlign: 'Center',
    },
    { headerText: 'Country',
      width: '120',
      textAlign: 'Center',
      template: gridEmployeeCountry() 
    },
  ]; 

  const employeesData = [
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage: '<img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" />',
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      // EmployeeImage: avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    }
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl overflow-x-auto ">
      <Header category="Page" title="Employee" />

      <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="">
            <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
          </div>
          <div className="mt-4">
            <Table />
            {/* <Table columns={columns} data={data} /> */}
          </div>
        </main>
      </div>


      {/* <table className="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table> */}

      {/* <GridComponent
        id="gridcomp"
        dataSource={employeesData}
      >
        <ColumnsDirective>
          eslint-disable-next-line react/jsx-props-no-spreading
          {employeesGrid.map( 
            (item, index) => (<div key={index}>baris satu</div>)
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, Edit]} />
      </GridComponent> */}
    </div>
  );
};
export default Employee;