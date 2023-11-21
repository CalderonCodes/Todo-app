import React from 'react'

function DesktopFilters() {
  return (
    <div className="join w-full justify-center bg-base-200 font-Josefin shadow-none lg:flex hidden">
  <input className="join-item btn" type="radio" name="options" aria-label="All" />
  <input className="join-item btn" type="radio" name="options" aria-label="Active" />
  <input className="join-item btn " type="radio" name="options" aria-label="Completed" />
</div>
  )
}

export default DesktopFilters