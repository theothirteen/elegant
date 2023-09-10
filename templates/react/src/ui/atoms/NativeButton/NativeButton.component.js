export default function NativeButton(props) {
    return (
        <button {...props} >{props.children}</button>
    );
}