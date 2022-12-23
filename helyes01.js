/* A feladatban 4 válasz közül kell kiválasztani a helyeset. Jó válasz esetén zöld lesz, hibás válasznál  
piros a gomb. A jó választ is kiírja*/
document.getElementById("ellenoriz").style.display = "none";
document.getElementById("ujra").style.display = "none";
document.getElementById("megoldas").style.visibility = "hidden";
document.getElementById("helyesvalasz").style.visibility = "hidden";
document.getElementById("mondat").style.visibility = "hidden";
document.getElementById("szavak1").style.visibility = "hidden";
document.getElementById("szavak2").style.visibility = "hidden";
document.getElementById("szavak3").style.visibility = "hidden";
document.getElementById("szavak4").style.visibility = "hidden";
document.getElementById("veletlen").style.visibility = "hidden";
document.getElementById("alertbox").style.display = "none"; 

szavak = [
    ["A tyúk régies elnevezése","tik","tok","tiktok","toktik",1,"https://cdn.pixabay.com/photo/2017/06/07/09/04/hen-2379722_960_720.jpg"],
    ["Sár, dagonya népies elnevezése","bugyigás","áristom","cseter","csurgó",3,"https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_960_720.jpg"],
    ["Melyik szó utal tulajdonságra?","bugyigás","gaborgya","cseter","csurgó",2,"https://cdn.pixabay.com/photo/2017/07/17/22/00/furious-2514031_960_720.jpg"],
    ["Mi az eresz népies elnevezése?","bugyigás","gaborgya","cseter","csurgó",4,"https://cdn.pixabay.com/photo/2016/03/01/13/23/water-drain-1230380_960_720.jpg"],
    ["Melyik kifejezést használják a hirtelen haragú emberre?","kákabílű","nagyéhetős","gaborgya","vérnyogó",3,"https://cdn.pixabay.com/photo/2017/07/17/22/00/furious-2514031_960_720.jpg"],
    ["Melyik kifejezést használják a visító emberre?","kákabílű","nagyéhetős","gaborgya","vérnyogó",4,"https://cdn.pixabay.com/photo/2016/01/26/18/16/person-1163062_960_720.jpg"],
    ["Melyik kifejezést használják a jó étvágyú emberre?","kákabílű","nagyéhetős","gaborgya","vérnyogó",2,"https://cdn.pixabay.com/photo/2021/08/09/16/01/hamburger-6533719_960_720.jpg"],
    ["Melyik kifejezést használják a sovány emberre?","kákabílű","nagyéhetős","gaborgya","vérnyogó",1,"https://cdn.pixabay.com/photo/2021/01/29/15/16/woman-5961297_960_720.jpg"],
    ["Melyik nem étel?","puffancs","mamusz","gerzemice","csicsóka",2,"https://cdn.pixabay.com/photo/2016/09/11/11/18/chefs-1661131_960_720.jpg"],
    ["Melyik egy gumós növény?","puffancs","pöszméte","gerzemice","csicsóka",4,"https://cdn.pixabay.com/photo/2018/07/29/09/32/vegetable-3569736_960_720.jpg"],
    ["Melyik egy krumpliból készült étel?","puffancs","pöszméte","gerzemice","csicsóka",1,"https://cdn.pixabay.com/photo/2014/01/14/10/14/choux-244296_960_720.jpg"],
    ["Melyik egy gyümölcs elnevezése?","puffancs","pöszméte","gerzemice","csicsóka",2,"https://cdn.pixabay.com/photo/2019/05/23/19/10/gooseberry-4224625_960_720.jpg"],
    ["Melyik a létra elnevezése?","fuszekli","lajtorja","pulya","sparhelt",2,"https://cdn.pixabay.com/photo/2015/02/11/19/13/ladder-632939_960_720.jpg"],
    ["Melyik a tűzhely elnevezése?","fuszekli","lajtorja","pulya","sparhelt",4,"https://cdn.pixabay.com/photo/2019/07/21/16/44/nostalgia-4353096_960_720.jpg"],
    ["Melyik a rövid harisnya elnevezése?","fuszekli","lajtorja","pulya","sparhelt",1,"https://cdn.pixabay.com/photo/2019/08/22/19/09/odd-socks-4424190_960_720.jpg"],
    ["Melyik nem tésztaétel?","béklyó","laska","öhöm","lebbencs",1,"https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_960_720.jpg"],
    ["Melyik a bilincs elnevezése?","béklyó","laska","öhöm","málé",1,"https://cdn.pixabay.com/photo/2012/02/29/15/49/chains-19176_960_720.jpg"],
    ["Hol ülhetett ezek közül egy öreg bácsi?","nokedlin","esküdtszéken","tornácon","lajtorján",3,"https://cdn.pixabay.com/photo/2018/09/13/00/26/pad-3673521_960_720.jpg"],
    ["Melyik lehet a tanakodott szinonimája?","sertepertélt","morfondírozott","ődöngött","parolázott",2,"https://cdn.pixabay.com/photo/2015/03/26/15/55/the-thinker-692959_960_720.jpg"],
    ["Melyik vonatkozhat a vászon mérésére?","mérő","icce","akó","vég",4,"https://cdn.pixabay.com/photo/2014/11/23/15/24/linen-542866_960_720.jpg"],
    ["Miben tárolhattak ruhát ezek közül?","kalamárisban","sifonérban","kantában","hammasban",2,"https://cdn.pixabay.com/photo/2012/07/29/21/42/dresses-53319_960_720.jpg"],
    ["Melyik utal a menyasszony hozományára?","párta","kelengye","kaláka","guzsaly",2,"https://cdn.pixabay.com/photo/2019/03/19/15/44/bride-4066022_960_720.jpg"],
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

    document.getElementById("szavak1").disabled = false;
    document.getElementById("szavak2").disabled = false;
    document.getElementById("szavak3").disabled = false;
    document.getElementById("szavak4").disabled = false;


    document.getElementById("szavak1").style.backgroundColor = "";
    document.getElementById("szavak2").style.backgroundColor = "";
    document.getElementById("szavak3").style.backgroundColor = "";
    document.getElementById("szavak4").style.backgroundColor = "";

    //document.getElementById("felso").innerHTML =  szavaklong +" / " + kerdesszam + " ( helyes válaszok: " + jovalasz + " / rossz válaszok: " + rosszvalasz + " )";
    //document.getElementById("megoldas").style.visibility = "visible";
    document.getElementById("helyesvalasz").style.visibility = "hidden";
    document.getElementById("mondat").style.visibility = "visible";
    document.getElementById("szavak1").style.visibility = "visible";
    document.getElementById("szavak2").style.visibility = "visible";
    document.getElementById("szavak3").style.visibility = "visible";
    document.getElementById("szavak4").style.visibility = "visible";
    document.getElementById("indit").style.display = "none";


    document.getElementById("megoldas").style.backgroundColor = "#EBA63F";
    if (sorszam < element_array.length) {
        document.getElementById("veletlen").innerHTML = element_array[sorszam];
        document.getElementById("megoldas").innerHTML = " ";
        document.getElementById("helyesvalasz").innerHTML = " ";
        document.getElementById("mondat").innerHTML = szavak[element_array[sorszam]][0];
        document.getElementById("szavak1").value = szavak[element_array[sorszam]][1];
        document.getElementById("szavak2").value = szavak[element_array[sorszam]][2]; 
        document.getElementById("szavak3").value = szavak[element_array[sorszam]][3]; 
        document.getElementById("szavak4").value = szavak[element_array[sorszam]][4]; 
        document.getElementById("kep").src = szavak[element_array[sorszam]][6];    
        sorszam += 1;
    } else 
    {
         document.getElementById("megoldas").innerHTML = " ";
        document.getElementById("helyesvalasz").innerHTML = " ";
        document.getElementById("megoldas").style.visibility = "hidden";
        document.getElementById("helyesvalasz").style.visibility = "hidden";
        document.getElementById("mondat").style.visibility = "hidden";
        document.getElementById("szavak1").style.visibility = "hidden";
        document.getElementById("szavak2").style.visibility = "hidden";
        document.getElementById("szavak3").style.visibility = "hidden";
        document.getElementById("szavak4").style.visibility = "hidden";
        document.getElementById("ellenoriz").style.display = "none";
        document.getElementById("ujra").style.display = "block";
        document.getElementById("felso").style.visibility = "hidden";
        document.getElementById("kep").style.visibility = "hidden";
        document.getElementById("indit").style.display = "none";
        //document.getElementById("vegeredmeny").innerHTML =  "helyes válaszok: " + jovalasz + " / rossz válaszok: " + rosszvalasz; 
            
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
    var vizsgal = szavak[sorszam][5];
    var helyesszo = szavak[sorszam][vizsgal]
/*     console.log("sorszám: ",sorszam);
    console.log("válasz: ",valaszolo);
    console.log("vizsgál:",vizsgal);
    console.log("helyesszó: ",helyesszo); */
    

    if (document.getElementById("szavak1").style.backgroundColor == "yellow") {
        if (valaszolo == helyesszo) {
            jovalasz += 1;
            console.log("helyes");
            document.getElementById("szavak1").style.backgroundColor = "#89ef75";
        } else {
            document.getElementById("szavak1").style.backgroundColor = "red";
            rosszvalasz += 1;
            document.getElementById("helyesvalasz").style.visibility = "visible";
            document.getElementById("helyesvalasz").innerHTML = "A helyes válasz: "+helyesszo;
        }     
    }

    if (document.getElementById("szavak2").style.backgroundColor == "yellow") {
        if (valaszolo == helyesszo) {
            jovalasz += 1;
            console.log("helyes");
            document.getElementById("szavak2").style.backgroundColor = "#89ef75";
        } else {
            document.getElementById("szavak2").style.backgroundColor = "red";
            rosszvalasz += 1;
            document.getElementById("helyesvalasz").style.visibility = "visible";
            document.getElementById("helyesvalasz").innerHTML = "A helyes válasz: "+helyesszo;
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
            document.getElementById("helyesvalasz").style.visibility = "visible";
            document.getElementById("helyesvalasz").innerHTML = "A helyes válasz: "+helyesszo;
        }     
    }

    if (document.getElementById("szavak4").style.backgroundColor == "yellow") {
        if (valaszolo == helyesszo) {
            jovalasz += 1;
            console.log("helyes");
            document.getElementById("szavak4").style.backgroundColor = "#89ef75";
        } else {
            document.getElementById("szavak4").style.backgroundColor = "red";
            rosszvalasz += 1;
            document.getElementById("helyesvalasz").style.visibility = "visible";
            document.getElementById("helyesvalasz").innerHTML = "A helyes válasz: "+helyesszo;
        }     
    }



    //document.getElementById("felso").innerHTML =  szavaklong +"/" + kerdesszam + " ( helyes válaszok: " + jovalasz +  " / rossz válaszok: " + rosszvalasz + " )";
    document.getElementById("indit").style.display = "block";


    document.getElementById("ellenoriz").style.display = "none";




    document.getElementById("szavak1").disabled = true;
    document.getElementById("szavak2").disabled = true;
    document.getElementById("szavak3").disabled = true;
    document.getElementById("szavak4").disabled = true;
}


function ujra(){
    document.location.reload();
}

function szavak_1(){
    document.getElementById("megoldas").innerHTML = document.getElementById("szavak1").value;
    document.getElementById("szavak1").style.backgroundColor = "yellow";
    document.getElementById("szavak2").style.backgroundColor = "";
    document.getElementById("szavak3").style.backgroundColor = "";
    document.getElementById("szavak4").style.backgroundColor = "";
    document.getElementById("ellenoriz").style.display = "block";
}

function szavak_2(){
    document.getElementById("megoldas").innerHTML = document.getElementById("szavak2").value;
    document.getElementById("szavak1").style.backgroundColor = "";
    document.getElementById("szavak2").style.backgroundColor = "yellow";
    document.getElementById("szavak3").style.backgroundColor = "";
    document.getElementById("szavak4").style.backgroundColor = "";
    document.getElementById("ellenoriz").style.display = "block";
}

function szavak_3(){
    document.getElementById("megoldas").innerHTML = document.getElementById("szavak3").value;
    document.getElementById("szavak1").style.backgroundColor = "";
    document.getElementById("szavak2").style.backgroundColor = "";
    document.getElementById("szavak3").style.backgroundColor = "yellow";
    document.getElementById("szavak4").style.backgroundColor = "";
    document.getElementById("ellenoriz").style.display = "block";
}

function szavak_4(){
    document.getElementById("megoldas").innerHTML = document.getElementById("szavak4").value;
    document.getElementById("szavak1").style.backgroundColor = "";
    document.getElementById("szavak2").style.backgroundColor = "";
    document.getElementById("szavak3").style.backgroundColor = "";
    document.getElementById("szavak4").style.backgroundColor = "yellow";
    document.getElementById("ellenoriz").style.display = "block";
}