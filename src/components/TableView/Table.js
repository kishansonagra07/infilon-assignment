import TableRow from "./TableRow"

function ListView({users}) {
  return (
    <div>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
        {users && users.map((user) => (
            <TableRow key={user.id} user={user} />
        ))}
        </tbody>
        </table>
    </div>
  )
}

export default ListView