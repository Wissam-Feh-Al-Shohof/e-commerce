import React, { useState } from 'react';
import  SortIcon  from "@mui/icons-material/Sort"
import {Box} from "@mui/material";

interface SortProps {
  onSortChange: (sort: 'asc' | 'desc' | 'default') => void;
}

export const Sort: React.FC<SortProps> = ({ onSortChange }) => {
  const [sort, setSort] = useState<'asc' | 'desc' | 'default'>('default');

  const handleSort = () => {
    let newSort: 'asc' | 'desc' | 'default';
    if (sort === 'default') {
      newSort = 'asc';
    } else if (sort === 'asc') {
      newSort = 'desc';
    } else {
      newSort = 'default';
    }
    setSort(newSort);
    onSortChange(newSort);
  };

  return (
    <Box onClick={handleSort} sx={{color:"#F3692E",alignItems:"center", display:"inline-flex", cursor:"pointer" }}>
      {sort === 'asc' && <SortIcon style={{ transform: 'rotate(90deg)' }} />}
      {sort === 'desc' && <SortIcon style={{ transform: 'rotate(-90deg)' }} />}
      {sort === 'default' && <SortIcon />}
    </Box>
  );
};

