import React, { Component } from "react";
import styled from "./FeedbackOptions.module.css"
import PropTypes, { string } from 'prop-types';
import { generateLightColorHex } from "utils/utils.jsx";

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

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(string),
    onLeaveFeedback: PropTypes.func
}