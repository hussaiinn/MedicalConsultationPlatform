import React from "react";
import Link from "next/link";

const Head = ({ pagename }) => {
  return (
    <div className=" flex items-center align-middle m-0 w-full h-[15%] bg-slate-300 px-10 rounded-md gap-x-3">
      <span>{pagename} Page</span>
      {pagename == "Doctors" ? (
        <Link href={"/admin/doc_care_admin/users"}>
          <button
            type="button"
            className="bg-[#52aca3] text-white font-semibold rounded-md p-[10px]"
          >
            Go To Patient
          </button>
        </Link>
      ) : (
        <Link href={'/admin/doc_care_admin'}>
          <button
            type="button"
            className="bg-[#52aca3] text-white font-semibold rounded-md p-[10px]"
          >
            Go To Doctors
          </button>
        </Link>
      )}
    </div>
  );
};

export default Head;
