import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons'

function CustomNavbar() {

    return (
        
<nav class="border-gray-200 bg-[#22c55e] dark:bg-gray-800 dark:border-gray-700" style={{backgroundColor:'#22c55e'}}>
  <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
        <img src={process.env.PUBLIC_URL + '/images/home/spread_the_word.png'} class="h-12 mr-3" alt="spread_the_word Logo" />
        <span style={{color:'white', fontFamily:'serif', fontSize:30}}>SpreadTheWord-Wear</span>
    </a>
    <div id="navbar-solid-bg">
      <ul style={{display:'flex', float:'left'}}>
        <li style={{paddingRight:20}}>
        <a href="https://wa.me/message/SBX7JE4XYNZ6G1" > <FontAwesomeIcon icon={faWhatsapp} beat size="2xl" style={{color: "#f7f7f7",}}/></a>
        </li>
        <li>
          <a href='https://instagram.com/spreadtheword_wear?igshid=MzRlODBiNWFlZA=='  target="_blank"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#f7f7f7",}}/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
    
}

export default CustomNavbar