import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/confirmed", { 
      state: { 
        email: emailRef.current.value,
        fname: fnameRef.current.value,
        lname: lnameRef.current.value,
      } 
    });
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{display: "flex", gap: "6px"}}>
          <label>
            First Name:
            <input type="text" name="fname" ref={fnameRef} required />
          </label>
          <label>
            Last Name:
            <input type="text" name="lname" ref={lnameRef} required />
          </label>
        </div>
        
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
