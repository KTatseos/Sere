function add()
{
    let total = 0;
        //// AQCUIRE TARGETS ////

        // Basics
        let numColors = 0;
        let numSpots = 0;
        let numStripes = 0;

        numSpots = parseInt(document.getElementById('numSpots').value) || 0;
        numStripes = parseInt(document.getElementById('numStripes').value) || 0;
        numColors = parseInt(document.getElementById('numColors').value) || 0;

        // Sets
        partialMini = document.getElementById("partialMini");
        partialFull = document.getElementById("partialFull");

        fullPlanti = document.getElementById("fullPlanti");
        fullDigi = document.getElementById("fullDigi");

        // Items
        head = document.getElementById("head");

        bodyPlanti = document.getElementById("bodyPlanti");
        bodyDigi = document.getElementById("bodyDigi");

        hPaws = document.getElementById("hPaws");
        hPawsPuffy = document.getElementById("hPawsPuffy");

        armSleeves = document.getElementById("armSleeves");

        fPaws = document.getElementById("fPaws");
        
        tailBasic = document.getElementById('tailBasic');
        tailLong = document.getElementById('tailLong');
        tailExtraLong = document.getElementById('tailExtraLong');

        // Add Ons
        eyelids = document.getElementById("eyelids");
        tongue = document.getElementById("tongue");
        nose = document.getElementById("nose");
        neck = document.getElementById("neck");


    

        //// CALCULATING ////
        // Basics
        total += (numSpots * 10);
        total += (numStripes * 10);
        
        if (numColors < 3) {
            total += 0;
        } else {
            total += (numColors * 40);
        }

        // Sets
        if (partialMini.checked == true) {
            total += 1300;
        }

        if (partialFull.checked == true) {
            total += 1750;
        }

        if (fullPlanti.checked == true) {
            total += 2650;
        }

        if (fullDigi.checked == true) {
            total += 3050;
        }

        // Items
        if (head.checked == true) {
            total += 1000;
        }

        if (bodyPlanti.checked == true) {
            total += 1000;
        }
    
        if (bodyDigi.checked == true) {
            total += 1400;
        }

        if (hPaws.checked == true) {
            total += 200;
        }

        if (hPaws.checked == true && hPawsPuffy.checked == true) {
            // Add $100
            total += 100;
        }

        if (fPaws.checked == true) {
            total += 350;
        }

        if (armSleeves.checked == true) {
            total += 100;
        }

        if (tailBasic.checked == true) {
            total += 100;
        }

        if (tailLong.checked == true) {
            total += 150;
        }

        if (tailExtraLong.checked == true) {
            total += 250;
        }

        // Add ons
        if (eyelids.checked == true) {
            total += 20;
        }

        if (tongue.checked == true) {
            total += 10;
        }

        if (nose.checked == true) {
            total += 100;
        }

        if (neck.checked == true) {
            total += 100;
        }









        //Get total
        document.getElementById("result").innerHTML = total;
}
