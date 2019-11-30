const listOpener = document.getElementById('listOpener');
const navigation = document.getElementsByClassName('header__top-navigation_menu-list')[0];

listOpener.addEventListener('click', function () {
    navigation.classList.toggle('show')
})

let cuisinesArr = [...cuisinesInfo];

const cuisines = document.getElementById('cuisinesList');

const createCuisinesList = (cousinObj) => {

    const cuisinesH3 = document.createElement('h3');
    cuisinesH3.innerHTML = `BROWSE BY CUISINES`;
    cuisines.append(cuisinesH3);


    const cuisinesGallery = document.createElement('div');
    cuisinesGallery.className = 'cuisines__gallery';
    cuisines.append(cuisinesGallery);

    const cuisinesItem = document.createElement('div');
    cuisinesItem.className = 'cuisines__gallery-item';
    cuisinesItem.style.background = `url(images/${cousinObj.img})`
    cuisinesGallery.append(cuisinesItem);


    const cuisinesSpan = document.createElement('span');
    cuisinesSpan.innerHTML = `${cousinObj.count} Recipes`;
    cuisinesItem.append(cuisinesSpan);

    const cuisinesH2 = document.createElement('h2');
    cuisinesH2.innerHTML = `${cousinObj.title}`;
    cuisinesItem.append(cuisinesH2);
}

const renderCuisines = (arr) => {
    cuisines.innerHTML = '';
    arr.forEach(cuisine => {
        createCuisinesList(cuisine)
    })
}

renderCuisines(cuisinesArr);





$(document).ready(function () {

    // Sliders 

    $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
});