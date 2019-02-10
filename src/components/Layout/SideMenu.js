import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

class VDFMenu extends Component {
  render() {
    let { routes, location, theme } = this.props;

    return (
      <Menu mode="inline" theme={theme ? theme : 'light'} defaultSelectedKeys={[location.pathname.substr(1)]}>
        {
          routes.filter(x => x.visible !== false).map(x => (
            x.routes ?
              <Menu.SubMenu key={x.name} title={x.name}>
                {
                  x.routes &&
                  x.routes.filter(y => !y.isHidden).map((y, index) =>
                    <Menu.Item key={x.name + y.name} >
                      <NavLink to={`${x.path}${y.path}`}>
                        {y.name}
                      </NavLink>
                    </Menu.Item>
                  )
                }
              </Menu.SubMenu>
              :
              <Menu.Item key={x.name}>
                <NavLink to={`${x.path}`}>
                  {x.name}
                </NavLink>
              </Menu.Item>
          ))}
      </Menu>
    );
  };
};

export default withRouter(VDFMenu);