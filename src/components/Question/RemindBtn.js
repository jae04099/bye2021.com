import Button from "../Common/Button"
export default function RemindBtn({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>
}
