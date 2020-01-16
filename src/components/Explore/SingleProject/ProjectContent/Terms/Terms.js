import React, {useState} from 'react';
import './Terms.scss';
import IcKeyboard from '../../../../../assets/images/ic_keyboard.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import TermsTable from './TermsTable/TermsTable';
import Title from '../../../../General/Title/Title';

const Terms = ({data}) => {
	const [collapsed, setCollapsed] = useState(true);

	const handleCollapse = () => {
		setCollapsed(!collapsed)
	};

	return (
		<ScrollableAnchor id={'terms'}>
			<section className="Terms">
				<Title className="-no-border" title="Terms"/>
				<div className="container">
					<div className="row">
						<div className="col-12 text-description">
							<div className="sub-title">
								Purpose
							</div>
							<div className="sub-desc">
								{data.terms.purpose}
							</div>
						</div>
						<div className={(collapsed ? '' : '-minimized ') + "col-12 project-table no-padding"}>
							<div className="col-12">
								<div className="table-wrapper">
									<TermsTable
										data={data.terms.table}
										handleCollapse={handleCollapse}
									/>
									<button className={(collapsed ? '' : '-closed ') + "collapse-button"}
													onClick={handleCollapse}>
										<img src={IcKeyboard} alt="keyboard"/>
									</button>
								</div>
							</div>
						</div>
						<div className="col-12 security-note">
							<div className="security-title">security note</div>
							<div className="security-text">
								{data.terms.securityNote}
								<a href="/"> Learn more ></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</ScrollableAnchor>
	)
};

export default Terms;
