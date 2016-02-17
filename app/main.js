import React from 'react';
import ReactDOM from 'react-dom';
import SidebarIcons from './components/sidebar/sidebar'

// import all of our javascript files

// components here. 

class Main extends React.Component { 
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<SidebarIcons/>

			</div>
		); //need semicolon
	}
} 



//do not change - changes the index.html file
ReactDOM.render(
  <Main/>,
  document.getElementById('example')
);