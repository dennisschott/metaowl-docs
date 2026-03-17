import { Component, useState } from '@odoo/owl'

export const AppHeader = class AppHeader extends Component {
  static template = 'AppHeader'

  setup() {
    this.state = useState({
      isDark: document.documentElement.classList.contains('dark'),
    })
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    this.state.isDark = isDark
  }
}
