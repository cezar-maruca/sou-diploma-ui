import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import user from '../../assets/imgs/user.jpg';
import editar from '../../assets/imgs/editar.jpg';
import { Formik, Form } from 'formik';
import Dropzone from 'react-dropzone';
import {
  Row,
  Col,
  DragDrop,
  Text,
  Document,
  Accepted,
  Icon,
  Field,
  Button
} from './styles';
import Upload from '../../assets/imgs/upload.svg';
import Open from '../../assets/imgs/open.svg';
import Success from '../../assets/imgs/sucesso_upload.svg';
import PersonalData from '../../../src/services/PersonalDataApi';
import Cities from '../../../src/services/CityApi';
import Nationality from '../../../src/services/NationalityApi';
import Emitter from '../../../src/services/EmitterApi';
import Naturalness from '../../../src/services/NaturalnessApi';

class RegistrationData extends Component {
  state = {
    courses: [],
    personal: [],
    nationality: [],
    emitter: [],
    naturalness: [],
    city: [],
    states: [],
    modalValue: '',
    estado: [],
    cityName: [],
    nacionalidadeName: []
  };

  handleDados = (id, name) => {
    const { personal_id } = this.props;
    PersonalData.patch('http://localhost:8000/api/students', {
      id,
      personal_id,
      name
    });
  };

  handleLinks = (id, student_name) => {
    const { process_id } = this.props;
    PersonalData.patch('http://localhost:8000/api/v_diplomado', {
      id,
      process_id,
      student_name
      //});
      /*const { personal_id } = this.props;*/
      /*PersonalData.patch('http://localhost:8000/api/v_diplomado', {
      id,
      personal_id,
      name*/
      //});
    });
  };

  handleClick = academic_register => {
    this.props.history.push(`/enabled/${academic_register}`);
  };

