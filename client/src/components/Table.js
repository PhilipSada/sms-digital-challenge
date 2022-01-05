import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";

export default function Table(props){
    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
          Showing { from } to { to } of { size } Results
        </span>
      );

    const columns = [
        { dataField: "id", text: "#", sort: true, headerStyle: { textAlign: "left", cursor:"pointer"}},
        { dataField: "city", text: "City", sort: true, headerStyle: { textAlign: "left",cursor:"pointer" }},
        { dataField: "start_date", text: "Start Date", sort:true, headerStyle: { textAlign: "left", cursor:"pointer" }},
        { dataField: "end_date", text: "End Date", sort: true, headerStyle: { textAlign: "left", cursor:"pointer" }},
        { dataField: "price", text: "Price", sort: true, headerStyle: { textAlign: "left", cursor:"pointer" }},
        { dataField: "status", text: "Status", sort: true, headerStyle: { textAlign: "left", cursor:"pointer" }},
        { dataField: "color", text: "Color", sort:true, headerStyle: { textAlign: "left", cursor:"pointer" }}
    ];
      
    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        hideSizePerPage: true,
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
          text: '8', value: 8
        }, {
          text: '16', value: 16
        }, {
          text: 'All', value: props.filteredInfo.length
        }] 
      };

    return(
        <div>
            <BootstrapTable 
            bootstrap4
            keyField="id"
            data={props.filteredInfo}
            columns={columns}
            pagination={paginationFactory(options)}
            bordered={ false }
            wrapperClasses="table-responsive"
            bodyClasses="table"
            
    
            />
        </div>
    )
}

