function hoverOut(img) {
    img.src="Assets/down arrow.png"
}
function hover(img) {
    img.src="Assets/fillDown arrow.png"   
    
}


//this is java script for slider

function Change(fileName) {
    let img = document.querySelector("#bannerImg");
    if (fileName) {
        img.setAttribute("src", fileName);
    } else {
        img.setAttribute("src", "img1.jpg"); // Set default image here
    }
}