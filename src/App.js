import './App.css';
import Crud from './componets/Crud';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
  return (
    <div className="App">
    <Provider store={store}>   <Crud/>
    </Provider>
  
    </div>
  );
}

export default App;
