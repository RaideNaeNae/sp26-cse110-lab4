let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let carType in statistics) {
    // Check if the property name starts with 'r' 
    // OR if the value is odd (value % 2 is not 0)
    if (carType[0] === 'r' || statistics[carType] % 2 !== 0) {
        console.log(statistics[carType]);
    }
}