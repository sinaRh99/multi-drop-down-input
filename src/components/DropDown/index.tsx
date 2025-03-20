// import { DropDownProps } from "./types";

import styles from './dropDown.module.scss';
import { useEffect, useRef, useState } from 'react';
import DropdownItem from './DropdownItem';
import { useClickOutside } from '../../hooks';
import { DropDownProps } from './types';
import { ChevronIcon } from '../Icons';
import { colors } from '../../constants/colors';

export function Dropdown({ placeholder }: DropDownProps) {
  const [newItemValue, setNewItemValue] = useState('');
  const [dropdownItems, setDropdownItems] = useState<string[]>([
    'Education 🎓',
    'Yeeeah, science! 🔬',
    'Art 🎭',
    'Sport 🏐',
    'Games 🎮',
    'Health 🏥',
  ]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLFormElement | null>(null);

  const hasClickedOutside = useClickOutside(dropdownRef);

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    setDropdownItems(prev => [newItemValue, ...prev]);
    setSelectedItems(prev => [...prev, newItemValue]);
    setNewItemValue('');
  };

  const handleToggleSelect = (item: string) => {
    const itemExists = !!selectedItems.find(val => val === item);
    if (itemExists) setSelectedItems(prev => prev.filter(val => val !== item));
    else setSelectedItems(prev => [...prev, item]);
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [hasClickedOutside]);

  return (
    <form
      ref={dropdownRef}
      className={[
        styles.wrapper,
        isDropdownOpen ? styles['wrapper-open'] : '',
      ].join(' ')}
      onSubmit={handleAddNewItem}
      onClick={() => setIsDropdownOpen(true)}
    >
      <input
        value={newItemValue}
        onChange={e => setNewItemValue(e.target.value)}
        className={styles.textField}
        id="drop-down"
        autoComplete="off"
        placeholder={placeholder}
      />
      <span className={styles.icon}>
        <ChevronIcon color={isDropdownOpen ? colors.primary : undefined} />
      </span>
      <label htmlFor="drop-down" className={styles.items}>
        <div className={styles.itemsHolder}>
          {dropdownItems.map(item => (
            <DropdownItem
              key={item}
              item={item}
              onToggleSelect={handleToggleSelect}
              isSelected={!!selectedItems.find(val => val === item)}
            />
          ))}
        </div>
      </label>
    </form>
  );
}
