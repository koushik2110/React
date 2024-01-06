import UserPlaces from './Places/Pages/UserPlaces';
import Users from './Users/Pages/users';
import NewPlace from './Places/Pages/NewPlaces'
import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import MainNavigation from './shared/Components/Navigation/MainNavigation'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Users></Users>
          </Route>
          <Route path='/places/new' exact>
            <NewPlace/>
          </Route>
          <Route path='/:userID/places' exact>
            <UserPlaces/>
          </Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
