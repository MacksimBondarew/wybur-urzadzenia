import { useState } from "react";
import { Icon } from "../icon/icon";
import { OptionList } from "../option-list/optionList";
import { SelectionButton } from "../selection-button/selectionButton";
import styles from "./styles.module.css";

export default function SelectionItem({
    data,
    onSelect,
}: {
    data: { title: string; options: { label: string }[] };
    onSelect: (title: string, selectedLabel: string) => void;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState(data.options[0].label);
    const handleSelect = (label: string) => {
        setSelected(label);
        onSelect(data.title, label);
    };
    return (
        <>
            <li key={data.title} className={styles.selection__item}>
                <h5>{data.title}</h5>
                <SelectionButton clickFunction={() => setIsOpen(!isOpen)}>
                    {selected}
                    <Icon iconId="row-down" width={13} height={13} />
                </SelectionButton>
                {isOpen && <OptionList onSelect={handleSelect} options={data.options} />}
            </li>
        </>
    );
}
