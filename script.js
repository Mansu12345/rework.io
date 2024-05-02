//데이터 불러옴


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzIxZGQ2MjA4OTJjZjViNjY2OTg3ODU0YmZlYjU4NyIsInN1YiI6IjY2MmI2OTg1NmUwZDcyMDExYzFmOWMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._dgDTMZHJBv2EzFTixtjpsRGEAu0X7ABz1lHPWvUiQs'
  }
}; 
  
  async function test() { 
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200', options)
    const data = await response.json();
    console.log("async & await ;", data);

    const container = document.getElementById('div');

  data.results.forEach(item => { 
    
    
    const card= document.createElement('section');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = item.title;

    const body = document.createElement('p');
    body.textContent = item.body;

     

    card.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);

    
  });
  }

  test();
//완료
/*
async function renderData() {
  const cardList = document.querySelector('.card-list');
  const data = await cardList.json();
  console.log("async & await ;", data);


  if(!data) {
    return;
  }
}
 
  renderData();
*/
  function buttonActive() {
    test();
  }



