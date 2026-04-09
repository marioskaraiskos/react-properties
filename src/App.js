import './App.css';
import ClassProps from './ClassProps';
import FunctionProp from './FunctionProp';
function App() {
  return (
    <div>
      <ClassProps name="nikos" place="Athens" /> <p>Child component yeah!</p>
      <ClassProps name="panos" place="Thessaloniki" /> <button>Click</button>
      <ClassProps name="marios" place="Patras" />
      <FunctionProp name="giannis" place="Ioannina" />
    </div>
  );
}

export default App;
