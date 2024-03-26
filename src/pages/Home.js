import React, {useState, useEffect} from 'react'
import { homePageData as homePageDataDesktop } from '../bff_layers/desktop-bff'
import { homePageData as homePageDataMobile } from '../bff_layers/mobile-bff'
import { useDevice } from '../context/DeviceContext'

//components
import Nav from '../components/Nav'
import Hero from '../components/Hero'

export default function Home() {
    const {isMobile} = useDevice();
    const [nav, setNav] = useState({});
    const [hero, setHero] = useState({});
    const [loading, setisLoading] = useState(true);
  
    async function getHomeComponentData(){
      try{
        //in the actual scenario only one will be called based on the deviceContext value
        let data = {}
        if(isMobile){
            data = await homePageDataMobile();
        }
        else{
            data = await homePageDataDesktop();
        }
        setNav(data.nav);
        setHero(data.hero);
        setisLoading(false);
      }
      catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{
      getHomeComponentData();
    },[])
    if(loading) return <>Loading...</>
    return (
      <>
        <Nav data={nav}/>
        <Hero data={hero} />
      </>
    );
}
