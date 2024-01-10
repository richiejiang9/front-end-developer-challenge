import './App.scss';
import Tree from './components/tree/Tree';

function App() {

  return (
    <div className="app">
      <div className="app-container">
        <div className="title-card-container">
          <div className="title-card">
            <div style={{paddingRight: '5px'}}>TitanStar Legends -</div>
            <div>Rune Mastery Loadout Talent Calculator 9000</div></div>
        </div>
        <div className="components-container">
          <Tree />
        </div>
      </div>
    </div>
  );
}

export default App;