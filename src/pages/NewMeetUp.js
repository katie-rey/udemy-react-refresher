import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetUp() {
  function addMeetupHandler(meetupData) {
    fetch('https://react-meetups-c7d0d-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <div className="new">
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}

export default NewMeetUp
