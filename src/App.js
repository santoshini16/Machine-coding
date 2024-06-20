
import './App.css';
import Folder from './components/Folder';
import data from './data/data.js'

function App() {
  return (
    <div className="App">
      <Folder data={data}/>
    </div>
  );
}

export default App;
