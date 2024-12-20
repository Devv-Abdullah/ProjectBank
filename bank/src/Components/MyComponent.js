export default function MyComponent({ value, handelChange }) {
  return (
    <>
      <label>Phone Number:</label>
      <input
        value={value}
        onChange={(event) => {
          handelChange(event.target.value);
        }}
      />
    </>
  );
}
