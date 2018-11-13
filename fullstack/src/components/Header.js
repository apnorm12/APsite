// Defines the Header component


// Using React in the Header - creates the element behind the scenes
// as well as in propTypes
import React from 'react';

const color = Math.random() > 0.5 ? 'purple' : 'green';

const Header = ({message}) => {
	return (
		<h2 className="Header text-center" style={{color: color}}>
			{message}
		</h2>
		);
};

Header.propTypes = {
	message : React.PropTypes.string
};


export default Header;
