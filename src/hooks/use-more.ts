import { useState } from "react";
import type { WashingMachine } from "../data";

const INITIAL_VISIBLE = 6;
const LOAD_STEP = 6;

interface ReturnProps {
    visibleItems: WashingMachine[];
    handleShowMore: () => void;
    visibleCount: number;
}

export const useMore = ({
    sortedMachines,
}: {
    sortedMachines: WashingMachine[];
}): ReturnProps => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
    const visibleItems = sortedMachines.slice(0, visibleCount);
    const handleShowMore = () => {
        setVisibleCount((prev) => prev + LOAD_STEP);
    };
    return { visibleItems, handleShowMore, visibleCount };
};
