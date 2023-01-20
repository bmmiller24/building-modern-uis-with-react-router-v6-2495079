import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const {state} = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>

      { state && 
        <>
          <p>{state.fname} you are now registered for Red30 Tech as <strong>{state.fname} {state.lname}</strong>.</p>
          <p>We've set additional information to <strong>{state.email}</strong></p>
        </>
      } 

    </div>
  );
}
