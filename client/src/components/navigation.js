import React from 'react'

function Navigation({page, setPage}) {
  return (
    <nav>
     <a href="#" onClick={() => setPage('')} className={page===''?'active':''}>About</a>
     <a href="#" onClick={() => setPage('portfolio')} className={page==='students'?'active':''}>Students</a>
     <a href="#" onClick={() => setPage('contact')} className={page==='parents'?'active':''}>Parents </a>
     <a href="#" onClick={() => setPage('resume')} className={page==='teachers'?'active':''}>Teachers</a>
    </nav>
  )
}

export default Navigation