import { createContext, useState } from 'react'
// function exposed by the react libabry

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
})
// call context
// js object store in a variable
// takes an initial variable e.g. an obect

export function FavouritesContextProvider(props) {
  // responsible for sharing and updating favourites globally
  // returning the FavouriteContect varible we have created above

  // All components that are wrapped and listening to the provider will be passed any updates when the react component updates (each time a new fav is added)

  const [userFavourites, setUserFavourites] = useState([])
  // manage state an array of favourites

  function addFavouriteHandler(favouriteMeetup) {
    // providing a function allows react to update in order, waiting for the prevFavs
    // working on the latest favs
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup)
    })
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId)
    })
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId)
  }

  // construct a contxt obect to be passed
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  }

  return <FavouritesContext.Provider value={context}>{props.children}</FavouritesContext.Provider>
}

export default FavouritesContext

////
