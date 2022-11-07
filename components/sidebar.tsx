import styles from './sidebar.module.css' 

export default function Sidebar() {
  return (
    <div className={styles.nav}>
      <p className={styles.title}>Polpetch Prasompetch</p>
      <hr/>
      <div className={styles.info}>
        <p style={{ fontSize: '16px', marginBottom: '0px' }}>ABOUT</p>
        <p style={{ fontSize: '15px', marginTop: '7px' }} > 
          a Full Stack Developer, loved to explore unique design trends
          <br/> have a background in Computer Science from Bangkok University,
          <br/> with an emphasis on Web Development. 
        </p>
      </div>
      <hr/>
      <div className={styles.contact}>
        <p>CONTACT</p>
        <ul>
          <li>&rarr;    <a href='https://resume.showwcase.com/1998polpetch.pdf'>Resume</a></li>
          {/* <br/> */}
          <li>&rarr;    <a href='https://www.linkedin.com/in/polpetch-prasompetch-3a806623a/'>Linkedin</a></li>
          {/* <br/> */}
          <li>&rarr;    <a href='mailto: polpetch@icloud.com'>Email</a></li>
          {/* <br/> */}
        </ul>
      </div>
      <hr/>
      <div className={styles.footer}>
        <p>LOCATED</p>
        <ul>
          <li><a href='https://goo.gl/maps/yRBWgD8Hxbsy7nK47' >Pathum Thani, Thailand</a></li>
        </ul>
      </div>

    </div>
  )
}