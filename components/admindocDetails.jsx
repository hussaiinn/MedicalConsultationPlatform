import React from 'react'

const AdminDocDetails = ({docData, toUnverify, toverify}) => {
    const onClicktoUnverify = ()=>{
        // console.log(docData.email);
        toUnverify(docData._id)
    }

    const onClicktoverify = ()=>{
        toverify(docData._id)
    }
  return (
    <p>{docData.name}     {docData.email}   {docData.verified==true?<button onClick={onClicktoUnverify}>Unverify</button>: <button onClick={onClicktoverify}>Verify</button> }</p>
  )
}

export default AdminDocDetails