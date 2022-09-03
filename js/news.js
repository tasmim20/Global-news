// const newsCategories = async() =>{
//     const url = `https://openapi.programming-hero.com/api/news/categories`
//     const res = await fetch(url);
//     const data = await res.json();
//     // displayNews(news.news);
//     displayNews(data.data);
// }
// const displayNews = categories =>{
//     const newsContainer = document.getElementById('news-container');
//     // categories.forEach(category => {
//     //     const newsAnchor = document.getElementById('a');
//     //     newsAnchor.classList.add('nav-link');
//     //     newsAnchor.innerText = ''
//     // });
//     for(const category of categories){
//     console.log(category);
//     const newsPara = document.createElement('p');
//     newsPara.classList.add('nav-link');
//     newsPara.innerText = `news name`;
//     newsContainer.appendChild(newsPara);
//     }


//     // const newsAnchor = document.getElementById('a');
//     // // newsAnchor.classList.add('nav-link active');
//     // newsAnchor.innerText = 'a';
//     // newsContainer.appendChild(newsAnchor);
   
// }
// newsCategories();