# task-manager-htv8
A web-based Task Manager with features for managing tasks, including sorting by priority and due dates

Task Manager Web Application

This is a web-based Task Manager application that allows users to manage tasks, including adding, editing, completing, deleting, and searching tasks. The tasks are displayed in a sorted order based on priority and due date.

# Table of Contents:

Getting Started
Usage
Endpoints
Dependencies
Contributing
License

# Getting Started

Follow the instructions below to set up and run the Task Manager application on your local machine.

Clone the repository:
~~~
git clone <repository_url>
~~~

Change to the project directory:
~~~
cd task-manager-app
~~~

Install the required dependencies:
~~~
npm install
~~~

Start the application:
~~~
node app.js
~~~

The application should now be running at http://localhost:3000.

# Usage

Once the application is up and running, open a web browser and navigate to http://localhost:3000 to access the Task Manager. You can perform the following actions:


Certainly! Here's a simple README file for your Task Manager application:

Task Manager Web Application
This is a web-based Task Manager application that allows users to manage tasks, including adding, editing, completing, deleting, and searching tasks. The tasks are displayed in a sorted order based on priority and due date.

Table of Contents
Getting Started
Usage
Endpoints
Dependencies
Contributing
License
Getting Started
Follow the instructions below to set up and run the Task Manager application on your local machine.

Clone the repository:

bash
Copy code
git clone <repository_url>
Change to the project directory:

bash
Copy code
cd task-manager-app
Install the required dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
node app.js
The application should now be running at http://localhost:3000.

Usage
Once the application is up and running, open a web browser and navigate to http://localhost:3000 to access the Task Manager. You can perform the following actions:

**View Tasks**:
All tasks are displayed on the main page, sorted by priority and due date.

**Add Task**: 
Click the "Add Task" button to add a new task. Fill in the task details, and click "Add Task" to add it to the list.

**Edit Task**: 
Click the "Edit" link next to a task to edit its details. You can update the task name, priority, due date, description, and category.

**Complete Task**: 
Click the "Mark as Completed" link to mark a task as completed. The completed task will have a strike-through style.

**Delete Task**: 
Click the "Delete" link to remove a task from the list.

**Search Task**: 
Use the search form to search for tasks by name. The search results will be displayed on a new page.

**Endpoints**: 
The application exposes the following endpoints:

_/_: Home page displaying all tasks.  
_/add_: POST request to add a new task.  
_/complete/:index_: GET request to mark a task as completed.  
_/edit/:index_: GET request to edit a task.  
_/update/:index_: POST request to update a task.  
_/delete/:index_: GET request to delete a task.  
_/search_: GET request to search for tasks by name.  

# Dependencies: 
This application relies on the following Node.js packages:
 
_express_: For creating the web server and routing.  
_body-parser_: For parsing incoming request data.    
_moment_: For handling date and time.    

You can find the full list of dependencies in the **package.json** file.


# Contributing: 

If you'd like to contribute to this project, please follow these steps:

* Fork the repository.   
* Create a new branch for your feature or fix: git checkout -b feature-name.    
* Make your changes and commit them: git commit -m 'Add new feature'.    
* Push your changes to your fork: git push origin feature-name.     
* Create a pull request on the original repository.

# License: 

This Task Manager application is open-source and available under the MIT Creative Commons License.   





