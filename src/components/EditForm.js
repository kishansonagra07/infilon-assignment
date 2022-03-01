import {useState} from "react";
import { updatingUser } from "./../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate,useParams} from "react-router-dom";

function EditForm() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const {users} = useSelector(state => state.users);
    const getUser = users.filter((user) => user.id === parseInt(id))?.[0];
    let history = useNavigate();
    const [userInput, setUserIntput] = useState({
        "first_name":getUser.first_name,
        "last_name":getUser.last_name,
        "email":getUser.email,
        "avatar":getUser.avatar
    })
    const handleChange = (e) => {
        setUserIntput({...userInput, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.first_name && userInput.last_name && userInput.email && userInput.avatar){
            dispatch(updatingUser({users,userInput,id}));
            history("/")
        } else {
            alert("Required Field is missing..!")
        }
    }
  return (
    <div className='row'>
        <h1 className='text-center'>Update User</h1>
        <form onSubmit={handleSubmit}>
            <div className="col-md-6 col-md-auto">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="first_name" className="form-control" id="firstName" value={userInput.first_name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" name="last_name" className="form-control" id="lastName" value={userInput.last_name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" value={userInput.email} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">Avtar URL</label>
                    <input type="text" name="avatar" className="form-control" id="avatar" value={userInput.avatar} onChange={(e) => handleChange(e)}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
  )
}

export default EditForm