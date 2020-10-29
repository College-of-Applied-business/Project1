// contents
var contents = [{
        level: "plus-two",
        name: "Science",
        description: "some contnet"
    },
    {
        level: "plus-two",
        name: "Science",
        description: "some contnet"
    },
    {
        level: "plus-two",
        name: "Management",
        description: "some content"
    },
    {
        level: "bachelor",
        name: "Diploma",
        description: "some content"
    },
    {
        level: "plus-two",
        name: "Hotel Management",
        description: "some content",
    },
    {
        level: "plus-two",
        name: "Law",
        description: "Some content"


    }
];

// taking html elements
const dropDown = document.querySelector(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const categoriesDOM = document.querySelector(".categories");
const containerDOM = document.querySelector(".containers");
dropdownItems.forEach(items => {
    items.addEventListener("click", showLevels);
});

// showlevel function to show the levels when the desired class is clicked
function showLevels(e) {
    e.preventDefault();
    const targetedValue = e.currentTarget.dataset.target;

    let reduceLevel = contents.reduce((acc, val) => {
        if (targetedValue == val.level && !acc.includes(val.name)) {
            acc.push(val.name);
        }
        return acc;

    }, ["All"]);

    const displayLevels = reduceLevel.map(display => {
        return `<div class = "levels"
        data-target = "${display}"> 
        <h1>${display}</h1>
        </div>`;
    }).join("");
    categoriesDOM.innerHTML = displayLevels;

    displayContents(contents);
    const levelText = categoriesDOM.querySelectorAll(".levels");

    // displaying the description when levels are clicked
    levelText.forEach(level => {
        level.addEventListener("click", (e) => {
            e.preventDefault();
            const id = e.currentTarget.dataset.target;
            const filteredContents = contents.filter(content => {
                if (content.name == id) {
                    return content;
                }
            });
            console.log(displayContents(filteredContents));
            displayContents(filteredContents);

            if (id == "All") {
                displayContents(contents);
            }
        });
    });
}

// function to display the contents
function displayContents(content) {
    let display = content.map(c => {
        return `<div class="contents">
        <p>${c.description}</p>
        </div>`
    }).join("");
    containerDOM.innerHTML = display;
}