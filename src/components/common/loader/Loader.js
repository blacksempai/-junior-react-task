import classes from './Loader.module.css';
import { ReactComponent as LoaderIcon } from './loader.svg'
import { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className={classes.loader}>
                <LoaderIcon className={classes.loader_img}/>
            </div>
        )
    }
}

export default Loader;