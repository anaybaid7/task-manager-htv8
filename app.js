const express = require('express');
const app = express();
const port = 3000;

// Create an array to store tasks
const tasks = [];

// Serve an HTML page
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const sortedTasks = sortTasks(tasks);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Task Manager</title>
      <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
      <h1>Task Manager</h1>
      <form action="/search" method="get">
        <label>Search Tasks:</label>
        <input type="text" name="search">
        <button type="submit">Search</button>
      </form>
      <ul>
        ${sortedTasks.map((task, index) => `
          <li class="${task.completed ? 'completed' : ''}">
            <b>${task.name}</b> - Priority: ${task.priority} - Due Date: ${task.dueDate}<br>
            Description: ${task.description}<br>
            Category: ${task.category || 'Uncategorized'}<br>
            <a href="/complete/${index}">Mark as Completed</a> |
            <a href="/edit/${index}">Edit</a> |
            <a href="/delete/${index}">Delete</a>
          </li>
        `).join('')}
      </ul>
      <form action="/add" method="post">
        <label>Task Name:</label>
        <input type="text" name="name" required><br>
        <label>Priority:</label>
        <input type" text" name="priority" required><br>
        <label>Due Date:</label>
        <input type="date" name="dueDate"><br>
        <label>Description:</label>
        <textarea name="description"></textarea><br>
        <label>Category:</label>
        <input type="text" name="category"><br>
        <button type="submit">Add Task</button>
      </form>
    </body>
    </html>
  `);
});

// Handle POST requests to add tasks
app.post('/add', (req, res) => {
  const task = {
    name: req.body.name,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
    description: req.body.description,
    category: req.body.category,
    completed: false,
  };
  tasks.push(task);
  res.redirect('/');
});

// Handle GET requests to mark tasks as completed
app.get('/complete/:index', (req, res) => {
  const index = req.params.index;
  if (tasks[index]) {
    tasks[index].completed = true;
  }
  res.redirect('/');
});

// Handle GET requests to edit tasks
app.get('/edit/:index', (req, res) => {
  const index = req.params.index;
  if (tasks[index]) {
    const task = tasks[index];
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Edit Task</title>
      </head>
      <body>
        <h1>Edit Task</h1>
        <form action="/update/${index}" method="post">
          <label>Task Name:</label>
          <input type="text" name="name" value="${task.name}" required><br>
          <label>Priority:</label>
          <input type="text" name="priority" value="${task.priority}" required><br>
          <label>Due Date:</label>
          <input type="date" name="dueDate" value="${task.dueDate}"><br>
          <label>Description:</label>
          <textarea name="description">${task.description}</textarea><br>
          <label>Category:</label>
          <input type="text" name="category" value="${task.category}"><br>
          <button type="submit">Update Task</button>
        </form>
      </body>
      </html>
    `);
  } else {
    res.redirect('/');
  }
});

// Handle POST requests to update tasks
app.post('/update/:index', (req, res) => {
  const index = req.params.index;
  if (tasks[index]) {
    const task = tasks[index];
    task.name = req.body.name;
    task.priority = req.body.priority;
    task.dueDate = req.body.dueDate;
    task.description = req.body.description;
    task.category = req.body.category;
  }
  res.redirect('/');
});

// Handle GET requests to delete tasks
app.get('/delete/:index', (req, res) => {
  const index = req.params.index;
  if (tasks[index]) {
    tasks.splice(index, 1);
  }
  res.redirect('/');
});

// Handle GET requests to search tasks
app.get('/search', (req, res) => {
  const searchQuery = req.query.search.toLowerCase();
  const matchingTasks = tasks.filter(task => task.name.toLowerCase().includes(searchQuery));
  const sortedTasks = sortTasks(matchingTasks);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Task Manager - Search Results</title>
      <style>
        .completed { text-decoration: line-through; }
      </style>
    </head>
    <body>
      <h1>Task Manager - Search Results</h1>
      <p>Search results for: <b>${searchQuery}</b></p>
      <ul>
        ${sortedTasks.map((task, index) => `
          <li class="${task.completed ? 'completed' : ''}">
            <b>${task.name}</b> - Priority: ${task.priority} - Due Date: ${task.dueDate}<br>
            Description: ${task.description}<br>
            Category: ${task.category || 'Uncategorized'}<br>
            <a href="/complete/${tasks.indexOf(task)}">Mark as Completed</a> |
            <a href="/edit/${tasks.indexOf(task)}">Edit</a> |
            <a href="/delete/${tasks.indexOf(task)}">Delete</a>
          </li>
        `).join('')}
      </ul>
      <a href="/">Back to All Tasks</a>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Task Manager app listening at http://localhost:${port}`);
});

// Function to sort tasks by priority and due date
function sortTasks(tasks) {
  return tasks.sort((a, b) => {
    if (a.priority === b.priority) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return a.priority - b.priority;
  });
}

