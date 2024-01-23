

import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import {Provider} from 'react-redux'
import store from './utils/store';




function App() {
  
  return (
    <Provider store={store}>
    <div className="App">

     <Header />
     <Outlet />
         
    </div>
    </Provider>
  );
}

export default App;
