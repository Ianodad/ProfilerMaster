/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Select from 'react-select'


const options = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }
  ]

function SelectOrder({selectOnChange, ...otherProps}) {
    return (
        <div className="float-right" style={{ width:'140px' , zIndex:'4', position:"relative" }}>
              <Select options={options} onChange={selectOnChange} {...otherProps} />
        </div>
    )
}

export default SelectOrder
