import React, { Component } from 'react';
import HeaderTabs from './HeaderTabs'
class Header extends Component {
    
    render() {
        return (
            
                <div className="header">
                    <span>+</span>
                    <div className="Tabs"><HeaderTabs></HeaderTabs></div>
              
                    <div className="img"><img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt=""/></div>
                </div>
            
        );
    }
}

export default Header;