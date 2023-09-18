import classes from './panel.module.less'

const Panel = () => {
  return (
    <div className={classes.panel}>
      <header className={classes.header}>header</header>
      <main className={classes.main}>main</main>
      <footer className={classes.footer}>footer</footer>
    </div>
  )
}

export default Panel