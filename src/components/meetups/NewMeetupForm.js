import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

function NewMeetupForm() {
  function submitHandler(event) {
    event.preventDefault()
  }

  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id="title"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id="image"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea type="text" required id="description" rows="5"></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default NewMeetupForm
