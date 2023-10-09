import './Rune.scss';

const Rune = (props) => {
  const handleLeftClick = () => {
<<<<<<< HEAD
    if (props.pointsSpentOnPath === props.runeIndex && props.totalPointsSpent !== props.totalPoints) {
      props.assignPoint(true, props.pathIndex, props.runeIndex)
    }
=======
    if (props.pointsSpentOnPath !== props.runeIndex || props.totalPointsSpent === props.totalPoints) return undefined;
    props.assignPoint(true, props.pathIndex, props.runeIndex)
>>>>>>> 74af44a6b05abf9da91fe43e616ea8700d1a9fe6
  }

  const handleRightClick = (e) => {
    e.preventDefault()
<<<<<<< HEAD
    if (props.pointsSpentOnPath === props.runeIndex + 1 && props.totalPointsSpent !== 0) {
      props.assignPoint(false, props.pathIndex, props.runeIndex)
    }
=======
    if (props.pointsSpentOnPath !== props.runeIndex + 1 || props.totalPointsSpent === 0) return undefined;
    props.assignPoint(false, props.pathIndex, props.runeIndex)

>>>>>>> 74af44a6b05abf9da91fe43e616ea8700d1a9fe6
  }

  return (
    <>
      <div className="rune-container tooltip"
        style={{
          boxShadow: props.rune.isActive && '0 0 5px 1px #757575',
          backgroundImage: props.rune.isActive && 'linear-gradient( #6fabe8 0%, #6fabe8  50%, #24374a  50%, #6fabe8)'
        }}>
        <span className="tooltiptext">{props.rune.name}</span>
        <div className="rune-icon"
          style={{
            backgroundPositionX: (props.rune.posX * -50),
            filter: props.rune.isActive ? 'brightness(1)' : 'brightness(50%)'
          }}
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
        />
      </div>
      <div className="progress-bar"
        style={{
          filter: props.rune.isActive ? 'brightness(1)' : 'brightness(.4)'
        }}
      />
    </>
  );
}

export default Rune;