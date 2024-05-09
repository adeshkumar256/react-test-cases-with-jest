import React, { useEffect, useState } from 'react'
type Skill = {
  skills: string[]
}
export default function FindBy(props: Skill) {
  const [login, setLogin] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLogin(true)
    }, 500)
  }, [])
  return (
    <div>
      <ul>
        {props.skills && props.skills.map((s: string) => <li key={s}>{s}</li>)}
      </ul>
      {login ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setLogin(true)}>Login</button>
      )}
    </div>
  )
}
