/* A feladatban 4 válasz közül kell kiválasztani a helyeset. Jó válasz esetén zöld lesz, hibás válasznál  
piros a gomb. A jó választ is kiírja*/
document.getElementById("ellenoriz").style.display = "none";
document.getElementById("ujra").style.display = "none";
document.getElementById("megoldas").style.visibility = "hidden";
document.getElementById("helyesvalasz").style.visibility = "hidden";
document.getElementById("mondat").style.visibility = "hidden";
document.getElementById("szavak1").style.visibility = "hidden";
document.getElementById("szavak3").style.visibility = "hidden";
//document.getElementById("szavak4").style.visibility = "hidden";
document.getElementById("veletlen").style.visibility = "hidden";
document.getElementById("alertbox").style.display = "none"; 

szavak = [
    ["kö","eny","p","pp",2,"https://cdn.pixabay.com/photo/2019/09/25/11/56/power-4503462_960_720.jpg","köpeny"],
    ["ha","gat","l","ll",3,"https://cdn.pixabay.com/photo/2015/12/04/19/20/girl-1076998_960_720.jpg","hallgat"],
    ["utá","a","n","nn",2,"https://cdn.pixabay.com/photo/2016/10/16/00/36/one-against-all-1744091_960_720.jpg","utána"],
    ["ki","ebb","s","ss",2,"https://cdn.pixabay.com/photo/2017/07/23/13/57/friends-2531455_960_720.jpg","kisebb"],
    ["to","al","l","ll",3,"https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_960_720.jpg","tollal"],
]

var jovalasz = 0;
var rosszvalasz = 0;
var kerdesszam = 0;

//shuffles array of numbers 0 to 8
var szavaklong = szavak.length;

//document.getElementById("felso").innerHTML =  szavaklong +" / " + kerdesszam;

const element_array = [];
for (i = 0; i < szavaklong; i++) 
{
    element_array.push(i);
}

//első indításkor kialakítja a feladványok sorrendjét
var i = 0;
    var buffer = 0;
    // 100-szor keveri meg - két szám felcserélésével
    for (i = 0; i < 100; i++) 
    {
        //generates two random numbers, saves them as integers
        var first_location = Math.floor(Math.random() * szavaklong);
        var second_location = Math.floor(Math.random() * szavaklong);
        //saves the value in the randomly selected first location as buffer
        var buffer = element_array[first_location];
        //changes first location's value to second location's value
        element_array[first_location] = element_array[second_location];
        //changes second location's value to buffer value (original first location)
        element_array[second_location] = buffer;
        //presto, we now have 2 swapped numbers
    }

var sorszam = 0;
console.log(element_array);

function indit(){
    kerdesszam += 1;
    let viszonyszam = 100 / szavaklong;
    console.log("viszony" + viszonyszam);
    // progress bar programozása a kérdések számának jelöléséhez
    let $progressBar = $('.progress-bar');
    $progressBar.text(kerdesszam);
    // 30 kérdésre elosztva a 100%
    $progressBar.css('width', (viszonyszam * kerdesszam + '%'));
    //$progressBar.css('width', (kerdesszam * 100 / viszonyszam) + '%');

    //"képernyőtörlés"
    document.getElementById("mondat").innerHTML = "___";
    document.getElementById("valasz1").innerHTML = "";

    document.getElementById("szavak1").disabled = false;
    document.getElementById("szavak3").disabled = false;


    document.getElementById("szavak1").style.backgroundColor = "";
    document.getElementById("szavak3").style.backgroundColor = "";


    document.getElementById("helyesvalasz").style.visibility = "hidden";
    document.getElementById("mondat").style.visibility = "visible";
    document.getElementById("szavak1").style.visibility = "visible";
    document.getElementById("szavak3").style.visibility = "visible";
    document.getElementById("indit").style.display = "block";
    document.getElementById("indit").style.visibility = "hidden";



    document.getElementById("megoldas").style.backgroundColor = "#EBA63F";
    if (sorszam < element_array.length) {
        document.getElementById("veletlen").innerHTML = element_array[sorszam];
        document.getElementById("megoldas").innerHTML = " ";
        document.getElementById("helyesvalasz").innerHTML = " ";
        //a feladvány első része
        document.getElementById("szöveg1").innerHTML = szavak[element_array[sorszam]][0];
        //a feladvány 2. része
        document.getElementById("szöveg2").innerHTML = szavak[element_array[sorszam]][1];

        document.getElementById("szavak1").value = szavak[element_array[sorszam]][2];
        document.getElementById("szavak3").value = szavak[element_array[sorszam]][3]; 
        document.getElementById("kep").src = szavak[element_array[sorszam]][5];    
        sorszam += 1;
    } else 
    {
         document.getElementById("megoldas").innerHTML = " ";
        document.getElementById("helyesvalasz").innerHTML = " ";
        document.getElementById("megoldas").style.visibility = "hidden";
        document.getElementById("helyesvalasz").style.visibility = "hidden";
        document.getElementById("mondat").style.visibility = "hidden";
        document.getElementById("szavak1").style.visibility = "hidden";
        document.getElementById("szavak3").style.visibility = "hidden";
        document.getElementById("ellenoriz").style.display = "none";
        document.getElementById("ujra").style.display = "block";
        document.getElementById("felso").style.visibility = "hidden";
        document.getElementById("kep").style.visibility = "hidden";
        document.getElementById("indit").style.display = "none";
           
        document.getElementById("szavak").style.display = "none";
        document.getElementById("kozepso").style.display = "none";
        
            //eredmény kiírása
            document.getElementById("mondat").style.visibility = "hidden";
            alertbox_mező = document.getElementById("alertbox");
            alertbox_mező.style.display = "block";

            eredmeny_mező = document.getElementById("eredmeny_kiiras");
            eredmeny_mező.innerHTML = "Eredményed: <br>";

            /* kördiagram az eredményeknek */
            var xValues = ["helyes: "+jovalasz,  "helytelen: "+rosszvalasz ];
            var yValues = [jovalasz , rosszvalasz];
            var barColors = [
            "#28A745",
            "#DC3545",
            ];

            new Chart("myChart", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                backgroundColor: barColors,
                fontColor: 'red',
                data: yValues,
                
                }]
            },
            options: {
                title: {
                display: true,
                },
                legend: {
                    position: 'left',
                    display: true,
                    fullWidth: true,
                    labels: {
                    fontSize: 14,
                    fontColor: 'white',
                    }
                }
            }
            
        });
    
    }
    console.log(sorszam);


}

