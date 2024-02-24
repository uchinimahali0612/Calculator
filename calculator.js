var input_val = document.getElementById('calci2');
var subInput_val = document.getElementById('calci1');
var his_box = document.getElementById('historyBox');
var onoff_box = document.getElementById('onoff');
function getValue(val) {
    if (input_val.value === "0") {
        input_val.value = val;
    }
    else {
        input_val.value += val;
    }
}

function removeDigit() {
    if (input_val.value.length > 1) {
        input_val.value = input_val.value.slice(0, -1);
    }
    else {
        input_val.value = input_val.value.slice(0, -1);
        input_val.value = "0";
    }
}
function clearDigit() {

    input_val.value = "0";
    subInput_val.value = "";

}

function solve() {
    var equ = input_val.value;
    subInput_val.value = equ + " =";
    var ans = eval(equ);
    input_val.value = ans;


    showHistory();
}

function showHistory() {
    var equ = subInput_val.value;
    var ans = input_val.value;
    his_box.innerHTML += `<div class="his">
        <h1>${equ}</h1>
        <h1>${ans}</h1>
    </div>`;
    console.log(equ, ans);
}

function clearHistory() {
    var choice = confirm("Are you sure you want to delete the history ?");
    if (choice)
        document.getElementById('historyBox').innerHTML = "";
}






