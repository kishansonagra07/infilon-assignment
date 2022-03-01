import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux";
import { loadUsers } from "./../redux/actions";
import Table from "./TableView/Table";

function View() {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);
    useEffect(() => {
        if(users.length === 0){
            dispatch(loadUsers());
        }
    },[users,dispatch]);

  return (
      <>
        <Table users={users} />
      </>
  )
}

export default View