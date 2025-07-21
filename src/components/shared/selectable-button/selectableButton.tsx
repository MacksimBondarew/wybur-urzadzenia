import { useLocalStorage } from "../../../hooks";
import { Button } from "../../ui";

type SelectableButtonProps = {
    itemKey: string;
    itemValue: string;
    defaultText?: string;
};

export const SelectableButton = ({
    itemKey,
    itemValue,
    defaultText = "Wybierz",
}: SelectableButtonProps) => {
    const [selected, setSelected] = useLocalStorage<string | null>(
        itemKey,
        null
    );

    const handleClick = () => {
        if (selected === itemValue) {
            setSelected(null);
        } else {
            setSelected(itemValue);
            
        }
    };

    return (
        <Button
            text={selected === itemValue ? "wybrane" : defaultText}
            isSelected={selected === itemValue}
            handleClick={handleClick}
        />
    );
};
