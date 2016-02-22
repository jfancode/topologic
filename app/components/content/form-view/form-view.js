import React from 'react';
import NewTaskForm from './forms/new-task-form';
import NewProjectForm from './forms/new-project-form';
import NewGroupForm from './forms/new-group-form';

export default class FormView extends React.Component {
  constructor() {
    super();
  }

  render() {

    var forms = {
      'task': (<NewTaskForm saveObject={this.props.saveObject} changeForm ={this.props.changeForm} setForm={this.props.setForm} />),
      'project': (<NewProjectForm saveObject={this.props.saveObject} changeForm = {this.props.changeForm} setForm={this.props.setForm} />),
      'group': (<NewGroupForm saveObject={this.props.saveObject} setForm={this.props.setForm} members = {this.props.members} />)
    };

    return (
      <div id={'form-'+ this.props.type}>
        {forms[this.props.type]}
      </div>
    );
  }
}
