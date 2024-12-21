export default function MyComponent({ value, handelChange, title }) {
  return (
    <>
      <label>{title}</label>
      <input
        value={value}
        onChange={(event) => {
          handelChange(event.target.value);
        }}
      />
    </>
  );
}
