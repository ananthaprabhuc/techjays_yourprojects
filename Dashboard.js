import React, { useState } from "react";
import AddProjectForm from "../ProjectForm/ProjectForm";
import "./Dashboard.css";
import ProjectList from "../ProjectList/ProjectList";
import techjaysLogo from "./sparrow.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const name = localStorage.getItem("googleUserName");
  console.log("name", name);
  const image = localStorage.getItem("googleUserProfileUrl");
  console.log(image);
  const accessToken = localStorage.getItem("accessToken");
  console.log("token", accessToken);

  const activeLink = "/statustable";
  const handleLinkClick = (link) => {
    console.log(`Link clicked: ${link}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <Link
        to="/statustable"
        className={`sidebar-link ${
          activeLink === "/statustable" ? "active-link" : ""
        }`}
        onClick={() => handleLinkClick("/statustable")}
        style={{
          backgroundColor: activeLink === "/statustable" ? "#f8f9fa" : "",
        }}
      >
        <div className="sidebar-logos">
          <img className="techjayss" src={techjaysLogo} alt="Techjays Logo" />
        </div>
      </Link>

      <div
        style={{
          display: "",
          alignItems: "center",
          marginLeft: "1165px",
          marginTop: "-93px",
          backgroundColor: "",
          width: "330px",
        }}
      >
        <Link
          to="/statustable"
          className={`sidebar-link ${
            activeLink === "/statustable" ? "active-link" : ""
          }`}
          onClick={() => handleLinkClick("/statustable")}
          style={{
            backgroundColor: activeLink === "/statustable" ? "#F7F7F7" : "",
          }}
        >
          <div
            style={{
              marginLeft: "50px",
              fontWeight: "500",
              fontSize: "16px",
              color: "black",
              textAlign: "start",
              fontFamily: "Arial",
            }}
          >
            {name}
          </div>
        </Link>

        <h1
          
        >
          Techjays
        </h1>

        <img
          src={image}
          alt="Google User"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginTop: "-90px",
            marginLeft: "70px",
          }}
        />
      </div>

      <ProjectList />
      {isModalOpen && (
        <div className="modal-overlay">
          <AddProjectForm closeModal={closeModal} />
        </div>
      )}

      <Link
        to="/statustable"
        className={`sidebar-link ${
          activeLink === "/statustable" ? "active-link" : ""
        }`}
        onClick={() => handleLinkClick("/statustable")}
        style={{
          backgroundColor: activeLink === "/statustable" ? "#f8f9fa" : "",
        }}
      >
        <div className="row">

          <div className="column" id="col1">
            <p className="projname">WACTO</p>
          </div>

          <div className="column">
            <img
              src={image}
              alt="Google User"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
          </div>

          <div className="column">
            <span>Updated on </span>
          </div>

        </div>
      </Link>


      <Link
        to="/statustable"
        className={`sidebar-link ${
          activeLink === "/statustable" ? "active-link" : ""
        }`}
        onClick={() => handleLinkClick("/statustable")}
        style={{
          backgroundColor: activeLink === "/statustable" ? "#f8f9fa" : "",
        }}
      >
        <div className="row">

          <div className="column" id="col1">
            <p className="projname">PythonMernStack_TeamSpace</p>
          </div>

          <div className="column">
            <img
              src={image}
              alt="Google User"
             
            />
          </div>

          <div className="column">
            <span>Updated on </span>
          </div>

        </div>
      </Link>
      

    </div>
  );
};

export default Dashboard;
