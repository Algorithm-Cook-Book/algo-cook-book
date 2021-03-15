// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.
var nodes = [
  { id: 0, reflexive: false },
  { id: 1, reflexive: false },
  { id: 2, reflexive: false },
];
let lastNodeId = 2;
var links = [
  { source: nodes[0], target: nodes[1], left: false, right: true },
  { source: nodes[1], target: nodes[0], left: false, right: true },
  { source: nodes[1], target: nodes[2], left: false, right: true },
  { source: nodes[2], target: nodes[1], left: false, right: true },
];

/*
function make_graph(){
    var num=4;
    var graph=[
        [0,1,0],
        [1,0,1],
        [0,1,0]
    ];
    links=[];
    nodes=[];
    lastNodeId=num;
    for(var i=0;i<num;++i){
        nodes+={ id:i, reflexive=false};
        for(var j=0;j<num;++j){
            if(graph[i][j]==1){
                if(i!=j) links += {source: nodes[i], target: nodes[j],left: false, right=true};
                else nodes[i].reflexive=true;
            }

        }
    }
}
make_graph();
*/