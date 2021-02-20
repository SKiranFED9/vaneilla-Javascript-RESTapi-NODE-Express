class Task {
  constructor(parent, id, name, due_date, status) { 
    let html = $(`<div class='task'>...<div>`);
    // Your code here
    parent.append(html);
  }
}