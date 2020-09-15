import React from 'react';
import style from './header.module.scss'
export default class Header extends React.Component{
   constructor(){
      super()
      this.state = {
         date: new Date()
      };
   }

   componentDidMount(){
      this.CurrentTime = setInterval(() => {
         this.tick()
      }, 1000);
   }

   tick(){
      this.setState({
         date: new Date()
      })
   }

   componentWillUnmount(){
      clearInterval(this.CurrentTime);
   }

    render(){
      return(
         <header className={style.header}>
            <span>{this.state.date.toLocaleTimeString()}</span>
         </header>
      )
   }
}