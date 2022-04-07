export default function displayModal(htmlContent, id, timeoutInMs=1000){
    var modal = document.createElement("div");
    modal.id = id;
    modal.innerHTML = htmlContent;
    setTimeout(function(){
        modal.parentNode.removeChild(modal);
    },500);

    document.body.appendChild(modal);
}
