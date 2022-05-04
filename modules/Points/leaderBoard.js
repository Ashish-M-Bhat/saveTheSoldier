import fetchAPI from "../fetchAPI.js";

// Creates a table using the top5UsersPointsArray array
const displayLeaderBoard = (top5UsersPointsArray) =>{
    const leaderBoard = document.querySelector('#leaderBoard');

    let table = document.createElement('table');
    table.innerHTML = `<tr> <th> User </th> <th> Points </th> </tr>`;

    top5UsersPointsArray.forEach(eachpointEntry =>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${eachpointEntry.userId}</td><td>${eachpointEntry.points}</td>`;
        if(localStorage.getItem('userId') && localStorage.getItem('userId')=== eachpointEntry.userId)
        tr.classList.add('highlightCurrentUserOnLeaderBoard');
        table.appendChild(tr);
    });

    leaderBoard.appendChild(table);
}

// IIFE, that fetches all the points
// The post fetch function then gets the top 5 points and then calls displayLeaderBoard
(function getallUserPoints (){

    const transformData = (dataFromPointsDB) =>{
        let allUsersPointsArray = [];
        for(let key in dataFromPointsDB){
            allUsersPointsArray.push(dataFromPointsDB[key]);
        }
        allUsersPointsArray.sort((a,b)=> b.points-a.points);
        const top5UsersPointsArray = [...allUsersPointsArray.slice(0,5)];
        displayLeaderBoard(top5UsersPointsArray)

    }

    const requestConfig = {
        url:'https://react-http-bf239-default-rtdb.firebaseio.com/points.json',
        method:'GET'
    };

    const satisfyFetchRequest = fetchAPI(transformData);

    satisfyFetchRequest(requestConfig);


})();