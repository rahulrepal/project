import React from 'react'
import { Chart } from "react-charts";
export default (props) =>{

    const { Code , Name , year_2019 , branch_no,year_2013,year_2014,year_2015,year_2016,year_2017,year_2018} = props.details
    return(
        <div className="college">
            <ul>
                <li class="code">{Code}</li>
                
                <li class="text">{Name}</li>

                <li class="code">{branch_no}</li>
               
                <li class="code">{year_2019}</li>

                <li class="code chart">

                <Chart
                        data={[
                            {
                            label: "Series 1",
                            data: [[2013, year_2013], [2014, year_2014], [2015, year_2015], [2016, year_2016], [2017, year_2017],[2018,year_2018],[2019,year_2019]]
                            },
                          
                        ]}
                        series={{ type: 'area' }}
                        axes={[
                            { primary: true, type: "linear", position: "bottom",show:false },
                            { type: "linear", position: "left" ,show:false }
                        ]}
                        primaryCursor
                        secondaryCursor
                        tooltip
                        />
                </li>
               
            </ul>
        </div>
    )
}