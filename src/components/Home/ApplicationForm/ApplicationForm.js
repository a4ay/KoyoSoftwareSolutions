import React from "react";
import WebText from "../../../TextData";
import Modal from "react-modal";
import "./ApplicationForm.css";
import { useState } from "react";
import InputSkills from "./InputSkills";

import downloadfile from "../../../img/java.pdf";
import cross from "../Images/cross.png";
import ModalVideo from "react-modal-video";
import "./modal-video.scss";
/* eslint-env jquery */
// external js: isotope.pkgd.js

// init Isotope

$(document).ready(function () {
  //your code here
  // external js: isotope.pkgd.js

  // init Isotope
  var $grid = $(".grid").isotope({
    itemSelector: ".job-type",
    filter: ".permanent.webdesign",
  });

  // store filter for each group
  var filters = {};

  $(".filters").on("click", ".button", function (event) {
    var $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents(".button-group");
    var filterGroup = $buttonGroup.attr("data-filter-group");
    // set filter for group
    filters[filterGroup] = $button.attr("data-filter");
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function (event) {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      var $button = $(event.currentTarget);
      $button.addClass("is-checked");
    });
  });

  // flatten object by concatting values
  function concatValues(obj) {
    var value = "";
    for (var prop in obj) {
      value += obj[prop];
    }
    return value;
  }
});

