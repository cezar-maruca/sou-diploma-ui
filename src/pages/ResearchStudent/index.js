import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import api from '../../../src/services/diplomaApi';
import './style.scss';

class Audit extends Component {
  state = {
    search: '',
    courses: [],
    academicRegister: [],
    activePage: 1,
    countPerPage: 5
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  async componentDidMount() {
    const res = await api.get('v_geral');
    this.setState({ courses: res.data });

    const resAcademicRegister = await api.get('v_diploma');
    this.setState({ academicRegister: resAcademicRegister.data });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleClick = academic_register => {
    this.props.history.push(`/students/${academic_register}`);
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <div className="col-md-12">
          <div className="col-md-9 center">
            <fieldset className="border">
              <div className="text-center">
                <h5>
                  Selecione o curso de GRADUAÇÃO E ANO DE INGRESSO que deseja
                  acessar:
                </h5>
              </div>
              <div className="row">
                <div className="col-md-5 center">
                  <div className="text-center">
                    <form method="post">
                      <div className="submit-line">
                        <input
                          placeholder="Pesquise curso ou ano de ingresso"
                          type="text"
                          onChange={this.handleSearch}
                        />
                        <button className="submit-lente" type="submit">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <table className="table table-hover borda-tabela-titulos">
                <thead>
                  <tr>
                    <th scope="col">Nome do Curso</th>
                    <th scope="col">
                      Semestre / <br /> Ano do Ingresso
                    </th>
                    <th scope="col">
                      Semestre / <br /> Ano de Conclusão
                    </th>
                    <th scope="col">
                      Numeros de <br />
                      Alunos Habilitados
                    </th>
                    <th scope="col">
                      Numero do <br />
                      Processo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.courses
                    .filter(item => RegExp(search, 'i').test(item.name))
                    .filter(
                      (data, index) =>
                        index >=
                          this.state.countPerPage *
                            (this.state.activePage - 1) &&
                        index < this.state.countPerPage * this.state.activePage
                    )
                    .map(data => (
                      <tr onClick={() => this.handleClick(data.id)}>
                        <td>{data.name}</td>
                        <td>{data.year_entry}</td>
                        <td>{data.ano_conclusao}</td>
                        <td>{data.TT}</td>
                        <td>{}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="float-right">
                <div className="padding">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.courses.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default Audit;
