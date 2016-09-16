import React from 'react';
import './style.scss';

export const App = React.createClass({

	render: function() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
	}
});

export default App;
