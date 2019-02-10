import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Dropdown, Drawer, Button, Icon, Popover } from 'antd';
import { Content, SideMenu } from './';
import { LoginButton } from '../UIComponents';
import routes from '../../plugins/router';
import Logo from '../../assets/img/logo.png';
import LogoWhite from '../../assets/img/logo-white.png';
import Footer from './Footer';

class VDFLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLeft: false,
      visibleRight: false
    };
  };

  toggleMenu = (type, val) => {
    this.setState({ [`visible${type}`]: val });
  };

  render() {
    let { location } = this.props;

    return (
      <Layout className={`vdf-layout ${location.pathname === '/anasayfa' ? 'home-page' : ''}`}>
        <Layout.Header className="vdf-header">
          <div className="content">
            <i className="fas fa-align-left toggle" onClick={() => this.toggleMenu('Left', true)} />
            <NavLink to="/">
              <img src={location.pathname === '/anasayfa' ? LogoWhite : Logo} className="logo" alt="" />
            </NavLink>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <NavLink to="/urunler-hizmetler">
                  Ürünler ve Hizmetler
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/hasar-hizmetleri">
                  Hasar Hizmetleri
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <Dropdown overlayClassName="top-60" placement="bottomCenter" trigger={['hover']} overlay={<Menu>
                  <Menu.Item key="31">
                    <NavLink to="/urunler-hizmetler/yetkili-servisler">
                      Yetkili Servis 1
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="32">
                    <NavLink to="/urunler-hizmetler/yetkili-servisler">
                      Yetkili Servis 2
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="33">
                    <NavLink to="/urunler-hizmetler/yetkili-servisler">
                      Yetkili Servis 3
                    </NavLink>
                  </Menu.Item>
                </Menu>}>
                  <a>Yetkili Servisler</a>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/bizi-taniyin">
                  Bizi Tanıyın
                </NavLink>
              </Menu.Item>
              <Menu.Item key="5" className="pull-right">
                <Popover trigger={['click']} overlayClassName="account-popover" content={
                  <React.Fragment>
                    <SideMenu routes={routes} />
                    <Button>Çıkış Yap</Button>
                  </React.Fragment>
                }>
                  <Button className="account-btn">
                    <Icon type="user" /> Göksel Öztürk <Icon type="caret-down" />
                  </Button>
                </Popover>
              </Menu.Item>
            </Menu>
            <i className="fas fa-align-right toggle ml-auto" onClick={() => this.toggleMenu('Right', true)} />
          </div>
          <Drawer className="mobile-menu light" title={
            <React.Fragment>
              <NavLink to="/">
                <img src={Logo} className="logo" alt="" />
              </NavLink>
              <i className="fas fa-align-justify toggle" onClick={() => this.toggleMenu('Left', false)} />
            </React.Fragment>
          } placement="left" visible={this.state.visibleLeft} onClose={() => this.toggleMenu('Left', false)} closable={false}>
            <SideMenu routes={routes} />
          </Drawer>
          <Drawer className="mobile-menu" title={
            <React.Fragment>
              <i className="fas fa-align-justify toggle" onClick={() => this.toggleMenu('Right', false)} />
              <NavLink to="/">
                <img src={LogoWhite} className="logo" alt="" />
              </NavLink>
            </React.Fragment>
          } placement="right" visible={this.state.visibleRight} onClose={() => this.toggleMenu('Right', false)} closable={false}>
            <Menu theme="dark" mode="vertical">
              <Menu.Item key="1">
                <NavLink to="/urunler-hizmetler">
                  Ürünler ve Hizmetler
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/hasar-hizmetleri">
                  Hasar Hizmetleri
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <Dropdown overlayClassName="top-60" placement="bottomCenter" trigger={['hover']} overlay={<Menu>
                  <Menu.Item key="31">
                    <NavLink to="/urunler-hizmetler/yetkili-servisler">
                      Yetkili Servis 1
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="32">
                    <NavLink to="/urunler-hizmetler/yetkili-servisler">
                      Yetkili Servis 2
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="33">
                    <NavLink to="/urunler-hizmetler/yetkili-servisler">
                      Yetkili Servis 3
                    </NavLink>
                  </Menu.Item>
                </Menu>}>
                  <a>Yetkili Servisler</a>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/bizi-taniyin">
                  Bizi Tanıyın
                </NavLink>
              </Menu.Item>
              <Menu.Item key="5" className="pull-right login">
                <LoginButton />
              </Menu.Item>
            </Menu>
          </Drawer>
        </Layout.Header>
        <Layout className="pt-60 content pb-60">
          {/* <div className="content"> */}
          <Layout.Sider className="vdf-sider" width={230} theme="light">
            <SideMenu routes={routes} />
          </Layout.Sider>
          <Content routes={routes} />
          {/* </div> */}
        </Layout>
        <Footer routes={routes} location={location} />
      </Layout>
    );
  };
};

export default withRouter(VDFLayout);