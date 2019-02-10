import React, { Component } from 'react';
import File from '../../assets/img/file.png'
import FileDisabled from '../../assets/img/file-disabled.png'
import FileHover from '../../assets/img/file-hover.png';

class PolicyOperations extends Component {
  render() {
    let { item } = this.props;
    let _file = item ? File : FileDisabled
    return (
      <div className="policy-operations mt-30">
        <div className="text-center">
          <h3 className="text-bold">Yapmak istediğiniz işlem adını seçiniz.</h3>
        </div>
        <div className={`policy-operations__container mt-20 ${item ? '' : 'disabled'}`}>
          <div
            className="item-container"
            onMouseOver={() => item ? this.file1.src = FileHover : null}
            onMouseLeave={() => this.file1.src = _file}
          >
            <div className="item">
              <img src={_file} ref={el => this.file1 = el} alt="" />
              <h5 className="text-bold text-darkblue">
                Poliçe Detayları
              </h5>
            </div>
          </div>
          <div
            className="item-container"
            onMouseOver={() => item ? this.file2.src = FileHover : null}
            onMouseLeave={() => this.file2.src = _file}
          >
            <div className="item">
              <img src={_file} ref={el => this.file2 = el} alt="" />
              <h5 className="text-bold text-darkblue">
                Plaka Bilgi Güncelleme
              </h5>
            </div>
          </div>
          <div
            className="item-container"
            onMouseOver={() => item ? this.file3.src = FileHover : null}
            onMouseLeave={() => this.file3.src = _file}
          >
            <div className="item">
              <img src={_file} ref={el => this.file3 = el} alt="" />
              <h5 className="text-bold text-darkblue">
                Yenileme Teklif Talebi
              </h5>
            </div>
          </div>
          <div
            className="item-container"
            onMouseOver={() => item ? this.file4.src = FileHover : null}
            onMouseLeave={() => this.file4.src = _file}
          >
            <div className="item">
              <img src={_file} ref={el => this.file4 = el} alt="" />
              <h5 className="text-bold text-darkblue">
                Poliçe Basım Talebi
              </h5>
            </div>
          </div>
          <div
            className="item-container"
            onMouseOver={() => item ? this.file5.src = FileHover : null}
            onMouseLeave={() => this.file5.src = _file}
          >
            <div className="item">
              <img src={_file} ref={el => this.file5 = el} alt="" />
              <h5 className="text-bold text-darkblue">
                Diğer Talepler
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default PolicyOperations;