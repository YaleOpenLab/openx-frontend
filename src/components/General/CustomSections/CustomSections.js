import React from "react";
import "./CustomSections.scss";
import CustomSection from './CustomSection/CustomSection';

const CustomSections = props => (
  <div className="row CustomSections">
    {props.sections && props.sections.map(section => (
      <CustomSection section={section} />
    ))}
  </div>
);

export default CustomSections;
