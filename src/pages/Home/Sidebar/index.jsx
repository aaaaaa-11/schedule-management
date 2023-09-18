import classes from './sidebar.module.less'

const Sidebar = () => {
  const search = () => {}
  const goPage = (page) => {}
  const btns = [
    {
      label: '搜索',
      handler: search
    },
    {
      label: '本月',
      handler: goPage
    },
    {
      label: '本周',
      handler: goPage
    },
  ]

  const items = btns.map(btn => (
    <li className={classes.item} onClick={btn.handler}>{btn.label}</li>
  ))
  return (
    <ul className={classes.sidebar}>
      {items}
    </ul>
  )
}

export default Sidebar