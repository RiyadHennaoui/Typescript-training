import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";


let cricketCoach = new CricketCoach();
console.log(cricketCoach.getDailyWorkout());
let golfCoach = new GolfCoach();
console.log(golfCoach.getDailyWorkout());

let theCoaches: Coach[] = [];

theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);

for( let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}
