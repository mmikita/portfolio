import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "about me",
    url: "#about",
  },
  {
    id: 2,
    text: "skills",
    url: "#skills",
  },
  {
    id: 3,
    text: "projects",
    url: "#projects",
  },
  {
    id: 4,
    text: "contact me",
    url: "#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
