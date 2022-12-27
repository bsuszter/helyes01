/* A feladatban 4 válasz közül kell kiválasztani a helyeset. Jó válasz esetén zöld lesz, hibás válasznál  
piros a gomb. A jó választ is kiírja*/
document.getElementById("ellenoriz").style.display = "none";
document.getElementById("ujra").style.display = "none";
document.getElementById("megoldas").style.visibility = "hidden";
document.getElementById("helyesvalasz").style.visibility = "hidden";
document.getElementById("mondat").style.visibility = "hidden";
document.getElementById("szavak1").style.visibility = "hidden";
document.getElementById("szavak3").style.visibility = "hidden";
document.getElementById("veletlen").style.visibility = "hidden";
document.getElementById("alertbox").style.display = "none"; 
document.getElementById("gyakorlo_feladat").style.display = "none"; 

szavak = [
    ["kö","eny","p","pp",2,"https://cdn.pixabay.com/photo/2019/09/25/11/56/power-4503462_960_720.jpg","köpeny"],
    ["ha","gat","l","ll",3,"https://cdn.pixabay.com/photo/2015/12/04/19/20/girl-1076998_960_720.jpg","hallgat"],
    ["utá","a","n","nn",2,"https://cdn.pixabay.com/photo/2016/10/16/00/36/one-against-all-1744091_960_720.jpg","utána"],
    ["ki","ebb","s","ss",2,"https://cdn.pixabay.com/photo/2017/07/23/13/57/friends-2531455_960_720.jpg","kisebb"],
    ["to","al","l","ll",3,"https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_960_720.jpg","tollal"],
    ["szégye","i","l","ll",3,"https://cdn.pixabay.com/photo/2019/09/17/10/44/monkey-4483162_960_720.jpg","szégyelli"],
    ["ját","ál","sz","ssz",3,"https://cdn.pixabay.com/photo/2013/04/12/06/03/darts-102919_960_720.jpg","játsszál"],
    ["sza","ag","l","ll",2,"https://cdn.pixabay.com/photo/2014/11/27/22/44/gift-548296_960_720.jpg","szalag"],
    ["mú","ik","l","ll",2,"https://cdn.pixabay.com/photo/2016/09/29/09/59/clock-1702513_960_720.jpg","múlik"],
    ["má","ik","l","ll",3,"https://cdn.pixabay.com/photo/2015/09/07/06/49/frame-928204_960_720.jpg","mállik"],
    ["csa","án","l","ll",2,"https://cdn.pixabay.com/photo/2020/07/07/11/54/nettle-nettles-5380256_960_720.png","csalán"],
    ["ko","ektor","n","nn",3,"https://cdn.pixabay.com/photo/2016/03/31/18/51/socket-1294688_960_720.png","konnektor"],
    ["fu","ánk","l","ll",3,"https://cdn.pixabay.com/photo/2020/02/01/15/50/wasp-4810610_960_720.png","fullánk"],
    ["szalo","a","n","nn",3,"https://cdn.pixabay.com/photo/2014/12/21/23/25/bacon-575334_960_720.png","szalonna"],
    ["te","ik","l","ll",2,"https://cdn.pixabay.com/photo/2012/04/14/14/04/hourglass-34048_960_720.png","telik"],
    ["uzso","a","n","nn",3,"https://cdn.pixabay.com/photo/2019/04/26/19/07/pizza-4158348_960_720.png","uzsonna"],
    ["istá","ó","l","ll",3,"https://cdn.pixabay.com/photo/2012/04/30/09/58/animals-44571_960_720.png","istálló"],
    ["sző","ő","l","ll",2,"https://cdn.pixabay.com/photo/2017/08/18/19/48/grapes-2656259_960_720.jpg","szőlő"],
    ["óra","or","k","kk",2,"https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_960_720.jpg","órakor"],
    ["u","nyi","j","jj",3,"https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_960_720.jpg","ujjnyi"],
    ["lő","ön","j","jj",2,"https://cdn.pixabay.com/photo/2020/12/27/14/23/boy-5864153_960_720.jpg","lőjön"],
    ["e","éle","f","ff",3,"https://cdn.pixabay.com/photo/2016/12/21/13/59/hand-1923005_960_720.png","efféle"],
    ["ki","ebb","j","jj",3,"https://cdn.pixabay.com/photo/2016/05/21/21/52/house-1407562_960_720.jpg","kijjebb"],
    ["le","ebb","j","jj",3,"https://cdn.pixabay.com/photo/2016/11/18/14/18/man-1834849_960_720.jpg","lejjebb"],
    ["te","asz","r","rr",2,"https://cdn.pixabay.com/photo/2015/08/24/20/11/greece-905557_960_720.jpg","terasz"],
    ["szí","az","j","jj",2,"https://cdn.pixabay.com/photo/2016/04/22/20/01/belt-1346453_960_720.jpg","szíjaz"],
    ["fő","ön","j","jj",2,"https://cdn.pixabay.com/photo/2016/04/02/17/58/service-1303313_960_720.jpg","főjön"],
    ["gu","ol","g","gg",3,"https://cdn.pixabay.com/photo/2017/12/26/02/52/kids-3039572_960_720.jpg","guggol"],
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

function indit(){
    document.getElementById("kep").style.display = "block";
    document.getElementById("szavak1").style.display = "block";
    document.getElementById("szavak3").style.display = "block";
    document.getElementById("gyakorlo_feladat").style.display = "none";
    //a válaszdoboz színének alaphelyzetbe állítása
    document.getElementById("valasz1").style.backgroundColor = "#342009";
    document.getElementById("valasz1").style.color = "#D4E0F7";

    kerdesszam += 1;
    let viszonyszam = 100 / szavaklong;
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
    document.getElementById("indit").style.display = "none";
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
    

    if (document.getElementById("szavak1").style.backgroundColor == "yellow") {
        if (valaszolo == helyesszo) {
            jovalasz += 1;
            /* document.getElementById("szavak1").style.backgroundColor = "#89ef75"; */
            document.getElementById("valasz1").style.backgroundColor = "#89ef75";
            document.getElementById("valasz1").style.color = "#073b19";

        } else {
            /* document.getElementById("szavak1").style.backgroundColor = "red"; */
            document.getElementById("valasz1").style.backgroundColor = "red";
            rosszvalasz += 1;
        }     
    }


    if (document.getElementById("szavak3").style.backgroundColor == "yellow") {
        if (valaszolo == helyesszo) {
            jovalasz += 1;
            /* document.getElementById("szavak3").style.backgroundColor = "#89ef75"; */
            document.getElementById("valasz1").style.backgroundColor = "#89ef75";
            document.getElementById("valasz1").style.color = "#073b19";
        } else {
            /* document.getElementById("szavak3").style.backgroundColor = "red"; */
            document.getElementById("valasz1").style.backgroundColor = "red";
            rosszvalasz += 1;
        }     
    }
    
    document.getElementById("indit").style.display = "none";
    document.getElementById("indit").style.visibility = "visible";
    document.getElementById("ellenoriz").style.display = "none";

    document.getElementById("mondat").innerHTML = "A helyes írásmód: "+szavak[sorszam][6];
    document.getElementById("szavak1").disabled = true;
    document.getElementById("szavak3").disabled = true;

    practice();
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
    document.getElementById("ellenoriz").style.display = "block";
}

function practice(){
    document.getElementById("kep").style.display = "none";
    document.getElementById("szavak1").style.display = "none";
    document.getElementById("szavak3").style.display = "none";
    document.getElementById("gyakorlo_feladat").style.display = "block";
    document.getElementById("gyak_ellenoriz").style.visibility = "visible";
    document.getElementById("gyak").value = "";
    document.getElementById("gyak").style.textAlign = "center";
    document.getElementById("gyak").style.fontSize = "28px";
    document.getElementById("gyak").style.backgroundColor = "white";
    document.getElementById("gyak").focus();

}

function gyak_ellenoriz(){
    var valaszolo = document.getElementById('gyak').value;
        
    //a véletlenül generált szám átemelése ide
    var sorszam = document.getElementById("veletlen").innerHTML;
    
    var vizsgal = szavak[sorszam][6];

    if (valaszolo == vizsgal) {
        document.getElementById("gyak").style.backgroundColor = "#89ef75";
        document.getElementById("ujra").style.display = "none";
        document.getElementById("indit").style.display = "block";
        document.getElementById("gyak_ellenoriz").style.visibility = "hidden";

    } else {
        document.getElementById("gyak").style.backgroundColor = "red";
    }     
}