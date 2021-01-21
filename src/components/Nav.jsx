import React from 'react'
import "../assets/css/Nav.css";
import { connect } from "../index";
import { toggleMode } from "../actions";

class Nav extends React.Component {


    toggleMode=()=>{
        this.props.mode.mode === "light" ? 
        this.props.dispatch(toggleMode("dark")):
        this.props.dispatch(toggleMode("light"))
      }

    render(){
        let navBg , textColor;
        if(this.props.mode.mode === 'light'){
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
                    <div className="d-flex nav-modes align-items-center" onClick={this.toggleMode}>
                        {
                            this.props.mode.mode ==="light" ? 
                            <>
                                <i className={`far fa-moon ${textColor}`}></i>
                                <p className={`p-0 m-0 ml-2 ${textColor}`}> Dark Mode</p>
                            </>
                            :
                            <>
                                <i className={`fas fa-sun text-warning`}></i>
                                <p className={`p-0 m-0 ml-2 ${textColor}`}> Light Mode</p>
                            </>
                        }
                       
                    </div>
    
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
      mode: state.mode
    }
  }
export default connect(mapStateToProps)(Nav);
