import { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'

// https://react-meetups-c7d0d-default-rtdb.firebaseio.com/

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-meetups-c7d0d-default-rtdb.firebaseio.com//meetups.json', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const meetups = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }
          meetups.push(meetup)
          console.log(meetups)
        }

        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
  }, [])

  // useEffect only runs when the dependecies have changed in the array or if there are no dependencies it will only run when the initial page is loaded/run
  // add external values the useEffect function relies on in the dependency array
  // empty array with no external dependencies

  if (isLoading) {
    return (
      <section>
        <p>Is loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  )
}

export default AllMeetUps
