import React from "react";
import "./index.css";

function Dropdown ({options, labelText, onChange}) {

  return (
    <div className="elementSet">
      <select data-testid="dropdown" defaultValue={labelText}>
        {/* Do not remove this default option as this is needed in testing */}
        <option value={labelText} key={labelText} disabled>{labelText}</option>
      </select>
    </div>
  );
}

export default Dropdown;