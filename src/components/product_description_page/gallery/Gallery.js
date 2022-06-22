import classes from './Gallery.module.css';
import { Component } from 'react';

class Gallery extends Component {

    componentDidMount() {
        const activePhoto = this.props.gallery?.length ? this.props.gallery[0] : '';
        this.setState({activePhoto});
    }

    render() {
        const { gallery = [], name } = this.props;
        if(!gallery.length) {
            return null;
        }
        const galleryElements = gallery.map(img => 
            <img key={img} src={img} alt={name} onClick={() => {this.setState({activePhoto:img})}}/>);
        return (
            <div className={classes.gallery}>
                <div className={classes.photo_chooser}>
                    {galleryElements}
                </div>
                <div className={classes.active_photo}>
                    <img src={this.state?.activePhoto} alt={name} />
                </div>
            </div>
        )
    }
}

export default Gallery;