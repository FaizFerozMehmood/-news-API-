let getDiv = document.getElementById('getDiv');

fetch(`https://newsapi.org/v2/everything?q=karachi&from=2024-05-27&sortBy=publishedAt&apiKey=78eeb81244cd4d79a1ab6bf2ed4d089f`)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.articles.length; i++) {
      const article = data.articles[i];
      console.log(article);
      getDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description}</p>
            <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>
          </div>
        </div>`; 
    }
  })
  .catch(err => console.log(err));
