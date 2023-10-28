import Loader from "../Loader/Loader.component";

import './Button.style.css';

export default function Button(props) {
  if (props.isLoading) {
    return (
      <button {...props} className={`${props.className} loading-button`}>
        <Loader width="2px" size="1.2rem" color="#fff" />
      </button>
    );
  }
  return <button {...props}>{props.children}</button>;
}
