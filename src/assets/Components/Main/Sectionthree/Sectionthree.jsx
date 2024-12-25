import React from "react";
import "./Sectionthree.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Sectionthree = () => {
  return (
    <section className="secThree">
      <div className="container-three">
        <div className="alltext-three">
          <div className="text-three">
            <h2>
              Discover Our<em>Work</em> & <span>Projects</span> For Your Agency
            </h2>
            <div className="line"></div>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
              eiusmod.
            </p>
          </div>
          <div className="next">
            <button>
              <span className="label">
                <IoIosArrowBack />
              </span>
            </button>

            <button>
              <span className="label">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;
