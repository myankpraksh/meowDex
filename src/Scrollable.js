import React from 'react'

export default function Scrollable(Props) {
  return (
    <div style={{overflowY:'scroll', height : "673px"}}>{Props.children}</div>
  )
}
