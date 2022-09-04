
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

const setDataById = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))
        .catch(error => alert(error))
}


const displayDetails = details => {
    const detail = details.data;





    //a Found total Category section start  ------
    const displayTotalCategory = document.getElementById('display-category')
    const noFound = document.getElementById('warning-massage')

    if (detail.length === 0) {
        noFound.classList.remove('d-none')
    }
    else {
        noFound.classList.add('d-none')
    }

    displayTotalCategory.innerHTML = `
                 <div class="py-4 ps-5 fs-3 p-2 bg-success text-dark bg-opacity-10 fw-semibold border border-info rounded-2">
                     Total  ${detail.length} items found for this category  !!! 
                </div>`
    // Found total Category section end------


    //Display News Card section 

    const displayCategory = document.getElementById('details-body')
    displayCategory.textContent = '';
    detail.forEach(element => {
        const div = document.createElement('div')

        div.innerHTML = `
                <div class="card mb-4 shadow-lg">
                    <div class="row">
                        <div class="col-md-4 p-5">
                            <img class="text-center" src="${element.thumbnail_url}" style="height:300px;" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 pb-2 pt-5 ">
                            <div class="card-body">
                                    <h3 class="card-title"> ${element.title}</h3>
                                    <p class="card-text"> ${element.details.slice(0, 350)}... </p>

                                
                                    <div class="d-flex d-inline-flex align-items-sm-start  justify-content-center mt-3">
                                        <div class="mt-4 d-flex"> 
                                             <img class="rounded-pill " src="${element.author.img}" alt="" width="60" height="60">
                                             <p class="lh-sm pt-3 px-2"> ${element.author.name ? element.author.name : 'Author-name not found'}</p> 
                                        </div>

                                     <div class="d-flex justify-content-center">

                                     
                                     <div class=" mt-5 mx-5 d-flex"> 
                                   <h5 class="pe-2"><span><i class="fa-regular fa-eye"></i></span></h5> 
                                   <h5>${element.total_view ? element.total_view : 'not view found'}M</h5>
                                     </div>

                                     <div class="p-5 me-5 "> 
                                     <button onclick="setDataById('${element.category_id}')"  type="button" class="btn bg-white border-primary text-primary" data-bs-toggle="modal" 
                                      data-bs-target="#exampleModal"> View Details</button>
                                      </div>

                                      
                                  </button>
                                     </div>


                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            `
        displayCategory.appendChild(div);

        // Modal section start ---------

        const modalBody = document.getElementById('modal-body')
        modalBody.innerHTML = `
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${element.title.slice(0, 50)}...</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            
                        </div>
                        <div class="modal-body">
                        <img class="text-center" src="${element.author.img}" style=" height: 200px; width: 200px;border-radius: 50%; margin-left:100px" class="img-fluid rounded-start" alt="...">
                            <h4>Rating : ${element.rating.number} </h4>
                            <h4>Badge : ${element.rating.badge} </h4>
                            <h4>Author : ${element.author.name ? element.author.name : 'name not found'} </h4>
                            <h4>Total View: ${element.total_view ? element.total_view : 'not view found'} </h4>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>`

    });

}

//spinner ----------

const toggleSpinner = isLoading => {
    const loadingSection = document.getElementById('spinner');
    if (isLoading) {
        // loadingSection.classList.remove('d-none')

    }
    else {
        loadingSection.classList.add('d-none')
    }
}



// bonus-part: blog Question

document.getElementById('blog').addEventListener('click', function () {
    const anserBody = document.getElementById('question section')
    anserBody.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <h4> Q1.Differences between var, let, and const ?</h4>

    <div class="container text-center ">
        <div class="row ">
            <div class="col shadow-lg m-2">
                <h3>Var</h3>
                <hr>
                <p>The scope of a var variable is functional scope.</p>
                <p>It can be updated and re-declared into the scope.</p>
                <p>It can be declared without initialization.</p>

            </div>
            <div class="col shadow-lg m-2">
                <h3>Let</h3>
                <hr>
                <p>The scope of a let variable is block scope.</p>
                <p>It can be updated but cannot be re-declared into the scope.</p>
                <p>It can be declared without initialization.</p>
            </div>
            <div class="col shadow-lg m-2">
                <h3>Const</h3>
                <hr>
                <p>The scope of a const variable is block scope.</p>
                <p>It cannot be updated or re-declared into the scope.</p>
                <p>It cannot be declared without initialization.</p>
            </div>
        </div>

    </div>


    <div class="border py-3">
        <h4>Q2. Why we use template String ?</h4>
        <div class="shadow-lg m-2 p-4">
            <p>Template strings are a powerful feature of modern JavaScript released in ES6. It lets us insert/interpolate variables and expressions into strings without needing to concatenate like in older versions of JavaScript. It allows us to create strings that are complex and contain dynamic elements.
            .</p>
        </div>
    </div>


    <div class="border py-3">
        <h4>Q3. Differences Between Arrow and Regular Functions ?</h4>
        <div class="shadow-lg m-2 p-4">
            <p>
            Understanding the differences between regular and arrow functions helps choose the right syntax for specific needs.
             this value inside a regular function is dynamic and depends on the invocation. But this inside
                the arrow function is bound lexically and equals to this of the outer function.

                arguments object inside the regular functions contains the list of arguments. The arrow
                function, on the opposite, doesn't define arguments (but you can easily access the arrow
                function arguments using a rest parameter ...args).

            </p>
        </div>
    </div>
 
 `
    anserBody.appendChild(div)
})



