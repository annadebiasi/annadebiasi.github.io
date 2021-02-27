
// previews image
function showPreview(src) { 
    // make sure other preview images are removed
    document.querySelectorAll(".previewImage").forEach(el => el.remove());
 
    // limit scrolling
    document.body.style.overflow = 'hidden';
    // change background color
    document.getElementById('main').style.filter = 'blur(5px) brightness(0.5)';

    // create new temporary image
    var img = document.createElement('img'); 
    img.src = src;
    img.setAttribute("onclick", "removePreview(this)");
    img.classList.add('previewImage')
    img.style.filter = 'blur(0) brightness(1)';

    document.body.appendChild(img); 
}

// removes preview of image
function removePreview(img) { 
    document.getElementById('main').style.filter = 'blur(0) brightness(1)';
    document.body.style.overflow = 'scroll';
    img.remove();
}
    