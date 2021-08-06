import React,{useState} from "react"
import Modal from "react-modal"
import InputSkills from "./InputSkills";
import "./ApplicationForm.css";

function Details(props){
    const [modalIsOpen2, setIsOpen2] = useState(props.open);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

  const [applicationDetails, setApplicationDetails] = useState({
    applicantname: "",
    applicantemail: "",
    phone: "",
    available_inhours: "",
    available_inmonths: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
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
  };

  const handleSubmit = (e) => {
    if (
      applicationDetails.applicantname !== "" &&
      applicationDetails.applicantemail !== "" &&
      applicationDetails.available_inhours !== "" &&
      applicationDetails.available_inmonths !== ""
    ) {
      e.preventDefault();

      document.getElementById("exampleInputname2").style.backgroundColor =
        "white";
      document.getElementById("exampleInputEmail2").style.backgroundColor =
        "white";
      document.getElementById("selectboxhours").style.backgroundColor = "white";
      document.getElementById("selectboxmonths").style.backgroundColor =
        "white";
      document.getElementById("CVFile").style.backgroundColor = "white";

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
      console.log(records);
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

    return <>
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
        <input
          type="text"
          name="otherurl1"
          className="form-control form-control-sm  "
          id="otherurls1"
          value={applicationDetails.otherurl1}
          onChange={handleInput}
          placeholder="Portfolio URL"
        ></input>
        <br />
        <input
          type="text"
          name="otherurl2"
          className="form-control form-control-sm "
          id="otherurls2"
          value={applicationDetails.otherurl2}
          onChange={handleInput}
          placeholder="Project URL"
        ></input>
        <br />
        <input
          type="text"
          name="otherurl3"
          className="form-control form-control-sm  "
          id="otherurls3"
          value={applicationDetails.otherurl3}
          onChange={handleInput}
          placeholder="Website URL"
        ></input>
        <br />
        <input
          type="text "
          name="otherurl4"
          className="form-control form-control-sm "
          id="otherurls4"
          value={applicationDetails.otherurl4}
          onChange={handleInput}
          placeholder="Photo URL"
        ></input>
        <br />
        <input
          type="text"
          name="otherurl5"
          className="form-control form-control-sm  "
          id="otherurls5"
          value={applicationDetails.otherurl5}
          onChange={handleInput}
          placeholder="Video URL"
        ></input>
        <br />
        <InputSkills />
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
            onChange={handleInput}
            value={applicationDetails.CVFile}
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Modal>

      <Modal
        isOpen={props.open}
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
    </>
}
export default Details