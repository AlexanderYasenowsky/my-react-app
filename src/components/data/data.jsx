import React from 'react';
import style from './data.module.scss';

export default class Table extends React.Component{
	
	render(){
		if(this.props.data.length === 0){
			return(
				<div></div>
			)
		}else {
			return(
				<table className='table'>
					<thead>
						<tr>
							<th>Имя</th>
							<th>Фамилия</th>
							<th>Отчество</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{this.props.data[0]}</td>
							<td>{this.props.data[0]}</td>
							<td>{this.props.data[0]}</td>
						</tr>
						<tr>
							<td>{this.props.data[1]}</td>
							<td>{this.props.data[1]}</td>
							<td>{this.props.data[1]}</td>
						</tr>
					</tbody>
				</table>
			)
		}
	}
}