function ellenoriz(){

    document.getElementById("indit").style.display = "none";
    document.getElementById("ellenoriz").style.display = "block";

    //a véletlenül generált szám átemelése ide
    var sorszam = document.getElementById("veletlen").innerHTML;
    //
    var valaszolo =  document.getElementById("megoldas").innerHTML;
    var helyesvalasz =  document.getElementById("helyesvalasz").innerHTML;
    var vizsgal = szavak[sorszam][4];
    var helyesszo = szavak[sorszam][vizsgal]
    console.log("sorszám: ",sorszam);
    console.log("válasz: ",valaszolo);
    console.log("vizsgál:",vizsgal);
    console.log("helyesszó: ",helyesszo); 
    

    if (document.getElementById("szavak1").style.backgroundColor == "yellow") {
        if (valaszolo == helyesszo) {
            jovalasz += 1;
            console.log("helyes");
            document.getElementById("szavak1").style.backgroundColor = "#89ef75";
        } else {
            document.getElementById("szavak1").style.backgroundColor = "red";
            rosszvalasz += 1;
        }     
    }


    if (document.getElementById("szavak3").style.backgroundColor == "yellow") {
        if (valaszolo == helyesszo) {
            jovalasz += 1;
            console.log("helyes");
            document.getElementById("szavak3").style.backgroundColor = "#89ef75";
        } else {
            document.getElementById("szavak3").style.backgroundColor = "red";
            rosszvalasz += 1;
        }     
    }
    
    document.getElementById("indit").style.display = "block";
    document.getElementById("indit").style.visibility = "visible";
    document.getElementById("ellenoriz").style.display = "none";

    document.getElementById("mondat").innerHTML = "A helyes írásmód: "+szavak[sorszam][6];
    document.getElementById("szavak1").disabled = true;
    document.getElementById("szavak3").disabled = true;
}


function ujra(){
    document.location.reload();
}

function szavak_1(){
    //az aktuális feladvány sorszáma
    var sorszam = document.getElementById("veletlen").innerHTML;

    document.getElementById("megoldas").innerHTML = document.getElementById("szavak1").value;

    //az első gombról kiválasztott megoldást a képernyőre helyezi
    document.getElementById("valasz1").innerHTML = szavak[sorszam][2];

    document.getElementById("szavak1").style.backgroundColor = "yellow";
    document.getElementById("szavak3").style.backgroundColor = "";
    document.getElementById("indit").style.display = "none";
    document.getElementById("ellenoriz").style.display = "block";
}


function szavak_3(){
    var sorszam = document.getElementById("veletlen").innerHTML;

    document.getElementById("megoldas").innerHTML = document.getElementById("szavak3").value;

    //az első gombról kiválasztott megoldást a képernyőre helyezi
    document.getElementById("valasz1").innerHTML = szavak[sorszam][3];

    document.getElementById("szavak1").style.backgroundColor = "";
    document.getElementById("szavak3").style.backgroundColor = "yellow";
    document.getElementById("indit").style.display = "none";
    document.getElementById("ellenoriz").style.display = "block";
}
