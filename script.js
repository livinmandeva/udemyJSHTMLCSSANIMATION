'use strict';
// function jqueryTag() {
//   alert("hello mandeva");
// }

function sumofTwo() {
  var a = $('#num1').val();
  var s = $('#num12').val();
  var c = parseInt(a) + parseInt(s);
  $('#num123').val(c);
}
const juicename = 'livin';
let g = {};
let ishavedrivinglicence = Boolean(g);
if (ishavedrivinglicence) {
  console.log('condition is true');
  var data = datalog(5, 10);
  console.log(data);
} else {
  console.log('condition is false');
}
function datalog(apple, mango) {
  const juicetheam = 'juice with' + apple + 'apple and' + mango + 'banana';
  return juicetheam;
}
//
// Retirment
const currentageofhuman = function (age) {
  let humanage = 2022 - age;
  return humanage;
};
const howmanyyeaersod = function (name, birthdate) {
  const age = currentageofhuman(birthdate);
  const juicename = 'adinarayana';
  if (age <= 65) {
    console.log('his not retirted');
  } else {
    console.log('his  retirted');
  }
  return age;
};
console.log(howmanyyeaersod('livin', 1997));
//averages
const averages = (a, b, c) => (a + b + c) / 3;
console.log(averages(3, 3, 3));
//Arrays
const frined = [1, 2, 3, 30];
const friend2 = [8, 9, 10];
friend2[2] = 20;
const merge = [...frined, ...friend2];
console.log(merge);
const arryLIst = new Array(1994, 1996, 1995, 1994);
const listyears = new Array('1457', '555', '582', '888');
console.log(new Array(...arryLIst, ...listyears));

const sunnumber = (a, b, c) => {
  return a + b + c;
};
const sumarray = [sunnumber(1, 3, 4), sunnumber(4, 5, 6)];
console.log(sumarray);
listyears.push('livn mandeva');
listyears.push('sravyagoud');
listyears.unshift('guna');
console.log(listyears);
/////objects in js
const obj = {
  name: 'livin',
  age: 25,
  phone: '7569084614',
  workplace: 'srs fintech labs',
  friends: ['livn', 'swapna', 'ayansh'],
};

var livinfriends = obj['friends'];
for (var i = 0; i < livinfriends.length; i++) {
  console.log(livinfriends[i]);
}

////TEMPERATURE

const tempe = function () {
  const mesurment = {
    type: 'tem',
    unit: 'celsius',
    value: prompt('enter value in degree'),
  };

  // console.warn(mesurment.value);
  // console.error(mesurment.value);
  // console.table(mesurment);

  const valinkelvin = parseInt(mesurment.value) + parseInt(273);
  return valinkelvin;
};

const printforecast = function (aru) {
  var teminfo =
    aru[0] +
    '~ in 1 days...' +
    aru[1] +
    '~ in 2 days...' +
    aru[2] +
    '~ in 3 days...';
  return teminfo;
};

console.log(printforecast([17, 21, 23]));

function submitfunction() {
  var enternumber = document.querySelector('.gussno').value;
  var randomNo = Math.floor(Math.random() * 10) + 1;

  console.log(enternumber, randomNo);
  document.querySelector('.enterednumbervalues').textContent = enternumber;

  if (enternumber == randomNo) {
    document.querySelector('.wincontent').classList.remove('hidden');
    document.querySelector('.numscore').textContent = '100';
    document.querySelector('.Numtittle').textContent = '100';
    document.querySelector('.Numhint').textContent = 'Correct Value';
  } else if (enternumber > randomNo) {
    document.querySelector('.Numhint').textContent = 'Low value';

    parseInt(enternumber) - parseInt(50);
  } else if (enternumber < randomNo) {
    document.querySelector('.Numhint').textContent = 'high value';
    document.querySelector('.numscore').textContent =
      parseInt(enternumber) + parseInt(50);
  } else {
    alert('something went wrong');
  }
}

function claeallevent() {
  document.querySelector('.gussno').textContent = 'Enter the Number';
  document.querySelector('.wincontent').classList.add('hidden');
  document.querySelector('.numscore').textContent = '0';
  document.querySelector('.Numtittle').textContent = '0';
  document.querySelector('.Numhint').textContent = 'Start';
  document.querySelector('.enterednumbervalues').textContent = '0';
}
