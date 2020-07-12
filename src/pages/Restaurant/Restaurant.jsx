import React from 'react';
import { Menu, MenuFloating } from 'src/partials'
import styles from './Restaurant.module.scss'

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFloatMenuVisible: false }
    this.menuRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this)
  }
  render() {
    return (
      <main className={styles.restaurantPage}>
        <Menu menuRef={this.menuRef} />
        { this.state.isFloatMenuVisible && <MenuFloating /> }
        <div style={{height: '4000px'}}/>
      </main>
    );
  }
  handleScroll () {
    const html = document.getElementsByTagName('html')[0]
    const scrollPosition = html.scrollTop
    const menuHeight = this.menuRef.current.clientHeight
    this.setState({ isFloatMenuVisible: scrollPosition >= (menuHeight - 110) })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}