import Loader from "../Loader/Loader.component";

export default function Button(props) {
  if (props.isLoading) {
    return (
      <button {...props}>
        <Loader width="2px" size="1.2rem" color="#fff" />
      </button>
    );
  }
  return <button {...props}>{props.children}</button>;
}
