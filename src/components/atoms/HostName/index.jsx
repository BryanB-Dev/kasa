import "./style.scss";

export default function HostName({ name }) {

  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[1];

  return (
    <p className="host__name">
      <span>{firstName}</span>
      <span>{lastName}</span>
    </p>
  );
}
