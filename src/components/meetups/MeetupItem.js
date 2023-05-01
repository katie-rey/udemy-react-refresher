import classes from './MeetupItem.module.css'

function MeetupItem(props) {
  return (
    <li className={classes.item}>
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
        <button>To Favourites</button>
      </div>
    </li>
  )
}

export default MeetupItem
