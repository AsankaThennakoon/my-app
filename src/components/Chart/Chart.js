import './Chart.css'
import ChartBar from './ChartBar';
const Chart=props=>{

    const dataPointValue=props.dataPoints.map(e=>e.value);
    const maxValue=Math.max(...dataPointValue);
   return (
     <div className="chart">
       {props.dataPoints.map((item) => (
         <ChartBar
           key={item.label}
           label={item.label}
           maxValue={maxValue}
           value={item.value}
         ></ChartBar>
       ))}
     </div>
   );
}

export default Chart;