// create your App component here
import react from "react";
import React, { useState, useEffect } from "react";

const App = () => {
    const [dogImage, setDogImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=>{
            setDogImage(data.message)
            setIsLoaded(true)
        })
    },[])


    return(
        <div>
            {isLoaded?(
                <img src={dogImage} alt='A Random Dog'></img>
            ):(
                <p>Loading...</p>
            )}
        </div>
    )
}
export default App