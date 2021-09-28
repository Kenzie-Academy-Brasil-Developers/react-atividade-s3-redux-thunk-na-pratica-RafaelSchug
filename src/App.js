import './App.css';
import DisplayComments from './store/components/DisplayComments';
import NewComment from './store/components/NewComment';

function App() {
  return (
    <div className="App">
      <DisplayComments />
      <NewComment></NewComment>
    </div>
  );
}

export default App;
