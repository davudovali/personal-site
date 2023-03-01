import './Button.scss';
export const Button = ({label}: {label: string}) => {
  return <button className="fancy_button">
    <div className="fancy_button_left"/>
    <div className="fancy_button_center"/>
    <div className="fancy_button_right"/>
    <div className="fancy_button_shadows">
      <div className="fancy_button_content x1">{label}</div>
    </div>
  </button>
}