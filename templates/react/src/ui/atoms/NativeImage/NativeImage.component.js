export default function NativeImage(props) {
    return (
        <img alt={props.alt} {...props} />
    );
}