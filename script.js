const chaptersbutton = document.querySelector('#Chapters')
const bookmarksbutton = document.querySelector('#Bookmark')
const savedsbutton = document.querySelector('#Saved')
const randomsbutton = document.querySelector('#Random')
const locationsbutton = document.querySelector('#location')
const results = document.querySelector('.results')
const results2 = document.querySelector('.results2')
const results3 = document.querySelector('.results3')
const results4 = document.querySelector('.results4')
const results5 = document.querySelector('.results5')


chaptersbutton.addEventListener('click', async() => {
    try {
    results.innerHTML = ''
    const apiUrl = `http://api.alquran.cloud/v1/surah`;
    const res = await axios.get(`${apiUrl}`)
    console.log(res.data)
    let chapters = res.data.data
    console.log(chapters)
    if (chapters) {
        chapters.forEach((chapter) =>{
          results.innerHTML += `<div class="results"> 
         <h2> ${chapter.number} </h2>
          <h1> ${chapter.name} </h1>
          <h3> ${chapter.englishName} </h3>
          <h3> ${chapter.englishNameTranslation} </h3>
          <h3> ${chapter.numberOfAyahs} </h3>
          <h3> ${chapter.revelationType} </h3>
          </div>`})
        }
    }
     catch (error) {
        console.error('Error fetching chapters:', error)
    }
})

// bookmarksbutton.addEventListener('click', async () => {
//     try {
//       results2.innerHTML = '';
//       let min = 1;
//       let max = 114;
//       let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//       console.log(randomNum);
//       const apiUrl = `http://api.alquran.cloud/v1/quran/en.asad`;
//       const res = await axios.get(apiUrl);
//       console.log(res.data);
//       let bookmarks = res.data.data;
//       console.log(bookmarks);
//       if (bookmarks) {
//         bookmarks.surahs.forEach((surah) => {
//           surah.ayahs.forEach((ayah) => {
//             results2.innerHTML += `<div class="card">
//               <p>${ayah.text}</p>
//             </div>`;
//           });
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching chapters:', error);
//     }
//   });
  
  
bookmarksbutton.addEventListener('click', async() => {
    // try {
    // let min = 1
    // let max = 114
    // let randomNum = Math.floor(Math.random()*(max-min+1))+min
    // console.log(randomNum)
    // const apiUrl = `http://api.alquran.cloud/v1/quran/en.asad`;
    // const res = await axios.get(`${apiUrl}`)
    // console.log(res.data)
    // let bookmarks = res.data.data
    // console.log(bookmarks)
    // // if (bookmarks) {
    // //     bookmarks.forEach((bookmark) =>{
    // //       results2.innerHTML += `<div class="card"> 
    // //      <h1> ${bookmark.name} </h1>
    // //       </div>`})
    // //     }
    // if (bookmarks) {
    //     results2.innerHTML += `<div class="card"> 
    //    <h1> ${bookmarks.surahs} </h1>
    //     </div>`
    //   }
    try {
        results2.innerHTML = ''
        let min = 1
        let max = 114
        let randomNum = Math.floor(Math.random()*(max-min+1))+min
        console.log(randomNum)
        const apiUrl = `http://api.alquran.cloud/v1/quran/en.asad`;
        const res = await axios.get(`${apiUrl}`)
        console.log(res.data)
        let bookmarks = res.data.data
        console.log(bookmarks)
        if (bookmarks) {
              results2.innerHTML += `<div class="card"> 
             <h1> ${bookmarks.surahs.ayahs} </h1>
              </div>`
            }
    }
     catch (error) {
        console.error('Error fetching chapters:', error)
    }
})

savedsbutton.addEventListener('click', async() => {
    try {
    const apiUrl = `http://api.alquran.cloud/v1/surah`;
    const res = await axios.get(`${apiUrl}`)
    console.log(res.data)
    let saveds = res.data.data
    console.log(saveds)
    if (saveds) {
        saveds.forEach((saved) =>{
          results3.innerHTML += `<div class="card"> 
         <h1> ${saved.name} </h1>
          </div>`})
        }
    }
     catch (error) {
        console.error('Error fetching chapters:', error)
    }
})

const randoms = []
randomsbutton.addEventListener('click', async() => {
    try {
    results4.innerHTML = ''
    let min = 1
    let max = 6236
    let randomNum = Math.floor(Math.random()*(max-min+1))+min
    console.log(randomNum)
    const apiUrl = `http://api.alquran.cloud/v1/ayah/${randomNum}`;
    const res = await axios.get(`${apiUrl}`)
    console.log(res.data)
    let randoms = res.data.data
    console.log(randoms)
    if (randoms) {
          results4.innerHTML += `<div class="card"> 
         <h1> ${randoms.text} </h1>
         <h2> ${randoms.surah.englishName}: ${randoms.surah.number}</h2>
          </div>`
        }
    }
     catch (error) {
        console.error('Error fetching chapters:', error)
    }
})

locationsbutton.addEventListener('click', async() => {
    try {
    results.innerHTML = ''
    const apiUrl = `http://localhost:3001/api/locations`;
    const res = await axios.get(`${apiUrl}`)
    console.log(res.data)
    let locations = res.data.data
    console.log(locations)
    if (locations) {
        locations.forEach((location) =>{
          results.innerHTML += `<div class="card"> 
         <h2> ${location} </h2>
          </div>`})
        }
    }
     catch (error) {
        console.error('Error fetching chapters:', error)
    }
})
