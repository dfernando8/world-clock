function updateTime() {
  // sydney date and time
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //  colombo date and time
  let colomboElement = document.querySelector("#colombo");
  let colomboDateElement = colomboElement.querySelector(".date");
  let colomboTimeElement = colomboElement.querySelector(".time");
  let colomboTime = moment().tz("Asia/Colombo");

  colomboDateElement.innerHTML = colomboTime.format("MMMM Do YYYY");
  colomboTimeElement.innerHTML = colomboTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
