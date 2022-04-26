"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let cricketCoach = new CricketCoach_1.CricketCoach();
console.log(cricketCoach.getDailyWorkout());
let golfCoach = new GolfCoach_1.GolfCoach();
console.log(golfCoach.getDailyWorkout());
let theCoaches = [];
theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
