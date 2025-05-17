'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

//  the error and reset props are automatically provided by Next.js when an error occurs in a route or component. You do not need to pass them manually. error Prop contains the error object that was thrown. It provides information about what went wrong, which you can use to display an error message or log the error.reset Prop is a function provided by Next.js that you can call to attempt to recover from the error. Typically, calling reset will re-render the component or page, allowing you to retry the operation that failed.
  return (
    <div>
      <h2>Something went wrong!</h2>
      <h2>{error?.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}