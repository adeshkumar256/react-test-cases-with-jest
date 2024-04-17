import React, { useState } from "react";
type Skill = {
  skills: string[];
};
export default function Skills(props: Skill) {
  const [login, setLogin] = useState(false);
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
  );
}
