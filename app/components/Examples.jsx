var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>Examples Component</h3>
// 		)
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h1 className="page-title text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
			<li>
				<Link to="/?location=london">London, UK</Link>
			</li>
			<li>
				<Link to="/?location=miami">Miami, FL, USA</Link>
			</li>
			</ol>
		</div>
	)
};

module.exports = Examples;