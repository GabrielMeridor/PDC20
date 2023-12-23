import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
    } from 'react-router-dom';
import Blogs from './Blog/BlogPage';
import PropsAct from './ClassProjects/ClassProps';
import EventAct from './ReactEvent/Activity01-Event.js';

class App extends Component {
    render(){
        const {username} = this.props;
        return (
            <Router>
                <div>
                {/*<h1>React Router</h1>
                <ul>
                    <li>
                        <Link to="/myBlog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/myprops">Class</Link>
                    </li>
                    <li>
                        <Link to="/myevent">Event</Link>
                    </li>
                    <li>
                        <Link to="/myprops">Class Props</Link>
                    </li>
                    <li>
                        <Link to="/myevent">React Event</Link>
                    </li>
        </ul>*/}
        <h1> Main Page</h1>
        <p>Welcome, {username}</p>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link class="nav-link" to="/myBlog">Blog</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/myprops">Class Props</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/myevent">React Event</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><Link to="/myBlog">Blog</Link></li>
            <li><Link to="/myprops">Class Props</Link></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><Link to="/myevent">React Event</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

                    <Routes>
                        <Route
                            exact
                            path="/myblog"
                            element={<Blogs/>}
                        ></Route>
                        <Route
                            exact
                            path="/myprops"
                            element={<PropsAct/>}
                        ></Route>
                         <Route
                            exact
                            path="/myevent"
                            element={<EventAct/>}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}
export default App;
