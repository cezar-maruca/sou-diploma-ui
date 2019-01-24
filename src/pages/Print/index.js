import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import { Link } from 'react-router-dom';

import Diploma from '../LayoutDiploma';
import { Formik, Form, ErrorMessage } from 'formik';

import './style.scss'
class Print extends Component {
  state = {
    signatures: [],
    employees: []
  };
  /* saveOnLocalStorage = e => {
    if (
      document.getElementById('optSignature').value == 0 ||
      document.getElementById('optSignature2').value == 0 ||
      document.getElementById('optEmployee').value == 0 ||
      document.getElementById('optEmployee2').value == 0
    ) {
      e.preventDefault();
      alert('As assinaturas e cargos são obrigatórios!');
      return false;
    } else {
      console.log(document.getElementById('optSignature').value);
      console.log(document.getElementById('optSignature2').value);
      console.log(document.getElementById('optEmployee').value);
      console.log(document.getElementById('optEmployee2').value);

      if (
        document.getElementById('optSignature').value ==
          document.getElementById('optSignature2').value ||
        document.getElementById('optEmployee').value ==
          document.getElementById('optEmployee2').value
      ) {
        e.preventDefault();
        alert('As assinaturas e cargos não podem serem iguais.');
        return false;
      }

      e.preventDefault();

      if (
        document.getElementById('optSignature') !=
        document.getElementById('optSignature2')
      ) {
        localStorage.setItem('signatures', this.state.signatures);
      } else {
        localStorage.setItem('signatures', '');
      }
    }*/

  /* if (document.getElementById('optSignature') == '') {
      alert('Por favor, selecione uma opção valida');
      document.getElementById('optSignature').focus();
      return false;
    }*/

  /* if (
      document.getElementById('optEmployee') !=
      document.getElementById('optEmployee2')
    ) {
      localStorage.setItem('employees', this.state.employees);
    } else {
      localStorage.setItem('employees', '');
    }
  };*/

  handleClick = id => {
    this.props.history.push(`/studentdiploma/${id}`);
  };

  renderContent = () => {
    // eslint-disable-line arrow-body-style
    return this.componentRef;
  };

  renderTrigger = () => {
    // eslint-disable-line arrow-body-style
    return (
      <button
        className="selecionar"
        onClick={this.saveOnLocalStorage}
        type="button"
      >
        IMPRIMIR 1º VIA
      </button>
    );
  };

  setRef = ref => {
    this.componentRef = ref;
  };

