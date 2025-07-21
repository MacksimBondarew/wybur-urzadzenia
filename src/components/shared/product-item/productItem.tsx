import { Icon } from "../icon/icon";
import washingMachinePng from "../../../assets/washing-machine.png";
import styles from "./styles.module.css";
import type { WashingMachine } from "../../../data";
import { SelectableButton } from "../selectable-button/selectableButton";

export function ProductItem({
    washingMachine,
}: {
    washingMachine: WashingMachine;
}) {
    return (
        <li className={styles.product__item}>
            <img
                className={styles.product__image}
                src={washingMachinePng}
                alt="washing machine"
            />
            <h4 className={styles.product__title}>
                {washingMachine.model}, {washingMachine.name},{" "}
                {washingMachine.capacityKg} kg, biała
            </h4>
            <ul className={styles.product__parametr_list}>
                <li className={styles.product__parametr_item}>
                    <p className={styles.product__parametr_text}>
                        Pojemność (kg):
                    </p>
                    <span className={styles.product__parametr_information}>
                        {washingMachine.capacityKg}
                    </span>
                </li>
                <li className={styles.product__parametr_item}>
                    <p className={styles.product__parametr_text}>
                        Wymiary (GxSxW):
                    </p>
                    <span className={styles.product__parametr_information}>
                        {washingMachine.dimensions}
                    </span>
                </li>
                <li className={styles.product__parametr_item}>
                    <ul className={styles.product__features}>
                        <p className={styles.product__parametr_text}>
                            Funkcje:{" "}
                        </p>
                        {washingMachine.features.map((feature) => (
                            <li
                                key={feature}
                                className={
                                    styles.product__parametr_information
                                }>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            <div className={styles.product__energy_text}>
                <p className={styles.product__parametr_text}>
                    Klasa energetyczna
                </p>
                <div className={styles.product__energy_image}>
                    <Icon width={49} height={18} iconId="energy" />
                    <span className={styles.product__energy_class}>
                        {washingMachine.energyClass}
                    </span>
                </div>
            </div>
            <p className={styles.product__parametr_text}>
                Cena obowiązuje: {washingMachine.priceValidFrom} -{" "}
                {washingMachine.priceValidTo}
            </p>
            <div className={styles.product__price}>
                <h3 className={styles.product__price_large}>
                    {washingMachine.pricePLN}
                </h3>
                <div className={styles.product__price_small}>
                    <span>00</span>
                    <span>zł</span>
                </div>
            </div>
            <p className={styles.product__discount}>
                {washingMachine.installmentPLN} X 60 rat
            </p>
            <SelectableButton
                itemKey="selectedProduct"
                itemValue={washingMachine.model}
            />
        </li>
    );
}
