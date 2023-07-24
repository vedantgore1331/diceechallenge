var randomNumber=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var img1change="images/dice"+randomNumber+".png";
document.querySelector(".img1").setAttribute("src",img1change);

var img1change2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",img1change2);


if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}

else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}

else
{
    document.querySelector("h1").innerHTML="Draw";
}