import React from 'react'

const StatPoke = ({ infoStat }) => {
    return (
        <li className='stat__info'> <span className='span-info'>{infoStat.stat.name}  </span>  {infoStat.base_stat} </li>
    )
}

export default StatPoke