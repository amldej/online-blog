import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', width: '600px', height: '450px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;