// flatten object by concatting values
function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')
function nofile() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
function ApplicationForm() {
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

  const [applicationDetails, setApplicationDetails] = useState({
    jobID: "",
    applicantname: "",
    applicantemail: "",
    phone: "",
    available_inhours: "",
    available_inmonths: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skills: "",
    otherurl1: "",
    otherurl2: "",
    otherurl3: "",
    otherurl4: "",
    otherurl5: "",
    CVFile: null,
  });
  const [records, setRecords] = useState([]);
  const [err, setErr] = useState("");
  const [errEmail, setErrEmail] = useState("");

  //second modal
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    var ee = "";
    var ef = "";

    if (
      name === "applicantemail" &&
      value !== "" &&
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null
    ) {
      ef = "Please enter a valid email";
    }
    if (name === "in_hours") {
      console.log("in hours we need" + value);
    }
    setErr(ee);
    setErrEmail(ef);
    setApplicationDetails({ ...applicationDetails, [name]: value });
    var s=applicationDetails
    s[name]=value
    localStorage.setItem(applicationDetails.jobID,JSON.stringify(s))
  };
  const handleCV= (e)=>{
    console.log(applicationDetails)
    setApplicationDetails({...applicationDetails,CVFile: e.target.files[0]})
    var s=applicationDetails
    s['CVFile']=e.target.files[0]
    localStorage.setItem(applicationDetails.jobID,JSON.stringify(s)) 
  }
  const handleSkills = (skills) => {
    setApplicationDetails({...applicationDetails,'skills': skills});
    var s=applicationDetails
    s['skills']=skills
    localStorage.setItem(applicationDetails.jobID,JSON.stringify(s))
  }

  async function handleSubmit(e){
    if (
      applicationDetails.applicantname !== "" &&
      applicationDetails.applicantemail !== "" &&
      applicationDetails.available_inhours !== "" &&
      applicationDetails.available_inmonths !== ""
    ) {
      e.preventDefault();

      // document.getElementById("exampleInputname2").style.backgroundColor =
      //   "white";
      // document.getElementById("exampleInputEmail2").style.backgroundColor =
      //   "white";
      // document.getElementById("selectboxhours").style.backgroundColor = "white";
      // document.getElementById("selectboxmonths").style.backgroundColor =
      //   "white";
      // document.getElementById("CVFile").style.backgroundColor = "white";
      var id=applicationDetails.jobID
      const newRecord = {
        ...applicationDetails,
        id: new Date().getTime().toString(),
      };
      setRecords([...records, newRecord]);
      setApplicationDetails({
        applicantname: "",
        applicantemail: "",
        phone: "",
        available_inhours: "",
        available_inmonths: "",
      });
      
      var projects=WebText.home.projects.projectListData;
      var formData=newRecord
      let cv_url;
      const data = new FormData()
      data.append("file",formData.CVFile)
      data.append("upload_preset", "koyosoftware")
      data.append("cloud_name", "dpbzuwwto")
      console.log(data)
      await fetch(`https://api.cloudinary.com/v1_1/dpbzuwwto/image/upload`,{
      method:"post",
      body: data
      })
     .then(resp => resp.json())
     .then(data => {
       cv_url = data.url;
     })
     .catch(e=>{
       console.log(e)
     })

      for(var z=0;z<projects.length;z++){
        if(id==projects[z].appID){
          formData.projectTitle=projects[z].projecttitle;
          formData.skillNames=projects[z].skills
          formData.type=projects[z].filter
          formData.cv_url=cv_url
          break;
        }
      }
      console.log(formData)
      const response = await fetch("https://dkr31m892d.execute-api.ap-south-1.amazonaws.com/prod/koyoSoftware", {
            method: "POST",
            headers: {
            "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                console.log("hello")
                })
            .catch((err)=>console.log(err))
    } else {
      console.log(applicationDetails.available_inhours + "in hours");
      if (
        applicationDetails.applicantname === "" ||
        applicationDetails.applicantemail === "" ||
        applicationDetails.available_inhours === "" ||
        applicationDetails.available_inmonths === "" ||
        applicationDetails.skill1 === "" ||
        applicationDetails.skill2 === "" ||
        applicationDetails.skill3 === "" ||
        applicationDetails.skill4 === "" ||
        applicationDetails.CVFile === null
      ) {
        document.getElementById("formerror").style.visibility = "visible";
      }

      setApplicationDetails({
        applicantname: "",
        applicantemail: "",
        phone: "",
        available_inhours: "",
        available_inmonths: "",
      });
      e.preventDefault();
    }
  };

  function openModal2() {

    setIsOpen1(false);
    setIsOpen2(true);

    setIsOpen3(false);
    console.log(modalIsOpen2);
    console.log("submitted");
  }
  function openForm(id){
    var details=JSON.parse(localStorage.getItem(id))
    if(details!==null){
      setApplicationDetails({
        jobID: details.jobID,
        applicantname: details.applicantname,
        applicantemail: details.applicantemail,
        phone: details.phone,
        available_inhours: details.available_inhours,
        available_inmonths: details.available_inmonths,
        skill1: details.skill1,
        skill2: details.skill2,
        skill3: details.skill3,
        skill4: details.skill4,
        skills: details.skills,
        otherurl1: details.otherurl1,
        otherurl2: details.otherurl2,
        otherurl3: details.otherurl3,
        otherurl4: details.otherurl4,
        otherurl5: details.otherurl5,
        CVFile: details.CVFile,
      })
    }
    else{
      setApplicationDetails({
        jobID: id,
        applicantname: "",
        applicantemail: "",
        phone: "",
        available_inhours: "",
        available_inmonths: "",
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skills: "",
        otherurl1: "",
        otherurl2: "",
        otherurl3: "",
        otherurl4: "",
        otherurl5: "",
        CVFile: null,
      })
      var s=applicationDetails
      s.jobID=id
      localStorage.setItem(id,JSON.stringify(s))

    }
    
    console.log(applicationDetails.skills)
    setIsOpen1(false);
    setIsOpen2(true);

    setIsOpen3(false);
    console.log(modalIsOpen2);
    console.log("submitted");
  }

  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    document.getElementById("title2").style.color = "#000000";
    document.getElementById("title2").style.fontFamily = "Arial";
  }
  function closeModal2() {
    setIsOpen2(false);
    setErr("");
  }

  function openModal1() {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
    console.log(modalIsOpen2);
    console.log("submitted");
  }

  function closeModal1() {
    setIsOpen1(false);
    setErr("");
  }

  function openModal3() {
    setIsOpen3(true);
    setIsOpen1(false);
    setIsOpen2(false);
    console.log(modalIsOpen2);
    console.log("submitted");
  }

  function closeModal3() {
    setIsOpen3(false);
    setErr("");
  }

  function openModal4() {
    setIsOpen4(true);
  }

  function closeModal4() {
    setIsOpen4(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal1"
        id="modal1"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={closeModal1}
        >
          x
        </button>
        <div className="md-stepper-horizontal yellow">
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal2}>
              <span>1</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active">
            <div className="md-step-circle" onClick={openModal1}>
              <span>2</span>
            </div>

            <div className="md-step-optional">Optional</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal3}>
              <span>3</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        Any Other Uploads
        <br />
        <br/>
        <div className="form-row ">
          <div className="col">
          <input
          type="text"
          name="otherurl1"
          className="form-control form-control-sm  "
          id="otherurls1"
          value={applicationDetails.otherurl1}
          onChange={handleInput}
          placeholder="Portfolio URL"
        ></input>
          </div>
          <div className="col">
          <input
          type="text"
          name="otherurl2"
          className="form-control form-control-sm "
          id="otherurls2"
          value={applicationDetails.otherurl2}
          onChange={handleInput}
          placeholder="Project URL"
        ></input>
          </div>
        </div>
        <br/>
        <div className="form-row">
          <div className="col"><input
          type="text"
          name="otherurl3"
          className="form-control form-control-sm  "
          id="otherurls3"
          value={applicationDetails.otherurl3}
          onChange={handleInput}
          placeholder="Website URL"
        ></input></div>
          <div className="col">        <input
          type="text"
          name="otherurl4"
          className="form-control form-control-sm "
          id="otherurls4"
          value={applicationDetails.otherurl4}
          onChange={handleInput}
          placeholder="Photo URL"
        ></input></div>
        </div>
        <br/>
        <div className="form-row">
          <div className="col"><input
          type="text"
          name="otherurl5"
          className="form-control form-control-sm  "
          id="otherurls5"
          value={applicationDetails.otherurl5}
          onChange={handleInput}
          placeholder="Video URL"
        ></input></div>
          <div className="col"></div>
        </div>
        
        <br />
        

        <InputSkills onAdd={handleSkills} skills={applicationDetails.skills}/>
        <br />
      </Modal>

      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        contentLabel="Example Modal3"
        className="Modal2"
        overlayClassName="Overlay2"
        id="modal3"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={closeModal3}
        >
          x
        </button>
        <div className="md-stepper-horizontal yellow">
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal2}>
              <span>1</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal1}>
              <span>2</span>
            </div>

            <div className="md-step-optional">Optional</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active">
            <div className="md-step-circle" onClick={openModal3}>
              <span>3</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        <div className="notice">
          Information in<span style={{ color: "red" }}> red </span>is mandatory
          <span style={{ color: "red" }}> * </span>
        </div>
        <br />
        <div className="form-group">
          <input
            type="file"
            name="CVFile"
            className="form-control-file border border-danger rounded"
            id="CVFile"
            onChange={handleCV}
          />
        </div>
        <div className="formerror" id="formerror">
          <span style={{ color: "red" }}>
            Please fill all the required* details
          </span>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-warning btn-sm float-right"
          onClick={(e)=>handleSubmit(e)}
        >
          Submit
        </button>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        contentLabel="Example Modal2"
        className="Modal"
        overlayClassName="Overlay"
        id="modal2"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={closeModal2}
        >
          x
        </button>
        <div className="md-stepper-horizontal yellow">
          <div className="md-step active">
            <div className="md-step-circle" onClick={openModal2}>
              <span>1</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal1}>
              <span>2</span>
            </div>

            <div className="md-step-optional">Optional</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal3}>
              <span>3</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>

        <h5 id="title2" className="text-center">
          {" "}
        </h5>
        <div className="notice">
          Information in<span style={{ color: "red" }}> red </span>is mandatory
          <span style={{ color: "red" }}> * </span>
        </div>
        <br />
        <form action="" onSubmit={handleSubmit} formNoValidate>
          <div className="form-row">
            <div className="col">
              <div className="form-group ">
                <input
                  type="text"
                  name="applicantname"
                  className="form-control form-control-sm border border-danger"
                  id="exampleInputname2"
                  placeholder="Name*"
                  value={applicationDetails.applicantname}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group ">
                <input
                  type="email"
                  name="applicantemail"
                  className="form-control form-control-sm border border-danger"
                  id="exampleInputEmail2"
                  placeholder="Email ID*"
                  onChange={handleInput}
                  value={applicationDetails.applicantemail}
                />
                <div className="feedback">{errEmail}</div>
              </div>
            </div>
          </div>

          <br />
          <div className="form-row">
            <div className="col">Availibility</div>
            <div className="col">
              <div className="form-group w-100 p-0">
                <select
                  name="available_inhours"
                  className=" form-control form-control-sm selectpicker form-control border border-danger"
                  id="selectboxhours"
                  onChange={handleInput}
                  value={applicationDetails.available_inhours}
                  data-width="200px"
                >
                  <option value="" selected>
                    Hours/Week*
                  </option>
                  <option value="10">10 Hr/Week</option>
                  <option value="15">15 Hr/Week</option>
                  <option value="20">20 Hr/Week</option>
                  <option value="30">30 Hr/Week</option>
                  <option value="5">Full Time</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group w-100 p-0">
                <select
                  name="available_inmonths"
                  className="selectpicker form-control-sm form-control  border border-danger"
                  id="selectboxmonths"
                  value={applicationDetails.available_inmonths}
                  onChange={handleInput}
                  data-width="200px"
                >
                  <option selected value="">
                    Months*
                  </option>
                  <option value="1">1 Month</option>
                  <option value="2">2 Month</option>
                  <option value="3">3 Month</option>
                  <option value="4">4 Month</option>
                  <option value="5">6 Month</option>
                  <option value="6">9 Month</option>
                  <option value="7">Full Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="feedback">{err}</div>

          <br />
        </form>

        <div className="form-row">
          <div className="col">Skill 1</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill1"
              className=" form-control form-control-sm selectpicker form-control border border-danger"
              value={applicationDetails.skill1}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col">Skill 2</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill2"
              className=" form-control form-control-sm selectpicker form-control border border-danger"
              value={applicationDetails.skill2}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col">Skill 3</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill3"
              className=" form-control form-control-sm selectpicker form-control border border-danger"
              value={applicationDetails.skill3}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col">Skill 4</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill4"
              className=" form-control form-control-sm selectpicker form-control border border-danger"
              value={applicationDetails.skill4}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <br />
        <br />
        <br />
      </Modal>

      <section className="portfolio" id="jobs" style={{padding:"40px 0 100px 0px"}}>
        <div className="application-container " data-aos="fade-up">
          <div className="section-title">
            <h2>Jobs/Internships</h2>
            <p>Join Our Team</p>
            <div className="hiringtext">
              KSS is hiring! We are interested in passionate candidates who can
              bring their skills, creativity or experience and grow in a
              problem-solving environment.See the details below.
            </div>
          </div>

          <div class=" row filters filters1 categoryone">
            <div class="ui-group">
              <div
                class="button-group"
                id="categoryone"
                data-filter-group="color"
              >
                <button class="is-checked button" data-filter=".permanent">
                  Permanent
                </button>
                <button class="button " data-filter=".internship">
                  Internship
                </button>
              </div>
            </div>
          </div>

          <div class=" row filters d-flex justify-content-center filters2 categorytwo">
            <div
              class="button-group "
              id="categorytwo"
              data-filter-group="size"
            >
              <button class="button is-checked" data-filter=".webdesign">
                Web Design
              </button>
              
              <button class="button" data-filter=".graphics">
                Graphics
              </button>
              {/* <span className="seperate">.</span>
              <button class="button" data-filter=".videoediting">
                Video Editing
              </button> */}
              
              <button class="button" data-filter=".robotics">
                Robotics
              </button>
              
              <button class="button" data-filter=".aiml">
                AI ML
              </button>
            </div>
          </div>

          <div className="long no-gutters ">
            <div className="grid no-gutters">
              <div
                className="row portfolio-container no-gutters joinourteam   "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {WebText.home.projects.projectListData.map((proj) => (
                  <div
                    className={`col-lg-6  col-sm-12 col-xl-6 padding-0  job-type ${proj.filter}`}
                  >
                    <div className="vl">
                      <div className="topic">
                        {proj.topic}
                        <br />
                      </div>
                      <div className="keywords">
                        Keywords: <i>{proj.keywords}</i>
                      </div>
                      <div className="span-in-div"style={{textAlign:"center"}}>
                      <span className="applicationId">
                        ID: {proj.appID}
                      </span>{" "}
                      <span className="deadline">
                        DeadLine: {proj.deadline}
                      </span>
                      </div>
                      <div style={{ lineHeight: "1", paddingBottom: "8px" }}>
                        <div className="jobdescription">
                          {proj.projectdescription} Click{" "}
                          <button className=" clickhere" onClick={openModal4}>
                            here
                          </button>{" "}
                          to know more.
                        </div>
                      </div>
                      <div className="duration">
                        <span style={{ color: "#ffc451" }}> Duration</span> :{" "}
                        {proj.duration}
                        <span style={{ color: "#ffc451" }}> Skills :</span>
                        {proj.skills}
                      </div>

                      <div className="centerbuttonform">
                        <div className="col-md-12 text-center">
                          <button
                            type="button"
                            className="btn btn-warning btn-sm"
                            onClick={()=>openForm(proj.appID)}
                          >
                            Apply
                          </button>
                          
                        </div>
                      </div>
                    </div>

                    <div className="videomodal">
                      {/* <img src={cross} className="closeee" alt="close" onClick={closeModal4} /> */}
                      <Modal
                        isOpen={modalIsOpen4}
                        onRequestClose={closeModal4}
                        contentLabel="Example Modal4"
                        className="Modal4"
                        overlayClassName="Overlay4"
                      >
                        
                        <ModalVideo
                          channel="youtube"
                          isOpen={isOpen5}
                          videoId={proj.videourl}
                          onClose={() => setOpen5(false)}
                          className="ModalVid"
                        />
                        
                        <div
                          id="carouselExampleIndicators"
                          className="carousel slide"
                          data-ride="false"
                        >
                          <ol className="carousel-indicators">
                            <li
                              data-target="#carouselExampleIndicators"
                              data-slide-to="0"
                              className="active"
                            ></li>
                            <li
                              data-target="#carouselExampleIndicators"
                              data-slide-to="1"
                            ></li>
                          </ol>
                          <div className="cross" onClick={closeModal4}>x</div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              {/**/}
                              
                              <img
                                className="d-block  curimage  "
                                src={proj.slideonepicture}
                                alt="First slide"
                              />

                              <button
                                id="play-video"
                                className="video-play-button"
                                onClick={() => setOpen5(true)}
                              >
                                <span></span>
                              </button>
                            </div>
                            <div className="carousel-item">
                              <img
                                className="d-block curimage "
                                src={proj.slidetwopicture}
                                alt="Second slide"
                              />
                              <button
                                id="play-video"
                                className="video-play-button"
                                onClick={() => setOpen5(true)}
                              >
                                <span></span>
                              </button>
                            </div>
                            
                          </div>
                          <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>

                        <br />
                        <div id="snackbar" className="snackk">
                          The background is simply the text shown.
                        </div>

                        <div className="projdesc">
                          <div className="projtit">
                            <b>{proj.projecttitle}</b>
                          </div>
                          <div className="projkey">
                            <span style={{ color: "black" }}>
                              <b>Keywords:</b>
                            </span>{" "}
                            <b>
                              <i>#Robotics , #CAD, #Simulation, #Controls</i>
                            </b>
                          </div>
                          <b>Project Background</b>: {proj.projectbackground}
                          Click
                          <a
                            href={downloadfile}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className=" clickhere2">
                              <i
                                style={{ color: "#F19A1E", fontWeight: "bold" }}
                              >
                                here
                              </i>
                            </button>
                          </a>
                          to know more
                          <br />
                          <br />
                          <b>Project Brief:</b> {proj.projectbrief}.
                        </div>
                      </Modal>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ApplicationForm;