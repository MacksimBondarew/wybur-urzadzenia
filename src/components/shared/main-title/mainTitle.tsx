
import styles from "./style.module.css"
export function MainTitle({ title }: { title: string }) {
    return <h1 className={styles.title}>{title}</h1>;
}
