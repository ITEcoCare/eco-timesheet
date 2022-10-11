import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Search, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy.js';
import { Header, Footer } from '../components';
import product6 from '../data/product6.jpg';
import product5 from '../data/product5.jpg';

const Employee = () => {
  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl overflow-x-auto ">
      <Header category="Page" title="Employee" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, Edit]} />
      </GridComponent>
    </div>
  );
};
export default Employee;