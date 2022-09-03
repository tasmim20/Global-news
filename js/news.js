
const loadData = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllData(data.data.news_category))
        .catch(error => alert(error))
}


const displayAllData = categories => {

    const navContainer = document.getElementById('nav-container');
    categories.forEach(category => {

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<a onclick="setDataById('${category.category_id}')"> ${category.category_name} </a>`
        navContainer.appendChild(div)
    
    })
}
loadData()