(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let lühend = "";

            if (h < 10) {
                h = "0" + h;
                lühend = "am";
            } else if (h >= 10 && h <= 12) {
                h = h;
                lühend = "am";
            } else if (h = 13) {
                h = "01";
                lühend = "pm";
            } else if (h = 14) {
                h = "02";
                lühend = "pm";
            } else if (h = 15) {
                h = "03";
                lühend = "pm";
            } else if (h = 16) {
                h = "04";
                lühend = "pm";
            } else if (h = 17) {
                h = "05";
                lühend = "pm";
            } else if (h = 18) {
                h = "06";
                lühend = "pm";
            } else if (h = 19) {
                h = "07";
                lühend = "pm";
            } else if (h = 20) {
                h = "08";
                lühend = "pm";
            } else if (h = 21) {
                h = "09";
                lühend = "pm";
            } else if (h = 22) {
                h = "10";
                lühend = "pm";
            } else if (h = 23) {
                h = "11"
                lühend = "pm";
            } else if (h = 24) {
                h = "12"
                lühend = "pm";
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s + " " + lühend;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
        } else if (linn.value === "tln") {
            
            e.innerHTML = "0,00 &euro;";
            
        } else if (linn.value === "trt") {

            e.innerHTML = "2,50 &euro;";

        } else if (linn.value === "nrv") {

            e.innerHTML = "2,50 &euro;";

        } else if (linn.value === "prn") {

            e.innerHTML = "3,00 &euro;";

        }      
        
        console.log("Tarne hind on arvutatud");
    }



    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function pushpinClicked(e) {
    if (e.target.metadata) {
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}

function GetMap() {
    
    "use strict";

    let TÜ = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );

    let Tallinn = new Microsoft.Maps.Location(
            59.436962, 
            24.753574
        );

    let centerPoint = new Microsoft.Maps.Location(
        (59.436962 + 58.38104) / 2.0,
        (26.71992 + 24.753574) / 2.0
    );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 7,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });

    let pushpin1 = new Microsoft.Maps.Pushpin(TÜ, {
        title: 'Tartu Ülikool',
        description: 'UT'
    });

    let pushpin2 = new Microsoft.Maps.Pushpin(Tallinn, {
        title: 'Tallinn',
        description: 'Pealinn'
    });

    Microsoft.Maps.Events.addHandler(pushpin1, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(pushpin2, 'click', pushpinClicked);

    map.entities.push(pushpin1);
    map.entities.push(pushpin2);

    infobox1 = new Microsoft.Maps.Infobox(TÜ, {
            visible: false
        });

    infobox2 = new Microsoft.Maps.Infobox(Tallinn, {
            visible: false
        });

    infobox1.setMap(map);
    infobox2.setMap(map);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

