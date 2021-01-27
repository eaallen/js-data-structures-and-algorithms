import {BigO,Vanilla} from './views'
import './App.css';
function App() {
  const router = route =>{
    switch(route){
      case 'BigO':
        return <BigO/>
      default:
        <Vanilla/>
    }
  }
  return (
    <div className="App">
      {router('Vanilla')}
    </div>
  );
}

export default App;
