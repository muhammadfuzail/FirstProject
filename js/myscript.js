/****search bar icon script */
const searchbar = document.querySelector(".fa-search");
const stext = document.querySelector(".search-text")

searchbar.addEventListener("click", function(){
    
    searchtoggle();
    
});

function searchtoggle(){
  if(stext.classList.contains("sremove")){
    console.log("yes here");
    stext.classList.remove("sremove");
    stext.classList.contains("search-text");
    
  }
  else{
    
    stext.classList.add("sremove");
    
  }
 }

 /******toggle button */
const menu = document.querySelector(".menu");//target nav class
const menuMain = menu.querySelector(".menu-main");// target ul class
const goBack = menu.querySelector(".go-back"); //target goback button
const menuTrigger = document.querySelector(".mobile-menu-trigger");//target toggle buttton
const closeMenu = menu.querySelector(".mobile-menu-close");//target close button

let subMenu;

menuMain.addEventListener("click", function(e){
  if(!menu.classList.contains("active")){
    return;
  }
  if(e.target.closest(".menu-item-has-children")){
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});

goBack.addEventListener("click", function(){
  hideSubMenu()
})
menuTrigger.addEventListener("click", function(){
   toggleMenu();
})
closeMenu.addEventListener("click", function(){
       toggleMenu();
})

function toggleMenu(){
  menu.classList.toggle("active")
  document.querySelector(".menu-overlay").classList.toggle("active");
  
}

function showSubMenu(hasChildren){
  const z = hasChildren
  //console.log(z);
  
  subMenu = hasChildren.querySelector(".sub-menu");
  //console.log(subMenu);
 
  subMenu.classList.add("active");

  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  
  const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  //console.log(menuTitle);

  menu.querySelector(".current-menu-title").innerHTML=menuTitle;
  
  menu.querySelector(".mobile-menu-head").classList.add("active");
}
function  hideSubMenu(){
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout( function(){
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML="";
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

window.onresize = function(){
  if(this.innerWidth >991){
    if(menu.classList.contains("active")){
      toggleMenu();
    }

  }
}

/*****slider */
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btnNext");
const prevBtn = document.querySelector(".btnPrev");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  const a = counter++;
  const b = slides.length;
  carousel();
  console.log(a,b);
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
  console.log("123");
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    //prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

/****filter btns */
const frmenu =[
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/New-Product/horlicks1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./img/New-Product/horlicks2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/New-Product/img-1.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./img/New-Product/img-2.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./img/New-Product/p1.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/New-Product/p2.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/New-Product/p3.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./img/New-Product/p4.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./img/New-Product/p1.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./img/New-Product/p2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "bison steak",
    category: "dinner1",
    price: 22.99,
    img: "./img/New-Product/p1.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./img/New-Product/p1.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

const sectionCenter = document.querySelector(".section-center");
const btncontainer = document.querySelector(".p-btn-container");

window.addEventListener("DOMContentLoaded", function(){
  
  displaymenuItems(frmenu);
  displayMenuButtons();
  //console.log("shake and baake");
  modelfunc();
  
});
function displaymenuItems(menuitem){
  let displayMenu = menuitem.map(function(item){
    //console.log(item);

    return `<article class="p-menu-item">
    <img src=${item.img} alt=${item.title} class="p-photo">
    <div class="p-item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="p-price">${item.price}</h4>
        </header>
        <p class="p-item-text">
           ${item.desc}
        </p>
    </div>
</article>`;
});
//console.log(displayMenu);
let testdisplaymenu = displayMenu.join("");
//console.log(testdisplaymenu);
sectionCenter.innerHTML = testdisplaymenu;
}

function displayMenuButtons(){
  const categories = frmenu.reduce(
    function (values, item) {
      
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values
    },["all"])
    //console.log(categories);

    const categoryBtn = categories.map(function(category){
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    
    })
    .join("");
    //console.log(categoryBtn);

    btncontainer.innerHTML = categoryBtn;
      const filterBtns = document.querySelectorAll(".filter-btn");
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
           //console.log(e.currentTarget.dataset.id);
           const category =e.currentTarget.dataset.id;
           const menuCategory = frmenu.filter(function(menuItem){
           //console.log(menuItem.category);
      
          if(menuItem.category === category){
              return menuItem;
              
              
            }
           });
           //console.log(menuCategory);
           if(category === 'all'){
            displaymenuItems(frmenu);
             //console.log(category);
           }
           else{
             displaymenuItems(menuCategory);
             //console.log(category)
           }
           //console.log(category);
        });
      });
}

/******model */
const modelBtn = document.querySelector(".model-btn");
const modelOver = document.querySelector(".model-overlay")
const closeBtn = document.querySelector(".close-btn")

function modelfunc(){
  modelBtn.addEventListener("click", function(){
    modelOver.classList.add("open-model");
 });
 closeBtn.addEventListener("click", function(){
  modelOver.classList.remove("open-model");
});
}










 








