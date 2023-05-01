import { Route, Switch } from 'react-router-dom'
import AllMeetUps from './pages/AllMeetUps'
import NewMeetUp from './pages/NewMeetUp'
import Favourites from './pages/Favourites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetUps />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUp />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </div>
  )
}

export default App
