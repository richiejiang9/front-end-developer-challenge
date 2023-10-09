import './App.scss';
import Tree from './components/Tree';

function App() {

  return (
    <div className="app">
      <div className="app-container">
        <div className="title-card-container">
          <div className="title-card">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</div>
        </div>
        <div className="components-container">
        <Tree />
      </div>
      </div>
    </div>
  );
}

export default App;