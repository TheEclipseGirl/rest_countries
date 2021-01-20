import React from 'react'
import "../assets/css/Nav.css";
import {modeContext} from './modeContext'

class Nav extends React.Component {

    static contextType = modeContext;

    render(){
        let navBg , textColor;
        if(this.context === 'light'){
            navBg = 'color-light-bg';
            textColor = 'dark'
        }
        else{
            navBg = 'color-dark-bg';
            textColor = 'light';
        }

        return (
            <div className={`nav shadow ${navBg}`}>
                <div className="col-11 mx-auto d-flex justify-content-between align-items-center">
                    <div>
                       <p className={`nav-heading p-0 m-0 ${textColor}`}> Where in the world? </p>
                    </div>
                    <div className="d-flex nav-modes align-items-center" onClick={this.props.toggleMode}>
                        {
                            this.context ==="light" ? 
                            <>
                                <i className={`far fa-moon ${textColor}`}></i>
                                <p className={`p-0 m-0 ml-2 ${textColor}`}> Dark Mode</p>
                            </>
                            :
                            <>
                                <i class={`fas fa-sun text-warning`}></i>
                                <p className={`p-0 m-0 ml-2 ${textColor}`}> Light Mode</p>
                            </>
                        }
                       
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export default Nav
