import React, { Component } from "react";
import Observer from "@researchgate/react-intersection-observer";

export default class ViewableMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntersecting: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(props) {
    console.log("change", props.isIntersecting);
    this.setState({ isIntersecting: props.isIntersecting });
  }

  getPadding() {
    const { ratio } = this.props
    if(!ratio) {
      return '0';
    }
    const splitted = ratio.split(":");

    return `${(splitted[1] / splitted[0]) * 100}%`;
  }

  shouldShow() {
    console.log(this.state.isIntersecting || !this.props.lazy)
    return this.state.isIntersecting || !this.props.lazy;
  }

  renderImage() {
    const { src, ratio } = this.props;

    if (!this.shouldShow()) {
      return null;
    }

    return (
        <img
          style={{
            position: `${ratio ? `absolute` : `relative`}`,
            right: 0,
            left: 0,
            top: 0,
            width: "100%",
            bottom: 0
          }}
          src={src}
        />
    );
  }
  renderElement() {

    return (
      <div
        style={{
          position: "relative",
          paddingTop: this.getPadding()
        }}
      >
        {this.renderImage()}
      </div>
    );
  }
  render() {
    if (this.shouldShow()) {
      return this.renderElement();
    }
    return (
      <Observer onChange={this.handleChange}>{this.renderElement()}</Observer>
    );
  }
}

ViewableMonitor.defaultProps = {
  lazy: true
};
