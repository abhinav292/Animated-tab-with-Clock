const tabs = document.querySelectorAll(".tab");

const indicator = document.querySelector(".indicator");

const indicator_drop = document.querySelector(".indicator-drop");

tabs.forEach((el) => el.addEventListener("click", clickTab));

const active_tab = document.querySelector("input:checked + label");
indicator.style.left = `${active_tab.offsetLeft + 12}px`;
indicator.style.backgroundColor = "#e2921a";
indicator.style.setProperty("--indicator", "#e2921a");

indicator_drop.style.left = "31px";
indicator_drop.style.top = "75px";
indicator_drop.style.opacity = "0";


function clickTab() {
  let active_tab = document.querySelector("input:checked + label");
  indicator.style.left = `${active_tab.offsetLeft + 12}px`;
  let active_tab_number = active_tab.getAttribute("for");

  indicator.className = "indicator indicator-animation";

  setTimeout(() => {
    indicator_drop.style.top = "55px";
    indicator_drop.style.left = `${active_tab.offsetLeft + 18}px`;
    indicator_drop.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    indicator_drop.style.top = "75px";
    indicator_drop.style.left = "31px";
    indicator_drop.style.opacity = "0";
  }, 500);

  setTimeout(() => {
    indicator.className = "indicator";
  }, 500);

  switch (active_tab_number) {
    case "tab-one":
      indicator.style.backgroundColor = "#e18e1c";
      indicator.style.setProperty("--indicator", "#e18e1c");
      break;
    case "tab-two":
      indicator.style.backgroundColor = "#e3911a";
      indicator.style.setProperty("--indicator", "#e3911a");
      break;
    case "tab-three":
      indicator.style.backgroundColor = "#e1921a";
      indicator.style.setProperty("--indicator", "#e1921a");
      break;
    case "tab-four":
      indicator.style.backgroundColor = "#e39519";
      indicator.style.setProperty("--indicator", "#e39519");
      break;
    default:
      indicator.style.backgroundColor = "#e18e1c";
      indicator.style.setProperty("--indicator", "#e18e1c");
  }
}

// Get the tab elements
const tabOne = document.getElementById('tab-one');
const tabTwo = document.getElementById('tab-two');
const tabThree = document.getElementById('tab-three');

// Get the input box element
const inputBox = document.getElementById('input-box');

// Add event listeners to the tab elements
tabOne.addEventListener('click', () => {
  // Clear the input box value
  inputBox.value = '';
});

tabTwo.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/abhinav292/', '_blank');
});

tabThree.addEventListener('click', () => {
  window.open('https://www.instagram.com/daffy_shadow/', '_blank');
});








var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))

var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function updateTime () {
  var now = new Date
  
  var lastHours = last.getHours().toString()
  var nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }
  
  var lastMinutes = last.getMinutes().toString()
  var nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }
  
  var lastSeconds = last.getSeconds().toString()
  var nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds)
  }
  
  last = now
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  var time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 100)