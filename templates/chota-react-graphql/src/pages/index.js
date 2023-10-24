import React from "react";
import Layout from "../ui/templates/Layout/Layout.component";
// import TodoSet from "../ui/organism/TodoSet/TodoSet.component";
// import { useDispatch, useSelector } from "react-redux";
import SiteHeader from "../ui/organism/SiteHeader/SiteHeader.component";
// import { createTodo, deleteTodo, editTodo, toggleTodo, updateTodo } from "../state/todo/todo.actions";
// import { setVisibilityFilter } from "../state/filters/filters.action";
// import { getSelectedFilter } from "../state/filters/filters.selectors";
// import { getVisibleTodos } from "../state/todo/todo.selectors";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query getBooks {
    books {
      title
    }
  }
`;

export default function HomePage() {
  // const dispatch = useDispatch();
  // const selectedFilter = useSelector(getSelectedFilter);
  // const filters = useSelector((state) => state.filters);
  // const todo = useSelector((state) => getVisibleTodos(state.todo, selectedFilter.id));

  // const todoData = {
  //   todo,
  //   filters,
  // };

  // const events = {
  //   onTodoCreate: (payload) => dispatch(createTodo(payload)),
  //   onTodoEdit: (payload) => dispatch(editTodo(payload)),
  //   onTodoUpdate: (text) => dispatch(updateTodo({ id: todo.currentTodoItem.id, text })),
  //   onTodoToggleUpdate: (id) => dispatch(toggleTodo(id)),
  //   onTodoDelete: (payload) => dispatch(deleteTodo(payload)),
  //   onTodoFilterUpdate: (id) => dispatch(setVisibilityFilter(id)),
  // };

  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) return <p>Error : {error.message}</p>;

  return (
    <Layout>
      <SiteHeader brandName={"Todo App"} />
      {/* <TodoSet todoData={todoData} events={events} /> */}
      {!loading ? (
        data.books.map(({ title }, i) => (
          <div key={i}>
            <h3>{title}</h3>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      ;
    </Layout>
  );
}
