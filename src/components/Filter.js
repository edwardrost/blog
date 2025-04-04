'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Filter () {
  const [searchText, setSearchText] = useState('');
  const [searchMode, setSearchMode] = useState('byTitle'); // Режим поиска по содержимому (true); // true для поиска по заголовку  

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    // onFilter(e.target.value, isTitleMode ? 'title' : 'content');
  };  

  const handleToggleChange = () => {
    setSearchMode(searchMode === 'byTitle' ? 'byContent' : 'byTitle');
    // onFilter(searchText, isTitleMode ? 'content' : 'title'); // Применяем фильтр при смене режима  
  };  

  const handleReset = () => {
    setSearchText('');
    setSearchMode('byTitle');
    // onFilter('', 'title');
  };  

  return (
    <div className="hidden md:flex h-full flex-row">
      <div className="px-0 flex flex-row items-center justify-between w-full">
        <Input  
          type="search"
          placeholder="Type for searching by ..."
          value={searchText}  
          onChange={handleSearchTextChange}
          // className="border border-gray-300 focus:border-blue-500 rounded p-2 mr-2 w-full" 
        />
        <div className="flex items-center px-2 space-x-2">
          <Label htmlFor="airplane-mode" className="w-auto inline-block whitespace-nowrap">title</Label>
          <Switch data-id="airplane-mode" value={searchMode} onClick = {handleToggleChange} checked={searchMode === 'byContent'} />
          <Label htmlFor="airplane-mode" className="w-auto inline-block whitespace-nowrap">content</Label>
        </div>  
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );  
};

// {`seach text: ${searchText} | `}
// {`seach mode: ${searchMode}`}