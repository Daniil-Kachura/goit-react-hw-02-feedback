import React, { Component } from "react";
import styled from "./FeedbackOptions.module.css"
import PropTypes, { string } from 'prop-types';
import { height, width } from "styled-system";

export class FeedbackOption extends Component {
    render() {
        return (
            <div className={styled.options}>
                {this.props.options.map(option => (
                    <button style={{ backgroundColor: generateLightColorHex() }} key={option} name={option} className={styled.options__push} onClick={this.props.onLeaveFeedback}>
                        {option}
                    </button>
                ))}
            </div>            
        )
    }
}

function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    return color;
  }

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(string),
    onLeaveFeedback: PropTypes.func
}