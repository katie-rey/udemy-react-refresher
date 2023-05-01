import { Link } from 'react-router-dom'

// import Logo from './logo'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      {/* <Link href="/">
        <a>
          <Logo />
        </a>
      </Link> */}
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet Ups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
