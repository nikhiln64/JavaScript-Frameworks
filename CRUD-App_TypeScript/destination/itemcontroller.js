window.addEventListener("load", init);
function init() {
    bindEvents();
    loadId();
}
function bindEvents() {
    document.getElementById("addButton").addEventListener("click", addNewItem);
    document.getElementById("deleteButton").addEventListener("click", deleteItem);
    document.getElementById("saveButton").addEventListener("click", saveItem);
    document.getElementById("loadButton").addEventListener("click", loadItem);
}
function saveItem() {
    if (window.localStorage) {
        localStorage.items = JSON.stringify(itemOperations.itemArray);
        alert("Record Saved in Storage...");
    }
    else {
        alert("Ur browser doesn't Support LocalStorage....");
    }
}
function loadItem() {
    if (localStorage.items) {
        try {
            itemOperations.itemArray = JSON.parse(localStorage.items);
            printTable(itemOperations.itemArray);
        }
        catch (e) {
            console.log("Wrong JSON ");
        }
    }
}
function deleteItem() {
    // For Delete the Red Records
    itemOperations.deleteMarkRecords();
    printTable();
}
function loadId() {
    document.getElementById("itemid").value = itemOperations.getId();
}
function printCounts() {
    var markDeletedRecords = itemOperations.deletedCount();
    var totalRecords = itemOperations.itemArray.length;
    var unMarkRecords = totalRecords - markDeletedRecords;
    document.getElementById("total").innerHTML = totalRecords;
    document.getElementById("mark").innerHTML = markDeletedRecords;
    document.getElementById("unmark").innerHTML = unMarkRecords;
}
function addNewItem() {
    var itemId = document.getElementById("itemid").value;
    var itemName = document.getElementById("itemname").value;
    var itemDesc = document.getElementById("itemdesc").value;
    var itemPrice = document.getElementById("itemprice").value;
    var itemColor = document.getElementById("itemcolor").value;
    var itemImage = document.getElementById("itemimage").value;
    itemOperations.addItem(itemId, itemName, itemDesc, itemPrice, itemImage, itemColor);
    printItem(itemOperations.itemArray[itemOperations.itemArray.length - 1]);
    printCounts();
}
function createIcon(imagePath, itemId, operationName) {
    var img = document.createElement("img");
    img.src = imagePath;
    img.setAttribute("itemid", itemId);
    img.className = "mystyle";
    img.addEventListener("click", operationName);
    return img;
}
function toogleMark(event) {
    console.log("Toogle mark delete call ", event.srcElement);
    // var currentImage = event.srcElement;
    // var currentTD = currentImage.parentNode;
    // var currentTR = currentItemId.parentNode;
    var tr = event.srcElement.parentNode.parentNode;
    console.log("TR is ", tr);
    tr.classList.toggle("markred");
    var currentItemId = event.srcElement.getAttribute("itemid");
    itemOperations.markRecords(currentItemId);
    printCounts();
}
function edit() {
    console.log("Edit Call");
}
function printTable() {
    var tbody = document.getElementById("itemlist");
    tbody.innerHTML = "";
    itemOperations.itemArray.forEach(printItem);
    printCounts();
}
function printItem(itemObject) {
    var tbody = document.getElementById("itemlist");
    var tr = tbody.insertRow();
    var index = 0;
    for (let key in itemObject) {
        if (key == 'image') {
            tr.insertCell(index).innerHTML = `<img src="${itemObject[key]}" width="100" height="100">`;
        }
        else if (key == 'color') {
            tr.insertCell(index).innerHTML = `<div style="background-color:${itemObject[key]}"></div>`;
        }
        else if (key == 'markForDelete') {
            continue;
        }
        else {
            tr.insertCell(index).innerHTML = itemObject[key];
        }
        index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon("../images/delete.png", itemObject.id, toogleMark));
    td.appendChild(createIcon("../images/edit.png", itemObject.id, edit));
    //tr.insertCell(0).innerHTML = itemObject.id;
    //tr.insertCell(1).innerHTML = itemObject.name;
}
