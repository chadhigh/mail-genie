import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SurveyForm extends Component {
  render() {
    return (
      <div className="container" style={{textAlign: 'center'}}>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="surveyTitle" component="input" />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            style={{textAlign: "center"}}
          >
            Submit <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
