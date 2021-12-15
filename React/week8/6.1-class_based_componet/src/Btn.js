import React from "react";

class Btn extends React.Component {
  onClick = (val) => {this.setState({selectedColor: val})};

  render() {
    return (
      <div>
        <button className="box" onClick={this.onClick} style={{ background: `${this.props.color}` }}>
          {this.props.color}
        </button>
      </div>
    );
  }
}
export default Btn;
