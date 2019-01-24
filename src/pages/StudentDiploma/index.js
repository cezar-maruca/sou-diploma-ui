import React, { Component } from 'react';
import './style.scss';

class StudentDiploma extends Component {
  state = {
    signatures: [],
    employees: []
  };
  Validate = e => {
    if (document.getElementById('numberPaper').value == 0) {
      e.preventDefault();
      alert('O número de série e obrigatório!');
      return false;
    }

    if (document.getElementById('numberPrint').value == 0) {
      e.preventDefault();
      alert('Quantidade de impressos obrigatório!');
      return false;
    }
  };

  handleClick = id => {
    this.props.history.push(`/retained/${id}`);
  };

  render() {
    return (
      <div>
        {/*<div className="container">
          <fieldset className="fieldset">
            <h5>
              Você esta imprimindo a 1º Via do Diploma para Augusto Cavalcante
            </h5>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="numberPaper">
                    Número de série da primeira folha
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="numberPaper"
                    aria-describedby="emailHelp"
                    placeholder=""
                    name="numberPaper"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="numberPrint">Quantidade de impressos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numberPrint"
                    aria-describedby="emailHelp"
                    name="numberPrint"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Assinaturas</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputEmail1">Funcionário</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Assinaturas</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputEmail1">Funcionário</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a
                  className="selecionar"
                  onClick={() => this.handleClick(this.props.match.params.id)}
                >
                  IMPRIMIR 1º VIA
                </a>
              </div>
            </div>
          </div>
          <br />
    </div>*/}
      </div>
    );
  }
}

export default StudentDiploma;
