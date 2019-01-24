import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';
import Retaineds from '../../../src/services/RetainedApi';
import Pagination from 'react-js-pagination';

class Retained extends Component {
  state = {
    courses: [],
    search: '',
    activePage: 1,
    countPerPage: 5,
    tab: 2
  };

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
    //console.log(this.state.search)
  };

  async componentDidMount() {
    const res = await Retaineds.get('v_auditados');
    this.setState({ courses: res.data });
  }

  handleClick = id => {
    this.props.history.push(`/generateticket/${id}`);
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
                  <th scope="col">Curso</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col">Motivo da Retenção</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.courses
                  .filter(item => item.proc_status == tab)
                  // .filter(item => RegExp(search, 'i').test(item.student_name))
                  .filter(
                    (data, index) =>
                      index >=
                        this.state.countPerPage * (this.state.activePage - 1) &&
                      index < this.state.countPerPage * this.state.activePage
                  )
                  .map(data => (
                    <tr onClick={() => this.handleClick(data.ra_student)}>
                      <td>{data.student_name}</td>
                      <td>{data.ra_student}</td>
                      <td>{data.course_name}</td>
                      <td>{data.year_entry}</td>
                      <td>{data.year_conclusion}</td>
                      <td>{data.reason_retention}</td>
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
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                {/*<a className="selecionar" href="tg">
                ENVIAR E-MAIL
</a>*/}
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Retained;
