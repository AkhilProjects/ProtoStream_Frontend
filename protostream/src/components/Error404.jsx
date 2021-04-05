import React from 'react'
import ErrorPage from "./ErrorPage"

function Error404() {
    return (
        <ErrorPage 
            error_name="404" 
            error_msg="Looks like we can't find what you are looking for"
        />
    )
}

export default Error404
