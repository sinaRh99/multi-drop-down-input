// import { DropDownProps } from "./types";

import styles from "./dropDown.module.scss";
import { useState } from "react";

export default function DropDown() {
  const [newItemValue, setNewItemValue] = useState("");
  return (
    <form className={styles.wrapper}>
      <input
        value={newItemValue}
        onChange={(e) => setNewItemValue(e.target.value)}
        className={styles.textField}
      />
    </form>
  );
}
