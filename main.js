var One =document.getElementById("one");
var Two =document.getElementById("two");

var quotes=[
  {
    p1:"\"It's not what happens to you, but how you react to it that matters.\"",
    p2:"--Epictetus"
  }
  ,
  {
    p1:"\"The best revenge is massive success.\"",
    p2:"--Frank Sinatra"
  }
  ,
  {
    p1:"\"Resentment is like drinking poison and waiting for your enemies to die.\"",
    p2:"--Nelson Mandela"
  }
  ,
  {
    p1:"\"You miss 100% of the shots you don't take.\"",
    p2:"--Wayne Gretzy"
  }
  ,
  {
    p1:"\"Do not take life too seriously. You will not get out alive.\"",
    p2:"--Elbert Hubbard"
  }
]
var previousNum = -1;
function generate(){
  do{
  var rand = Math.floor(Math.random() * quotes.length );
  }
  while(rand === previousNum)
  previousNum = rand;
  One.innerHTML = quotes[rand].p1;
  Two.innerHTML = quotes[rand].p2;
}


