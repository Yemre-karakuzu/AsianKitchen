const menuList = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

const AllFootİtems = document.getElementById("All");
const Koreaootİtems = document.getElementById("Korea");
const Japanootİtems = document.getElementById("Japan");
const Chinaootİtems = document.getElementById("China");
const menu = document.querySelector(".section-center")
const section = document.querySelector(".section-center")
allFoot()
AllFootİtems.focus()

AllFootİtems.addEventListener("click", allFoot);
Koreaootİtems.addEventListener("click", koreaFoot);
Japanootİtems.addEventListener("click", japanFoot);
Chinaootİtems.addEventListener("click", chinaFoot);

function allFoot() {
    clearDom()
    menuList.forEach(element => {
        const foot = document.createElement('div');
        const footPhoto = document.createElement("div")
        const footPhotoItem = document.createElement("img")
        const footText = document.createElement("div")
        const footTitle = document.createElement("div")
        const footTitleItem = document.createElement("h4")
        const footPriceItem = document.createElement("h4")
        const footInfo = document.createElement("div")
        const footInfoItem = document.createElement("div")
        foot.className = 'menu-items'
        footText.className = 'menu-text'
        footPhoto.className = 'photo'
        footPhotoItem.className = 'photoItem'
        footTitle.className = 'menu-title '
        footInfo.className = 'menu-info'
        footPhotoItem.src = `${element.img}`
        footTitleItem.innerHTML = `${element.title}`
        footPriceItem.innerHTML = `${element.price}`
        footInfo.innerHTML = `${element.desc}`
        footTitle.appendChild(footTitleItem)
        footTitle.appendChild(footPriceItem)
        footInfo.appendChild(footInfoItem)
        footText.appendChild(footTitle)
        footText.appendChild(footInfo)
        footPhoto.appendChild(footPhotoItem)
        foot.appendChild(footPhoto)
        foot.appendChild(footText)
            // foot.appendChild(footInfo)
        menu.appendChild(foot)
    });
}

function koreaFoot() {
    clearDom()
    const koreaFootLisy = menuList.filter(category => category.category == "Korea")
    koreaFootLisy.forEach(element => {
        const foot = document.createElement('div');
        const footPhoto = document.createElement("div")
        const footPhotoItem = document.createElement("img")
        const footText = document.createElement("div")
        const footTitle = document.createElement("div")
        const footTitleItem = document.createElement("h4")
        const footPriceItem = document.createElement("h4")
        const footInfo = document.createElement("div")
        const footInfoItem = document.createElement("div")
        foot.className = 'menu-items'
        footText.className = 'menu-text'
        footPhoto.className = 'photo'
        footPhotoItem.className = 'photoItem'
        footTitle.className = 'menu-title '
        footInfo.className = 'menu-info'
        footPhotoItem.src = `${element.img}`
        footTitleItem.innerHTML = `${element.title}`
        footPriceItem.innerHTML = `${element.price}`
        footInfo.innerHTML = `${element.desc}`
        footTitle.appendChild(footTitleItem)
        footTitle.appendChild(footPriceItem)
        footInfo.appendChild(footInfoItem)
        footText.appendChild(footTitle)
        footText.appendChild(footInfo)
        footPhoto.appendChild(footPhotoItem)
        foot.appendChild(footPhoto)
        foot.appendChild(footText)
            // foot.appendChild(footInfo)
        menu.appendChild(foot)
    });
}

function japanFoot() {
    clearDom()
    const japanFootLisy = menuList.filter(category => category.category == "Japan")
    japanFootLisy.forEach(element => {
        const foot = document.createElement('div');
        const footPhoto = document.createElement("div")
        const footPhotoItem = document.createElement("img")
        const footText = document.createElement("div")
        const footTitle = document.createElement("div")
        const footTitleItem = document.createElement("h4")
        const footPriceItem = document.createElement("h4")
        const footInfo = document.createElement("div")
        const footInfoItem = document.createElement("div")
        foot.className = 'menu-items'
        footText.className = 'menu-text'
        footPhoto.className = 'photo'
        footPhotoItem.className = 'photoItem'
        footTitle.className = 'menu-title '
        footInfo.className = 'menu-info'
        footPhotoItem.src = `${element.img}`
        footTitleItem.innerHTML = `${element.title}`
        footPriceItem.innerHTML = `${element.price}`
        footInfo.innerHTML = `${element.desc}`
        footTitle.appendChild(footTitleItem)
        footTitle.appendChild(footPriceItem)
        footInfo.appendChild(footInfoItem)
        footText.appendChild(footTitle)
        footText.appendChild(footInfo)
        footPhoto.appendChild(footPhotoItem)
        foot.appendChild(footPhoto)
        foot.appendChild(footText)
            // foot.appendChild(footInfo)
        menu.appendChild(foot)
    });
}

function chinaFoot() {
    clearDom()
    const chinaFootLisy = menuList.filter(category => category.category == "China")
    chinaFootLisy.forEach(element => {
        const foot = document.createElement('div');
        const footPhoto = document.createElement("div")
        const footPhotoItem = document.createElement("img")
        const footText = document.createElement("div")
        const footTitle = document.createElement("div")
        const footTitleItem = document.createElement("h4")
        const footPriceItem = document.createElement("h4")
        const footInfo = document.createElement("div")
        const footInfoItem = document.createElement("div")
        foot.className = 'menu-items'
        footText.className = 'menu-text'
        footPhoto.className = 'photo'
        footPhotoItem.className = 'photoItem'
        footTitle.className = 'menu-title '
        footInfo.className = 'menu-info'
        footPhotoItem.src = `${element.img}`
        footTitleItem.innerHTML = `${element.title}`
        footPriceItem.innerHTML = `${element.price}`
        footInfo.innerHTML = `${element.desc}`
        footTitle.appendChild(footTitleItem)
        footTitle.appendChild(footPriceItem)
        footInfo.appendChild(footInfoItem)
        footText.appendChild(footTitle)
        footText.appendChild(footInfo)
        footPhoto.appendChild(footPhotoItem)
        foot.appendChild(footPhoto)
        foot.appendChild(footText)
            // foot.appendChild(footInfo)
        menu.appendChild(foot)
    });
}

function clearDom() {
    const foot = document.querySelectorAll(".menu-items")
    foot.forEach(element => {
        element.remove()
    });
    // foot.remove()
}