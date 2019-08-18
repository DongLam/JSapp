/* eslint-disable import/first */
import React from 'react';

import { Row, Col } from 'antd';
import CodeMirror from "react-codemirror";
import { Tabs } from 'antd';
import { Comment, Avatar, Form, Button, List, Input , Icon} from 'antd';
import RunApi from "./RunApi.js";
const { TextArea } = Input;
const { TabPane } = Tabs;


export default class Compiler extends React.Component{
  render() {
  	 var options = {
    	lineNumbers: true,
    	scroll: false
    };
    return (
      <Col span={12} > 
        <div style={{height: '100%', flex:"1 1 auto"}}>
        	<div className="compiler-editor">
        		<CodeMirror value="CodeHere" options={options} style={{overflow: "hidden !important"}}/>
	        	<Tabs type="card" style={{height: "200px"}}>
			      <TabPane tab="Input" key="1">
			       <Form.Item style={{padding: "10px", border: "none !important"}}>
				      <TextArea rows={4} />
				    </Form.Item>
			      </TabPane>
			      <TabPane tab="Output" key="2" style={{padding: "0px 20px"}}>
			        <p>You must submission</p>
			      </TabPane>
			    </Tabs>
        	</div>
        
		   <div className="footer-compiler">
		   		<Button ><Icon type="caret-right" /> Run Code</Button>
		   		<Button style={{background: "#455a64", color: "#fff", marginLeft: "10px"}}>Submit</Button>
		   </div> 
        </div>
      </Col>
    );
  }
}
