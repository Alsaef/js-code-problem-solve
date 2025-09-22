// Problem 1: Determine the Day Type (Weekday or Weekend)
let day='Saturday'

if (day==='Saturday'||day==='Sunday') {
    console.log('Weekend');
}else{
    console.log('weekday');
}

// Problem 2: Traffic Light Simulator

let light='red'

if (light==='red') {
    console.log('stop');
} else if (light==='yellow') {
    console.log("Prepare to stop");
} else if (light==='green') {
    console.log('go');
}else{
    console.log('Invalid color');
}

// Problem 3: Check Temperature

let temp=31

if (temp>30) {
    console.log('hot');
}else if (temp>=15&&temp<=30) {
     console.log("Moderate");
}else{
    console.log('cold');
}


// Problem 4: Simple Login Check

let username='admin'

let password='12345'

if (username==='admin'&&password==='12345') {
    console.log('Login Successful');
}else{
    console.log('login Failed');
}