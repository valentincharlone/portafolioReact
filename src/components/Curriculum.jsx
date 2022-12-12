import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import { TbBrandCss3 } from 'react-icons/tb'
import { TbBrandJavascript } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { SiPhp } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'

import { BsGithub } from 'react-icons/bs'
import { DiGit } from 'react-icons/di'
import { DiNpm } from 'react-icons/di'
import { SiVite } from 'react-icons/si'
import { SiPostman } from 'react-icons/si'

const CV = () => {
  return (
    <div className='curriculum' id='skills'>
      <h1 className='heading'>SKILLS</h1>

      <div className='data'>
 
        <ul>
          <li> <AiFillHtml5 /></li>
          <li> <TbBrandCss3/> </li>
          <li> <TbBrandJavascript /> </li>
          <li> <GrReactjs />  </li>
          <li> <SiPhp /> </li>
          <li> <SiMysql/> </li>
          <li> <BsGithub /> </li>
          <li> <DiGit /> </li>
        </ul>
      </div>
    </div>
  )
}

export default CV