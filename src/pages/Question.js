// import React, { useState } from "react"
// import { QuestionData } from "../data"
// import Checkbox from "../components/Question/Checkbox"

// export default function Question() {
//   let dataLength = QuestionData.length
//   const [checklist, setChecklist] = useState(new Array(dataLength).fill(false))

//   const handleCheck = (idx) => {
//     checklist[idx] = !checklist[idx]
//     setChecklist([...checklist])
//   }
//   return (
//     <>
//       {QuestionData.map((q, idx) => {
//         return (
//           <Checkbox
//             key={q}
//             onClick={() => handleCheck(idx)}
//             num={idx}
//             checked={checklist[idx]}
//           >
//             {q}
//           </Checkbox>
//         )
//       })}
//     </>
//   )
// }
