import fetchAPI from "../fetchAPI.js";
import displayUserPoints from "./displayUserPoints.js";

(function getUserPoints (){
    const userId = localStorage.getItem('userId');

    const transformData = (dataFromPointsDB) =>{
        let id = 0, userPointsArray;
        // Get the user's entry from the DB
        for(let key in dataFromPointsDB){
            if(key === userId){
                userPointsArray = dataFromPointsDB[key];
                break;
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