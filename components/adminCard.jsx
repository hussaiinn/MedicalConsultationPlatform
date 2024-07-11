import React from "react";
// import Head from "./head";
// import UserTable from "./userTable";
import UserTable from "./userTable";
import Head from "./head";
import Skeleton from "react-loading-skeleton";

// import UserTable from "../components/UserTable";

const AdminCard = ({ docs, toUnverify, toVerify, callingTable, pagename, toDelete }) => {
  
  return (
    <div className="flex flex-col h-[500px] bg-white-400 w-[72%] mt-28 ml-20 shadow-lg rounded-md ">
      <Head pagename={pagename} />
      {/* <Skeleton width={100} height={50}/> */}
        <div className="w-full h-full rounded-md overflow-scroll mt-3">
          {callingTable == "Doctors" ? (
            <UserTable
              docs={docs}
              toUnverify={toUnverify}
              toVerify={toVerify}
              pagename={pagename}
            />
          ) : (
            <UserTable docs={docs} pagename={pagename} toDelete={toDelete}/>
          )}

          {/* // <UserTable docs={docs} toUnverify={toUnverify} toVerify={toVerify} /> */}
          {/* <table className="m-0">
          <tr>
            <td>ID</td>
            <td>Username</td>
            <td>Email-Id</td>
            <td>Password</td>
            <td>Actions</td>
          </tr>
        </table> */}
        </div>
     
    </div>
  );
};

export default AdminCard;
