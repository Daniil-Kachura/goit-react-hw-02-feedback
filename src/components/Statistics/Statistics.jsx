import React, { Component } from "react";
import styled from "./Statistics.module.css"
import PropTypes from 'prop-types';
import { opacity } from "styled-system";
 
export class Statistics extends Component {
    render() {
        return(
            <div className={styled.statistic}>
                <p className={styled.statistic__title}>Statistics</p>
               
               <div className={styled.statistic__info1}> <p className={styled.statistic__info}>Good: <span style={{ color: generateRandomColorHex() }}>{this.props.good}</span></p>
                <p className={styled.statistic__info}> Neutral: <span style={{ color: generateRandomColorHex() }}>{this.props.neutral}</span></p>
                <p className={styled.statistic__info}> Bad: <span style={{ color: generateRandomColorHex() }}>{this.props.bad}</span></p>
                </div>
                <div className={styled.statistic__info2}><p className={styled.statistic__info}> Total: <span style={{ color: generateRandomColorHex() }}>{this.props.total}</span></p>
                <p className={styled.statistic__info}> Positive feedback: <span style={{ color: generateRandomColorHex() }}>{this.props.positivePercentage}%</span></p>
                </div>
            </div>   
        )    
    }
}
function generateRandomColorHex() {
    return "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
  }

  
Statistics.propTypes = {
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
    total: PropTypes.func,
    positivePercentage: PropTypes.func
}