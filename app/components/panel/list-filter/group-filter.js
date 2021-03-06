import React from 'react';

export default class GroupFilter extends React.Component { 
  constructor() {
    super();
  }

  onChange(e) {
    var text = e.target.value.toLowerCase();
    this.props.setFilter((group) => group.name.toLowerCase().indexOf(text) > -1);
  }

  render() {
    return (
      <input id="group-search" placeholder="Search for a group..." onChange={this.onChange.bind(this)}/>
    );
  }
}