// alert()

// categories 
function loadCategory() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data))

}

function loadAllCategories() {
  fetch("https://fakestoreapi.com/products")
    .then((cate) => cate.json())
    .then((date) => displayAllCategories(date))
}

const displayAllCategories = (cards) => {
  // console.log(cards);
  const categoriesContainer = document.getElementById("categories-container")

  cards.forEach(cards => {
    const categoryCard = document.createElement('div')
    categoryCard.innerHTML = `
              <div class="card bg-base-100 shadow-sm">
                <figure>
                    <img class="w-full h-[450px] object-fill "  src="${cards.image}" />
                </figure>
                <div class="grid grid-cols-2 justify-between gap-5">
                    <span class="badge badge-xs px-3 py-2 bg-gray-400 text-blue-700">
                   ${cards.category}</span>
                    <p class="text-end font-light"><i class="fa-regular fa-star text-amber-300"></i> <span
                            class="badge badge-xs text-xl">
                            $${cards.rating.rate} (${cards.rating.count})</span></p>
                </div>
                <div class="card-body">
                    <p class="font-medium">
                    ${cards.title}</p>
                    <p class="font-bold">$ ${cards.price}</p>
                    <div class="card-actions justify-around">
                        <button class="btn "><i class="fa-regular fa-eye"></i>
                            <a>Details</a></button>
                        <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>
                            Shope</button>
                    </div>
                </div>
            </div>
     `

    categoriesContainer.append(categoryCard)

  });

}

/*  */
function displayCategory(categories) {

  const AllCategory = document.getElementById("categories")
  for (let category of categories) {
    const categoryDiv = document.createElement('div')
    categoryDiv.innerHTML = `
      <button class="btn btn-sm rounded-3xl px-5 hover:bg-blue-500 hover:text-white">${category}</button>
      `;
    AllCategory.append(categoryDiv);

  }

}


loadCategory()
// loadAllCategories()