import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox, Card, Button } from 'antd';
import actions from '../../../store/actions';

class AllowMarketing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sms: false,
      email: false,
      telemarketing: false,
      isRead: false,
      loading: false
    };
  };

  save = () => {
    if (this.state.isRead) {
      this.setState({ loading: true });
      let { sms, email, telemarketing } = this.state;
      this.props.save({ sms, email, telemarketing }).then(() => {
        this.props.history.push('/kisisel-bilgilerim');
      }).catch(() => {
        this.setState({ loading: false });
      });
    }
  };

  render() {
    let { sms, email, telemarketing, isRead, loading } = this.state;
    return (
      <div>
        <h2 className="text-center mb-20">İzinli Pazarlama / Onay / İptal</h2>
        <p className="text-center mb-20">Değerli müşterimiz; aşağıda gösterilmekte olan iletişim kanallarını seçerek ihtiyacınız doğrultusunda İzinli Pazarlama bildirimlerini yönetebilirsiniz.</p>
        <div className="checkbox-container">
          <Checkbox className="mr-20" value={sms} onChange={(e) => this.setState({ sms: e.target.checked })}>SMS</Checkbox>
          <Checkbox className="mr-20" value={email} onChange={(e) => this.setState({ email: e.target.checked })}>E-Posta</Checkbox>
          <Checkbox className="mr-20" value={telemarketing} onChange={(e) => this.setState({ telemarketing: e.target.checked })}>Telemarketing</Checkbox>
        </div>
        <Card className="marketing-card mb-20 mt-20">
          <h4>Değerli Müşterimiz,</h4>
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio nec urna suscipit volutpat. Maecenas ut tortor risus. Sed ultrices varius dapibus. Mauris facilisis nulla ut tincidunt vehicula. Sed venenatis massa massa, a ornare mi pulvinar id. Donec eu neque risus. In et sem eu lacus laoreet congue at sed erat.</p>
          <p className="mb-20">Donec efficitur urna quis velit pharetra sodales. Maecenas consectetur, nibh at eleifend dapibus, sapien ex porttitor turpis, sit amet porttitor ex mi sit amet ex. Sed facilisis urna in commodo vehicula. Cras venenatis, justo ac sollicitudin iaculis, erat orci fringilla libero, ut imperdiet metus ipsum sit amet nisl. Donec et tristique lectus. Ut tristique vehicula erat, nec interdum risus viverra quis. Pellentesque eget dictum purus. Curabitur odio metus, pellentesque non porta eget, efficitur a diam.</p>
        </Card>
        <Checkbox className="mb-20" value={isRead} onChange={(e) => this.setState({ isRead: e.target.checked })}>İzinli pazarlama sözleşmesini okudum, onaylıyorum.</Checkbox>
        <div className="footer-buttons">
          <Button icon="save" type="primary" onClick={this.save} loading={loading} disabled={!isRead}>Kaydet</Button>
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  save: (data) => dispatch(actions.saveMarketing(data))
});
export default connect(null, mapDispatchToProps)(AllowMarketing);