import { useState } from 'react';

export const useManageToolbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<
    'File' | 'Edit' | 'View' | 'Favorites' | 'Tools' | 'Help' | null
  >(null);
  const props = { setSelected, selected, setShowDropdown, showDropdown };
  return {
    props,
    closeDropdown: () => {
      setShowDropdown(false);
      setSelected(null);
    },
  };
};
