import { SelectionButton } from "../selection-button/selectionButton";
import styles from "./styles.module.css";
export function OptionList({
    options,
    onSelect,
}: {
    options: { label: string }[];
    onSelect: (selectedLabel: string) => void;
}) {
    return (
        <ul className={styles.options__list}>
            {options.slice(1).map((option, i) => (
                <li key={i}>
                    <SelectionButton onSelect={() => onSelect(option.label)}>
                        {option.label}
                    </SelectionButton>
                </li>
            ))}
        </ul>
    );
}
