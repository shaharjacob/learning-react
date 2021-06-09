import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BipartiteGraph from './components/graph/BipartiteGraph'
import Main from './components/main/Main'
// import TalkToBackend from './components/main/TalkToBackend'
// import GraphExample from './components/graph/GraphExample'



const App = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/bipartite'>
            <BipartiteGraph />
          </Route>
          {/* <Route path='/talk-to-backend'>
            <TalkToBackend />
          </Route> */}
          {/* <Route path='/graph-example'>
            <GraphExample />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
