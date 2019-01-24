import React, { Component } from 'react';
import './style.scss';
import Impressora from '../../assets/imgs/impressora.png';
import Dowloands from '../../assets/imgs/dowloand.svg';
import MenuVertical from '../../assets/imgs/menuvertical.svg';
import DiplomaImagem from '../../assets/imgs/diploma-icone.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';
import BtnDiploma from '../../components/BtnDiploma';
import apiDiploma from '../../services/diplomaApi';
import api from '../../services/api';

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
];
class Diploma extends Component {
  state = {
    diploma: {},
    courses: []
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const diploma = await apiDiploma.get(
      `v_impressao_diploma?_where=(student_id,eq,65537)`
    );

    localStorage.setItem('diploma', JSON.stringify(diploma.data[0]));

    this.setState({
      diploma: diploma.data[0]
    });
  }

  imprimir = () => {
    let conteudo = document.getElementById('diploma').innerHTML;
    let tela_impressao = window.open('about:blank');
    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
  };

  download = async () => {
    const {
      match: {
        params: { ra: student_id }
      }
    } = this.props;

    const data = { student_id };

    await api.post(`/report/pdf`, data);
  };

  handleClick = id => {
    this.props.history.push(`/print/${id}`);
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="box-topo">
            <div className="row">
              <div className="col-md-12">
                <div className="float-right">
                  <div id="print" className="conteudo">
                    <a
                      className="selecionar"
                      onClick={() =>
                        this.handleClick(this.props.match.params.id)
                      }
                    >
                      <img src={Impressora} className="margin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="diploma" className="show">
            <div className="content">
              <p className="paragraph">
                A presidente da{' '}
                <span>Universidade Virtual do Estado de São Paulo</span>,
              </p>
              <p className="paragraph -marginBottom">
                no uso de suas atribuições, confere a
              </p>
              <h1 id="name">{this.state.diploma.name}</h1>
              <p className="paragraph">
                de nacionalidade {this.state.diploma.nacionalidade},
              </p>
              <p className="paragraph">
                portador da cédula de identidade RG {this.state.diploma.RG} SP,
              </p>
              <p className="paragraph">
                nascido em{' '}
                {this.state.diploma['birth_date']
                  ? this.state.diploma['birth_date'].split('/')[0]
                  : ''}{' '}
                de{' '}
                {this.state.diploma['birth_date']
                  ? months[
                      Number(this.state.diploma['birth_date'].split('/')[1]) - 1
                    ]
                  : ''}{' '}
                de{' '}
                {this.state.diploma['birth_date']
                  ? this.state.diploma['birth_date'].split('/')[2]
                  : ''}
              </p>
              <p className="paragraph">e natural do Estado de São Paulo,</p>
              <p className="paragraph">o diploma do</p>
              <h2 id="course">{this.state.diploma['course_name']}</h2>
              <p className="paragraph">
                concluído em{' '}
                {this.state.diploma['date_conclusion']
                  ? months[
                      Number(
                        this.state.diploma['date_conclusion'].split('/')[1]
                      ) - 1
                    ]
                  : ''}{' '}
                de{' '}
                {this.state.diploma['date_conclusion']
                  ? this.state.diploma['date_conclusion'].split('/')[2]
                  : ''}
              </p>
              <p className="paragraph -marginBottom">
                para que possa gozar dos direitos e prerrogativas legais.
              </p>
              <p className="paragraph">
                São Paulo, {new Date().getDate()} de{' '}
                {months[new Date().getMonth()]} de {new Date().getFullYear()}.
              </p>
            </div>
            <div className="signatures">
              <p className="signature">
                &nbsp; <span>&nbsp;</span>
              </p>
              <p className="signature">
                &nbsp; <span>&nbsp;</span>
              </p>
              <p className="signature">
                <span>Diplomado(a)</span>{' '}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar">VOLTAR</a>
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default Diploma;
