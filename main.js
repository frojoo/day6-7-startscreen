const QUOTES = "quotes";

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

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "열심히 살지맙시다",
        "그래도 열심히 살아야지.",
        "열심히 살면 뭐해",
        "열심히 살면 반드시 빛이 온다",
      ])
    );

    savedQuotes = localStorage.getItem(QUOTES);
  }

  let quotesArray = JSON.parse(savedQuotes);
  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");

  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    return; //값을 넣지 않으면 초기화
  }

  let savedQuotes = localStorage.getItem(QUOTES);

  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerHTML = `<span>${newQuotesInput.value}</span>`; //innerText는 텍스트만 넣을 수 있는데 innerHTML은 스타일까지 먹일 수 있음
  newQuotes.style.display = "none";
}
