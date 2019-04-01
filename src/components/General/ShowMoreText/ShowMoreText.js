import React, { Component } from "react";
import Truncate from "react-truncate";
import "./ShowMoreText.scss";

class ShowMoreText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      truncated: false
    };
  }

  handleTruncate = truncated => {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  };

  toggleLines = event => {
    event.preventDefault();
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  render() {
    const { children, moreText, lessText, lines } = this.props;
    const { visible, truncated } = this.state;

    return (
      <React.Fragment>
        <Truncate lines={!visible && lines} onTruncate={this.handleTruncate}>
          {children}
        </Truncate>

        {truncated && !visible && (
          <div className="show-more-button-div">
            <div className="show-more-button" onClick={this.toggleLines}>
              {moreText}
            </div>
          </div>
        )}

        {!truncated && visible && (
          <div className="show-more-button-div">
            <div className="show-more-button" onClick={this.toggleLines}>
              {lessText}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ShowMoreText;
