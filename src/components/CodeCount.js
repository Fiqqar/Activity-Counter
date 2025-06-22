import React from "react";
import "../styles/ui.scss"

export const CodeCount = React.createClassComponent({
    render() {
        return (
            <div className="code-dayscount">
                <div className="code-totaldayscount">
                    <span>15 Days</span>
                </div>
                <div className="code-longdayscount">
                    <span>5 Days</span>
                </div>
                <div className="code-homeworkscount">
                    <span>10 Homeworks</span>
                </div>
            </div>

        );
    }
})