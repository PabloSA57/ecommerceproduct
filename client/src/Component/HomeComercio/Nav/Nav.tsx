import React from 'react'

import { RiDashboardFill } from "react-icons/ri";
import { BiStore, BiCog } from "react-icons/bi";

import {NavStyle} from "./style";

interface Prop {
  funcActive: (array: [boolean, boolean, boolean]) => void,
  actives: boolean[]
}

const Nav = ({funcActive, actives}: Prop) => {
  return (
      <NavStyle >
          <div className="nav-items">
            <div
            className={actives[0] ? "nav-item active" : "nav-item"}
            onClick={() => funcActive([true, false, false])}><RiDashboardFill /></div>

            <div
            className={actives[1] ? "nav-item active" : "nav-item"}
            onClick={() => funcActive([false, true, false])}>
              <BiStore />
            </div>

            <div
            className={actives[2] ? "nav-item active" : "nav-item"}
            onClick={() => funcActive([false, false, true])}>
              <BiCog />
            </div>
          </div>
      </NavStyle>
  )
}

export default Nav;
