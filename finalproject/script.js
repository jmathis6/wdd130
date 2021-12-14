let noOFCharact = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    //If text length is less that noOfCharact...then hide the read more button
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.getElementsByClassName.display = "none";
    }
    else{
        let displayText = content.textConetnt.slice (0, noOfCharac);
        let moreText = content.textContent
    }
})