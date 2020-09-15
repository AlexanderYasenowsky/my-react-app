import React from 'react';
import style from './nav.module.scss';

export default class Nav extends React.Component{
	constructor(){
		super();
		this.state = {
			data: 'Включен'
		}
	
	}

	click = () => {
		this.setState({
			data: this.state.data === 'Выключен' ? 'Включен' : 'Выключен'
		})
	}

	render(){
		return (
			<nav className={style.menu}>
				<li>Получить данные</li>
				<li>Получить данные</li>
				<button onClick ={this.click}>{this.state.data}</button>
			</nav>
		)
	}
}

