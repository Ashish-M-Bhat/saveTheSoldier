import fetchAPI from "../fetchAPI.js";

const transformData = (data) => {
    console.log(data);
    location.reload();
    setTimeout(()=>location.reload(), 1000);
}

// This is called after a game, only if the user is logged in
// Add (POST) the points to the DB
export default function addPointsToDB(points){
    console.log("Adding Points to DB...");
    const userId = localStorage.getItem('userId');
    const requestConfig =   {
                                url:'https://react-http-bf239-default-rtdb.firebaseio.com/points.json',
                                method:'POST',
                                body:JSON.stringify({'userId':userId,'points':points}),
                                headers:{
                                    'Context-Type':'application/json'
                                }
                            }

    const satisfyFetchRequest = fetchAPI(transformData);

    satisfyFetchRequest(requestConfig);

}