import { Component } from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories = [] } = this.props;

        const getNavLinkClasses = navData => navData.isActive ? classes.nav_link + " " + classes.active : classes.nav_link
        const categoriesComponents = categories.map(c =>
            <NavLink className={getNavLinkClasses} key={c.name} to={'/category/' + c.name} title={c.name}>
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

export default Navigation;