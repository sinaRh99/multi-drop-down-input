// import { DropDownProps } from "./types";

import styles from './dropDown.module.scss';
import { useState } from 'react';
import DropDownItem from './DropDownItem';

export default function DropDown() {
  const [newItemValue, setNewItemValue] = useState('');
  const [dropdownItems, setDropdownItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    setDropdownItems(prev => [...prev, newItemValue]);
    setNewItemValue('');
  };

  const handleToggleSelect = (item: string) => {
    console.log('🚀 ~ handleToggleSelect ~ item:', item);
    const itemExists = !!selectedItems.find(val => val === item);
    if (itemExists) setSelectedItems(prev => prev.filter(val => val !== item));
    else setSelectedItems(prev => [...prev, item]);
  };

  return (
    <form
      className={styles.wrapper}
      onSubmit={handleAddNewItem}
      onClick={() => setIsDropdownOpen(true)}
    >
      <input
        value={newItemValue}
        onChange={e => setNewItemValue(e.target.value)}
        className={styles.textField}
        id="drop-down"
      />
      <label
        htmlFor="drop-down"
        className={[styles.items, isDropdownOpen ? styles.open : ''].join(' ')}
      >
        {dropdownItems.map(item => (
          <DropDownItem
            key={item}
            item={item}
            onToggleSelect={handleToggleSelect}
            isSelected={!!selectedItems.find(val => val === item)}
          />
        ))}
      </label>
    </form>
  );
}
