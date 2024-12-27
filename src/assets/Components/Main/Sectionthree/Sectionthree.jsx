import React from "react";
import "./Sectionthree.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const Sectionthree = () => {
 
 const [datas, setdatas] = useState([]);

 const visibility = async () => {
   let res = await axios.get("https://fakestoreapi.com/products");
   setdatas(res.data);
   console.log(res.data);
 };

 useEffect(() => {
   visibility();
 }, []);
 
 
 
 
 
 
 
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

        <div className="axios-boxs">
          {datas.map((item) => (
            <div className="axios-box" key={item.id}>
              <div className="img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="text-box">
                <p>{item.title}</p>
                <div className="icon-add"></div>
                <div className="icone-box">
                  <FaRegHeart />
                </div>
                <button className="add">Add to basket</button>
                <button className="add">detalis</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;
