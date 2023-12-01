import React from "react";
import Link from "next/link";

const Head = () => {
  return (
    <>
      <h1 className="sp-us">Consult Doctor By Speciality</h1>
      <h5 className="cd-us">Select Speciality to find relevant doctors</h5>
    </>
  );
};

const ConTwo = () => {
  return (
    <>
      <div className="container-2-a">
        <Link
          href={{
            pathname: "/doctorspage",
            query: { name: "General Physician" },
          }}
          style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-1">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">General Physician</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{ pathname: "/doctorspage", query: { name: "Dermatology" } }} style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-2">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Dermatology</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{ pathname: "/doctorspage", query: { name: "Psychiatry" } }} style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-3">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Psychiatry</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/doctorspage",
            query: { name: "Stomach and Digestion" },
          }}
          style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-4">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Stomach and Digestion</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{ pathname: "/doctorspage", query: { name: "Pediatrician" } }} style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-5">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Pediatrician</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="container-2-b">
        <Link href={{ pathname: "/doctorspage", query: { name: "Urology" } }} style={{ textDecoration: 'none' }}>
          <div className="card-c2 card-img-6">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Urology</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{ pathname: "/doctorspage", query: { name: "Homeopathy" } }} style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-7">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Homeopathy</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{ pathname: "/doctorspage", query: { name: "Gynecologist" } }} style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-8">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Gynecologist</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{ pathname: "/doctorspage", query: { name: "Diabetology" } }} style={{ textDecoration: 'none' }}
        >
          <div className="card-c2 card-img-9">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Diabetology</h3>
            </div>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/doctorspage",
            query: { name: "Ayurveda" },
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="card-c2 card-img-10">
            {/* <!-- <div className="card-img"></div> --> */}
            <div className="head">
              <h3 className="card-head-txt">Ayurveda</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export { Head, ConTwo };
