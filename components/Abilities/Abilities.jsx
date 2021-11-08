import React from 'react'
import AbilityTab from './AbilityTab'

function Abilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-[-160px] px-10">
      <AbilityTab className="rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
        <span>eae</span>
        <span>uhum</span>
      </AbilityTab>
      <AbilityTab/>
      <AbilityTab className="rounded-b-xl md:rounded-bl-none md:rounded-r-xl"/>
    </div>
  )
}

export default Abilities
