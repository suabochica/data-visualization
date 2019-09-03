// const canvas = d3.select("#canvas");
const svg = d3.select("svg");

const dataArray = [
  {
    day: "29-04",
    people: 54,
    front: 41,
    back: 13,
    color: "#0000ff",
    online: false
  },
  {
    day: "30-04",
    people: 127,
    front: 65,
    back: 62,
    color: "#00ff00",
    online: false
  }
];

const group = svg
  .selectAll("g")
  .data(dataArray)
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(${i * 22}, 180)`);

group
  .append("rect")
  .attr("fill", d => "#cc0000")
  .attr("y", 0)
  .transition()
  .easeBounce(d3.easeCircle)
  .duration(4000)
  .attr("y", d => -d.people);

// group
//   .append("rect")
//   .attr("fill", d => d.color)
//   .attr("y", d => -d.people)
//   .attr("width", 20)
//   .attr("height", (d, i) => d.front);

// group
//   .append("text")
//   .attr("x", 10)
//   .attr("y", d => -d.people - 4)
//   .attr("text-anchor", "middle")
//   .attr("fill", d => (d.online ? "red" : "blue"))
//   .text(d => d.people);
