import React, { Component } from 'react'

export default class ImageCard extends Component {
    constructor(props){
        super(props)
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}
