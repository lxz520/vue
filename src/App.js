import React, { Component } from 'react';
import { HashRouter as Router, NavLink, Switch, Redirect, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Home from "./components/home/home"
import Collection from "./components/collection/collection"
import Classcify from "./components/classcify/classcify"
import My from "./components/my/my"
import Free from "./components/free/free"
import "./common/css/footer.css"
import store from "./store"
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="box">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/free" component={Free} />
              <Route path="/classcify" component={Classcify} />
              <Route path="/collection" component={Collection} />
              <Route path="/my" component={My} />
              <Redirect path="/" to="/home"></Redirect>
             </Switch>
            <div id="footer">
            <ul>
              <li> 
                <NavLink to="/home" >
                <i className="iconfont">&#xe663;</i>
                <span>首页</span>
                 </NavLink>
              </li>
            
              <li> 
                <NavLink to="/free" >
                <i className="iconfont">&#xe600;</i>
                <span>包邮</span>
                 </NavLink>
              </li>
              <li> 
                <NavLink to="/classcify" >
                <i className="iconfont">&#xe702;</i>
                <span>分类</span>
                 </NavLink>
              </li>
              <li> 
                <NavLink to="/collection" >
                <i className="iconfont">&#xe702;</i>
                <span>收藏</span>
                 </NavLink>
              </li>
              <li> 
                <NavLink to="/my" >
                <i className="iconfont">&#xe646;</i>
                <span>我的</span>
                 </NavLink>
              </li>
             </ul>
      </div>
      </div>
      </Router>
      </Provider>
            )
          }
        }
        
        export default App;
