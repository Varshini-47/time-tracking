const qsa = (param) => document.querySelectorAll(param);
const qs = (param) => document.querySelector(param);
const iconElipsis = qsa(".subject img");
const daily = qs(".daily");
const weekly = qs(".weekly");
const monthly = qs(".monthly");
const subjectsArray = qsa(".subject");
const arrayHoursText = document.querySelectorAll(".texthrs");
const lastHoursArr = document.querySelectorAll(".prevhrs");
const prevTextArr = document.querySelectorAll(".prevtext");
const url = "./data.json";

const darkmodetoggle = document.querySelector("#darkmode-toggle");
const attribution = document.querySelector(".attribution");

darkmodetoggle.addEventListener("click", () => {
    document.body.classList.toggle('darkmode');
    attribution.style.color = "White";
});
fetch(url)
    .then((response) => response.json())
    .then((data) => (finalData = data));

daily.addEventListener("click", () => {
    monthly.classList.toggle("activee", false);
    weekly.classList.toggle("activee", false);
    daily.classList.toggle("activee");
    for (let index = 0; index <= 5; index++) {
        subjectsArray[index].innerHTML = finalData[index].title;
        arrayHoursText[index].innerHTML = finalData[index].timeframes.daily.current;
        lastHoursArr[index].innerHTML = finalData[index].timeframes.daily.previous;
        prevTextArr[index].innerHTML = "Yesterday-";
    }
});

weekly.addEventListener("click", () => {
    monthly.classList.toggle("activee", false);
    daily.classList.toggle("activee", false);
    weekly.classList.toggle("activee");
    for (let index = 0; index <= 5; index++) {
        subjectsArray[index].innerHTML = finalData[index].title;
        arrayHoursText[index].innerHTML = finalData[index].timeframes.weekly.current;
        lastHoursArr[index].innerHTML = finalData[index].timeframes.weekly.previous;
        prevTextArr[index].innerHTML = "Last Week-";
    }
});

monthly.addEventListener("click", () => {
    daily.classList.toggle("activee", false);
    weekly.classList.toggle("activee", false);
    monthly.classList.toggle("activee");
    for (let index = 0; index <= 5; index++) {
        subjectsArray[index].innerHTML = finalData[index].title;
        arrayHoursText[index].innerHTML = finalData[index].timeframes.monthly.current;
        lastHoursArr[index].innerHTML = finalData[index].timeframes.monthly.previous;
        prevTextArr[index].innerHTML = "Last Month-";
    }
});
