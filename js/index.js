var intervalID;
var color = "red";
var myColors = ["red", "yellow", "orange", "DodgerBlue", "Magenta", "LimeGreen"]
var specialWord = ["#company", "#technology","#projects", "#name","#graduate", "#uofa", "#mathematics", "#ComputerScience",  "#fullstack", "#team", "#unknown" ];
var idx;
var pidx = -1

function animate(){
    if (pidx > -1) {$(specialWord[pidx]).css({'color': '#FFFFFF'})} //set color back to white
    txtcolor = "yellow"; //myColors[Math.floor(Math.random() * (myColors.length))]
    idx = Math.floor(Math.random() * (specialWord.length)) 
    console.log(specialWord[idx]);
    $(specialWord[idx]).css({'color': txtcolor});
    pidx = idx;
}
function run(){
    intervalID = setInterval(animate,(3 * 1000));
    console.log("set inteval to call animate id " & intervalID);
};

$(document).ready(function(){
    console.log("invoked run")
    run();
    
    $(".contact").on("click",function(){
        console.log("btn clicked");
        $("#exampleModal").modal('show');
    });
})