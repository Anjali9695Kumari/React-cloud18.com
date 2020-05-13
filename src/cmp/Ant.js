import React, { Component } from 'react';
import { Table, Layout} from 'antd';
import 'antd/dist/antd.css';

class Ant extends Component {

    constructor(){
        super()
        this.state={
            data:false
        }
    }


    render() {
        const dataSource = [{
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
          }, {
            key: '2',
            name: 'John',
            age: 36,
            address: '10 USA Street'
          },
          {
            key: '3',
            name: 'Yusuf',
            age: 26,
            address: 'Isreal Street'
          },
          {
              key:'4',
              name:'Peter',
              age:60,
              address:'Delhi'
          }

        ];
          
          const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          }];
        return (
            <div>
                <h1> Anta Design Table </h1>
            <Layout.Content>
            <Table dataSource={dataSource} columns={columns} />

             </Layout.Content>   
                
            </div>
        );
    }
}

export default Ant;