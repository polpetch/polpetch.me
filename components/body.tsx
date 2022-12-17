import styles from './body.module.css' 
import Image from 'next/image'
import MilkDomain from '../public/milk-domain-name-service.png'
import Cpmatch from '../public/cpmatch.webp'


export default function Body() {
  return (
    <div className={styles.body}>
      <p className={styles.index}> EXPREIENCES </p>

      <hr/>
      <div className={styles.post}>
        <div className={styles.imageWraper}>
          <Image 
            src={MilkDomain} 
            alt='Picture of .milk domain name service web site' 
            objectFit='fill'
          />
        </div>
        <div className={styles.content} >
          <p >2022</p>
          <p></p>
          <a href='https://github.com/polpetch/milk-domain-name-service' >.Milk Domain Name Service</a>
          <div>
            <p>A domain name service based on polygon testnet network build with nextjs and solidity. </p>
          </div>
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque ipsa facilis animi inventore. Placeat dolore voluptate, doloremque amet neque in possimus maxime consequuntur eaque alias, dicta ullam, odio inventore.</p> */}
      </div>
      <hr/>
      <div className={styles.post}>
        <div className={styles.imageWraper}>
          <Image 
            src={Cpmatch} 
            alt='Picture of .milk domain name service web site' 
            objectFit='fill'
          />
        </div>
        <div className={styles.content} >
          <p >2022</p>
          <p>CPMatch</p>
          <div>
            <p>
              During my internship at CPMatch, I got chance to work on content management system.<br/>
              I was participate for 2 month, focusing on coding and debugging.
            </p>
          </div>
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque ipsa facilis animi inventore. Placeat dolore voluptate, doloremque amet neque in possimus maxime consequuntur eaque alias, dicta ullam, odio inventore.</p> */}
      </div>
      <hr/>
    </div>
  )
}