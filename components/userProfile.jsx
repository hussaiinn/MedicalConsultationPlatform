import React, { useState } from "react";
import "@styles/userProfile.css";
import Link from "next/link";

const UserProfile = ({ data }) => {
  const [gender, setGender] = useState(false);
  // if (data.gender === 'male') {
  //     setGender(true)

  // }
  console.log(data);
  return (
    <>
      <div className="container rounded bg-white mt-3 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              {gender ? (
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
              ) : (
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png"
                />
              )}

              <span className="font-weight-bold">{data.name}</span>
              <span className="text-black-50">{data.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Welcome! {data.name}</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <p className="labels">Name</p>
                  <p className="form-control">{data.name}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Date of Birth</label>
                  <p className="form-control">{data.dob}</p>
                </div>
                <div className="col-md-12">
                  <p className="labels">Gender</p>
                  <p className="form-control">{data.gender}</p>
                </div>
                <div className="col-md-12">
                  <p className="labels">Mobile Number</p>
                  <p className="form-control">+91 {data.mobile}</p>
                </div>
                <div className="col-md-12">
                  <p className="labels">Email</p>
                  <p className="form-control">{data.email}</p>
                </div>
                <div className="col-md-12">
                  <p className="labels">Address</p>
                  <p className="form-control">{data.address}</p>
                </div>
              </div>
              <div className="row mt-3">
                {/* <div className="col-md-6"><label className="labels">Country</label><p type="text" className="form-control" placeholder="country" value="" /></div>
                                <div className="col-md-6"><label className="labels">State/Region</label><p type="text" className="form-control" value="" placeholder="state" /></div> */}
              </div>
              <Link
                // href={`profilepagedoc/appointments/?id=${data.email}`}
                href={{pathname: 'profilepagedoc/appointments', query: {id: data.email, ut: 1}}}
                className="mt-2 text-center"
              >
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Appointments
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              {/* <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div> <br />
                            <div className="col-md-12"><label className="labels">Experience in Designing</label><p type="text" className="form-control" placeholder="experience" value="" /></div> <br />
                            <div className="col-md-12"><label className="labels">Additional Details</label><p type="text" className="form-control" placeholder="additional details" value="" /></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
