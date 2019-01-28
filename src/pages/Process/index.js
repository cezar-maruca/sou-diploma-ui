import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Search from '../../components/Search';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';

class Process extends Component {
  state = {
    courses: [],
    search: '',
    activePage: 1,
    countPerPage: 5
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  async componentDidMount() {
    const res = await Open.get('v_em_aberto');
    this.setState({ courses: res.data });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  /* handleClick = academic_register => {
    this.props.history.push(`/registration/${academic_register}`);
  };*/

  handleClick = id => {
    this.props.history.push(`/registration/${id}`);
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="title">Nome do Curso - 1º VIA </h2>

          <br />

          <fieldset>
            <nav id="menu">
              <ul>
                <li>
                  {/*<a className="link1 active" href="#">
                    Processos em aberto
    </a>*/}
                  <Menu />
                </li>
                {/*<li>
                <a>Alunos habilitados</a>
              </li>*/}
              </ul>
            </nav>
          </fieldset>
          <fieldset>
            <div class="row top">
              <div className="col-md-4">
                <Search />
              </div>
              {/*<div className="col-md-7">
              <div className="right" /> <Dowloand />
  </div>*/}
            </div>
            <table className="table table-hover borda-tabela-titulos table2">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">RA</th>
                  <th scope="col">Curso</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col">Atribuido em</th>
                  <th scope="col">
                    Numero do <br />
                    Processo
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.courses
                  .filter(data => RegExp(this.state.search).test(data.name))
                  .filter(
                    (data, index) =>
                      index >=
                        this.state.countPerPage * (this.state.activePage - 1) &&
                      index < this.state.countPerPage * this.state.activePage
                  )
                  /*.map(data => (
                    <tr
                      onClick={() => this.handleClick(data.academic_register)}
                    >
                      <td>{data.name}</td>
                      <td>{data.academic_register}</td>
                      <td>{data.polo}</td>
                      <td>{data.year_entry}</td>
                      <td>{data.year_conclusion}</td>
                      <td>xxxxxxx</td>
                      <td />
                    </tr>
                  ))}*/
                  .map(data => (
                    <tr onClick={() => this.handleClick(data.student_id)}>
                      <td>{data.name}</td>
                      <td>{data.academic_register}</td>
                      <td>{data.polo}</td>
                      <td>{data.year_entry}</td>
                      <td>{data.year_conclusion}</td>
                      <td>xxxxxxx</td>
                      <td />
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
          <br />
          {/* <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar" href="tg">
                  SELECIONAR
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <br />
      </div>
    );
  }
}

export default Process;
