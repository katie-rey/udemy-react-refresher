import classes from './Card.module.css'

function Card(props) {
  return <div className={classes.item}>{props.children}</div>
}

export default Card
