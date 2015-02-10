//I write some code. The rest belongs to the following source.
//Source: http://www.javascriptkit.com/epassword/index.htm
//I Edit some of the code to make window close after user inputs wrong password three times.

var pass = new Array();
var t3 = "";
var lim = 3;
pass[0] = "6Gtu4yBWPmbcR62";
pass[1] = "4gOGlvt7MmxWD9r";
pass[2] = "vryuq3y4pNfghya";
pass[3] = "WfP1FKHiYiDmx";
pass[4] = "4zImvYHB6PG7sQwP";
pass[5] = "59zImvYHB6PG7sQw";

//configure extension to reflect the extension type of the target web page (ie: .htm or .html)
var extension = ".html";
var enablelocking = 0;
var numletter = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var temp3 = '';
var cur = 0;


/*OWN CODE*/
var count = 3;
/*OWN CODE*/


function max(which) {
    return (pass[Math.ceil(which) + (3 & 15)].substring(0, 1));
}

function testit(input) {
    temp = numletter.indexOf(input);
    var temp2 = temp ^ parseInt(pass[phase1 - 1 + (1 | 3)].substring(0, 2));
    temp2 = numletter.substring(temp2, temp2 + 1);
    return (temp2);
}

function submitentry() {
    t3 = '';
    verification = document.getElementById("psw").value;
    console.log(verification);
    phase1 = Math.ceil(Math.random()) - 6 + (2 << 2);
    var indicate = true;
    for (i = (1 & 2); i < window.max(Math.LOG10E); i++) {
        t3 += testit(verification.charAt(i));
    }

    for (i = (1 & 2); i < lim; i++) {
        if (t3.charAt(i) != pass[phase1 + Math.round(Math.sin(Math.PI / 2) - 1)].charAt(i)) {
            indicate = false;
        }
    }
    
    if (verification.length != window.max(Math.LOG10E)) {
        indicate = false;
    }
    console.log(indicate);
    if (indicate) {
        window.location = verification + extension;
    } else {

        /*OWN CODE*/
        count = count - 1;
        if (count === -1) {
            window.location = "./denied.html";
        } else {
            alert("Invalid password. You have " + count + " times left.");
        }
        
    }
    return false;
    /*OWN CODE*/
}

//I write some code. The rest belongs to the following source.
//Source: http://www.javascriptkit.com/epassword/index.htm
//I Edit some of the code to make window close after user inputs wrong password three times.