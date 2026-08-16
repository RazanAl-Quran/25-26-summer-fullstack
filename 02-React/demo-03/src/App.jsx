import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PeopleForm from "./components/PeopleForm";
import PeopleList from "./components/PeopleList";

function App() {


  const [people, setPeople] = useState([{ name: "Razan", height: "164" }]);

  const [digimons, setDigimons] = useState([]);


  const addPerson = (newPerson) => {
    // setPeople(people.push(newPerson));
    setPeople([...people, newPerson]);
    // console.log(people);
  }

  useEffect(() => {
    // Mounting
    console.log("Mounting Phase [App]");
    // send a req to a third party api
    // send a req to api server >>> DB

    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        setDigimons(response.data.slice(0, 10)); // first 10 digimon
        
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  // useEffect(()=>{
  //    return () => {

  //     // unset the sessins/local storage
  //     console.log("📤 PeopleForm unmounted!");
  //   };
  // })



  return (
    <>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🚀 React Passing functions</h1>

        <PeopleForm addPerson={addPerson} />
        <PeopleList people={people} />

        {Dig}
      </div>

    </>
  )
}


export default App;
