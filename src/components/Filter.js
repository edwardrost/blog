'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useBoundStore } from '@/store/bound-store';

export default function Filter() {
  const { searchText, searchMode, setSearchText, setSearchMode, resetFilter } = useBoundStore();

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleToggleChange = () => {
    setSearchMode(searchMode === 'byTitle' ? 'byContent' : 'byTitle');
  };

  return (
    <div className="hidden md:flex h-full flex-row">
      <div className="px-0 flex flex-row items-center justify-between w-full">
        <Input  
          type="search"
          placeholder="Type for searching by ..."
          value={searchText}  
          onChange={handleSearchTextChange}
        />
        <div className="flex items-center px-2 space-x-2">
          <Label htmlFor="airplane-mode" className="w-auto inline-block whitespace-nowrap">title</Label>
          <Switch data-id="airplane-mode" value={searchMode} onClick={handleToggleChange} checked={searchMode === 'byContent'} />
          <Label htmlFor="airplane-mode" className="w-auto inline-block whitespace-nowrap">content</Label>
        </div>  
        <Button variant="outline" onClick={resetFilter}>
          Reset
        </Button>
      </div>
    </div>
  );
}

// {`seach text: ${searchText} | `}
// {`seach mode: ${searchMode}`}