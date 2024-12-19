export default function MyComponent({ value, handelChange, currentInputs }) {
  return (
    <>
      <label>Phone Number:</label>
      <input
        value={value}
        onChange={(event) => {
          handelChange({ ...currentInputs, phoneNumber: event.target.value });
        }}
      />
    </>
  );
}
