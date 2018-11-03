import React, { Component } from 'react';

// import { Bar } from '@vx/shape';
// import { Group } from '@vx/group';
// import { GradientTealBlue } from '@vx/gradient';
// import { letterFrequency } from '@vx/mock-data';
// import { scaleBand, scaleLinear } from '@vx/scale';
// import { max } from 'd3-array';

// const data = letterFrequency.slice(5);

// // function round(value, precision) {
// //   var multiplier = Math.pow(10, precision || 0);
// //   return Math.round(value * multiplier) / multiplier;
// // }

// // accessors
// const x = d => d.letter;
// const y = d => +d.frequency * 100;

// const Chord1  = ({
//   width,
//   height,
// }) => {
//   if (width < 10) return null;

//   // bounds
//   const xMax = width;
//   const yMax = height - 120;

//   // scales
//   const xScale = scaleBand({
//     rangeRound: [0, xMax],
//     domain: data.map(x),
//     padding: 0.4,
//   });
//   const yScale = scaleLinear({
//     rangeRound: [yMax, 0],
//     domain: [0, max(data, y)],
//   });

//   return (
//     <svg width={width} height={height}>
//       <GradientTealBlue id="teal" />
//       <rect
//         x={0}
//         y={0}
//         width={width}
//         height={height}
//         fill={`url(#teal)`}
//         rx={14}
//       />
//       <Group top={40}>
//         {data.map((d, i) => {
//           const barHeight = yMax - yScale(y(d));
//           return (
//             <Group key={`bar-${x(d)}`}>
//               <Bar
//                 width={xScale.bandwidth()}
//                 height={barHeight}
//                 x={xScale(x(d))}
//                 y={yMax - barHeight}
//                 fill="rgba(23, 233, 217, .5)"
//                 data={{ x: x(d), y: y(d) }}
//                 onClick={data => event => {
//                   alert(`clicked: ${JSON.stringify(data)}`)
//                 }}
//               />
//             </Group>
//           );
//         })}
//       </Group>
//     </svg>
//   );
// }

class App extends Component {
  render() {
    return (
    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <h1 style={{color:'skyblue'}}>Aum Namah Shivaya</h1>
      <h3 style={{color:'orange'}}>Hara Hara Mahadeva</h3>
      <h4 style={{color:'grey'}}>Shambho Shankara</h4>
      {/* <Chord1 width={800} height={600}/> */}
    </div>
    );
  }
}

export default App;
