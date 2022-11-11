const body = document.body;
const mobileNav = body.querySelector("#mobileNav");
const mobileMenuLink = body.querySelector("#mobileMenuLink");
const workDropdownListItem = body.querySelector('#workDropdownListItem')
const workDropdown = body.querySelector('#workDropdown')
const imageWrappers = body.querySelectorAll('.img_container')
const modal = body.querySelector('#modal')
const modalImg = body.querySelector('#modalImg') 
const closeModalButton = body.querySelector('#closeModalButton')

// <==== Mobile Menu Button ====>
mobileMenuLink.addEventListener("click", toggleMobileNav);

mobileNav.style.height = "0px"
function toggleMobileNav() {
    mobileNav.style.height === "0px"
    ? (mobileNav.style.height = "250px")
    : (mobileNav.style.height = "0px");
}

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
    modalImg.srcset = img.srcset
    currImg = img.srcset
}))

// <==== Image Modal Last / Next Buttons ====>
const lastButton = body.querySelector('#lastButton')
const nextButton = body.querySelector('#nextButton')
const imgSrcArr = []
imageWrappers.forEach(el => imgSrcArr.push(el.childNodes[1].srcset))

nextButton.addEventListener('click', function(e){
    modalImg.srcset = imgSrcArr[((imgSrcArr.indexOf(currImg) + 1) % imgSrcArr.length + imgSrcArr.length) % imgSrcArr.length]
    currImg = modalImg.srcset
})

lastButton.addEventListener('click', function(e){
    modalImg.srcset = imgSrcArr[((imgSrcArr.indexOf(currImg) - 1) % imgSrcArr.length + imgSrcArr.length) % imgSrcArr.length]
    currImg = modalImg.srcset
})

