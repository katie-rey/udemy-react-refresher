import { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavouriteContext from '../../store/favourites-context'

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouriteContext)

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id)

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.div)
    } else {
      favouritesCtx.addfavourite({
        // creating an object to be passed to the addFavouriteshandler
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
            alt={props.title}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? 'Remove Favourite' : 'Add Favourite'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
