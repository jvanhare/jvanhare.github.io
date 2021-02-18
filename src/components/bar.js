/* Import React.js. */
import React from 'react'

const Bar = ({ data }) => {
    return (
        <div className="BarChart">
            {data &&
                data.map((d, index) => {
                    return (
                        <div key={`${d.name}_${d.lang}`} className={"BarData " + d.lang} style={{ width: `${d.percent}%` }}></div>
                    );
                })}
        </div>
    );
};

export default Bar;

/* EOF */
