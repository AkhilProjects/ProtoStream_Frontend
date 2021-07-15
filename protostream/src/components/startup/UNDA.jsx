import React, { useEffect, useState } from "react";
import "./css/dnda.css";
import upload from "../../assets/images/upload.svg";
import arrow from "../../assets/images/arrow.svg";
import { NavLink, useHistory } from "react-router-dom";
import { isAuthenticated, ndaUpload } from "../../auth";

function UNDA() {
  const history = useHistory();
  const [didRedirect, setDidRedirect] = useState(false);
  const [data, setData] = useState({
    StartupName: "",
    uploadnda: "",
    formData: "",
  });

  const preload = () => {
    setData({ ...data, formData: new FormData() });
  };

  useEffect(() => {
    preload();
  }, []);

  const { formData } = data;
  const handleChange = (name) => (event) => {
    let value;
    if (name === "uploadnda") {
      value = event.target.files[0];
      console.log("targetValues", event.target.files);
    } else value = event.target.value;
    formData.set(name, value);

    setData({ ...data, error: false, [name]: value });
  };

  const onSubmitHandler = (event) => {
    const userId = isAuthenticated().user._id;
    event.preventDefault();

    setData({ ...data, error: false, loading: true });

    ndaUpload(userId, formData)
      .then((response) => {
        setDidRedirect(true);
      })
      .catch((err) => {
        // errorMessage(err)();
      });
  };

  const performRedirect = () => {
    const { user } = isAuthenticated();
    if (didRedirect) {
      console.log(user);

      history.push("/user/dashboard");
      window.location.reload();
    }
  };
  const uploadForm = () => (
    <div className="dnNDA">
      <h1 className="main-head">Upload NDA</h1>
      <div className="container">
        <form className="form">
          <input type="radio" name="radio" id="radio" required />
          <label htmlFor="radio">
            I hereby Declare that the details provided by me are valid and the
            Idea submitted is solely mine and does not infringe anyone’s
            copyrights,patents or pitch and I accept the guidelines and
            framework provided by ProtoStream and TBI KIET.{" "}
          </label>
          <div className="other-detail">
            <h4 className="subhead">Non Disclosure Agreement</h4>
            <div className="agreement">
              <p className="name">NDA.pdf</p>
              <input
                onChange={handleChange("uploadnda")}
                type="file"
                name="uploadnda"
              />
            </div>

            <div className="startup-name">
              <p className="name">Startup Name</p>
              <input
                onChange={handleChange("StartupName")}
                name="StartupName"
                type="text"
                id=""
                required
              />
            </div>
          </div>
          <NavLink to="/user/dashboard">
            <button onClick={onSubmitHandler} className="next">
              Submit and go to Dashboard
              <img src={arrow} alt="" />
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      {uploadForm()}
      {performRedirect()}
    </div>
  );
}

export default UNDA;
