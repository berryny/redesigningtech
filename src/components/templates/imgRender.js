import React, { Component } from 'react';

class RenderImage extends Component {
  constructor(props){
    console.log("this.props RenderImage",props);
    super(props)
  }

  render() {
    return (
      <div>
        <img src={require('../../'+this.props.img)} className="img-fluid w-100" alt={this.props.alt} />
      </div>
    )
  }
}

export default RenderImage;
