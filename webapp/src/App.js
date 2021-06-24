import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './components/main/Main'
import BipartiteGraph from './components/graph/BipartiteGraph'
import TalkToBackend from './components/main/TalkToBackend'
import GraphExample from './components/graph/GraphExample'
import FinalExample from './components/graph/FinalExample'
import Demo from './components/main/Demo'


const App = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/talk-to-backend'>
            <TalkToBackend />
          </Route>
          <Route path='/graph-example'>
            <GraphExample />
          </Route>
          <Route path='/bipartite'>
            <BipartiteGraph />
          </Route>
          <Route path='/final-example'>
            <FinalExample />
          </Route>
          <Route path='/demo'>
            <Demo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
