import "./Tree.scss"
import runeData from '../data/runesData.json'

import { useState } from "react";
import Path from "./path/Path";

const Tree = () => {
    const [totalPoints] = useState(6);
    const [totalPointsSpent, setAllPointsSpent] = useState(0);
    const [paths, setPaths] = useState(Object.values(runeData));

    const assignPoint = (isActive, pathIndex, runeIndex) => {
        const assignedPath = [...paths];
        assignedPath[pathIndex][runeIndex].isActive = isActive;
        setPaths(assignedPath);

        if (isActive === true) {
            setAllPointsSpent(totalPointsSpent + 1)
        }
        else (
            setAllPointsSpent(totalPointsSpent - 1)
        )
    }

    return (
        <div className="components-container">
            <div className="trees-container">
                {paths.map((path, i) =>
                    <div key={i}>
                        <div className="talent-tree-container">
                            <div className="tree-title">
                            Talent Path {i + 1}
                            </div>
                            <div>
                                <Path
                                    key={i}
                                    pathIndex={i}
                                    path={path}
                                    assignPoint={assignPoint}
                                    totalPoints={totalPoints}
                                    totalPointsSpent={totalPointsSpent}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="points-counter-container">
                <div>{totalPointsSpent} / {totalPoints}</div>
                <div className="points-spent">Points Spent</div>
            </div>
        </div>
    )
}

export default Tree;