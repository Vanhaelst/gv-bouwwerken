import OptionSimple from "@/components/atoms/form/option-simple";
import { OptionList } from "@/components/atoms/form/option-list";
import OptionVerticalList from "@/components/atoms/form/option-vertical";

export function Option(props) {
  if (props.variant === "list") {
    return <OptionList {...props} />;
  } else if (props.variant === "vertical-list") {
    return <OptionVerticalList {...props} />;
  }
  return <OptionSimple {...props} />;
}
