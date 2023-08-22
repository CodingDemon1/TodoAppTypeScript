var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.completedTask = [];
    }
    TaskManager.prototype.addTask = function (title) {
        var currLength = this.tasks.length;
        var task = { title: title, completed: false, priority: currLength + 1 };
        this.tasks.push(task);
        this.renderTasks(this.tasks);
    };
    TaskManager.prototype.markTaskAsCompleted = function (index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
            this.completedTask.push(this.tasks[index]);
            this.renderTasks(this.tasks);
        }
    };
    TaskManager.prototype.showCompleted = function () {
        this.renderCompletedTasks(this.completedTask);
    };
    TaskManager.prototype.removeTask = function (index) {
        this.tasks = this.tasks.filter(function (task, ind) {
            if (ind === index)
                return false;
            return true;
        });
    };
    TaskManager.prototype.removeCompletedTask = function (index) {
        this.completedTask = this.completedTask.filter(function (task, ind) {
            if (ind === index)
                return false;
            return true;
        });
    };
    TaskManager.prototype.renderTasks = function (tasks) {
        var _this = this;
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        tasks.forEach(function (task, index) {
            var _a;
            var listItem = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = (_a = task.title) !== null && _a !== void 0 ? _a : "Untitled Task";
            td1.className = "p-2 border-solid border-2";
            var td2 = document.createElement("td");
            td2.textContent = task.completed ? "Completed" : "Not Completed";
            td2.className = "p-2 border-solid border-2";
            // const td3 = document.createElement("td")
            // td3.textContent = task.priority.toString();
            // td3.className = "p-2 border-solid border-2"
            var td4 = document.createElement("td");
            var markBtn = document.createElement("button");
            td4.className = "p-2 border-solid border-2";
            markBtn.textContent = "Mark as Complete";
            markBtn.addEventListener("click", function () { return _this.markTaskAsCompleted(index); });
            markBtn.className = 'rounded-md bg-green-400 px-4 py-1 hover:bg-green-500 hover:text-white';
            td4.append(markBtn);
            var td5 = document.createElement("td");
            td5.className = "p-2 border-solid border-2";
            var delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.className = "rounded-md bg-red-400 px-4 py-1 hover:bg-red-500 hover:text-white";
            delBtn.addEventListener("click", function () {
                _this.removeTask(index);
                _this.renderTasks(_this.tasks);
            });
            td5.append(delBtn);
            listItem.append(td1, td2, td4, td5);
            taskList.appendChild(listItem);
        });
    };
    TaskManager.prototype.renderCompletedTasks = function (tasks) {
        var _this = this;
        var taskList = document.getElementById("completedTaskList");
        taskList.innerHTML = "";
        tasks.forEach(function (task, index) {
            var _a;
            var listItem = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = (_a = task.title) !== null && _a !== void 0 ? _a : "Untitled Task";
            td1.className = "p-2 border-solid border-2";
            var td2 = document.createElement("td");
            td2.textContent = task.completed ? "Completed" : "Not Completed";
            td2.className = "p-2 border-solid border-2";
            var td5 = document.createElement("td");
            td5.className = "p-2 border-solid border-2";
            var delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.className = "rounded-md bg-red-400 px-4 py-1 hover:bg-red-500 hover:text-white";
            delBtn.addEventListener("click", function () {
                _this.removeCompletedTask(index);
                _this.renderCompletedTasks(_this.completedTask);
            });
            td5.append(delBtn);
            listItem.append(td1, td2, td5);
            taskList.appendChild(listItem);
        });
    };
    return TaskManager;
}());
var taskManager1 = new TaskManager();
var addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", function () {
    var taskTitleInput = document.getElementById("taskTitle");
    var title = taskTitleInput.value.trim();
    if (title) {
        taskManager1.addTask(title);
        taskTitleInput.value = "";
    }
});
var firstContainer = document.getElementById("firstContainer");
var secondContainer = document.getElementById("secondContainer");
var allTaskBtn = document.getElementById("allTaskBtn");
var completedTaskBtn = document.getElementById("completedTaskBtn");
allTaskBtn === null || allTaskBtn === void 0 ? void 0 : allTaskBtn.addEventListener('click', function () {
    firstContainer === null || firstContainer === void 0 ? void 0 : firstContainer.classList.remove("disable");
    secondContainer === null || secondContainer === void 0 ? void 0 : secondContainer.classList.add("disable");
    taskManager1.renderTasks(taskManager1.tasks);
});
completedTaskBtn === null || completedTaskBtn === void 0 ? void 0 : completedTaskBtn.addEventListener('click', function () {
    firstContainer === null || firstContainer === void 0 ? void 0 : firstContainer.classList.add("disable");
    secondContainer === null || secondContainer === void 0 ? void 0 : secondContainer.classList.remove("disable");
    taskManager1.renderCompletedTasks(taskManager1.completedTask);
});
