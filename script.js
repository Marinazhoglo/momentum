// DOM Elements
const time = document.querySelector('.time');
    greeting = document.querySelector('.greeting');
    yourName = document.querySelector('.name');
    focus = document.querySelector('.focus');

    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const speed = document.querySelector('.speed');
    const humidity = document.querySelector('.humidity');
    const city = document.querySelector('.city');

//Clear Content
const clearContent = (e) => {
    e.target.innerText = '';
}


// Create a function to show the time
function showTime() {
    let today = new Date();
        day = today.getDay();
        date = today.getDate();
        month = today.getMonth();
        hour = today.getHours();
        min = today.getMinutes();
        sec = today.getSeconds();

    function getWeekDay(day) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return days[day];
    }

    let dayName = getWeekDay(day);

    function getMonthName(month) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return months[month];
    }

    let monthName = getMonthName(month);

    //Output Time
    time.innerHTML = `${dayName}, ${date} ${monthName} ${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}


// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Greeting
function setGreeting() {
    let today = new Date();
        hour = today.getHours();

    if (hour >= 6 && hour < 12) {
        greeting.textContent = 'Good Morning,';
        document.body.style.color = 'white';
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = 'Good Afternoon,';
    } else if  (hour >= 18 && hour < 24) {         
        greeting.textContent = 'Good Evening,';
        document.body.style.color = 'white';
    } else {
        greeting.textContent = 'Good Night,';
        document.body.style.color = 'white';
    }
}

// Set Background 
function setBackground(hour) {
    // let today = new Date();
    //     hour = today.getHours();

    if (hour >= 6 && hour < 12) {
        if (hour == 6) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/morning/01.jpg')";
        } else if (hour == 7) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/morning/02.jpg')";
        } else if (hour == 8) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/morning/03.jpg')";
        } else if (hour == 9) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/morning/04.jpg')";
        } else if (hour == 10) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/morning/05.jpg')";
        } else {
            document.body.style.backgroundImage = "url('../momentum/assets/images/morning/06.jpg')";
        }  
    } else if (hour >= 12 && hour < 18) {
       if (hour == 12) {
        document.body.style.backgroundImage = "url('../momentum/assets/images/day/01.jpg')";
        } else if (hour == 13) {
           document.body.style.backgroundImage = "url('../momentum/assets/images/day/02.jpg')";
        } else if (hour == 14) {
           document.body.style.backgroundImage = "url('../momentum/assets/images/day/03.jpg')";
        } else if (hour == 15) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/day/04.jpg')";
        } else if (hour == 16) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/day/05.jpg')";
        } else  {
            document.body.style.backgroundImage = "url('../momentum/assets/images/day/06.jpg')";
        }            
    } else if (hour >= 18 && hour < 24) {
        if (hour == 18) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/evening/01.jpg')";
        } else if (hour == 19) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/evening/02.jpg')";
        } else if (hour == 20) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/evening/03.jpg')";
        } else if (hour == 21) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/evening/04.jpg')";
        } else if (hour == 22) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/evening/05.jpg')";
        } else {
            document.body.style.backgroundImage = "url('../momentum/assets/images/evening/06.jpg')";
        }            
    } else {
        if (hour == 1) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/night/01.jpg')";
        } else if (hour == 2) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/night/02.jpg')";
        } else if (hour == 3) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/night/03.jpg')";
        } else if (hour == 4) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/night/04.jpg')";
        } else if (hour == 5) {
            document.body.style.backgroundImage = "url('../momentum/assets/images/night/05.jpg')";
        } else {
            document.body.style.backgroundImage = "url('../momentum/assets/images/night/06.jpg')";
        }
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        yourName.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        yourName.textContent = '[Enter Name]';
    } else {
        yourName.textContent = localStorage.getItem('name');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Change Background
function changeBackground() {
    let today = new Date(),
        hour = today.getHours();
    
    for(let i = hour; i < hour + 24; i++) {
        setBackground(hour + 1);
        hour++;
    }
}
// Weather
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=b0b0d076d44cc4ddb42dcc7fd5038172&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
  
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    speed.textContent = `${data.wind.speed}m/c`;
    humidity.textContent = `${data.main.humidity}%`;
}

function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
}

// Blockquote
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.quote-button');

async function getQuote() {  
    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
    const res = await fetch(url);
    const data = await res.json(); 
    blockquote.textContent = data.quoteText;
    figcaption.textContent = data.quoteAuthor;
}

document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);



yourName.addEventListener('click', clearContent);
yourName.addEventListener('keypress', setName);
yourName.addEventListener('blur', setName);

focus.addEventListener('click', clearContent);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('click', clearContent);
city.addEventListener('keypress', setCity);

// Run
showTime();
setGreeting()
setBackground(hour);
getName();
getFocus();