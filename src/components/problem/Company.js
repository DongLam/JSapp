import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class Company extends React.Component{
    handleClick = e => {
    console.log('click ', e);
  };
  render() {
    return (
    <Menu
        onClick={this.handleClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">
            <span>Contributor</span>
        </Menu.Item>
        <SubMenu
          key="sub4"
          title={
            <span>
                <span>Company</span>
            </span>
          }
        >
          <Menu.Item key="9">Array</Menu.Item>
          <Menu.Item key="10">Hash Table</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
