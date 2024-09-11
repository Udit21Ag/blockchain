// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract TodoList {
    struct Task {
        string description;
        string status;
        uint priority;
        uint dueDate;
    }

    mapping(address => Task[]) tasks;

    function addTask(string memory _description, uint _priority, uint _dueDate) public {
        require(_priority>=1 && _priority<=3, "Priority must be between 1 and 3");
        require(_dueDate>=1 && _dueDate<=31, "Due Date must be between 1 and 31");

        Task memory newTask = Task({
            description: _description,
            status: "Pending",
            priority: _priority,
            dueDate: _dueDate
        });
        tasks[msg.sender].push(newTask);
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks[msg.sender];
    }

    function taskCompleted(uint _index) public {
        require(_index < tasks[msg.sender].length, "Invalid index");
        tasks[msg.sender][_index].status = "Completed";
    }

    function removeTask(uint _index) public {
        require(_index < tasks[msg.sender].length, "Invalid index");
        delete(tasks[msg.sender][_index]);
    }

    function sortTasksByPriority() public view returns (Task[] memory prioritySortedTasks) {
        Task[] memory userTasks = tasks[msg.sender];
        uint n = userTasks.length;
        for (uint i = 0; i < n; i++) {
            for (uint j = 0; j < n - 1; j++) {
                if (userTasks[j].priority > userTasks[j + 1].priority) {
                    Task memory temp = userTasks[j];
                    userTasks[j] = userTasks[j + 1];
                    userTasks[j + 1] = temp;
                }
            }
        }
        return userTasks;
    }

    function editTaskDescription(uint _index, string memory _newDescription) public {
        require(_index < tasks[msg.sender].length, "Invalid index");
        tasks[msg.sender][_index].description = _newDescription;
    }

    function viewPendingTasks() public view returns (Task[] memory pendingTasks) {
        uint n = tasks[msg.sender].length;
        Task[] memory userTasks = new Task[](n);
        uint count=0;
        for (uint i=0; i<n;i++) {
            if (keccak256(bytes(tasks[msg.sender][i].status)) == keccak256((bytes("Pending")))){
                userTasks[count] = tasks[msg.sender][i];
                count++;
            }
        }
        return userTasks;
    }

    function viewCompletedTasks() public view returns (Task[] memory completedTasks) {
        uint n = tasks[msg.sender].length;
        Task[] memory userTasks = new Task[](n);
        uint count=0;
        for (uint i=0; i<n;i++) {
            if (keccak256(bytes(tasks[msg.sender][i].status)) == keccak256((bytes("Pending")))){
                userTasks[count] = tasks[msg.sender][i];
                count++;
            }
        }
        return userTasks;
    }
}
