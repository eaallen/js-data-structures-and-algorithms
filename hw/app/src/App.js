import { BigO, Vanilla, Time } from './views'
import './App.css';
function App() {
  const router = route => {
    switch (route) {
      case 'BigO':
        return <BigO />
      case 'Time':
        return <Time />
      default:
        return <Vanilla />
    }
  }
  return (
    <div className="App">
      {router('Vanilla')}
    </div>
  );
}

export default App;
