import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogList from './BlogList';
import Cover from './Cover';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/online-blog">
              <Cover />
            </Route>
             <Route exact path="/thoughts">
              <BlogList />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
