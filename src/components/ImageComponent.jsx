import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.url} alt={this.props.alt}></img>;
  }
}

export default ImageComponent;
