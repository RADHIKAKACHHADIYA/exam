
import './App.css';
import Login from './Login';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <div className="App">
      <Provider store={store} >
          <Login />
      </Provider>
    </div>
  );
}

export default App;
