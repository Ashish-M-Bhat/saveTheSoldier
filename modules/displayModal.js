// Displays a modal. The caller has to give the content, styling, positioning of the modal on the screen and the timeout after which the modal needs to be gone.
// Timout defaulted to 1s

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