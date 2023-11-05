import React from "react";
import FilterGroup from "../../molecules/FilterGroup/FilterGroup.component";
import AddTodoForm from "../../molecules/AddTodoForm/AddTodoForm.component";
import TodoItems from "../../molecules/TodoItems/TodoItems.component";

export default function TodoList({ todoData, events }) {
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
      <TodoItems
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
