import { useAtomicContext } from "../../../utils/providers/AtomicProvider";
import Button from "../Button/Button.component";
import Image from "../Image/Image.component";

export default function IconButton({ iconName, alt, variant, size, color, onClick }) {
  const { theme } = useAtomicContext();
  const themeColor = theme === 'dark' ? 'ffffff' : '';
  return (
    <Button className={`button icon-only ${variant}`} onClick={onClick}>
      <Image alt={alt} src={`https://icongr.am/feather/${iconName}.svg?size=${size}&color=${color ? color : themeColor}`} />
    </Button>
  );
}
