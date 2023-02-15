//1
let d2 = new Date("2012-02-20T03:12");
alert( d2 );

//2
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); 
alert( getWeekDay(date) );

//3
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
}

//4
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); 
  alert( getLastDayOfMonth(2012, 1) ); 
  alert( getLastDayOfMonth(2013, 1) );

  //5
  function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; 
    return Math.round(diff / 1000); 
}

alert( getSecondsToday() );

//6
