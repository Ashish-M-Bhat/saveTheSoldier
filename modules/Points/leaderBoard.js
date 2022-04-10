import fetchAPI from "../fetchAPI.js";

const displayLeaderBoard = (allUsersPointsArray) =>{
    const leaderBoard = document.querySelector('#leaderBoard');

    let table = document.createElement('table');
    table.innerHTML = `<tr> <th> User </th> <th> Points </th> </tr>`;

    allUsersPointsArray.forEach(eachpointEntry =>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${eachpointEntry.userId}</td><td>${eachpointEntry.points}</td>`;
        if(localStorage.getItem('userId') && localStorage.getItem('userId')=== eachpointEntry.userId)
        tr.classList.add('highlightCurrentUserOnLeaderBoard');
        table.appendChild(tr);
    });

    leaderBoard.appendChild(table);
}
(function getUserPoints (){

    const transformData = (dataFromPointsDB) =>{
        let allUsersPointsArray = [];
        for(let key in dataFromPointsDB){
            allUsersPointsArray.push(dataFromPointsDB[key]);
        }
        allUsersPointsArray.sort((a,b)=> b.points-a.points);
        allUsersPointsArray = [...allUsersPointsArray.slice(0,5)];
        displayLeaderBoard(allUsersPointsArray)

    }

    const requestConfig = {
        url:'https://react-http-bf239-default-rtdb.firebaseio.com/points.json',
        method:'GET'
    };

    const satisfyFetchRequest = fetchAPI(transformData);

    satisfyFetchRequest(requestConfig);


})();