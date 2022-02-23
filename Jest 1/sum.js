function sum(a,b) {
    return a+b
} ;

function kilometerToMeter(distanceInKilometer){
   return  distanceInKilometer * 1000
}

function meterToKilometer(distanceInMeter) {
    return distanceInMeter / 1000
}


function circumference(radius) {
    return 2 * Math.PI * radius
}

// console.log(kilometerToMeter(3));
console.log(circumference(10));

// module.exports = {sum,} ;
module.exports = {kilometerToMeter,
meterToKilometer, circumference}

