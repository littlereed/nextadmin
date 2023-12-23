import styles from './footer.module.css';
const Footer = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.logo}>LU Dev</div>
      <div>© All rights reserved.</div>
    </div>
  );
}
 
export default Footer;