import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';
import BtnDiploma from '../../components/BtnDiploma';
import Generate from '../../../src/services/generateticketApi';
import Pagination from 'react-js-pagination';

class GenerateTicket extends Component {
  state = {
    courses: [],
    activePage: 1,
    countPerPage: 5
  };

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  async componentDidMount() {
    const res = await Generate.get('v_diplomado');
    this.setState({ courses: res.data });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
    //console.log(this.state.search)
  };

  handleClick = id => {
    this.props.history.push(`/protocol/${id}`);
  };
  x;
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="title">Nome do Curso - 1º VIA</h2>
          <fieldset>
            <Menu />
          </fieldset>
          <fieldset>
            <div class="row">
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
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th>Status</th>
                  <th />
                  <th scope="col" />
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
                  .map(data => (
                    <tr
                      onClick={() => this.handleClick(data.academic_register)}
                    >
                      <td>{data.student_name}</td>
                      <td>{data.academic_register}</td>
                      <td>{data.year_entry}</td>
                      <td>{data.year_conclusion}</td>
                      <td>{data.status}</td>
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
                  GERAR DIPLOMA
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

export default GenerateTicket;
