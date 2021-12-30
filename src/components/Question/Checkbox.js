import styled from "styled-components"

const Checkbox = ({ onClick, num, children, checked = false }) => {
  return (
    <div>
      <input className="sr-only" id={num} name="questions" type="checkbox" />
      <Check onClick={onClick} checked={checked} htmlFor={num}>
        {children}
      </Check>
    </div>
  )
}

export default Checkbox

const Check = styled.label`
  position: relative;
  &::before {
    display: inline-block;
    content: "";
    vertical-align: middle;
    width: 15px;
    height: 15px;
    background: #fff;
  }
  &::after {
    display: ${(props) => (props.checked ? "inline-block" : "none")};
    position: absolute;
    top: 4.5px;
    left: 3px;
    content: "";
    vertical-align: middle;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: #6b8df2;
  }
`
