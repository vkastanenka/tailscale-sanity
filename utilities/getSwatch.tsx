import React from 'react'
import { Circle } from 'phosphor-react'

const GetSwatch = (color: string) => {
  return (
    <Circle
      color={color}
      weight="fill"
      style={{
        boxShadow: '0 0 0 1px rgba(255,255,255,.4), 0 0 0 1px rgba(0,0,0,.15)',
        borderRadius: '50%'
      }}
    />
  )
}

export default GetSwatch