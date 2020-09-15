import React from 'react';
import style from './data.module.scss';
export default class Table extends React.Component{
	render(){
		return(
		<div className ={style.data}>
			<table className={style.table}>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Степень</th> 
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
		)
	}
}