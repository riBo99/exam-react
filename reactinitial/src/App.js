import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask"
import Character from "./components/Character"
import Subscription from "./components/Subscription"

const App = () => {
  useEffect(() => {
    document.title = "Series Api"
  }, []);

  const [himym, setHimym] = useState([])

  const fetchApi = () => {
    fetch("https://demoapi.com/api/series/howimetyourmother")
    .then((res) => res.json())
    .then((data) => {
      setHimym(data)
    })
  }

  useEffect(() => fetchApi(), [])
  console.log(himym)

  return (
    <div>
      {himym.length > 0 ? (
        himym.map((character, index) => (
          <Character characterData={character} key={index} />
        ))
      ) : (
        <LoadingMask />
      )}
      <Subscription />
    </div>
  )
}

export default App
