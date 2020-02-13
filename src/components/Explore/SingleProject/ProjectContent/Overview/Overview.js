import React from 'react';
import './Overview.scss';
import ScrollableAnchor from 'react-scrollable-anchor';
import SummaryCards from '../../../../General/SummaryCards/SummaryCards';
import ExecutiveSummary from './constants';
import CustomSections from '../../../../General/CustomSections/CustomSections';
import Title from '../../../../General/Title/Title';
import Image from "../../../../../helpers/enums/images";

const Overview = ({data}) => {
	let cards = null;

	if (data["executive summary"]) {
		cards = Object.keys(data["executive summary"]).map(card => {
			return (
				<div className="col-sm-6 col-lg-3" key={card.key}>
					<SummaryCards title={card} items={data["executive summary"][card]}
					icon={"ICON"} iconSize="29px" theme="-main-cards"/>
				</div>
			);
		})
	}


	return (
		<ScrollableAnchor id={'overview'}>
			<section className="Overview">
				<Title title="Project Overview"/>
				<div className="container">
					<div className="row">
						<div className="col-12 title-yellow">
							Executive Summary
						</div>
						<div className="col-12 summary-grid">
							<div className="container">
								<div className="row">{cards}</div>
							</div>
						</div>
					</div>
				</div>

				{data.heroImage ? (
					<div className="full-image">
						<Image imageKey={data.heroImage}/>
					</div>
				) : (
					<div className="overview-separator"/>
				)}
				<div className="opportunity">
					<div className="container">
						<CustomSections sections={data.opportunity}/>
					</div>
				</div>

				<div className="context margin-top">
					<div className="container">
						{data.context && (
							<CustomSections sections={data.context}/>
						)}
					</div>
				</div>
			</section>
		</ScrollableAnchor>
	);
};

export default Overview;
