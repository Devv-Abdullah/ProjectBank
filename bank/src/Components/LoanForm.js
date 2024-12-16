import "./Style/FormStyles.css";
import Modal from "./modal";
import { useState } from "react";

export default function LoanFrom() {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();

    const { age, phoneNumber } = inputs;
    setErrorMessage(null);
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone number format is incorrect");
    }
    setShowModal(true);
  }

  const btnDisabled =
    inputs.name == "" ||
    inputs.age == "" ||
    inputs.phoneNumber == "" ||
    inputs.isEmployee == "";

  function handelDivClick() {
    if (showModal == true) {
      setShowModal(false);
    }
  }

  return (
    //flex => container
    <div onClick={handelDivClick} className="container">
      <form id="loan-form" className="container">
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input
          value={inputs.name}
          onChange={(event) => {
            setInputs({ ...inputs, name: event.target.value });
          }}
        />

        <label>Phone Number:</label>
        <input
          value={inputs.phoneNumber}
          onChange={(event) => {
            setInputs({ ...inputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age:</label>
        <input
          value={inputs.age}
          onChange={(event) => {
            setInputs({ ...inputs, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={inputs.isEmployee}
          onChange={(event) => {
            setInputs({ ...inputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={inputs.salaryRange}
          onChange={(event) => {
            setInputs({ ...inputs, salaryRange: event.target.value });
          }}
        >
          <option>Select salary range</option>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnDisabled}
          id="submit-loan-btn"
        >
          submit
        </button>
      </form>

      <Modal isVisible={showModal} errormessage={errorMessage} />
    </div>
  );
}
