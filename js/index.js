const loadButton = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');
    const tabData = data.data;
    tabData.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleContent('${element.category_id}')" class="tab bg-slate-200 hover:bg-red-600 hover:text-white my-6 mx-2 rounded-md">${element.category}</a>
        `
        console.log(element);
        tabContainer.appendChild(div)
    });

}

const handleContent = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const contentData = data.data;
    console.log(contentData);
    
    const cardContainer = document.getElementById('card-contaner')
    cardContainer.innerHTML='';
    
    contentData.forEach(content => {
    const div = document.createElement('div')
    div.classList= `card card-compact  bg-base-100 shadow-xl`
    div.innerHTML = `
    <figure><img src="${content.thumbnail
    }" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        </div>
                    </div>
    
    `
        cardContainer.appendChild(div);

    })

}



loadButton()