  render() {
    const { signatures, employees } = this.state;
    return (
      <div>
        <form>
          <div className="container">
            <fieldset className="fieldset">
              <h5>
                Você esta imprimindo a 1 via do diploma <br />
                do aluno(a) (NOME DO ALUNO)
                <br />
                do Curso de Graduação de Engenharia de Produção
              </h5>

              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="exampleInput1">
                      Número de série da primeira folha*
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInput1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      required
                      oninvalid="this.setCustomValidity('Selecione uma opção valida')"
                      name="numberPapper"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="exampleInput2">Quantidade de impressos</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInput2"
                      aria-describedby="emailHelp"
                      value="1"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optSignature2">Assinaturas*</label>
                    <select
                      class="form-control"
                      id="optSignature2"
                      name="optSignature2"
                      required
                      onChange={e => {
                        let { signatures } = this.state;
                        signatures[0] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ signatures });
                      }}
                    >
                      <option value="0">Selecione um Cargo</option>
                      <option value="1">
                        Gerente de Registros Acadêmicos e Apoio Administrativo
                      </option>
                      <option value="2">
                        Coordenado(a) de Registros Acadêmicos e Apoio
                        Administrativo
                      </option>
                      <option value="3">
                        Especialista em Sistemas Educacional
                      </option>
                      <option value="4">Analista de Gestão Operacional</option>
                      <option value="5">Analista de Gestão Educacional</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optEmployee">Funcionário*</label>
                    <select
                      class="form-control"
                      id="optEmployee"
                      name="optEmployee"
                      required
                      onChange={e => {
                        let { employees } = this.state;
                        employees[0] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ employees });
                      }}
                    >
                      <option value="0">Selecione um Analista</option>
                      <option value="1">Genivaldo Linhares Brandão</option>
                      <option value="2">Andréa Gonçalves Mariano Souza</option>
                      <option value="3">Leila Costa Somenk</option>
                      <option value="4">Haroldo Avellar</option>
                      <option value="5">Caio Fernandes</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optSignature">Assinaturas*</label>
                    <select
                      class="form-control"
                      id="optSignature"
                      name="optSignature"
                      required
                      oninvalid="this.setCustomValidity(\'Selecione uma opção valida\')"
                      onChange={e => {
                        let { signatures } = this.state;
                        signatures[1] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ signatures });
                      }}
                    >
                      <option value="0">Selecione um Cargo</option>
                      <option value="1">
                        Gerente de Registros Acadêmicos e Apoio Administrativo
                      </option>
                      <option value="2">
                        Coordenado(a) de Registros Acadêmicos e Apoio
                        Administrativo
                      </option>
                      <option value="3">
                        Especialista em Sistemas Educacional
                      </option>
                      <option value="4">Analista de Gestão Operacional</option>
                      <option value="5">Analista de Gestão Educacional</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optEmployee2">Funcionário*</label>
                    <select
                      class="form-control"
                      id="optEmployee2"
                      required
                      oninvalid="this.setCustomValidity(\'Selecione uma opção valida\')"
                      name="optEmployee2"
                      onChange={e => {
                        let { employees } = this.state;
                        employees[1] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ employees });
                      }}
                    >
                      <option value="0">Selecione um Analista</option>
                      <option value="1">Genivaldo Linhares Brandão</option>
                      <option value="2">Andréa Gonçalves Mariano Souza</option>
                      <option value="3">Leila Costa Somenk</option>
                      <option value="4">Haroldo Avellar</option>
                      <option value="5">Caio Fernandes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optSignature">Assinaturas*</label>
                    <select
                      class="form-control"
                      id="optSignature"
                      name="optSignature"
                      required
                      oninvalid="this.setCustomValidity(\'Selecione uma opção valida\')"
                      onChange={e => {
                        let { signatures } = this.state;
                        signatures[1] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ signatures });
                      }}
                    >
                      <option value="0">Selecione um Cargo</option>
                      <option value="1">
                        Gerente de Registros Acadêmicos e Apoio Administrativo
                      </option>
                      <option value="2">
                        Coordenado(a) de Registros Acadêmicos e Apoio
                        Administrativo
                      </option>
                      <option value="3">
                        Especialista em Sistemas Educacional
                      </option>
                      <option value="4">Analista de Gestão Operacional</option>
                      <option value="5">Analista de Gestão Educacional</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optEmployee2">Funcionário*</label>
                    <select
                      class="form-control"
                      id="optEmployee2"
                      required
                      oninvalid="this.setCustomValidity(\'Selecione uma opção valida\')"
                      name="optEmployee2"
                      onChange={e => {
                        let { employees } = this.state;
                        employees[1] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ employees });
                      }}
                    >
                      <option value="0">Selecione um Analista</option>
                      <option value="1">Genivaldo Linhares Brandão</option>
                      <option value="2">Andréa Gonçalves Mariano Souza</option>
                      <option value="3">Leila Costa Somenk</option>
                      <option value="4">Haroldo Avellar</option>
                      <option value="5">Caio Fernandes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optSignature">Assinaturas*</label>
                    <select
                      class="form-control"
                      id="optSignature"
                      name="optSignature"
                      required
                      oninvalid="this.setCustomValidity(\'Selecione uma opção valida\')"
                      onChange={e => {
                        let { signatures } = this.state;
                        signatures[1] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ signatures });
                      }}
                    >
                      <option value="0">Selecione um Cargo</option>
                      <option value="1">
                        Gerente de Registros Acadêmicos e Apoio Administrativo
                      </option>
                      <option value="2">
                        Coordenado(a) de Registros Acadêmicos e Apoio
                        Administrativo
                      </option>
                      <option value="3">
                        Especialista em Sistemas Educacional
                      </option>
                      <option value="4">Analista de Gestão Operacional</option>
                      <option value="5">Analista de Gestão Educacional</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="optEmployee2">Funcionário*</label>
                    <select
                      class="form-control"
                      id="optEmployee2"
                      required
                      oninvalid="this.setCustomValidity(\'Selecione uma opção valida\')"
                      name="optEmployee2"
                      onChange={e => {
                        let { employees } = this.state;
                        employees[1] =
                          e.target.options[e.target.selectedIndex].text;
                        this.setState({ employees });
                      }}
                    >
                      <option value="0">Selecione um Analista</option>
                      <option value="1">Genivaldo Linhares Brandão</option>
                      <option value="2">Andréa Gonçalves Mariano Souza</option>
                      <option value="3">Leila Costa Somenk</option>
                      <option value="4">Haroldo Avellar</option>
                      <option value="5">Caio Fernandes</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="float-right">
                  <ReactToPrint
                    trigger={this.renderTrigger}
                    content={this.renderContent}
                  />

                  {/*<a className="selecionar" onClick={this.saveOnLocalStorage}>
                  IMPRIMIR 1º VIA
                  </a>*/}
                </div>
              </div>
            </div>
            <br />
          </div>
        </form>
        />
        <Diploma
          diploma={JSON.parse(localStorage.getItem('diploma'))}
          employees={employees}
          signatures={signatures}
          ref={this.setRef}
        />
      </div>
    );
  }
}

export default Print;
