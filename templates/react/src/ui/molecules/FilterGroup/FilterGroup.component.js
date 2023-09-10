import React from "react";
import NativeLink from "../../atoms/NativeLink/NativeLink.component";

const FilterGroup = ({ filterItems, onFilterClick }) => (
  <div className="grouped" role="group">
    {filterItems.map((filterItem) => (
      <NativeLink key={filterItem.id} active={filterItem.selected} onClick={() => onFilterClick(filterItem.id)}>{filterItem.label}</NativeLink>
    ))}
  </div>
);

export default FilterGroup;
