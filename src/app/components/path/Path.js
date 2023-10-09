import { useEffect, useState } from 'react';
import './Path.scss'
import Rune from '../rune/Rune';

const Branch = (props) => {
    const [pointsSpentOnPath, setPointsSpentOnPath] = useState(0);
    const [runes] = useState(props.path);

    useEffect(() => {
        if(pointsSpentOnPath < 5){
            setPointsSpentOnPath(runes.filter(rune => rune.isActive).length);
        }
      }, [props.assignPoint, pointsSpentOnPath, runes])

    return (
        <div className="paths-container">
            {runes.map((rune, i) =>
                <Rune
                    key={i}
                    index={i}
                    rune={rune}
                    runeIndex={i}
                    pointsSpentOnPath={pointsSpentOnPath}
                    {...props}
                />
            )}
        </div>
    )
}

export default Branch;