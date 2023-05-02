import { Route, Switch } from 'react-router-dom'
import AllMeetUps from './pages/AllMeetUps'
import NewMeetUp from './pages/NewMeetUp'
import Favourites from './pages/Favourites'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default App
