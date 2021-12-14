let noOFCharact = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    //If text length is less that noOfCharact...then hide the read more button
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.getElementsByClassName.display = "none";
    }
    else{
        let displayText = content.textContent.slice (0, noOfCharac);
        let moreText = content.textContent.slice (noOfCharac);
        content.innerHTML = `${displayText}<span class ="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
        let article = btn.parentElement;
        article.querySelector(".dots").classList.toggle("hide");
        postMessage.querySelector(".more").classList.toggle("hide");
        btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}