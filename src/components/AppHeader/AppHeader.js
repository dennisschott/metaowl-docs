import { Component, useState } from '@odoo/owl'
import { Link } from 'metaowl'

export const AppHeader = class AppHeader extends Component {
  static template = 'AppHeader'
  static components = { Link }

  setup() {
    this.state = useState({
      isDark: document.documentElement.classList.contains('dark'),
    })
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    this.state.isDark = isDark

    const favicon = document.querySelector(
      'link[rel="icon"][type="image/svg+xml"]',
    )
    if (favicon) {
      favicon.href = isDark ? '/images/logo-darkmode.svg' : '/images/logo.svg'
    }
  }
}
