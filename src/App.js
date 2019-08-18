/* eslint-disable import/first */
import React from 'react';

import { Layout , Row, Col} from 'antd';
import Problem from "./components/Problem";

import "./App.css";
import "codemirror/lib/codemirror.css";
import 'antd/dist/antd.css'; 
import callAPI from "./util/callAPI";
import { Select } from 'antd';

const { Option } = Select;
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      languages :[]
    }
  }
  componentWillMount(){ 
    console.log(window.innerHeight);
   callAPI("languages","GET", null).then(res =>{
    console.log(res.data);
     this.setState({
        languages : res.data
     })
   })
 }
 
  render(){
  var languages = this.state.languages.map(
    function iterator( language ) {
        return(
           <Option key={language.id} value={language.id}>{language.name}</Option>
        );
    },
    );
     return (
      <div>
        <Layout className="container">
          <Row>
            <Col span={12}>
              <div className="header-description" style={{background: "#fafafa", padding: "4px 0px", height: "40px"}}> </div>
            </Col>
            <Col span={12}>
             <div className="language" style={{background: "#fafafa", padding: "4px 0px"}}>
                <Select defaultValue="Java" style={{ width: 120 }}>
                   {languages}
                  </Select>
              </div>
            </Col>
          </Row>
          <Problem /> 
        </Layout>
      </div>
    );
  }
 
}
