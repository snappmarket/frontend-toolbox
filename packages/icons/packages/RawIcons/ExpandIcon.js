import React from 'react'

export default function ExpandIcon(props) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' {...props}>
      <path d='M7 2v-2h-6c-0.553 0-1 0.447-1 1v6h2v-3.584l5.544 5.544 1.416-1.416-5.544-5.544h3.584z' />
      <path d='M7.544 15.044l-5.544 5.541v-3.584h-2v6c0 0.553 0.447 1 1 1h6v-2h-3.584l5.544-5.544-1.416-1.413z' />
      <path d='M22 20.584l-5.544-5.541-1.416 1.416 5.544 5.541h-3.584v2h6c0.553 0 1-0.447 1-1v-6h-2v3.584z' />
      <path d='M23 0h-6v2h3.584l-5.541 5.544 1.416 1.416 5.541-5.544v3.584h2v-6c0-0.553-0.447-1-1-1z' />
    </svg>

  )
}
