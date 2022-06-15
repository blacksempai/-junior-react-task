import { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { categoriesQuery } from './../../../queries/category';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        const { data = {} } = this.props;
        const { categories = [] } = data;
        const getNavLinkClasses = navData => navData.isActive ? classes.nav_link + " " + classes.active : classes.nav_link
        const categoriesComponents = categories.map(c =>
            <NavLink className={getNavLinkClasses} key={c.name} to={'/' + c.name}>
                {c.name}
            </NavLink>
        );

        return (
            <nav className={classes.navigation}>
                {categoriesComponents}
            </nav>
        );
    }
}

export default graphql(categoriesQuery)(Navigation);