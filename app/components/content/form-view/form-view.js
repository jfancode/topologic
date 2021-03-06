import React from 'react';
import TaskForm from './forms/task-form';
import ProjectForm from './forms/project-form';
import GroupForm from './forms/group-form';

export default class FormView extends React.Component {
  constructor() {
    super();
  }


  render() {

    var forms = {
      'task': (<TaskForm items={this.props.items} form={this.props.form} saveObject={this.props.saveObject} deleteObject={this.props.deleteObject} changeForm={this.props.changeForm} setForm={this.props.setForm} />),
      'project': (<ProjectForm items={this.props.items} form={this.props.form} saveObject={this.props.saveObject} deleteObject={this.props.deleteObject} changeForm={this.props.changeForm} setForm={this.props.setForm} />),
      'group': (<GroupForm form={this.props.form} saveObject={this.props.saveObject} deleteObject={this.props.deleteObject} setForm={this.props.setForm} />)
    };

    return (
      <div id={'form-'+ this.props.type}>
        {forms[this.props.type]}
      </div>
    );
  }
}
