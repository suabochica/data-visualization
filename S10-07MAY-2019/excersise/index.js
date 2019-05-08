// const canvas = d3.select("#canvas");
const svg = d3.select("svg");

const group = svg
  .selectAll("g")
  .data()
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(${i * 22}, 180)`);

group
  .append("rect")
  .attr("y", d => -d)
  .attr("width", 20)
  .attr("height", (d, i) => d);

group
  .append("text")
  .attr("x", 10)
  .attr("y", d => -d - 4)
  .attr("text-anchor", "middle")
  .attr("class", "text-bars")
  .text(d => d);
