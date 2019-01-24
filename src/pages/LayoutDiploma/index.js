import React, { Component } from 'react';

import './style.scss';

const months = [
	'janeiro',
	'fevereiro',
	'março',
	'abril',
	'maio',
	'junho',
	'julho',
	'agosto',
	'setembro',
	'outubro',
	'novembro',
	'dezembro'
];
class LayoutDiploma extends Component {
	render() {
		const { diploma, signatures, employees } = this.props;
		return (
			<div id="diploma">
				<div id="front">
					<div className="content">
						<p className="paragraph">
							A presidente da <span>Universidade Virtual do Estado de São Paulo</span>,
						</p>
						<p className="paragraph -marginBottom">no uso de suas atribuições, confere a</p>
						<h1 id="name">{diploma.name}</h1>
						<p className="paragraph">de nacionalidade {diploma.nacionalidade},</p>
						<p className="paragraph">portador da cédula de identidade RG {diploma.RG} SP,</p>
						<p className="paragraph">
							nascido em {diploma.birth_date ? diploma.birth_date.split('/')[0] : ''} de{' '}
							{diploma.birth_date ? months[Number(diploma.birth_date.split('/')[1]) - 1] : ''} de{' '}
							{diploma.birth_date ? diploma.birth_date.split('/')[2] : ''}
						</p>
						<p className="paragraph">e natural do Estado de São Paulo,</p>
						<p className="paragraph">o diploma do</p>
						<h2 id="course">{diploma.course_name}</h2>
						<p className="paragraph">
							concluído em{' '}
							{diploma.date_conclusion ? (
								months[Number(diploma.date_conclusion.split('/')[1]) - 1]
							) : (
								''
							)}{' '}
							de {diploma.date_conclusion ? diploma.date_conclusion.split('/')[2] : ''}
						</p>
						<p className="paragraph -marginBottom">
							para que possa gozar dos direitos e prerrogativas legais.
						</p>
						<p className="paragraph">
							São Paulo, {new Date().getDate()} de {months[new Date().getMonth()]} de{' '}
							{new Date().getFullYear()}.
						</p>
					</div>
					<div className="signatures">
						<p className="signature">
							Prof.ª Dr.ª Cleide Marly Nébias <span>Diretora Acadêmica</span>
						</p>
						<p className="signature">
							Fernanda Gouveia <span>Presidente</span>
						</p>
						<p className="signature">
							<span>Diplomado(a)</span>{' '}
						</p>
					</div>
				</div>
				<div id="back">
					<div className="recognized">
						<p className="paragraph">Reconhecido pela Portaria CEE/GP-491</p>
						<p className="paragraph">de 27/09/2017, D.O.E de 27/09/2017</p>
					</div>
					<div className="area">
						<p className="university">Universidade Virtual do Estado de São Paulo - UNIVESP</p>
						<p className="paragraph -marginBottom">Secretaria de Registro Acadêmico - SRA</p>
						<p className="paragraph">Diploma registrado sob n° 13072501202200001</p>
						<p className="paragraph">rótulo n° GR.L.LB.000001.2018.1ªVia.00001</p>
						<p className="paragraph">processo n° 2017.2.00001.02</p>
						<p className="paragraph -marginBottom">nos termos do artigo 48 da lei 9.394, de 20/12/1996.</p>
						<p className="paragraph">São Paulo, 03 de janeiro de 2019.</p>
						<div className="signatures">
							<p className="signature">
								<span>{employees[0]}</span> {signatures[0]}
							</p>
							<p className="paragraph">de acordo,</p>
							<p className="signature">
								<span>{employees[1]}</span> {signatures[1]}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LayoutDiploma;
