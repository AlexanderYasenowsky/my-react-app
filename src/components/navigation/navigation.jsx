import React from 'react';
import style from './navigation.module.scss'
import { Button } from 'react-bootstrap';
export default class Navigation extends React.Component{
   
   makeNavbar(){
      if(this.props.type === 1){
         return(
            <nav>
               <button onClick ={this.props.return}>Назад</button>
            </nav>
         )
      }else{
         return (
            <nav>
               <button onClick={this.props.getData}>Получить данные</button>
            </nav>
         )
      }
   }

   render(){
      return(
         this.makeNavbar()
      )
   }
}