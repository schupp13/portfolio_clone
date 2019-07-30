import React , {Component} from 'react';
import './Header.css'
 class Header extends Component{

  constructor(){
    super();
    this.state = {
      menu: 'menu-close'
    }
  }

  toggle = ()=>{
    if(this.state.menu === 'menu-open'){
      this.setState({
        menu: 'menu-close'
      })
    }else{
      this.setState({

        menu: 'menu-open'
      })
    }
    
  }

   render(){
return(
  <header className={'datHitterboi'}>
    <nav>
      <ul>
        <li className={'logo'}>Start Bootstrap</li>
        <div>
        <div className={'mobile'}>
        <li  onClick={this.toggle} className='burger'><button><i class="fas fa-bars"></i>Menu</button></li>
        </div>
        <div className={'desktop'}>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
          </div>
        </div>
      </ul>
    </nav>
    <div className={`${this.state.menu}  ' mobile'`}>
      <ul>
      <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
      </ul>
    </div>
    <div className={'headerMid'}>
    <h3>Welcome To Our Studio!</h3>
    <h1>IT'S NICE TO MEET YOU</h1>
    <button>TELL ME MORE</button>
    </div>
  </header>
)
   }
}

export default Header; 