export interface DropDownProps {
  value?: string[];
  onChange?: (val: string[]) => void;
}

export interface DropDownItemProps {
  item: string;
  onToggleSelect: (val: string) => void;
  isSelected: boolean;
}
