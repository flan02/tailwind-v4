import ContainerClass from "../components/coding-in-flow/ContainerClass"
import DivideXY from "../components/coding-in-flow/DivideXY"
import LineClamp from "../components/coding-in-flow/LineClamp"
import { Navbar } from "../components/coding-in-flow/Navbar"
import NestedGroup from "../components/coding-in-flow/NestedGroup"
import OddEven from "../components/coding-in-flow/OddEven"
import Peer from "../components/coding-in-flow/Peer"
import Prose from "../components/coding-in-flow/Prose"
import ScrollSnap from "../components/coding-in-flow/ScrollSnap"
import TextBalance from "../components/coding-in-flow/TextBalance"


type Props = {}

const CodingInFlow = (props: Props) => {
  return (
    <div className="space-y-8 px-12">
      <h1 className="text-accent">Coding in Flow (13 tailwind v4 hacks)</h1>
      <TailwindCssHacks />
    </div>
  )
}

export default CodingInFlow

const TailwindCssHacks = () => {

  const propsComponentList = [
    {
      title: "#1 Dark-mode-ifying Your Website Logo",
      component: <Navbar />
    },
    {
      title: "#2 Typography Plugin",
      component: <Prose />
    },
    {
      title: "#3 Container (Responsive breakpoints already included)",
      component: <ContainerClass />
    },
    {
      title: "#4 Text-balance",
      component: <TextBalance />
    },
    {
      title: "#5 Nested Group",
      component: <NestedGroup /> // group class - has class is the opposite
    },
    {
      title: "#6 Peer",
      component: <Peer /> // based on sibling state
    },
    {
      title: "#7 Scroll Snap",
      component: <ScrollSnap />
    },
    {
      title: "#8 Line Clamp",
      component: <LineClamp />
    },
    {
      title: "#9 Odd/Even",
      component: <OddEven /> // class odd & even (first/last/nth-1/nth-2 ...)
    },
    {
      title: "#10 Divide X/Y",
      component: <DivideXY />
    }
  ]

  return propsComponentList.map((item, index) => (
    <div key={index}>
      <h2 className="text-xl font-bold">{item.title}</h2>
      {item.component}
      <hr className="w-48 text-center mx-auto" />
    </div>
  ))
}


