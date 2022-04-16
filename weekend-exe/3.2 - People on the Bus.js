const busStations = [
   [15, 0], // first station: get on = 15, get off = 0
   [10, 5], // first station: get on = 10, get off = 5 (20 on the bus)
   [5, 20], // first station: get on = 5, get off = 20 (20 on the bus), result -> 5 peoples
 ]

 const getPeoplesCountAfterLastStation = (busStations) => {

  let peopleCount = 0;
  
  for(station of busStations){  
    peopleCount += station[0];
    peopleCount -= station[1];
  }
  return peopleCount;
 }
 

console.log(getPeoplesCountAfterLastStation(busStations));