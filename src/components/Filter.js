'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
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
    <div className="bg-background py-4 min-w-[375px]">
      <div className="max-w-4xl mx-auto px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl text-primary dark:text-bright font-bold tracking-tighter text-center sm:text-4xl mb-4">
          Latest Blog Posts
        </h2>
        
        {/* Mobile filter */}
        <div className="md:hidden flex flex-col space-y-4">
          <Input  
            type="search"
            placeholder="Type for searching by ..."
            value={searchText}  
            onChange={handleSearchTextChange}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="airplane-mode" className="w-auto inline-block whitespace-nowrap">title</Label>
              <Switch data-id="airplane-mode" value={searchMode} onClick={handleToggleChange} checked={searchMode === 'byContent'} />
              <Label htmlFor="airplane-mode" className="w-auto inline-block whitespace-nowrap">content</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="secondary" onClick={resetFilter}>
                Reset
              </Button>
            </div>            
          </div>
        </div>
        
        {/* Desktop filter */}
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
            <Separator orientation="vertical" className="ml-2 mr-2 bg-primary/20 dark:bg-bright/20" />
            <div>
              <Button variant="secondary" className="ml-2" onClick={resetFilter}>
                Reset
              </Button>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

// {`seach text: ${searchText} | `}
// {`seach mode: ${searchMode}`}