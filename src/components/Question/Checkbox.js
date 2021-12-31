import styled from "styled-components"

const Checkbox = ({ onClick, num, children, checked = false }) => {
  return (
    <CheckContainer onClick={onClick} checked={checked}>
      <input className="sr-only" id={num} name="questions" type="checkbox" />
      <Check htmlFor={num}>{children}</Check>
    </CheckContainer>
  )
}

export default Checkbox

const CheckContainer = styled.article`
  display: inline-block;
  height: 40px;
  text-align: center;
  line-height: 40px;
  vertical-align: baseline;
  background: ${(props) => (props.checked ? "#6B8DF2" : "#ffffff")};
  color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
  font-size: 18px;
  border-radius: 10px;
`

const Check = styled.label`
  display: inline;
`
