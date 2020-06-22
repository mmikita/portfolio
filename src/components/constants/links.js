import React from "react"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




const data = [
  {
    id: 1,
    text: "about me",
    url: "#aboutMe",
  },
  {
    id: 2,
    text: "projects",
    url: "#projectsSection",
  },
  {
    id: 3,
    text: "contact",
    url: "#contactFormWrapper",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url} smooth={true} duration={500} >{link.text}</Link>
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
