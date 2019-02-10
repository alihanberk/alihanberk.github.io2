import React, { Component } from 'react';
import { socialLinks, footerLinks } from '../../helpers/constants';
import { NavLink } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Logo from '../../assets/img/icon.png';

class Footer extends Component {
  render() {
    let { location } = this.props
    return (
      <Layout.Footer>
        <div className="content">
          <Row gutter={20}>
            {location.pathname !== '/anasayfa' &&
              <React.Fragment>
                <Col xs={24} md={6}>
                  <ul>
                    <li><NavLink to="/">Kasko</NavLink></li>
                    <li><NavLink to="/">Trafik</NavLink></li>
                    <li><NavLink to="/">Uzatılmış Garanti</NavLink></li>
                    <li><NavLink to="/">Kredi Koruma</NavLink></li>
                    <li><NavLink to="/">Kredi Koruma Plus</NavLink></li>
                    <li><NavLink to="/">Araç Değer Koruma</NavLink></li>
                    <li><NavLink to="/">Diğer Ürünlerimiz</NavLink></li>
                  </ul>
                </Col>
                <Col xs={24} md={6}>
                  <ul>
                    <li><NavLink to="/">Hasar Hizmetleri</NavLink></li>
                    <li><NavLink to="/">Hasar Dosya Görüntüleme</NavLink></li>
                    <li><NavLink to="/">Gerekli Evraklar</NavLink></li>
                  </ul>
                </Col>
                <Col xs={24} md={6}>
                  <ul>
                    <li><NavLink to="/">VW Binek Araç Yetkili Servisleri</NavLink></li>
                    <li><NavLink to="/">Audi Yetkili Servisleri</NavLink></li>
                    <li><NavLink to="/">Seat Yetkili Servisleri</NavLink></li>
                    <li><NavLink to="/">VW Ticari Araç Yetkili Servisleri</NavLink></li>
                    <li><NavLink to="/">Scanie Yetkili Servisleri</NavLink></li>
                    <li><NavLink to="/">Man Yetkili Servisleri</NavLink></li>
                  </ul>
                </Col>
                <Col xs={24} md={6} style={{ textAlign: 'right' }}>
                  <div className="pb-30">
                    <img className="logo" src={Logo} alt="" />
                  </div>
                  <div className="social-icons pb-30">
                    {socialLinks.map((item, i) => (
                      <NavLink key={i} to={item.url} target="_blank">
                        <i className={item.icon} />
                      </NavLink>
                    ))}
                  </div>
                  <div className="pb-30">
                    <p>Copyright © 2018</p>
                    <p>VDF Sigorta</p>
                  </div>
                </Col>
              </React.Fragment>
            }
          </Row>
          <Row gutter={20}>
            <Col className="footer-links">
              {location.pathname === '/anasayfa' &&
                <div>
                  <p className="footer-copyright">Copyright © 2018 VDF Sigorta</p>
                </div>
              }
              {footerLinks.map((item, i) => (
                <NavLink to={item.url} key={i}>
                  {item.title}
                </NavLink>
              ))}
              {location.pathname === '/anasayfa' &&
                <div className="social-icons">
                  {socialLinks.map((item, i) => (
                    <NavLink key={i} to={item.url} target="_blank">
                      <i className={item.icon} />
                    </NavLink>
                  ))}
                </div>
              }
              <div className="pull-right">
                <img src="/static/img/ios.png" alt="" />
                <img src="/static/img/android.png" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Layout.Footer>
    );
  };
};

export default Footer;