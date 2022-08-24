import React from 'react'

const ApiData = () => {

    async function omdbMovies() {
        let tbody = document.getElementById('tbody')
        let moviename = document.getElementById('moviename').value
        console.log(moviename);
    
        try {
            let movies = await fetch(`http://www.omdbapi.com/?s=${moviename}&apikey=433d68d9`)
            movies = await movies.json()
            movies = movies.Search
            movies.map(({
                Title,
                Year,
                Poster
            }, ) => {
                return tbody.innerHTML +=             
                    
    ` 
    <div id='api-card'>
    <img height="300px" width="200px" src=${Poster} alt="">
    <h1 id="title">${Title}</h1>
    <h1 id="Year">${Year}</h1>  
    </div>
     `
            })
        } catch (err) {
            console.log(err);
        }
    
    }

  return (
    <>


<div class="main">
            <input type="search" onkeyup="omdbMovies1()" list="movie" placeholder="Enter Movie name" id="moviename"/>

<button onClick={omdbMovies} id='Api-Search-btn'>Search</button>

<div className='Api-Card'>

    <img src=""/>

</div>
   
<table>    
    <tbody id="tbody">
    </tbody>
</table>


<div id="search">
    
    <datalist id="movie">

 </datalist>
    
</div>
</div>
  
    </>
  )
}

export default ApiData