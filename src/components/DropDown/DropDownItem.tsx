import { DropDownItemProps } from './types';

import styles from './dropDownItem.module.scss';
import { CheckIcon } from '../Icons';

export default function DropdownItem({
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
      {isSelected && <CheckIcon />}
    </div>
  );
}
