import React from "react"
import Header from "../components/Header"
import indexStyle from "../styles/index.module.scss"
import aboutStyle from "../styles/about.module.scss"
import Social from "../components/social"
import "typeface-roboto-condensed"
import {graphql, useStaticQuery} from "gatsby"
import Image from "../images/1.jpg"

const IndexPage = () => {
const data = useStaticQuery(graphql`
query{
  site{
    siteMetadata{
      title
    }
  }
}
`)

  return (
    <div className={indexStyle.main}>
      <Header />
      <div className={indexStyle.width}>
        <div className={indexStyle.content}>
          <p className={indexStyle.hi}> Hi, my name is</p>
          <h1 style={{ color: "white", opacity: 0.6 }}>{data.site.siteMetadata.title}.</h1>
          <h1>I build things for the web.</h1>
          <p className={indexStyle.des}>I am a software engineer based in New Delhi, India specializing in building exceptional, high-quality websites and web applications.</p>
          <button>Get In Touch</button>
          <Social />
        </div>

        <div className={aboutStyle.main}>
          <div className={aboutStyle.des}>
            <h3><span className={aboutStyle.university}>01.</span> About Me</h3>
            <p>Hello! I am Manish, an UG student based in New Delhi, India who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.<br /><br/>
            I am persuing my major in Bachelor of computer application from <span className={aboutStyle.university}>Amity Institute of Information Technology.</span><br /><br/>
            Here are a few technologies I have been working with recently:</p>
          </div>
          <div className={aboutStyle.image}>
          {/* <img src={Image} alt="Image"/> */}
          <div className={aboutStyle.img}>
          <div className={aboutStyle.layer}>
          <div className={aboutStyle.borderLayer}>
            </div>
          </div>
          </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}


export default IndexPage
