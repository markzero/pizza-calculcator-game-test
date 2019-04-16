import React from 'react';

function NumberPicker({ forId, min, max, title, value, onChange }) {
  return (
    <div className="p-4">
      <label className="mr-2" htmlFor={forId}>{title}</label>
      <input
        id={forId}
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default NumberPicker;
