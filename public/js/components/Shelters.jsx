var React = require('react');
var NavBarDefault = require('./NavBarDefault.jsx');
var ShelterStore = require('../stores/ShelterStore.jsx');
var ShowList = require('./ShowList.jsx');

var Shelters = React.createClass({
	render: function() {
		return (
			<div>
				<div className="container-fluid header-default">
					<NavBarDefault />
				</div>
				<div className="container">
					<h1> Local Shelters </h1>
					<section className="three-shelters">
						<div className="container sub-container">
							<ShowList {...this.props} />
						</div>
					</section>
				</div>
			</div>
		)
	}
});

module.exports = Shelters;