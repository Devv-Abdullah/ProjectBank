import "./Style/FormStyles.css";

export default function Modal({ isVisible, errormessage = null }) {
  if (isVisible == true) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The form has been submitted successfully</h1> */}
          <h1 style={{ color: errormessage != null ? "red" : "green" }}>
            {errormessage != null
              ? errormessage
              : "The form has been submitted successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
