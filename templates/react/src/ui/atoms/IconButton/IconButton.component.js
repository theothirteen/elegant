import NativeButton from "../NativeButton/NativeButton.component";
import NativeImage from "../NativeImage/NativeImage.component";

export default function IconButton({ iconName, alt, variant, size, onClick }) {
  return (
    <NativeButton className={`button icon-only ${variant}`} onClick={onClick}>
      <NativeImage alt={alt} src={`https://icongr.am/feather/${iconName}.svg?size=${size}`} />
    </NativeButton>
  );
}
