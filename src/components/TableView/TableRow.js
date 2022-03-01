import {NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { deletingUser } from "./../../redux/actions";

function TableRow({user}) {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);
    const removeUser = (id) => {
        if (window.confirm("Are you sure you want to delete the user?")) {
            dispatch(deletingUser(({users,id})));
        }
    }
  return (
    <>
        <tr key={user.id}>
        <th scope="row">{user.id}</th>
            <td><img src={user.avatar} className="img-fluid img-thumbnail userAvatar" alt={user.first_name} /> </td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td><NavLink className='btn btn-info' to={`/user/${user.id}`}>Edit</NavLink> | <button className='btn btn-info' onClick={() => removeUser(user.id)}>Delete</button></td>
        </tr>
    </>
  )
}

export default TableRow