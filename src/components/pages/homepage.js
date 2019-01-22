import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsors: []
        };
    }
    componentDidMount() {
        axios.get('./data/sponsors.json')
        .then(res => {
            const data = res.data.sponsors;
            this.setState({ sponsors: data })
        })
    }
    render() {
        return (
            <div>
                <Helmet
                    title="Younique by Jenn"
                >
                    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
                </Helmet>
                <Hidden smDown>
                    <div className="page-transition-top"></div>
                    <div className="page-transition-bottom"></div>
                </Hidden>
                <div className="pageContent">
                </div>
            </div>
        )
    }
}