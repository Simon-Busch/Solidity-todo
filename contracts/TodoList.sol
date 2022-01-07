//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TodoList {
    struct Todo {
        string text;
        bool completed;
    }

    Todo[] public todos;

    function create(string calldata _text) external {
        todos.push(Todo({
            text: _text,
            completed: false
        }));
    }

    function updateText(uint _index, string calldata _text) external {
        todos[_index].text = _text;

        // better way to update if multiple value to change in the struct
        // Todo storage todo = todos[_index];
        // todo.text= _text;
    }

    function get(uint _index) external view returns (string memory, bool) {
        Todo memory todo = todos[_index];
        return (todo.text, todo.completed);
    }

    function toggleCompleted(uint _index) external {
        todos[_index].completed = !todos[_index].completed;
    }

    function getTodoList() public view returns (Todo[] memory) {
        return todos;
    }
}
