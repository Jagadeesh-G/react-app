interface Props {
  name: string;
  color?: "primary" | "secondary" | "Light" | "close";
  onClick: () => void;
}
const Button = ({ name, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
