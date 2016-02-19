import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar/sidebar';
import Panel from './components/panel/panel';
import Content from './components/content/content';

class Main extends React.Component { 
  constructor() {
    super();
    this.state = { 
      active: 'tasks' 
    };
  }

  setActive(icon) {
    this.setState({active: icon});
  }

  render() {
    return (
      <div id="main">
        <Sidebar setActive={this.setActive.bind(this)} active={this.state.active} />
        <Panel active={this.state.active} />
        <Content active={this.state.active} />
      </div>
    );
  }
} 

//do not change - changes the index.html file
ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
