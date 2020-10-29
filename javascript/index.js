//contents to be uploaded in the website
var contents = [{

        name: "Science",
        description: "some content"
    },
    {
        name: "Management",
        description: "some content"
    },
    {
        name: "Diploma",
        description: "some content"
    },
    {

        name: "Hotel Management",
        description: "some content"
    },
    {

        name: "Law",
        description: "Some content"


    }
];

//elements taken from the html
var content1 = document.getElementById("content1");
var Bachelor = document.getElementById("Bachelor");
var Master = document.getElementById("Master");
var plus_2 = document.getElementById("plus-two");
var all = document.getElementById("all");
var count = 0;

//displaying the items on windows onload
window.onload = function() {
    for (i = 0; i < contents.length; i++) {
        var h2 = document.createElement("h2");
        var p = document.createElement("p");
        content1.appendChild(h2);
        content1.appendChild(p);
        console.log(contents[count].name);
        h2.innerHTML = contents[count].name;
        p.innerHTML = contents[count].description;
        count++;

    }

};

//displaing all the contents when clicked on all button
all.onclick = function() {
    if (count == 0) {
        if (count == 0) {
            content1.innerHTML = "";
        }
        for (i = 0; i < contents.length; i++) {
            var h2 = document.createElement("h2");
            var p = document.createElement("p");
            content1.appendChild(h2);
            content1.appendChild(p);
            console.log(contents[count].name);
            h2.innerHTML = contents[count].name;
            p.innerHTML = contents[count].description;
            count++;

        }
    }
    count = 0;
};
//displalys BSC realted contents when BSC button is clicked
Bachelor.onclick = function() {
    if (count == 0) {
        content1.innerHTML = "";
    }
    for (i = 0; i < contents.length; i++) {

        if (contents[count].name == "BSC") {
            var h2 = document.createElement("h2");
            var p = document.createElement("p");
            content1.appendChild(h2);
            content1.appendChild(p);
            // console.log(contents[count].name);
            h2.innerHTML = contents[count].name;
            p.innerHTML = contents[count].description;
        }

        count++;
    }

    count = 0;

};

//displalys BE realted contents when BE button is clicked
plus_2.onclick = function() {
    if (count == 0) {
        content1.innerHTML = "";
    }
    for (i = 0; i < contents.length; i++) {
        if (contents[count].name == "Be") {
            var h2 = document.createElement("h2");
            var p = document.createElement("p");
            content1.appendChild(h2);
            content1.appendChild(p);
            console.log(contents[count].name);
            h2.innerHTML = contents[count].name;
            p.innerHTML = contents[count].description;
        }

        count++;
    }
    count = 0;
};

//displalys IOM realted contents when IOM button is clicked
Master.onclick = function() {
    if (count == 0) {
        content1.innerHTML = "";
    }
    for (i = 0; i < contents.length; i++) {
        if (contents[count].name == "IOM") {
            var h2 = document.createElement("h2");
            var p = document.createElement("p");
            content1.appendChild(h2);
            content1.appendChild(p);
            console.log(contents[count].name);
            h2.innerHTML = contents[count].name;
            p.innerHTML = contents[count].description;
        }

        count++;
    }
    count = 0;
};