import { useEffect } from 'react';
import * as d3 from 'd3';

function Circle() {
  useEffect(() => {
    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', 200)
      .attr('height', 200);

    svg
      .append('circle')
      .attr('r', 100)
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('fill', 'red');
  }, []);

  return <div id='chart'></div>;
}

export default Circle;
