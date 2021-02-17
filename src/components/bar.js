/* Import React.js. */
import React from 'react'

const Bar = ({ data }) => {
    return (
        <div className="BarChart">
            {data &&
                data.map((d) => {
                    return (
                        <div className={"BarData " + d.lang} style={{ width: `${d.percent}%` }}></div>
                    );
                })}
        </div>
    );
};

export default Bar;

/* EOF */
