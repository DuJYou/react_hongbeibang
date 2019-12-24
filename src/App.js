import React from 'react';
import { Provider } from 'react-redux'
import store from './store/'
import {BrowserRouter as Router} from 'react-router-dom'
import 'swiper/css/swiper.min.css'
import './assets/style/reset.css'
import Index from './pages/Index'
class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
        <Index></Index>
      </Router>
       </Provider>
    )
  }
}

export default App;
