import config from '../../../../public/config'
import classes from './header.module.less'

const Header = () => {
  const title = config.title
  return (
    <header className={classes.header}>
      <img className={classes.logo} src="./logo.svg" alt="logo"/>
      <h1 className={classes.title}>{title}</h1>
    </header>
  )
}

export default Header