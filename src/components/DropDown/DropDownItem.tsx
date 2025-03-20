import { DropDownItemProps } from './types';

import styles from './dropDownItem.module.scss';

export default function DropDownItem({
  item,
  isSelected,
  onToggleSelect,
}: DropDownItemProps) {
  return (
    <div
      className={[styles.item, isSelected ? styles.selected : ''].join(' ')}
      onClick={() => onToggleSelect(item)}
    >
      {item}
    </div>
  );
}
