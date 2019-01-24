import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jumbotron from '../Jumbotron';

// import Audit from '../../pages/Audit';
import Students from '../../pages/Students';
import Process from '../../pages/Process';
import Enabled from '../../pages/Enabled';
import Print from '../../pages/Print';
import RegistrationData from '../../pages/RegistrationData';
import StudentDiploma from '../../pages/StudentDiploma';
import SecondWay from '../../pages/SecondWay';
import Retained from '../../pages/Retained';
import GenerateTicket from '../../pages/GenerateTicket';
import Protocol from '../../pages/Protocol';
import ResearchStudent from '../../pages/ResearchStudent';
import Diploma from '../../pages/Diploma';
import Alert from '../../pages/Alert';

import Main from './styles';
import Avaliations from '../../assets/imgs/avaliacoes.svg';
import ApprovalLaws from '../../pages/ApprovalLaws';

const links = [
  {
    name: 'Auditoria',
    active: false,
    url: '/'
  },
  {
    name: 'Colação de Grau',
    active: false,
    url: '/colacao'
  },
  {
    name: 'Diplomas',
    active: true,
    url: '/diplomas'
  },
  {
    name: 'Estágios',
    active: false,
    url: '/estagio'
  },
  {
    name: 'Ingresso',
    active: false,
    url: '/admission'
  },
  {
    name: 'Vida Acadêmica',
    active: false,
    url: '/academic'
  },
  {
    name: 'Prontuário',
    active: false,
    url: '/report'
  }
];

const Content = () => (
  <Fragment>
    <Jumbotron title="Apoio ao aluno" icon={Avaliations} links={links} />
    <Main>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={({ match: { url } }) => (
              <Fragment>
                <Route exact path={`${url}`} component={ResearchStudent} />
                <Route path="/Moderator/students/:academic_register" component={Students} />
                <Route path="/students/:academic_register" component={Students} />
                <Route path="/process/:academic_register" component={Process} />
<<<<<<< HEAD
                <Route path="/enabled/:academic_register" component={Enabled} />
=======
                <Route path="/enabled/:id" component={Enabled} />
>>>>>>> upstream/devel
                <Route path="/registration/:id" component={RegistrationData} />
                <Route path="/diploma/:ra" component={Diploma} />
                <Route path="/print/:id" component={Print} />
                <Route path="/secondway" component={SecondWay} />
                {/*<Route path="/studentdiploma/:id" component={StudentDiploma} />*/}
                <Route path="/retained/:id" component={Retained} />
                <Route path="/generateticket/:id" component={GenerateTicket} />
                <Route path="/protocol" component={Protocol} />
                <Route path="/alert" component={Alert} />
                <Route path="/approvallaws/:id" component={ApprovalLaws} />
                {/* <Route path="/alert/:id" component={Alert} /> */}
                {/* class dsauhdhusahu extends Component {} */}
                {/* this.props.match.params.id */}
                {/* (props) => {} */}
                {/* props.match.params.id */}
                {/* <Link to={`/students/${data.id}`}></Link> */}
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Main>
  </Fragment>
);
export default Content;
