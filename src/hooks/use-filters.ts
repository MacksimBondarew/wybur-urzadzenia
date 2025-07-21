import type { WashingMachine } from "../data";

interface ReturnProps {
    sortedMachines: WashingMachine[];
}

export const useFilters = ({
    sortParameters,
    search,
    washingMachines,
}: {
    sortParameters: Record<string, string>;
    search: string;
    washingMachines: WashingMachine[];
}): ReturnProps => {
    const filterValueMap: Record<string, string> = {
        "Drzwi AddWash": "AddWash",
        "Panel AI Control": "AI Control",
        "Silnik inwerterowy": "Silnik Inwerterowy",
        "Wyświetlacz elektroniczny": "Basic LED Panel",
    };

    const filteredMachines = washingMachines.filter((machine) => {
        const matchesSearch =
            machine.name.toLowerCase().includes(search.toLowerCase()) ||
            machine.model.toLowerCase().includes(search.toLowerCase());

        const matchesFilters = Object.entries(sortParameters).every(
            ([filterKey, filterValue]) => {
                if (
                    !filterValue ||
                    filterValue.toLowerCase().includes("wszystkie") ||
                    filterValue.toLowerCase().includes("pokaż wszystkie")
                ) {
                    return true;
                }
                switch (filterKey) {
                    case "Funkcje": {
                        const mappedValue = filterValueMap[filterValue];
                        return mappedValue
                            ? machine.features.includes(mappedValue)
                            : machine.features.some((f) =>
                                f
                                    .toLowerCase()
                                    .includes(filterValue.toLowerCase())
                            );
                    }
                    case "Klasa energetyczna":
                        return machine.energyClass === filterValue;

                    case "Pojemność":
                        return machine.capacityKg + "kg" === filterValue;

                    case "Sortuj po":
                        return true;

                    default:
                        return true;
                }
            }
        );

        return matchesSearch && matchesFilters;
    });
    const sortType = sortParameters["Sortuj po"];
    const sortedMachines = [...filteredMachines].sort((a, b) => {
        switch (sortType) {
            case "Cena":
                return a.pricePLN - b.pricePLN;
            case "Pojemność":
                return a.capacityKg - b.capacityKg;
            default:
                return 0;
        }
    });
    return { sortedMachines };
};
