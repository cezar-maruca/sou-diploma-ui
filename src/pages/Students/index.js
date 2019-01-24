import React, { Component } from 'react';
import './style.scss';
import Pagination from 'react-js-pagination';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';

class Students extends Component {
  state = {
    courses: [],
    search: '',
    activePage: 1,
    countPerPage: 5,
    tab: 0
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

  handleClick = academic_register => {
    this.props.history.push(`/process/${academic_register}`);
  };

  render() {
    const { tab } = this.state;
    return (
      <div>
        <div className="container">
          <h2 className="title">Nome do Curso - 1º VIA</h2>
          <fieldset>
            <Menu handleClick={val => this.setState({ tab: val })} tab={tab} />
          </fieldset>
          <fieldset>
            <div className="row">
              <div className="col-md-6">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultChecked2"
                  />
                  {/* <label class="custom-control-label" for="defaultChecked2">
                  Selecionar Todos
  </label>*/}
                </div>
              </div>
              {/*<div className="col-md-6">
              <div className="right" /> <Dowloand />
</div>*/}
            </div>
            <table className="table table-hover borda-tabela-titulos table2">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">RA</th>
                  <th scope="col">Polo</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col">
                    Numero do <br />
                    Processo
                  </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.courses
                  .filter(item => item.proc_status == tab)
                  .filter(data => RegExp(this.state.search).test(data.name))
                  .filter(
                    (data, index) =>
                      index >=
                        this.state.countPerPage * (this.state.activePage - 1) &&
                      index < this.state.countPerPage * this.state.activePage
                  )
                  .map(data => (
                    <tr>
                      <td onClick={() => this.handleClick(data.academic_register)}>
                        {data.name}
                      </td>
                      <td onClick={() => this.handleClick(data.academic_register)}>
                        {data.academic_register}
                      </td>
                      <td onClick={() => this.handleClick(data.academic_register)}>
                        {data.polo}
                      </td>
                      <td onClick={() => this.handleClick(data.academic_register)}>
                        {data.year_entry}
                      </td>
                      <td onClick={() => this.handleClick(data.academic_register)}>
                        {data.year_conclusion}
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <Submit />
                      </td>
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
                  linkClass="page-link link-cor"
                />
              </div>
            </div>
          </fieldset>
          <br />
          {/* <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar" href="tg">
                  VISUALIZAR
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

export default Students;