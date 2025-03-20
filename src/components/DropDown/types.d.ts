export interface DropDownProps {
  value?: string[];
  onChange?: (val: string[]) => void;
  placeholder?: string;
}

export interface DropDownItemProps {
  item: string;
  onToggleSelect: (val: string) => void;
  isSelected: boolean;
}
