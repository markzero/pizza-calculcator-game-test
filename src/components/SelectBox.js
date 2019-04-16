import React from 'react';

function SelectBox({ options, value, onChange }) {
  return (
    <div className="p-4">
      <select value={value} onChange={e => onChange(e.target.value)}>
        {
          options.map((option, i) => {
            return <option key={i}>{option}</option>;
          })
        }
      </select>
    </div>
  );
}

export default SelectBox;
