import styles from "./style.module.css";
import { Input } from "../components/ui";
import { MainTitle, ProductList, SelectionList } from "../components/shared";
import { useState } from "react";

export default function Home() {
    const [sortParameters, setSortParameters] = useState<
        Record<string, string>
    >({});
    const [search, setSearch] = useState<string>("");
    const handleSelect = (title: string, selectedLabel: string) => {
        setSortParameters((prev) => ({ ...prev, [title]: selectedLabel }));
    };
    return (
        <>
            <MainTitle title="Wybierz urządzenie" />
            <main className={styles.main}>
                <section className={styles.container}>
                    <Input
                        value={search}
                        setSearch={setSearch}
                        placeholder="Search..."
                    />
                    <SelectionList onSelect={handleSelect} />
                    <ProductList search={search} sortParameters={sortParameters} />
                </section>
            </main>
        </>
    );
}
