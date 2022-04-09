import fetchAPI from "../fetchAPI.js";
import displayUserPoints from "./displayUserPoints.js";

(function getUserPoints (){
    const userId = localStorage.getItem('userId');

    const transformData = (dataFromPointsDB) =>{
        const userPointsArray = [];
        for(let key in dataFromPointsDB){
            if(dataFromPointsDB[key].userId === userId){
                userPointsArray.push(dataFromPointsDB[key])
            }
        }

        displayUserPoints(userId, userPointsArray);

    }

    const requestConfig = {
        url:'https://react-http-bf239-default-rtdb.firebaseio.com/points.json',
        method:'GET'
    };

    const satisfyFetchRequest = fetchAPI(transformData);

    satisfyFetchRequest(requestConfig);


})();