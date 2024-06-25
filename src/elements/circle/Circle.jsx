import { useEffect } from 'react';
import * as d3 from 'd3';

function Circle() {
  const data = [20, 40, 60, 80, 100];

  useEffect(() => {
    const svg = d3
      .select('#circle')
      .append('svg')
      .attr('width', 200)
      .attr('height', 200);

    const circles = svg.selectAll('circle').data(data);

    circles
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * d + 20)
      .attr('cy', (d) => d)
      .attr('r', (d) => d)
      .attr('fill', 'red');
  }, [data]);

  return <div id='circle'></div>;
}

export default Circle;
