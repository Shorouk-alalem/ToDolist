
//fetch API to get data 
let tasks=[];
fetch('todo.json').then(function (response) {
    return response.json();
}).then(function(data){
  console.log(data);
  tasks=data.tasks;
  console.log(tasks);
  const myList = tasks; 
  // Get the <ul> element
  const ulElement = document.getElementById('list');
  // Loop through the array and create list items
  myList.forEach(item => {
      // Create a list item
      const liElement = document.createElement('li');   
      // Set the text content of the list item
      liElement.textContent = item.task;
      // Append the list item to the <ul> element
      ulElement.appendChild(liElement);
      const DeleteButton = document.createElement('button');
      DeleteButton.id="deleteBtn";
      DeleteButton.textContent = "Delete";
      liElement.appendChild(DeleteButton);
  });
}).catch(function(error){
  console.log(error);
});
const Button = document.getElementById('deleteBtn');
if(Button){
  Button.addEventListener('click', function click() {
    // code to run when button is clicked
    alert("Hello World!");
  });
}


