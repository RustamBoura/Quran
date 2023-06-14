const chaptersbutton = document.querySelector('#Chapters')
const bookmarkbutton = document.querySelector('#Bookmark')
const savedbutton = document.querySelector('#Saved')
const randombutton = document.querySelector('#Random')
const results = document.querySelector('.results')

chaptersbutton.addEventListener('click', async() => {
    try {
    // const response = await axios.get('http://localhost:3001/chapters');
    // const chapters = response.data.chapters;
    const apiUrl = `http://api.alquran.cloud/v1/surah`;
    const res = await axios.get(`${apiUrl}`)
    console.log(res.data)
    let chapters = res.data.data

    console.log(chapters)
    if (chapters) {
        chapters.forEach((chapter) =>{
          results.innerHTML += `<div class="card"> 
         <h1> ${chapter.name} </h1>
          </div>`})
        }
    // const newPageUrl = `newpage.html?apiUrl=${encodeURIComponent(apiUrl)}`;
    // window.location.href = newPageUrl;
    }
     catch (error) {
        console.error('Error fetching chapters:', error)
    }
})