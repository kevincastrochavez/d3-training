/* eslint-disable react/prop-types */
import * as d3 from 'd3';
import { useEffect } from 'react';

function BasicChart({ data }) {
  useEffect(() => {
    const svg = d3
      .select('#basicChart')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    const rectangles = svg.selectAll('rect').data(data);

    rectangles
      .enter()
      .append('rect')
      .attr('x', (d, i) => (i * 50 + 50) * 1.1)
      .attr('y', 0)
      .attr('width', 50)
      .attr('height', (d) => d.height);
  }, [data]);

  return <div id='basicChart'></div>;
}

export default BasicChart;
