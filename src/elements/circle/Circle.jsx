import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Circle() {
  const svgRef = useRef();

  useEffect(() => {
    // d3 select svg and append circle
    d3.select(svgRef.current)
      .append('circle')
      .attr('r', 100)
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('fill', 'red');
  }, []);

  return <svg width={200} height={200} ref={svgRef}></svg>;
}

export default Circle;
