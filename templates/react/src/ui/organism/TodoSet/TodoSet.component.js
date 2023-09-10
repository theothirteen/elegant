import React from "react";
import FilterGroup from "../../molecules/FilterGroup/FilterGroup.component";
import AddTodoForm from "../../molecules/AddTodoForm/AddTodoForm.component";
import TodoList from "../../molecules/TodoList/TodoList.component";

export default function TodoSet({ todoData, events }) {
  const { 
    onTodoCreate,
    onTodoEdit,
    onTodoUpdate,
    onTodoToggleUpdate,
    onTodoFilterUpdate,
    onTodoDelete,
  } = events;
  return (
    <>
      <AddTodoForm
        todoValue={todoData.todo.currentTodoItem.text || ''}
        onTodoAdd={onTodoCreate}
        onTodoUpdate={onTodoUpdate}
      />
      <TodoList
        todos={todoData.todo.todoItems || []}
        onToggleClick={onTodoToggleUpdate}
        onDeleteClick={onTodoDelete}
        onEditClick={onTodoEdit}
      />
      <FilterGroup
        filterItems={todoData.filters}
        onFilterClick={onTodoFilterUpdate}
      />
    </>
  );
}
