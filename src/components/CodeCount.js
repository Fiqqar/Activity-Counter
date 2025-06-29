import React from "react";
import "../styles/ui.scss";
import { FaLaptopCode } from "react-icons/fa";
import { TbBrandDaysCounter } from "react-icons/tb";
import { FaSchool } from "react-icons/fa";

export class CodeCount extends React.Component {
    decimalToPercentage(total, value) {
        return (value/total * 100) + " %";
    }
    render() {
        return (
            <div className="code-dayscount">
                <div className="code-totaldayscount">
                    <FaLaptopCode className="code-icon" />
                    <span>{this.props.total} Days</span>
                </div>
                <div className="code-longdayscount">
                    <TbBrandDaysCounter />
                    <span>{this.decimalToPercentage(this.props.total, this.props.long)} Days</span>
                </div>
                <div className="code-homeworkscount">
                    <FaSchool />
                    <span>{this.props.homework} Homeworks</span>
                </div>
            </div>

        );
    }
}