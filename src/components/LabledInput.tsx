import { FC } from "react";
import { Input } from "./ui/Input";

interface LabledInputProps {
  labelText: string;
  inputValue: string;
  type: string;
  placeholderText?: string;
  handleOnChange: React.Dispatch<React.SetStateAction<string>>;
}
const LabledInput: FC<LabledInputProps> = ({
  labelText,
  type,
  inputValue,
  placeholderText,
  handleOnChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="font-semibold text-xs">{labelText}</label>
      <Input
        type={type}
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => handleOnChange(e.target.value)}
        className="focus:outline-slate-300"
      />
    </div>
  );
};

export default LabledInput;
