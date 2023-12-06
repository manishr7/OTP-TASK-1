import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Phone.css";
import { Button, TextField } from "@mui/material";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../Firebase/setup";
import Alert from "react-bootstrap/Alert";

function PhoneSignin() {
  const [phone, setphone] = useState("");
  const [user, setuser] = useState(null);
  const [otp, setotp] = useState("");
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [showOTP, setshowOTP] = useState(false);
  const sendotp = async () => {
    if (phone === "") setshow2(true);
    else {
      try {
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
        const confirmation = await signInWithPhoneNumber(
          auth,
          phone,
          recaptcha
        );
        setuser(confirmation);
        if (confirmation) setshowOTP(true);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const verifyotp = async () => {
    try {
      const data = await user.confirm(otp);
      setshow1(true);
      setshow2(false);
      setshow3(false);
      if(data)
      { console.log("inside post")
        postData();
      }
      console.log(data.user.phoneNumber);
    } catch (error) {
      console.error(error);
      if (phone === "") setshow2(true);
      else if (otp === "") setshow3(true);
      else alert("Invalid Details");
    }
  };
  const postData= async()=>
  {
  const res=await fetch("https://react-da90.onrender.com/api/user/login",
  {
    method:"POST",
    headers:{
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
        PhoneNumber:phone
    })
  })
  const data=res.json();
  if(!data)
  {
    window.alert("invalid Authentication");
    console.log("Invalid Authentication")
  }
  else{
    
    console.log("Successfull Authentication")
  }
  }
  return (
    <>
      <div>
        {show1 ? (
          <>
            <Alert
              className="mb-0"
              variant="success"
              onClose={() => setshow1(false)}
              dismissible
            >
              <Alert.Heading style={{ width: "30rem" }} className="m-auto mb-2">
                Login Was Successful ! OTP Verified !
              </Alert.Heading>
              <p style={{ width: "70%" }} className="m-auto">
                The OTP sent to number {phone} was verified using firebase
                authentication and now you are SIGNED IN
              </p>
            </Alert>
          </>
        ) : null}
      </div>
      <div>
        {show2 ? (
          <>
            <Alert className="mb-0" variant="warning">
              <p style={{ width: "20rem" }} className="m-auto">
                Enter Phone Number Before Trying To Verify!{" "}
              </p>
            </Alert>
          </>
        ) : null}
      </div>
      <div>
        {show3 ? (
          <>
            <Alert className="mb-0" variant="warning">
              <p style={{ width: "20rem" }} className="m-auto">
                Enter OTP Before Trying To Verify!{" "}
              </p>
            </Alert>
          </>
        ) : null}
      </div>
      <div className="cont">
        <Card
          className="mb-5 text-center shadow-lg"
          bg="success"
          data-bs-theme="dark"
          style={{ width: "25rem" }}
        >
          <Card.Img
            variant="top"
            src="https://www.smsmode.com/wp-content/uploads/2022/07/otp-illustration.png"
          />
          <Card.Body>
            <Card.Title>Authenticate</Card.Title>
            <Card.Text>
              Enter your number with correct country code to get OTP
            </Card.Text>
          </Card.Body>
        </Card>

        <div
          className="phone_signin"
          style={{
            border: "1px solid rgb(25,135,84)",
            borderRadius: "10px",
            padding: "3rem",
            backgroundColor: "rgba(0,195,123,0.1)",
          }}
        >
          <div className="phone_content">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => setphone("+" + phone)}
            />
            <Button
              onClick={sendotp}
              sx={{ marginTop: "2rem" }}
              variant="contained"
            >
              Send OTP
            </Button>
            <div style={{ marginTop: "2rem" }} id="recaptcha"></div>
            <br />
            <>
              {showOTP ? (
                <>
                  <TextField
                    onChange={(e) => setotp(e.target.value)}
                    sx={{ marginTop: "2rem", width: "300px" }}
                    variant="outlined"
                    size="small"
                    label="Enter OTP"
                    color="success"
                  />
                </>
              ) : null}
            </>
            <br />
            <>
              {showOTP ? (
                <>
                  <Button
                    onClick={verifyotp}
                    sx={{ marginTop: "2rem" }}
                    variant="contained"
                    style={{ backgroundColor: "rgb(25,135,84)" }}
                  >
                    Verify OTP
                  </Button>
                </>
              ) : null}
            </>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default PhoneSignin;
