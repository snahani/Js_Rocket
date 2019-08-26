// JavaScript Code is here ...


var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat1',
        'seat2',
        'seat3',
        'seat4'
    ],
    switchCar: function(isOn) {
        if (isOn == true) {
            this.isTurnedOn = true;
            console.log("turn car ON");
        } else {
            this.isTurnedOn = false;
            console.log("car is Off");
        }
    },
    fly = function() {
        alert("TakeOff your car!!!")
    }
};