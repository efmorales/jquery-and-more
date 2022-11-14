let newDiv = $("<div> <button> Click here to add! </button> </div>");

let appDiv = $(".container");

let textBox = $(".userTextInput");

appDiv.append(newDiv);

let newUL = $("<ul> </ul>");
newUL.addClass("list-group");

appDiv.append(newUL);

newDiv.on("click", () => {
    let newLi = $(`<li> ${textBox.val()} </li>`);
    newLi.addClass("list-group-item");
    newUL.append(newLi);

    textBox.val("");
});

