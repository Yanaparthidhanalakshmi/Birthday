// import React, { useState } from 'react'

// const Weather = () => {
//     let api={
//         key:"51ae3f7c4b5c795e931cb7846f1f91b3",
//         url:"https://api.openweathermap.org/data/2.5/weather"
//     }
//     let[Search,setsearch]=useState("")
//     let[value,setvalue]=useState({})
//     let[loading,setLoading]=useState(false)
//     function enter(x){
//         if(x.key==="Enter"){
//             searchWeather()
//         }
//     }
//     function searchWeather(){
//          fetch(`${api.url}?q=${Search}&appid=${api.key}&units=metric`).then(x=>x.json()).then(val=>{
//             console.log(val);
//             setvalue(val)
//             setLoading(false);
            
//          })
//          .catch(() => {
//           setLoading(false); // Handle error and stop loading
//       });
//     }
//   return (
//     <div>
//       <section>
//       <input type="text" onChange={(e)=>setsearch(e.target.value) } onKeyPress={enter} />
//       <button onClick={searchWeather}>Search</button>
//       </section>
//       { loading ? ( // Show loading indicator when fetching data
//                 <p>Loading...</p>
//             ) : (
//                 value.main !== undefined ? (
//                     <>
//                         <p>{value.name}</p>
//                         <p>{value.main.temp} °C</p>
//                     </>
//                 ) : (
//                     <p>Not found</p>
//                 )
//             )}

//     </div>
//   )
// }

// export default Weather

// (value.main!== undefined)?(
//   <>
//   <p>{value.name}</p>
//   <p>{value.main.temp}</p>
//   </>
// ):("not found")}



import React, { useState } from 'react';

const Weather = () => {
    const api = {
        key: "51ae3f7c4b5c795e931cb7846f1f91b3",
        url: "https://api.openweathermap.org/data/2.5/weather"
    };

    const [search, setSearch] = useState("");
    const [value, setValue] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Error state

    function enter(x) {
        if (x.key === "Enter") {
            searchWeather();
        }
    }

    function searchWeather() {
        setLoading(true); // Set loading to true when starting to fetch
        setError(null); // Reset error state before making a new request

        fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
            .then(response => { 
                if (!response.ok) {
                    throw new Error('City not found'); // Handle response errors
                }
                return response.json();
            })
            .then(val => {
                setValue(val);
                setLoading(false); // Stop loading once data is received
            })
            .catch(err => {
                setError(err.message); // Set error message
                setLoading(false); // Stop loading on error
            });
    }

    return (
        <div>
            <section>
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={enter}
                />
                <button onClick={searchWeather}>Search</button>
            </section>
            {loading ? ( // Show loading indicator when fetching data
                <p>Loading...</p>
            ) : error ? ( // Show error message if there's an error
                <p> {error}</p>
            ) : (
                value.main ? ( // Check if the main property exists
                    <>
                        <p>{value.name}</p>
                        <p>{value.main.temp} °C</p>
                    </>
                ) : (
                    !error && !loading
                )
            )}
        </div>
    );
}

export default Weather;

