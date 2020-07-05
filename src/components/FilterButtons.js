import React from 'react';
import FilterButton from './FilterButton'

const FilterButtons = () => {
   return (
      <div style={{ margin: 30 }}>
         <FilterButton filterType='ALL' text='Wszystkie zadania' />
         <FilterButton filterType='ACTIVE' text='Zadania do zrobienia' />
         <FilterButton filterType='COMPLETED' text='Zadania ukończone' />
      </div>
   );
}

export default FilterButtons;