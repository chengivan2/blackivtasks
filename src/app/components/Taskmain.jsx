import dynamic from 'next/dynamic'
import React from 'react' 

const DynamicComponentWithNoSSR = dynamic(
  () => import('./taskForm/Taskform'),
  { ssr: false }
)

export default function Taskmain() {
  return (
    <DynamicComponentWithNoSSR />
  )
}
