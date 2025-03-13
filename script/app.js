// Fetch All Pet Categories
const getCategoriesData = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
        const data = await response.json()
        displayCategoriesData(data.categories);
    }
    catch {
        console.log('Here is an Error');
    }
}
getCategoriesData()
const displayCategoriesData = (categories) => {
    categories.forEach(cat => {
        const allBtn = document.getElementById('all-btn')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = ` 
        <button class="flex items-center btn border-2 p-2 md:p-6"><img class="w-5 md:w-8" src="${cat.category_icon}" alt="this is category image"> ${cat.category}</button>
        `
        allBtn.appendChild(newDiv)
    });
}


const getSingleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/category/dog')
    const data = await response.json()
    displaySingleCategory(data.data);
}
getSingleCategory()

const displaySingleCategory = (singleData) => {
    singleData.forEach(dat => {
        console.log(dat.petId);
        const oneData = document.getElementById('one-data')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
            <!-- card  -->
                <div class="p-3 border-2 rounded-lg">
                    <img class="rounded-md md:rounded-xl" src="${dat.image}" alt="this is pets img">
                    <h3 class="text-lg md:text-xl font-bold mt-2 mb-1 md:mt-4">${dat.pet_name}</h3>
                    <div class="space-y-1 border-b-2 pb-3">
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/birth.svg"
                                alt="">Breed: ${dat.breed}</p>
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/breed.svg"
                                alt="">Birth: ${dat.date_of_birth}</p>
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/gender.svg"
                                alt="">Gender: ${dat.gender}</p>
                        <p class="flex gap-2 items-center text-primary-color"><img src="./assets/price.svg"
                                alt="">Price: ${dat.price}</p>

                    </div>
                    <!-- bottom  -->
                    <div class="pt-2 flex items-center justify-between">
                        <button class="btn border-2 px-3 rounded-lg"><img src="./assets/like.svg" alt=""></button>
                        <button class="btn border-2 px-3 rounded-lg text-btn-bg">Adopt</button>
                        <button class="btn border-2 px-3 rounded-lg text-btn-bg">Details</button>
                    </div>

                </div>
        `
        oneData.appendChild(newDiv)

    });
}