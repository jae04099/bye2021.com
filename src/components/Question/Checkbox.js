import styled from "styled-components"

const Checkbox = ({ onClick, num, children, checked = false }) => {
  return (
    <CheckContainer>
      <input className="sr-only" id={num} name="questions" type="checkbox" />
      <Check onClick={onClick} checked={checked} htmlFor={num}>
        {children}
      </Check>
    </CheckContainer>
  )
}

export default Checkbox

const CheckContainer = styled.article`
  margin: 15px;
  font-size: 18px;
`

const Check = styled.label`
  position: relative;

  &::before {
    display: inline-block;
    margin-right: 10px;
    content: "";
    vertical-align: middle;
    width: 15px;
    height: 15px;
    background: #fff;
  }
  &::after {
    display: ${(props) => (props.checked ? "inline-block" : "none")};
    position: absolute;
    top: 4px;
    left: 0px;
    content: "";
    vertical-align: middle;
    width: 11px;
    height: 11px;
    border: 2px solid #fff;
    border-radius: 5px;
    background: #6b8df2;
  }
`
