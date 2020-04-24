import React, { Component } from 'react';
import MaterialTable from 'material-table';

class Table extends Component {
   
    render() { 
        return (
            <MaterialTable 
                title="Employee Database"
                columns={[
                    {
                        field: "first",
                        title: "First Name"

                    },{
                        field: "last",
                        title: "Last Name"

                    },{
                        field: "id",
                        type: "numeric",
                        title: "Employee Id"

                    },{
                        field: "title",
                        title: "Job Title",
                        lookup: {
                             1: "Front Office",
                             2: "Scrum Master",
                             3: "Team Lead",
                             4: "Software Engineer",
                             5: "Manager"                            
                        }

                    }
                ]}

                data={[
                    {first: "Charles", last: "Darwin", id: 8562, title: 5},
                    {first: "Britney", last: "Spears", id: 4896, title: 2},
                    {first: "Harry", last: "Potter", id: 1254, title: 4},
                    {first: "Homer", last: "Simpson", id: 8246, title: 1},
                    {first: "Shia", last: "LaBeouf", id: 2448, title: 3},
                    {first: "Evelyn", last: "Salt", id: 1008, title: 4},
                    {first: "Roger", last: "Smith", id: 6515, title: 4},
                    {first: "Delores", last: "Abernathy", id: 5158, title: 4},
                    {first: "Brie", last: "Bella", id: 3585, title: 4},
                    {first: "Nikki", last: "Bella", id: 2155, title: 4},
                ]}

                
            
            />
          );
    }
}
 
export default Table;