const bookNameElement = document.getElementById('book-name');
const issueToElement = document.getElementById("issue-to");
const btnElement = document.getElementById('btn');
const tableBody = document.querySelector("tbody");
const books = [
];


function TableRow (data, tableBody, id) {
   

    const tr = document.createElement("tr");
   

    const idTd = document.createElement("td");
    idTd.textContent = id;

    const bookNameTd = document.createElement("td");
    bookNameTd.textContent = data.name;

     const issueToTd = document.createElement("td");
     issueToTd.textContent = data.issuedTo;


    const issuedAtTd = document.createElement("td");
    issuedAtTd.textContent = data.issuedAt;

    const statusTd = document.createElement("td");
    const div = document.createElement('div');
   
    const button = document.createElement('button');
    const span = document.createElement('span');
    span.textContent = data.status;
 
    button.textContent = 'Edit';

    div.appendChild(span);
    div.appendChild(button);

    statusTd.appendChild(div);

    tr.appendChild(idTd);
    tr.appendChild(bookNameTd);
    tr.appendChild(issueToTd);
    tr.appendChild(issuedAtTd);
    tr.appendChild(statusTd);

  
    tableBody.appendChild(tr);
}

function addBookIn() {

  

   

   books.map(function (book, index) {

  
    TableRow(book, tableBody,index+1);
   })
}

function FormSubmit () {
   
    const bookName = bookNameElement.value;
    bookNameElement.value = "";

   
    const issuedTo = issueToElement.value;
    issueToElement.value = "";

    

    if(bookName && issuedTo) {
        const book = {
          name: bookName,
          issuedTo: issuedTo,
          issuedAt: new Date().toUTCString().substring(0,12),
          
        };

        books.push(book);
        addBookIn()();
    }

}

btnElement.addEventListener('click', FormSubmit);