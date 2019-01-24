import React, { Component } from 'react';
import './style.scss';
import pdf from '../../assets/imgs/pdf.jpg';
import impressora from '../../assets/imgs/impressora.png';

import audited from '../../services/AuditedApi';
import { Link } from 'react-router-dom';
class ApprovalLaws extends Component {
  handleClick = (id, name) => {
    audited.post('responsible-process', { id, name });
  };

  handleClickLink = id => {
    this.props.history.push(`/students/${id}`);
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2 className=" titulo">Aprovações de Leis</h2>
          <span className="subtitulos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            aliquam ex, vitae pretium nulla. Duis iaculis sapien ac sagittis
            congue. Sed blandit metus ac nunc fermentum, at rhoncus quam
          </span>
          <div className="row margin-top">
            <div className="col-md-6">
              Página 1 de 2<p />
            </div>
            <div className="col-md-6">
              <div className="float-right">
                <img src={impressora} /> <img src={pdf} />
              </div>
            </div>
          </div>

          <fieldset>
            <p className="margins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
              aliquam ex, vitae pretium nulla. Duis iaculis sapien ac sagittis
              congue. Sed blandit metus ac nunc fermentum, at rhoncus quam
              dapibus. Curabitur a tellus sed ligula aliquet tincidunt ac quis
              turpis. Quisque bibendum mauris lorem, et imperdiet erat semper
              vitae. Aenean varius risus vel commodo pulvinar. Etiam ut ex
              fermentum, egestas massa id, fermentum risus. Sed ullamcorper
              mattis commodo. Nulla facilisi. Nunc ultricies magna ac tincidunt
              porta. Donec lobortis, ipsum sed finibus dignissim, tellus augue
              hendrerit lectus, non tempus purus mi sed enim. Vivamus tristique
              justo urna, ac pretium mauris sodales id. Integer porttitor felis
              nec elit dictum, non vulputate risus porttitor. Integer tincidunt
              rhoncus turpis, at pretium libero eleifend a. Fusce accumsan
              ultricies lorem, eu consequat magna molestie in.
            </p>

            <p className="margins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
              aliquam ex, vitae pretium nulla. Duis iaculis sapien ac sagittis
              congue. Sed blandit metus ac nunc fermentum, at rhoncus quam
              dapibus. Curabitur a tellus sed ligula aliquet tincidunt ac quis
              turpis. Quisque bibendum mauris lorem, et imperdiet erat semper
              vitae. Aenean varius risus vel commodo pulvinar. Etiam ut ex
              fermentum, egestas massa id, fermentum risus. Sed ullamcorper
              mattis commodo. Nulla facilisi. Nunc ultricies magna ac tincidunt
              porta. Donec lobortis, ipsum sed finibus dignissim, tellus augue
              hendrerit lectus, non tempus purus mi sed enim. Vivamus tristique
              justo urna, ac pretium mauris sodales id. Integer porttitor felis
              nec elit dictum, non vulputate risus porttitor. Integer tincidunt
              rhoncus turpis, at pretium libero eleifend a. Fusce accumsan
              ultricies lorem, eu consequat magna molestie in.
            </p>

            <p className="margins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
              aliquam ex, vitae pretium nulla. Duis iaculis sapien ac sagittis
              congue. Sed blandit metus ac nunc fermentum, at rhoncus quam
              dapibus. Curabitur a tellus sed ligula aliquet tincidunt ac quis
              turpis. Quisque bibendum mauris lorem, et imperdiet erat semper
              vitae. Aenean varius risus vel commodo pulvinar. Etiam ut ex
              fermentum, egestas massa id, fermentum risus. Sed ullamcorper
              mattis commodo. Nulla facilisi. Nunc ultricies magna ac tincidunt
              porta. Donec lobortis, ipsum sed finibus dignissim, tellus augue
              hendrerit lectus, non tempus purus mi sed enim. Vivamus tristique
              justo urna, ac pretium mauris sodales id. Integer porttitor felis
              nec elit dictum, non vulputate risus porttitor. Integer tincidunt
              rhoncus turpis, at pretium libero eleifend a. Fusce accumsan
              ultricies lorem, eu consequat magna molestie in.
            </p>
          </fieldset>
          <br />

          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <Link to="/students/:ra" id="btnProximo">
                  <a className="selecionar">PRÓXIMO</a>
                </Link>
              </div>
              <input type="checkbox" id="aceitar" onClick={this.showButton} />
              <span className="opcoes">ACEITAR</span>
            </div>
          </div>

          <br />
        </div>
      </div>
    );
  }
  showButton() {
    let ativo = document.getElementById('aceitar').checked;

    if (ativo) {
      document.getElementById('btnProximo').style.display = 'block';
    } else {
      document.getElementById('btnProximo').style.display = 'none';
    }
  }
}

export default ApprovalLaws;
