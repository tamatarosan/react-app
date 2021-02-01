import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailMainComponent extends Component{
	render(){
		return (
			<main className="detail-main-container">
				<div>{this.props.id}</div>
				<Link to="/" >戻る</Link>
			</main>
		);
	}
}
export default DetailMainComponent;