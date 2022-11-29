//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

let returnFirstTwoDrivers = (drivers) => [...drivers].slice(0, 2);

let returnLastTwoDrivers = (drivers) => [...drivers].slice(drivers.length - 2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = (multiplier) => {
    function fareMultiplier(fare) {
        return fare * multiplier
    }
    return fareMultiplier;
};

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (drivers, selectingFunction) =>
    selectingFunction(drivers);