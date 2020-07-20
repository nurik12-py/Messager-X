import React, { Component } from "react";
import "./tab.css";
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLeft: true,
      showRight: false,
      leftContent: props.leftContent,
      rightContent: props.rightContent,
      leftLabel: props.leftLabel,
      rightLabel: props.rightLabel,
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  handleTabChange(side) {
    if (side === "left") {
      this.setState({ showLeft: true, showRight: false });
    } else {
      this.setState({ showLeft: false, showRight: true });
    }
  }
  render() {
    return (
      <div>
        <div className="tab d-flex general-margin">
          <div
            onClick={() => this.handleTabChange("left")}
            className={
              this.state.showLeft ? "tab-btn tab-btn-active" : "tab-btn"
            }
          >
            {this.state.leftLabel}
          </div>
          <div
            onClick={() => this.handleTabChange("right")}
            className={
              this.state.showRight ? "tab-btn tab-btn-active" : "tab-btn"
            }
          >
            {this.state.rightLabel}
          </div>
        </div>
        <div
          className="animate"
          style={{ display: this.state.showLeft ? "block" : "none" }}
        >
          {this.state.leftContent}
        </div>
        <div
          className="animate"
          style={{ display: this.state.showRight ? "block" : "none" }}
        >
          {this.state.rightContent}
        </div>
      </div>
    );
  }
}

export default Tab;
