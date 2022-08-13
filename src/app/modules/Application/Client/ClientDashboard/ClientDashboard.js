import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../../common/components/Layout/Layout";
import { getUsersDetails } from "../redux/actions/clientActions";

function ClientDashboard() {
  const users = useSelector((state) => state.ClientState.users);
  const loader = useSelector((state) => state.ApplicationState.loaded);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsersDetails()), []);
  console.log(users, "Users>>>>>>>>>");
  console.log(loader, "#LOADER>>>>>>>>>");
  return (
    <Layout>
      {/* <input value={username} onChange={(e) => setusername(e.target.value)} /> */}
      {/* Client Dashboard !<button onClick={getUsers}>Get ussers</button> */}
      <ul>
        {users.map((user, index) => {
          // debugger;
          return (
            <>
              <li key={`user-${index}`}>UserName: === {user.username}</li>
            </>
          );
        })}
      </ul>
    </Layout>
  );
}

export default ClientDashboard;
