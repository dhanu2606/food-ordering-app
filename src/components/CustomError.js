import React from 'react'
import { useRouteError } from 'react-router-dom'

const CustomError = () => {
    const errorDetails = useRouteError();
    console.log("errorDetails",errorDetails)
  return (
    <div>There is somr issue in a provided route</div>
  )
}

export default CustomError;