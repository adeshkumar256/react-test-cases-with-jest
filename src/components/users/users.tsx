import React, { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json)
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError('Error fetching users'))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
