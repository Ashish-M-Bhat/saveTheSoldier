export default function displayModal(htmlContent, id, timeoutInMs=1000){
    var modal = document.createElement("div");
    modal.id = id;
    modal.innerHTML = htmlContent;
    setTimeout(function(){
        modal.parentNode.removeChild(modal);
    },timeoutInMs);

    document.body.appendChild(modal);
}

/*
    const restartButton = document.createElement('button');
    restartButton.innerHTML = 'Restart?';
    restartButton.onclick = () => location.reload();

    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.onclick = () => modal.parentNode.removeChild(modal);

    modal.appendChild(restartButton);
    modal.appendChild(closeButton);
*/