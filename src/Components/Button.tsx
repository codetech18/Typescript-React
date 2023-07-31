import { ReactNode } from "react";

interface Props{
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const Button = (Props : Props) => {
  return (
    <button type="button" className={"btn btn-" + Props.color} onClick={Props.onClick} >{Props.children} </button>

  )
}

export default Button