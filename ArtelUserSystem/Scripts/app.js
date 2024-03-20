var currentList = {};

function createList() {
    currentList.name = $("#listName").val();
    currentList.items = new Array();



    $("#title").html(currentList.name);
    $("#items").empty();

    $("#createList").hide();
    $("#employeeList").show();
}


function addItem() {
    var newItem = {};
    newItem.name = $("#itemName").val();
    currentList.items.push(newItem);
    console.info(currentList);

    drawItems();
}

function drawItems() {
    var $list = $("#items").empty();

    for (var i = 0; i < currentList.items.length; i++) {
        var currentItem = currentList.items[i];
        var $li = $("<li>").html(currentItem.name).attr("id", "item_" + i);
        var $deleteBtn = $("<button onclick='deleteItem(" + i +")'>D</button>").appendTo($li);
        var $checkBtn = $("<button onclick='checkItem(" + i +")'>C</button>").appendTo($li);

        $li.appendTo($list);
    }
}

function deleteItem(index) {
    currentList.items.splice(index, 1);
    drawItems();
}

function checkItem(index) {
    if ($("#item_" + index).hasClass("checked")) {
        $("#item_" + index).removeClass("checked");
    }
    else {
        $("#item_" + index).addClass("checked");
    }
    

}


$(document).ready(function () {
    console.log("ready");
});