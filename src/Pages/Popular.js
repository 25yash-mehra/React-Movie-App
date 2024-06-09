import React from 'react'

function Popular() {
  const data = "<h1>yash mehra</h1>"
  return (
<>
<div dangerouslySetInnerHTML={{__html:data}}></div>
</>

  )
}

export default Popular