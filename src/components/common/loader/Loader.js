import classes from './Loader.module.css';
import loader from './loader.svg'
import { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className={classes.loader}>
                <img className={classes.loader_img} src={loader} alt="Loading..." />
            </div>
        )
    }
}

export default Loader;