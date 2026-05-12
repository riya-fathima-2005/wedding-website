import React from 'react'
import Banner from './Banner'
import Num from './Num'
import Aboutsec from './Aboutsec'
import Recently from './Recently'
import Upcoming from './Upcoming'
import Costumes from './Costumes'
import Whychoose from './Whychoose'
import Ourgallery from './Ourgallery'
import Contact from './Contact'
import Faq from './Faq'
import Wantwelcome from './Wantwelcome'

const Home = () => {
  return (
    <div>
      <Banner />
      <Num /> 
      <Recently />
      {/* <Upcoming /> */}
      {/* <Costumes /> */}
      <Whychoose />
       {/* <Aboutsec /> */}
      <Ourgallery />
      <Faq/>
      <Wantwelcome/>
      {/* <Contact /> */}
    </div>
  )
}

export default Home
