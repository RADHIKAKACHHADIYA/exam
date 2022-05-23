
import './App.css';
import Login from './Login';
import { Provider } from 'react-redux';
import configareStore from './redux/store';


function App() {
  let { store } = configareStore();
  return (
    <div className="App">
      <Provider store={store} >
          <Login />
      </Provider>
    </div>
  );
}

export default App;
