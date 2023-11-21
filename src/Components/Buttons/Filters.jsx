import React from 'react'

function Filters() {
  return (
    <div className="join w-full flex justify-center bg-base-200 font-Josefin shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:hidden ">
  <input className="join-item btn w-1/3" type="radio" name="options" aria-label="All" />
  <input className="join-item btn w-1/3" type="radio" name="options" aria-label="Active" />
  <input className="join-item btn w-1/3" type="radio" name="options" aria-label="Completed" />
</div>
  )
}

export default Filters