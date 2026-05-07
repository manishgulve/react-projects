import React from 'react'

const InputGroup = ({name, changeID, total}) => {
  return (
    <div>
      <select className="form-select" onChange={(e) => changeID(e.target.value)}>
        <option value="" disabled>Choose...</option>
        {[...Array(total).keys()].map((x) => (
            <option key={x} value={x + 1}>{name} - {x + 1}</option>
        ))}
      </select>
    </div>
  )
}

export default InputGroup
