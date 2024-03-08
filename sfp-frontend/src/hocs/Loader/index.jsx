import React from 'react'
const Loader = ({ color }) => {
  return (
    <div className={ color ? `lds_ring ${color}` : "lds_ring color-sfp" }><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader