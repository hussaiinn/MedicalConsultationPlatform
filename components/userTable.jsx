// components/UserTable.js
import styles from "@styles/adminPage.module.css";

const UserTable = ({ docs, toUnverify, toVerify, pagename, toDelete }) => {
  var count = 1;
  // const onClicktoUnverify = () => {
  //   // console.log(docData.email);
  //   toUnverify(docData._id);
  // };

  // const onClicktoverify = () => {
  //   toVerify(docData._id);
  // };
  return (
    <table className="flex flex-col ">
      <thead className="bg-gray-50">
        {pagename == "Doctors" ? (
          <tr
            className={`flex justify-between flex-wrap w-full px-3 ${styles.trr}`}
          >
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        ) : (
          // `flex justify-between flex-wrap w-full px-3 ${styles.trr}`}>
          <tr
            className={`flex justify-between flex-wrap w-full px-3 ${styles.trr}`}
          >
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        )}
      </thead>
      {pagename == "Doctors" ? (
        <tbody className="mt-3">
          {docs.map((user) => (
            <tr
              key={user._id}
              className="flex justify-between flex-wrap h-12  border-b-2 text-[16px] border-gray-300 px-3 pb-5 pt-2 mb-2"
            >
              <td>{count++}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.usertype}</td>
              <td>
                {user.verified == true ? (
                  // <button onClick={onClicktoUnverify}>Unverify</button>
                  <button
                    className={
                      "bg-red-700 w-[82px] rounded-lg p-[6px] text-white"
                    }
                    onClick={() => toUnverify(user._id)}
                  >
                    Unverify
                  </button>
                ) : (
                  // <button onClick={onClicktoverify}>Verify</button>
                  <button
                    className={"bg-[#52aca3] w-[82px] rounded-lg p-[6px]"}
                    onClick={() => toVerify(user._id)}
                  >
                    Verify
                  </button>
                )}

                {/* Add action buttons or links here */}
                {/* For example: Edit, Delete, View, etc. */}
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody className="mt-3">
          {docs.map((user) => (
            <tr
              key={user._id}
              className={`flex justify-between flex-wrap h-12  border-b-2 text-[16px] border-gray-300 px-3 pb-5 pt-2 mb-2 ${styles.trr}`}
            >
              <td>{count++}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.mobile}</td>
              <td>
                <button
                  className={
                    "bg-red-700 w-[100px] rounded-lg p-[6px] text-white text-[15px]"
                  }
                  onClick={()=>toDelete(user._id)}
                >
                  Remove User
                </button>

                {/* Add action buttons or links here */}
                {/* For example: Edit, Delete, View, etc. */}
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default UserTable;
