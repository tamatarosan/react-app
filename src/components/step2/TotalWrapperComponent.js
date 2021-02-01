
import React, { Component } from 'react';
import TopComponent from './TopComponent';
import DetailComponent from './DetailComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class TotalWrapperComponent extends Component{
	constructor(props){
		super(props);
		
		const data = [
			{id : 0, title : 'タイトル0', detail : '詳細0'},
			{id : 1, title : 'タイトル1', detail : '詳細1'},
			{id : 2, title : 'タイトル2', detail : '詳細2'},
			{id : 3, title : 'タイトル3', detail : '詳細3'},
			{id : 4, title : 'タイトル4', detail : '詳細4'}
		];
		this.state = {data : data};
	}
	update(data){
		this.setState((prevState) => {
			prevState.data[prevState.data.findIndex((element) => element.id == data.id)] = data;
			return {data : prevState.data};
		});
	}
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' render={() => <TopComponent data={this.state.data} />} />
					<Route path='/detail/:id' render={() => <DetailComponent data={this.state.data} onUpdate={this.update.bind(this)} />} />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default TotalWrapperComponent;