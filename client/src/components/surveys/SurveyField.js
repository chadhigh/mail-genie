//SurveyFIeld contains logic to render a single
//label and text input
import React from "react";

export default ({ input, label, meta: { error, touched} }) => {
  return (
    <div>
    <label style={{ paddingTop: "50px"}}>{label}</label>
      <input {...input} style={{ marginBottom: "3px", marginTop: "-72px"}} />
      <div className="red-text" style={{ marginBottom: "35px"}}>
        {touched && error}
      </div>
    </div>
  );
};
