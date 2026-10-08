let userNumber = document.getElementById("userNumber");
let tableHeading = document.getElementById("tableHeading");
let tablePara = document.getElementById("tablePara");
let table = document.getElementById("table");

let createBtn = document.getElementById("create-btn");
let clearBtn = document.getElementById("clear-btn");


const createTable = () => {
    let numberInput = Number(userNumber.value.trim());

    if (numberInput <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter a Valid Number",
        });
        userNumber.value = "";
        return;
    }

    tableHeading.textContent = `Table of ${numberInput}`;
    tablePara.textContent = `Here is the multiplication table for ${numberInput}`;




    table.innerHTML = "";

    for (let i = 1; i <= 10; i++) {

        table.innerHTML += `
                <tr>
                <td>${numberInput} × ${i}</td>
                <td>${numberInput * i}</td>
                </tr>
        `

    }

    userNumber.value = "";
};


const clearAll = () => {

    userNumber.value = "";
    tableHeading.textContent = "Table of X";
    tablePara.textContent = "Here is the multiplication table for X";
    table.textContent = "";
};


clearBtn.onclick = clearAll;
createBtn.onclick = createTable;

