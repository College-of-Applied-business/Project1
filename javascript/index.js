//contents to be uploaded in the website
var contents = [{

        name: "BSC",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur sed quo, incidunt doloribus saepe dignissimos quidem facilis culpa officiis, necessitatibus dolorem, nulla quae libero!"
    },
    {

        name: "Be",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur sed quo, incidunt doloribus saepe dignissimos quidem facilis culpa officiis, necessitatibus dolorem, nulla quae libero!"
    },
    {

        name: "IOM",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur sed quo, incidunt doloribus saepe dignissimos quidem facilis culpa officiis, necessitatibus dolorem, nulla quae libero!"
    },
    {

        name: "IOM",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur sed quo, incidunt doloribus saepe dignissimos quidem facilis culpa officiis, necessitatibus dolorem, nulla quae libero!"
    }
];

//elements taken from the html
var content1 = document.getElementById("content1");
var bsc = document.getElementById("bsc");
var be = document.getElementById("be");
var iom = document.getElementById("iom");
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
bsc.onclick = function() {
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
be.onclick = function() {
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
iom.onclick = function() {
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