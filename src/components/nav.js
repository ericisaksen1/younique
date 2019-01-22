import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';

export default class Nav extends Component{
    state = {
        isMobile: false,
    };
    handleMobile = () => {
        const body = document.getElementsByTagName('body')[0];
        if(body.classList.contains('mobile-active')){
            body.classList.remove('mobile-active');
            this.setState({ isMobile: false });
        } else {
            body.classList.add('mobile-active');
            this.setState({ isMobile: true });
        }
    }
    render(){
        const navitems = [
            { item: "About", url: "/about" },
            { item: "Nominations", url: "/nominations" },
            { item: "Sponsors", url: "/sponsors" },
            { item: "FAQ", url: "/faq" },
            { item: "Contact", url: "/contact" },
        ]
        return(
            <>
            <Hidden mdUp>
                <Icon className={this.state.isMobile ? 'fa fa-times' : 'fa fa-bars'} onClick={this.handleMobile} />
            </Hidden>
            <nav className="headerNavigation">
                <ul>
                    {navitems.map((navitem, i) => (
                            <li key={i}><NavLink to={navitem.url} onClick={this.handleMobile}>{navitem.item}</NavLink></li>
                        )
                    )}
                </ul>
            </nav>  
            </>    
        )
    }
}