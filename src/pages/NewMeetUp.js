import { useHistory } from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup() {
  const history = useHistory()

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-meetups-c7d0d-default-rtdb.firebaseio.com//meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/')
      // history.push('/') as another option to add a url to the stack
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}
export default NewMeetup
