import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './style.scss';
import audited from '../../services/AuditedApi';
import user from '../../assets/imgs/user.jpg';

class Submit extends Component {
  handleClick = (id, name) => {
    const { student_id } = this.props;
    audited.post('responsible-process', { id, student_id, name });
  };

  //handleClickImg = () => {};

  render() {
    return (
      <div>
        <Popup trigger={<button> Atribuir</button>} position="left center">
          <div>
            <ul className="ul">
              <li className="li">
                <a
                  className="a"
                  onClick={() => this.handleClick(1, 'ANDREA GONÇALVES')}
                >
                  ANDREA GONÇALVES MARIANO SOUZA (2 processos)
                </a>
              </li>
              <li className="li">
                <a
                  className="a"
                  onClick={() => this.handleClick(2, 'CAIO GUILHERME')}
                >
                  CAIO GUILHERME SOARES FERNANDES (1 processos)
                </a>
              </li>
              <li className="li">
                <a
                  className="a"
                  onClick={() => this.handleClick(3, 'GENIVALDO LINHARES')}
                >
                  GENIVALDO LINHARES BRANDÃO (4 processos)
                </a>
              </li>
              <li className="li">
                <a
                  className="a"
                  onClick={() => this.handleClick(4, 'HAROLDO FELIPE')}
                >
                  HAROLDO FELIPPE AVELLAR (2 processos)
                </a>
              </li>
              <li className="li">
                <a
                  className="a"
                  onClick={() => this.handleClick(5, 'LEILA MIGUELINA')}
                >
                  LEILA MIGUELINA APARECIDA COSTA SOMENK (2 processos)
                </a>
              </li>
              <li className="li">
                <a
                  className="a"
                  onClick={() => this.handleClick(6, 'MARCIO ROCHA')}
                >
                  MARCIO ROCHA DE PINHO (2 processos)
                </a>
              </li>
            </ul>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Submit;
