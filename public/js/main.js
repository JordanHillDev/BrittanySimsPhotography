const body = document.body;
const mobileNav = body.querySelector("#mobileNav");
const mobileMenuLink = body.querySelector("#mobileMenuLink");
const workDropdownListItem = body.querySelector('#workDropdownListItem')
const workDropdown = body.querySelector('#workDropdown')
const imageWrappers = body.querySelectorAll('.img_container')
const modal = body.querySelector('#modal')
const modalImg = modal.querySelector('img')
const closeModalButton = body.querySelector('#closeModalButton')

// <==== Mobile Menu Button ====>
mobileMenuLink.addEventListener("click", function () {
    mobileNav.style.height === "0px"
        ? (mobileNav.style.height = "250px")
        : (mobileNav.style.height = "0px");
});

// <==== Dropdown List ==== >
workDropdownListItem.addEventListener('click', function() {
    workDropdown.classList.toggle('visibleMenu')
})

// <==== Close Modal Button ==== >
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none'
})


// <========== Image Modal ==========>
let currImg = ''
// <==== Click Image for Pop Up ====>
imageWrappers.forEach(el => el.addEventListener('click', function(){
    const img = el.querySelector('img')
    modal.style.display = 'flex'
    modalImg.src = img.src
    currImg = img.src
}))

// <==== Image Modal Last / Next Buttons ====>
const lastButton = body.querySelector('#lastButton')
const nextButton = body.querySelector('#nextButton')
const imgSrcArr = []
imageWrappers.forEach(el => imgSrcArr.push(el.childNodes[1].src))

nextButton.addEventListener('click', function(){
    modalImg.src = imgSrcArr[((imgSrcArr.indexOf(currImg) + 1) % imgSrcArr.length + imgSrcArr.length) % imgSrcArr.length]
    currImg = modalImg.src
})

lastButton.addEventListener('click', function(){
    modalImg.src = imgSrcArr[((imgSrcArr.indexOf(currImg) - 1) % imgSrcArr.length + imgSrcArr.length) % imgSrcArr.length]
    currImg = modalImg.src
})
