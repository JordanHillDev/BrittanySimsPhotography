const body = document.body;
const mobileNav = body.querySelector("#mobileNav");
const mobileMenuLink = body.querySelector("#mobileMenuLink");
const workDropdownListItem = body.querySelector('#workDropdownListItem')
const workDropdown = body.querySelector('#workDropdown')
const selectCategoryDropdown = body.querySelector('#selectCategory')

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

selectCategoryDropdown.addEventListener('change', function(e) {
    console.log('it has changed')
    const imgGallery = body.querySelector('#adminImgGallery')
    const images = imgGallery.querySelectorAll('.adminImgWrapper')
    const selected = e.target.value

    images.forEach(img => console.log(img.dataset.category))
    if(selected === 'all') {
        images.forEach(img => img.style.display = '')
    } else {
        const imagesToHide = [...images].filter(img => img.dataset.category !== selected)
        const imagesToShow = [...images].filter(img => img.dataset.category === selected)
        console.log(selected, imagesToShow)
        imagesToHide.forEach(img => img.style.display='none')
        imagesToShow.forEach(img => img.style.display = '')
    }
})