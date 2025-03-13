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
        console.log(cat.category);
    });
}
