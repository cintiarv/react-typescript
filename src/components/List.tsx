import React from 'react'
import {Sub} from '../types'


interface Props{
    subs: Array<Sub>
}

export default function List({subs}: Props){
  return (
    <div>
        <ul>
        {
          subs.map(sub => {
            return(
              <li key={sub.avatar}>
                <img src={sub.avatar} alt="" />
                <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
