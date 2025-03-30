'use client';

import React, { useState } from 'react';  

export default function Filter ({ onFilter }) {
  const [searchText, setSearchText] = useState('');  
  const [isTitleMode, setIsTitleMode] = useState(true); // true для поиска по заголовку  

  const handleSearchTextChange = (e) => {  
    setSearchText(e.target.value);  
    onFilter(e.target.value, isTitleMode ? 'title' : 'content');  
  };  

  const handleToggleChange = () => {  
    setIsTitleMode(!isTitleMode);  
    onFilter(searchText, isTitleMode ? 'content' : 'title'); // Применяем фильтр при смене режима  
  };  

  const handleReset = () => {  
    setSearchText('');  
    setIsTitleMode(true);  
    onFilter('', 'title'); // Сбрасываем фильтрацию  
  };  

  return (  
    <div className="filter-container mt-4 mb-4 flex items-center">  
      <input  
        type="text"  
        placeholder="Type ..."  
        value={searchText}  
        onChange={handleSearchTextChange}  
        className="border border-gray-300 focus:border-blue-500 rounded p-2 mr-2 w-full" 
      />  
      <label className="flex items-center mr-4">  
        <input  
          type="checkbox"  
          checked={isTitleMode}  
          onChange={handleToggleChange}
          className="mr-2"
        />  
        <span className="w-18 whitespace-nowrap">
          {isTitleMode ? 'by title' : 'by content'}  
        </span>  
      </label>  
      <button onClick={handleReset} className="bg-gray-300 p-2 rounded">  
        Reset 
      </button>  
    </div>  
  );  
};