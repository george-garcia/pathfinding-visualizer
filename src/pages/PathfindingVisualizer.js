import './PathfindingVisualizer.css';
import {useState, useEffect} from "react";
import Node  from "../components/Node";

function PathfindingVisualizer() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        const nodes = [];
        for (let row = 0; row < 15; row++){
            const currentRow = [];
            for(let col = 0; col < 50; col++){
                const currentNode = {
                    col,
                    row,
                };
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        setNodes(nodes);
    }, []);

    function renderGrid(){
        return nodes.map((row, rowIdx) => {
            return (
                <div>
                    {row.map((node, nodeIdx) => <Node key={nodeIdx} isStart={true} test={'foo'}></Node>)}
                </div>
            );
        })
    }


    return (
        <div className={"node-grid"}>
            {renderGrid()}
        </div>
    );
}

export default PathfindingVisualizer;
