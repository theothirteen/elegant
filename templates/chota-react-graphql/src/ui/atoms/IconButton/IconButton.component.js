import Button from "../Button/Button.component";
import Image from "../Image/Image.component";

export default function IconButton({ iconName, alt, variant, size, onClick }) {
  return (
    <Button className={`button icon-only ${variant}`} onClick={onClick}>
      <Image alt={alt} src={`https://icongr.am/feather/${iconName}.svg?size=${size}`} />
    </Button>
  );
}
