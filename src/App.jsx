import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'



function App() {
    const [puppies, setPuppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);

    function handleClick() {
        // some logic here
    }

    const featuredPup = puppies.find((pup) => pup.id === featPupId)

        return (
            <div className="App">
                <h1>Puppy Pals!</h1>
                    {puppies.map((puppy) => {
                        return (
                            <p onClick={ () => {setFeatPupId(puppy.id)}} key={puppy.id}>
                                {puppy.name}
                            </p>
                        );
                    })}

                <p>
                    {featPupId && (
                        <div>
                        <h2>{featuredPup.name}</h2>
                            <ul>
                                <li>Age: {featuredPup.age}</li>
                                <li>Email: {featuredPup.email}</li>
                            </ul>
                        </div>
      )}
                </p>
            </div>
        );
}

export default App
