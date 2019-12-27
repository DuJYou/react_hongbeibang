import React from 'react';
import { Provider } from 'react-redux'
import store from './store/'
import {BrowserRouter as Router} from 'react-router-dom'
import 'swiper/css/swiper.min.css'
import './assets/style/reset.css'
import Index from './pages/Index'
class App extends React.Component{
  componentWillMount () {
    // loading 动画 的结束 控制 模块
    let loading = document.getElementById('i-loading')
    if (loading) {
      loading.setAttribute('class', 'i-loading-out')
      setTimeout(() => {
        loading.style.display = 'none'
      }, 3000)
    }
  }

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
