import { washingMachines } from "../../../data";
import styles from "./styles.module.css";
import { ProductItem } from "../product-item/productItem";
import { useFilters, useMore } from "../../../hooks";

export function ProductList({
    sortParameters,
    search,
}: {
    sortParameters: Record<string, string>;
    search: string;
}) {
    const { sortedMachines } = useFilters({
        sortParameters,
        search,
        washingMachines,
    });
    const { visibleItems, handleShowMore, visibleCount } = useMore({
        sortedMachines,
    });
    return (
        <>
            <p className={styles.product__amount}>
                Liczba wyników: {sortedMachines.length}
            </p>
            {visibleItems.length > 0 ? (
                <>
                    <ul className={styles.product__list}>
                        {visibleItems.map((washingMachine, index) => (
                            <ProductItem
                                key={index}
                                washingMachine={washingMachine}
                            />
                        ))}
                    </ul>
                    {visibleCount < sortedMachines.length && (
                        <button
                            className={styles.button__more}
                            onClick={handleShowMore}>
                            Pokaż więcej
                        </button>
                    )}
                </>
            ) : (
                <p className={styles.empty__list}>Brak wyników</p>
            )}
        </>
    );
}
