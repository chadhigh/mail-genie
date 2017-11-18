import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  { label: "Survey Title", name: "title", noValueError: "*must provide a survey title*" },
  { label: "Subject Line", name: "subject", noValueError: "*must provide a subject*" },
  { label: "Email Body", name: "body", noValueError: "*must provide a body*" },
  { label: "Recipient List", name: "emails", noValueError: "*must provide emails*" }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div
        className="container"
        style={{ textAlign: "center", paddingTop: "50px" }}
      >
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="btn-floating btn-large left red">
            <i className="material-icons left">close</i>
          </Link>
          <button
            className="btn-floating btn-large right green"
            type="submit"
            name="action"
          ><i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");
  
  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });


  return errors;
}
export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
