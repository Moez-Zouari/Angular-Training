import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coach
let theCoaches : Coach[] = [];


// Add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);


for (let tempCoaches of theCoaches){
    console.log(tempCoaches.getDailyWorkout());
}
