
let ul = document.querySelector('ul');

let totallyRevenue = 0;
let totallyExpense = 0;
 

document.querySelector('#send').addEventListener('click', () => {

    let operationDescription = document.querySelector('#name').value;
    let operation = document.querySelector('#operation').value;

    let inputRevenue  = document.querySelector('#operation').value;
    let inputExpense = document.querySelector('#operation').value;
    inputRevenue = Number(inputRevenue);
    inputExpense = Number(inputExpense);
   
    let liOperation = document.createElement('li');
    let pOperationDescription = document.createElement('p');
    let pOperation = document.createElement('p');
    let br = document.createElement('br');

    pOperationDescription.innerHTML = `${operationDescription}`;
    pOperation.innerHTML = `${operation}$`;
    

    liOperation.appendChild(pOperationDescription);
    liOperation.appendChild(pOperation);

    ul.appendChild(liOperation);
    ul.appendChild(br);

     document.querySelector('#name').value = ' ';
     document.querySelector('#operation').value = ' ';

    let revenue = document.querySelector('#revenue');
    let expense = document.querySelector('#expense');

    if(inputRevenue > 0) {
        
        totallyRevenue += inputRevenue;
        revenue.innerHTML = `${totallyRevenue}$`;

    } else if (inputRevenue < 0) {
        totallyExpense -= inputExpense;
        expense.innerHTML = `${totallyExpense}$`;
    }

    let balance = document.querySelector('#balance');
    balance.innerHTML = `&#128178;: ${totallyRevenue-totallyExpense}$`

    

})