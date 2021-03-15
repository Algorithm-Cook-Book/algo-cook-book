
// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.
const nodes = [
  { id: 0, reflexive: false },
  { id: 1, reflexive: false },
  { id: 2, reflexive: false },
  { id: 3, reflexive: false }
];
let lastNodeId = 3;
const links = [
  { source: nodes[0], target: nodes[1], left: false, right: true },
  { source: nodes[0], target: nodes[2], left: false, right: true },
  { source: nodes[0], target: nodes[3], left: false, right: true },
];