  handleBack = academic_register => {
    this.props.history.push(`/process/${academic_register}`);
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const resPersonal = await PersonalData.get(
      `/v_dados_pessoais?_where=(id,eq,${id})`
    );

    const resCourse = await PersonalData.get(
      `/v_dados_ingresso?_where=(id,eq,${id})`
    );

    const resCity = await PersonalData.get(`/cities?_where=(id,name,eq,${id})`);

    const resNationality = await PersonalData.get(
      `/v_nacionalidade?_where=(id,name,eq,${id})`
    );

    const resEmitter = await PersonalData.get(
      `/v_orgao_emissor?_where=(id,eq,${id})`
    );

    const resStates = await PersonalData.get(`/states?_sort=uf&_size=27`);

    const resCities = await PersonalData.get(
      `/cities?_fields=academic_register,name,?_where=(states_id,eq,${
        resPersonal.data[0]
      })`
    );

    const resNacionalidade = await PersonalData.get(
      `/v_nacionalidade?_where=(id,eq,1)`
    );

    this.setState({
      courses: resCourse.data,
      personal: resPersonal.data,
      city: resCity.data,
      nationality: resNationality.data,
      emitter: resEmitter.data,
      //naturalness: resNaturalness.data,
      states: resStates.data,
      cityName: resCityName.data,
      nacionalidadeName: resNacionalidade.data
    });
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ files: { rg: {}, history: {}, conclusion: {} } }}
          render={({ setFieldValue, values }) => (
            <div className="container-fluid wrap">
              <h3 className="title-registration">Dados Cadastrais</h3>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome Civil</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.name,
                              modalName: 'name'
                            });
                          }}
                          src={editar}
                        />
                        {data.name}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome Social</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.assumed_name,
                              modalName: 'assumed_name'
                            });
                          }}
                          src={editar}
                        />
                        {data.assumed_name}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <br />
              <div className="col-md-4">
                <Row>
                  <Col>
                    <Dropzone
                      accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
                      onDrop={([file, ...rest]) => {
                        setFieldValue(
                          'files.rg',
                          Object.assign(file, {
                            preview: URL.createObjectURL(file)
                          })
                        );
                      }}
                      multiple={false}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <DragDrop {...getRootProps()}>
                          <Document>RG</Document>
                          <Text>Arraste para cá ou</Text>
                          <Icon
                            src={
                              JSON.stringify(values.files.rg) !== '{}'
                                ? Success
                                : Upload
                            }
                          />
                          <Field {...getInputProps()} />
                          <Button>Procure no computador</Button>
                          <Accepted>
                            Arquivos aceitos: pdf, jpg, png, bmp
                          </Accepted>
                        </DragDrop>
                      )}
                    </Dropzone>
                  </Col>
                </Row>
              </div>
              <div className="row espaco">
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Documento de Identidade</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.rg_number,
                              modalName: 'rg_number'
                            });
                          }}
                          src={editar}
                        />
                        {data.rg_number}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Emissor/Estado</span>
                    {this.state.personal.map(data => (
                      <p>{data.rg_orgao}</p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Nacionalidade</span>
                    {this.state.nacionalidadeName.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal4"
                          onClick={() => {
                            this.setState({
                              modalValue: data.portuguese_name,
                              modalName: 'portuguese_name'
                            });
                          }}
                          src={editar}
                        />
                        {data.portuguese_name}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">CPF</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.cpf,
                              modalName: 'cpf'
                            });
                          }}
                          src={editar}
                        />
                        {data.cpf}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Titulo de Eleitor</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.titulo_number,
                              modalName: 'titulo_number'
                            });
                          }}
                          src={editar}
                        />
                        {data.titulo_number}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Naturalidade</span>
                    <select className="form-control">
                      {this.state.naturalness.map(data => (
                        <option>{data.name2}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome da Mãe</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.mothers_name,
                              modalName: 'mothers_name'
                            });
                          }}
                          src={editar}
                        />
                        {data.mothers_name}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome do Pai</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.fathers_name,
                              modalName: 'fathers_name'
                            });
                          }}
                          src={editar}
                        />
                        {data.fathers_name}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">
                      Endereço Residencial (com complementos)
                    </span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.street,
                              modalName: 'street' + data.street_number,
                              modalName:
                                'street_number' + data.street_complement,
                              modalName: 'street_complement'
                            });
                          }}
                          src={editar}
                        />
                        {data.street}&nbsp;
                        {data.street_number}&nbsp;-&nbsp;
                        {data.street_complement}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">CEP</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.zipcode,
                              modalName: 'zipcode'
                            });
                          }}
                          src={editar}
                        />
                        {data.zipcode}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">Bairro</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.neighborhood,
                              modalName: 'neighbordhood'
                            });
                          }}
                          src={editar}
                        />
                        {data.neighborhood}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">Cidade</span>
                    {this.state.cityName.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal3"
                          onClick={() => {
                            this.setState({
                              modalValue: data.name,
                              modalName: 'name'
                            });
                          }}
                          src={editar}
                        />
                        {data.name}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">Estado</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal2"
                          onClick={() => {
                            this.setState({
                              modalValue: data.state,
                              modalName: 'state'
                            });
                          }}
                          src={editar}
                        />
                        {data.state}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-6">
                  <fieldset className="border">
                    <span className="title-box">E-mail Pessoal</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.email_pessoal,
                              modalName: 'email_pessoal'
                            });
                          }}
                          src={editar}
                        />
                        {data.email_pessoal}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset className="border">
                    <span className="title-box">E-mail Institucional</span>
                    {this.state.personal.map(data => (
                      <p>
                        <img
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            this.setState({
                              modalValue: data.email_inst,
                              modalName: 'email_inst'
                            });
                          }}
                          src={editar}
                        />
                        {data.email_inst}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <h3 className="title-registration">Dados de Ingresso</h3>
              <div className="row espaco">
                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">Curso</span>
                      {this.state.courses.map(data => (
                        <p>{data.name}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>

                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">Nível do Curso</span>
                      {this.state.courses.map(data => (
                        <p>{data.nivel}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">Tipo de Curso</span>
                      {this.state.courses.map(data => (
                        <p>{data.name}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">Polo</span>
                      {this.state.courses.map(data => (
                        <p>{data.polo}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">
                        Semestre/Ano de Ingresso
                      </span>
                      {this.state.courses.map(data => (
                        <p>{data.year_entry}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">
                        Semestre/Ano de Conclusão
                      </span>
                      {this.state.courses.map(data => (
                        <p>{data.date_conclusion}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">Grau Conferido</span>
                      {this.state.courses.map(data => (
                        <p>{data.grau_conferido}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="#" className="links" onClick={this.linkClick}>
                    <fieldset className="border">
                      <span className="title-box">Data da Colação Grau</span>
                      {this.state.courses.map(data => (
                        <p>{data.date_collation}</p>
                      ))}
                    </fieldset>
                  </Link>
                </div>
              </div>
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="float-right">
                      {this.state.courses.map(data => (
                        <a
                          className="selecionar"
                          onClick={() => this.handleClick(data.id)}
                        >
                          APROVAR
                        </a>
                      ))}
                    </div>
                    <div className="float-right">
                      {this.state.courses.map(data => (
                        <a
                          className="voltar"
                          onClick={() => this.handleBack(data.id)}
                        >
                          Voltar
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div
                className="modal fade"
                id="myModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="myModalLabel">
                        Alterando Usuário
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form className="form-inline" method="post">
                        <div className="input-group">
                          <span className="input-group-addon glyphicon glyphicon-user" />
                          <input
                            name={this.state.modalName}
                            type="text"
                            className="form-control"
                            required
                            value={this.state.modalValue}
                            onChange={e =>
                              this.setState({
                                [e.target.name]: e.target.value,
                                modalValue: e.target.value
                              })
                            }
                          />
                        </div>
                        <input
                          name="alterar"
                          type="submit"
                          className="btn btn-warning"
                          value="Alterar"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal de caixa de seleção */}
              <div
                className="modal fade"
                id="myModal2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="myModalLabel">
                        Alterando Orgão Emissor
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form className="form-inline" method="post">
                        <div className="input-group">
                          <span className="input-group-addon glyphicon glyphicon-user" />
                          <select
                            className="form-control"
                            value={this.state.modalValue}
                            name={this.state.modalName}
                            onChange={e =>
                              this.setState({
                                [e.target.name]: e.target.value,
                                modalValue: e.target.value
                              })
                            }
                          >
                            {this.state.states.map(option => (
                              <option value={option.uf}>{option.uf}</option>
                            ))}
                          </select>
                        </div>
                        <input
                          name="alterar"
                          type="submit"
                          className="btn btn-warning"
                          value="Alterar"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal de caixa de seleção */}
              <div
                className="modal fade"
                id="myModal3"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="myModalLabel">
                        Alterando a Cidade
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form className="form-inline" method="post">
                        <div className="input-group">
                          <span className="input-group-addon glyphicon glyphicon-user" />
                          <select
                            className="form-control"
                            value={this.state.modalValue}
                            name={this.state.modalName}
                            onChange={e =>
                              this.setState({
                                [e.target.name]: e.target.value,
                                modalValue: e.target.value
                              })
                            }
                          >
                            {this.state.city.map(data => (
                              <option value={data.id}>{data.name}</option>
                            ))}
                          </select>
                        </div>
                        <input
                          name="alterar"
                          type="submit"
                          className="btn btn-warning"
                          value="Alterar"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal de caixa de seleção */}
              <div
                className="modal fade"
                id="myModal4"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="myModalLabel">
                        Alterando a Nacionalidade
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form className="form-inline" method="post">
                        <div className="input-group">
                          <span className="input-group-addon glyphicon glyphicon-user" />
                          <select
                            className="form-control"
                            value={this.state.modalValue}
                            name={this.state.modalName}
                            onChange={e =>
                              this.setState({
                                [e.target.name]: e.target.value,
                                modalValue: e.target.value
                              })
                            }
                          >
                            {this.state.nationality.map(data => (
                              <option value={data.id}>
                                {data.portuguese_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <input
                          name="alterar"
                          type="submit"
                          className="btn btn-warning"
                          value="Alterar"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
  linkClick = e => {
    e.preventDefault();
    e.currentTarget
      .getElementsByClassName('border')[0]
      //.classList.toggle('reprovado');
      .classList.add('reprovado');
  };
}

export default RegistrationData;
