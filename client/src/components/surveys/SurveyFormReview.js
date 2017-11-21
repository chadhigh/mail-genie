// SurveyFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
const reviewFields = _.map(formFields, ({ name, label }) => {
  return (
    <div key={name}>
     <label>{label}</label>
     <div>
       {formValues[name]}
     </div>
    </div>
  );
});

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="btn-floating btn-large left red" onClick={onCancel}>
        <i className="material-icons left">arrow_back</i>
      </button>
      <button className="btn-floating btn-large right green" onClick={() => submitSurvey(formValues, history)}>
        <i className="material-icons right">done</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
