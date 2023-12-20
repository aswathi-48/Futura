// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Work.css'


// const Work = () => {
//   const [movies, setMovies] = useState([]);
//   const [movieName, setMovieName] = useState('');
//   const [directorName, setDirectorName] = useState('');


//   useEffect=()=>{
//       const data=async()=>{
         
//       }
//   }

//   const addData=()=>{
//     console.log({movieName,directorName});
//     if (directorName.trim() === '' || movieName.trim() === '') {
//       alert('Please enter both director and movie names.');
//       return;
//     }

//     // Create a new movie object with the entered data
//     const newMovie = {
//       director: directorName,
//       movie: movieName,
//     };

//     // Update the movies state by adding the new movie to the existing array
//     setMovies((prevMovies) => [...prevMovies, newMovie]);

//     setDirectorName('');
//     setMovieName('');
//   }

 

//   return (
//     <div>
//       <div className='main-one'>
//         <div className='inp-detail'>
//         <input type="text"  placeholder="director name"value={directorName} onChange={(e) => setDirectorName(e.target.value)} />
//         <input type="text" placeholder="movie name" value={movieName}onChange={(e) => setMovieName(e.target.value)}/>
//         <button onClick={addData} className='add-btn'>Add</button>
//         </div>
//       </div>
//       <div>
//         <h2>Added Movies:</h2>
//         <ul>
//           {movies.map((movie, index) => (
//             <li key={index}>
//               Director: {movie.director}, Movie: {movie.movie}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//       <input type="text"  placeholder="Please Enter"value='' />
//   </div>
//     </div>
//   );







import React, { useState } from 'react';
import './Work.css'


const Work = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [directorName, setDirectorName] = useState('');
  const [value,setValue]=useState()
  const [moviePrint,setMoviePrint]=useState([])


  const addData=()=>{
    console.log({movieName,directorName});
    if (directorName.trim() === '' || movieName.trim() === '') {
      alert('Please enter both director and movie names.');
      return;
    }
    // Create a new movie object with the entered data
    const newMovie = {
      director: directorName,
      movie: movieName,
    };

    // Update the movies state by adding the new movie to the existing array
    setMovies((prevMovies) => [...prevMovies, newMovie]);

    setDirectorName('');
    setMovieName('');
  }

  const findHandler = () => {
    console.log(value);

    // Filter movies based on the director's name
    const directorHandler = movies.filter((movie) => value === movie.director);

    console.log("****", directorHandler);

    // Set the filtered movies to moviePrint state
    setMoviePrint(directorHandler);
  };

 

  return (
    <div>
      <div className='main-one'>
        <div className='main-head'>
          <h3>Details Added</h3>
        </div>
        <div className='inp-detail'>
        <input type="text"  placeholder="director name"value={directorName} onChange={(e) => setDirectorName(e.target.value)} />
        <input type="text" placeholder="movie name" value={movieName}onChange={(e) => setMovieName(e.target.value)}/>
        <button onClick={addData} className='add-btn'>Add</button>
        </div>
      </div>
      <div>
        <h2>Added Movies:</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              Director: {movie.director}, Movie: {movie.movie}
            </li>
          ))}
        </ul>
      </div>

      <div>

      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={findHandler}>Find</button>
      <p>
          {moviePrint.map((li, index) => (
            <p key={index}>
              {li.movie} directed by {li.director}
            </p>
          ))}
        </p>
     
  </div>
    </div>
  );























// const [formData, setFormData] = useState({
//   director: '',
//   movie: '',
 
// });

// // Step 4: Handle Input Changes
// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

// // Step 6: Handle Submission
// const handleSubmit = () => {
//   // You can perform actions like sending data to a server or updating global state here
//   console.log('Director:', formData.director);
//   console.log('Movie:', formData.movie);
  
//   // For a more advanced application, you might want to send the data to a server or update global state.
// };

// return (
//   <div>
//     {/* Step 3: Create Input Fields */}
//     <label>
//       Director:
//       <input
//         type="text"
//         name="director"
//         value={formData.director}
//         onChange={handleInputChange}
//       />
//     </label>
//     <br />
//     <label>
//       Movie:
//       <input
//         type="text"
//         name="movie"
//         value={formData.movie}
//         onChange={handleInputChange}
//       />
//     </label>
//     <br />


//     {/* Step 5: Submit Data */}
//     <button onClick={handleSubmit}>Submit</button>
//   </div>
// );
};

export default Work;