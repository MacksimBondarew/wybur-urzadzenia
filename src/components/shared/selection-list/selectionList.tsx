import { filtersData } from "../../../data";
import SelectionItem from "../selection-item/selectionItem";
import styles from "./styles.module.css";

export function SelectionList({
    onSelect,
}: {
    onSelect: (title: string, selectedLabel: string) => void;
}) {
    return (
        <ul className={styles.selection__list}>
            {filtersData.map((data) => (
                <SelectionItem
                    key={data.title}
                    onSelect={onSelect}
                    data={data}
                />
            ))}
        </ul>
    );
}
