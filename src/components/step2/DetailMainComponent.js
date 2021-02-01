import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class DetailMainComponent extends Component{
	update(id, event){
		event.preventDefault();
		this.props.onUpdate({id : id, title : this.title.value, detail : this.detail.value});
		this.props.history.push('/');
	}
	render(){
		const data = this.props.data.filter((element) => element.id == this.props.match.params.id)[0];
		
		if(data){
			return (
				<main className="detail-main-container">
					<dl className="detail-main-list">
						<dt>タイトル</dt>
						<dd><input type="text" defaultValue={data.title} ref={title => {this.title = title}} /></dd>
						<dt>詳細</dt>
						<dd><textarea defaultValue={data.detail} ref={detail => {this.detail = detail}}></textarea></dd>
					</dl>
					<ul className="detail-command-container">
						<li><Link to="/" >戻る</Link></li>
						<li><a href="#" onClick={this.update.bind(this, data.id)}>変更</a></li>
					</ul>
				</main>
			);
		}else{
			return (
				<main className="detail-main-container">
					<ul className="detail-command-container">
						<li><Link to="/" >戻る</Link></li>
					</ul>
				</main>
			);
		}
	}
}
export default withRouter(DetailMainComponent);