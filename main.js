function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();
  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  let seconds = String(newDate.getSeconds()).padStart(2, "0");

  /* 한자릿수일때 두자리수로 만들어주기
    if (seconds.toString().length === 1) {
      seconds = "0" + seconds;
    }
  */

  //time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}
getTime();

/*setInterval() => {
    //위의 ()와 {}똑같이 배치, 90% 동일
    let i = 0;
    console.log("setInterval");
  }, 1000); //1000ms = 1s
  */

setInterval(getTime, 1000); //시간이 흘러가게 만듦
