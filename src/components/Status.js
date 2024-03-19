import React from 'react'

function Status(props) {
  return (
  <div>
  {props.visi=="visible" ?  
   <div className="alert alert-warning" role="alert">
    Reload the Page if you find any issues!
        </div> : <div className="h-4 bg-transparent border-transparent " role="alert"></div>
}
  
    </div>
  )
}

export default Status
