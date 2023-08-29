//API URL

const API_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/songs'


//write funciton called fetchAllSongs that will fetch all songs 
//return them as json

const fetchAllSongs = async () => {
    try{
        const response = await fetch(API_URL);
        const allSongs = await response.json();
        return allSongs;
    }catch(error){
        console.log(error);
    };
};

const renderAllSongs = (songs) => {
    const songContainer = document.querySelector('#song-container');
    songContainer.innerHTML='';
    songs.forEach((song) => {
        const songElement = document.createElement('div');
        songElement.innerHTML =`
            <h2> Title: ${song.title}</h2>
            <p>Release Date: ${song.releaseDate}</P>
            <p>${song.length.hours} hours and ${song.length.minutes} </P>
        `
        songContainer.append(songElement);
    });
}

const addNewSong = async (song) => {
    try{
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(song)
        });
        const newSong = await response.json();
        return newSong;
    } catch (error){
        console.error(error);
    }
};

// const renderNewSongForm = () => {
//     //place form into div
//     const formContainer= document.querySelector('#new-song-form');
//     //create form element
//     const songForm = document.createElement('form');
//     //title lable and input
//     const titleLabel = document.createElement('label');
//     titleLabel.htmlFor = 'title';
//     titleLabel.textContent ='Title';

//     const titleInput = document.createElement('input');
//     titleInput.type = 'text';
//     titleInput.id = 'title';
//     titleInput.name = 'title';
//     titleInput.placeholder = "Enter title here"
//     //artist label and input
//     const artistLabel = document.createElement('label');
//     artistLabel.htmlFor = 'artist';
//     artistLabel.textContent ='Artist';

//     const artistInput = document.createElement('input');
//     artistInput.type = 'text';
//     artistInput.id = 'artist';
//     artistInput.name = 'artist';
//     artistInput.placeholder = "Enter artist here"
//     //genre lable and input
//     const genreLabel = document.createElement('label');
//     genreLabel.htmlFor = 'genre';
//     genreLabel.textContent ='genre';

//     const genreInput = document.createElement('input');
//     genreInput.type = 'text';
//     genreInput.id = 'genre';
//     genreInput.name = 'genre';
//     genreInput.placeholder = "Enter genre here"
//     //release date label and input
//     const releaseDateLabel = document.createElement('label');
//     releaseDateLabel.htmlFor = 'releaseDate';
//     releaseDateLabel.textContent ='releaseDate';

//     const releaseDateInput = document.createElement('input');
//     releaseDateInput.type = 'date';
//     releaseDateInput.id = 'releaseDate';
//     releaseDateInput.name = 'releaseDate';
//     releaseDateInput.placeholder = "Enter release date here"

//     //submit button
//     const submitButton = document.createElement('button');
//     submitButton.type = 'submit';
//     submitButton.textContent = 'Submit'

//     //append the form
//     songForm.append(
//         formContainer,
//         titleLabel,
//         titleInput,
//         artistLabel,
//         artistInput,
//         genreLabel,
//         genreInput,
//         releaseDateLabel,
//         releaseDateInput,
//         submitButton,
//     );

//     songForm.addEventListener('submit', async (event) => {
//         event.preventDefault();

//         const form = event.target;

//         const songData = {
//             title : form.title.value,
//             artits: form.artist.value,
//             genre: form.genre.value,
//             releaseDate : form.releaseDate.value,
//         }
//         await addNewSong(songData);
//         const songs = await fetchAllSongs();
//         renderAllSongs(songs);
//     })
//         renderNewSongForm.appendChild(songForm);
    const newSongForm = document.querySelector('#new-song-form');
    newSongForm.innerHTML = `
      <form>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
        <label for="artist">Artist</label>
        <input type="text" name="artist" id="artist" />
        <label for="genre">Genre</label>
        <input type="text" name="genre" id="genre" />
        <label for="release-date">Release Date</label>
        <input type="date" name="release-date" id="release-date" />
        <button type="submit">Submit</button>
      </form>
    `;
  

//create async init funciton 
// Call the `fetchAllSongs` function inside your `init` function
//  and console.log the result. 
// You should see an array of all songs in your browser console.
const init = async () => {
    const songs = await fetchAllSongs();
    console.log(songs);
    renderAllSongs(songs);
    renderNewSongForm();
    console.log(renderNewSongForm());
}

//call the init function
init();
