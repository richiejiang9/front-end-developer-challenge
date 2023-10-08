import './App.scss';
import Tree from './talent-tree/Tree';

function App() {

  return (
    <div>
      <div>
        <div className="title-card">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</div>
      </div>
      <div className="component-container">
        <Tree />
      </div>
    </div>
  );
}

export default App;