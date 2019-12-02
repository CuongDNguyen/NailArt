import moment from 'moment';

it('should display correct operation depending on hours', () => {
    let currentDate = moment().format('dddd');
    let currentTime = moment().format('LT');
    let [hour, time] = currentTime.split(' ');
    hour = parseInt(hour);
    if (currentDate !== 'Sunday') {
        if (time === 'AM') {
            if (hour >= 10) {
                console.log("we are open right now!");
            }
        } else if (time === 'PM') {
            if (hour != 12 && hour != 11 && hour <= 10) {
                console.log("we are open right now");
            } else {
                console.log("we are closed");
            }
        } else {
            console.log("incorrect time");
        }
    } else {
        console.log("Closed on Sunday");
    }
});