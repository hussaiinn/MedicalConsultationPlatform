import React from "react";
import sick from "../../public/images/sick.jpg";
import cod from "../../public/images/cough_cold.avif";
import dental from "../../public/images/dental.avif";
import period from "../../public/images/period.avif";
import headache from "../../public/images/headache.jpg";
import constipation from "../../public/images/constipation.jpg";
import acne from "../../public/images/acne.jpg";
import Link from "next/link";

const HeadFour = () => {
  return (
    <>
      <h1 className="chc-us">COMMON HEALTH CONCERNS</h1>
      <h4 className="cd-us">
        Seek Medical Consultations for any health concerns
      </h4>
    </>
  );
};

const ConFour = () => {
  return (
    <>
      <div className="container-4">
        <div className="wrapper">
          <i id="left" className="dragLeft fa-solid fa-angle-left"></i>
          <ul className="caraousel">
            <li className="card">
              <div className="pro-card-us">
                <div
                  className="thumb-us"
                  style={{ backgroundImage: `url(${sick.src})` }}
                ></div>
                <div className="infos-us">
                  <h2 className="title-us">Sick Kid</h2>
                  <h3 className="date-us">---------------</h3>
                  <h3 className="seats-us"> </h3>
                  <p className="txt-us">
                    child's well-being is our top priority. Our dedicated team
                    of pediatric experts is here to provide compassionate care
                    and support for p sick child.
                  </p>
                  <Link
                    href={{
                      pathname: "/doctorspage",
                      query: { name: "Sick kid" },
                    }}
                  >
                    <h3 className="details-us">Consult now</h3>
                  </Link>
                </div>
              </div>
            </li>
            <li className="card">
              <div className="pro-card-us">
                <div
                  className="thumb-us"
                  style={{ background: `url(${cod.src})` }}
                ></div>
                <div className="infos-us">
                  <h2 className="title-us">COUGH AND COLD</h2>
                  <h3 className="date-us">---------------</h3>
                  <h3 className="seats-us"> </h3>
                  <p className="txt-us">
                    Find relief from the discomfort of coughs and colds with our
                    experts. Our healthcare professionals are here to provide
                    effective remedies
                  </p>
                  <Link
                    href={{
                      pathname: "/doctorspage",
                      query: { name: "Cough and Cold" },
                    }}
                  >
                    <h3 className="details-us">Consult now</h3>
                  </Link>
                </div>
              </div>
            </li>
            <li className="card">
              <div className="pro-card-us">
                <div
                  className="thumb-us"
                  style={{ background: `url(${dental.src})` }}
                ></div>
                <div className="infos-us">
                  <h2 className="title-us">DENTAL PROBLEM</h2>
                  <h3 className="date-us">---------------</h3>
                  <h3 className="seats-us"> </h3>
                  <p className="txt-us">
                    p oral health matters, and we're here to address p dental
                    concerns with expertise and care. From routine check-ups to
                    specialized treatments.
                  </p>
                  <Link
                    href={{
                      pathname: "/doctorspage",
                      query: { name: "Dental Problem" },
                    }}
                  >
                    <h3 className="details-us">Consult now</h3>
                  </Link>
                </div>
              </div>
            </li>
            <li className="card">
              <div className="pro-card-us">
                <div
                  className="thumb-us"
                  style={{ background: `url(${period.src})` }}
                ></div>
                <div className="infos-us">
                  <h2 className="title-us">PERIODS PROBLEM</h2>
                  <h3 className="date-us">---------------</h3>
                  <h3 className="seats-us"> </h3>
                  <p className="txt-us">
                    We understand the unique challenges that come with managing
                    menstrual health. Our dedicated team of healthcare experts
                    provides compassionate care.
                  </p>
                  <Link
                    href={{
                      pathname: "/doctorspage",
                      query: { name: "Periods Problem" },
                    }}
                  >
                    <h3 className="details-us">Consult now</h3>
                  </Link>
                </div>
              </div>
            </li>
            <li className="card">
              <div className="pro-card-us">
                <div
                  className="thumb-us"
                  style={{ background: `url(${headache.src})` }}
                ></div>
                <div className="infos-us">
                  <h2 className="title-us">Headache</h2>
                  <h3 className="date-us">---------------</h3>
                  <h3 className="seats-us"> </h3>
                  <p className="txt-us">
                    We recognize the distinctive challenges associated with
                    managing headaches. Our committed team of healthcare
                    professionals offers empathetic and specialized care to
                    address your concerns.
                  </p>
                  <Link
                    href={{
                      pathname: "/doctorspage",
                      query: { name: "Headache" },
                    }}
                  >
                    <h3 className="details-us">Consult now</h3>
                  </Link>
                </div>
              </div>
            </li>
            <li className="card">
              <div className="pro-card-us">
                <div
                  className="thumb-us"
                  style={{ background: `url(${constipation.src})` }}
                ></div>
                <div className="infos-us">
                  <h2 className="title-us">Constipation</h2>
                  <h3 className="date-us">---------------</h3>
                  <h3 className="seats-us"> </h3>
                  <p className="txt-us">
                    We comprehend the specific challenges that accompany the
                    management of constipation. Our devoted team of healthcare
                    experts delivers compassionate care.
                  </p>
                  <Link
                    href={{
                      pathname: "/doctorspage",
                      query: { name: "Constipation" },
                    }}
                  >
                    <h3 className="details-us">Consult now</h3>
                  </Link>
                </div>
              </div>
            </li>
            <li className="card">
              <div className="pro-card-us">
                <div
                  className="thumb-us"
                  style={{ background: `url(${acne.src})` }}
                ></div>
                <div className="infos-us">
                  <h2 className="title-us">Acne Problem</h2>
                  <h3 className="date-us">---------------</h3>
                  <h3 className="seats-us"> </h3>
                  <p className="txt-us">
                    We acknowledge the unique challenges associated with
                    managing acne. Our dedicated team of skincare professionals
                    is committed to providing compassionate care
                  </p>
                  <Link
                    href={{ pathname: "/doctorspage", query: { name: "Acne" } }}
                  >
                    <h3 className="details-us">Consult now</h3>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <i className="dragRight fa-solid fa-angle-right"></i>
        </div>
      </div>
    </>
  );
};

export { HeadFour, ConFour };
