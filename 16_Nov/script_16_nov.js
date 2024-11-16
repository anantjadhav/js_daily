let balance = 7000;

if (balance > 8000) {
    console.log("You have money to go for trip.");
} else {
    console.log("You don't have enough money to go for trip.");
}

// switch case example

let age = 15;

const time = new Date();
const greetingOptions = { hour: "numeric" };
const formattedTime = time.toLocaleTimeString("en-US", greetingOptions);
const hour = time.getHours();

document.querySelector(".liveTime").innerHTML = formattedTime;

if (hour >= 6 && hour < 12) {
    document.querySelector(".result").innerHTML = "Good Morning";
} else if (hour >= 12 && hour < 16) {
    document.querySelector(".result").innerHTML = "Good Afternoon";
} else if (hour >= 16 && hour < 24) {
    document.querySelector(".result").innerHTML = "Good Evening";
} else if (hour >= 0 && hour < 6) {
    document.querySelector(".result").innerHTML = "Good Night";
}

// show date in the html page

const date = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const formattedDate = date.toLocaleDateString("en-US", options);
document.querySelector(".DateandTime").innerHTML = formattedDate;

// show time in the html page

setInterval(() => {
    const time = new Date();
    const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
    const formattedTime = time.toLocaleTimeString("en-US", timeOptions);
    document.querySelector(".liveTime").innerHTML = formattedTime;
}, 1000);

let myFood = "chocolate cake";

if (myFood == "apple" || myFood == "banana") {
    document.querySelector(".fruit").innerHTML = "Eat fruits everyday to keep you healthy.";
}

if (myFood == "chocolate cake") {
    document.querySelector(".fruit").innerHTML = "Enjoy the sweet treat.";
}
