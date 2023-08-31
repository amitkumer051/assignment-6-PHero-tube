const loadButton = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json();
    
    const tabContainer = document.getElementById('tab-container');
    const tabData = data.data;
    tabData.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML=`
        <a class="tab bg-slate-200 hover:bg-red-600 hover:text-white my-6 mx-2 rounded-md">${element.category}</a>
        `
        // console.log(element);
        tabContainer.appendChild(div)
    });

}

loadButton()