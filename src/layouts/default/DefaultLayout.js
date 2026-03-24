import { Component, useState } from '@odoo/owl'
import { Link } from 'metaowl'
import { AppHeader } from '@components/AppHeader/AppHeader'
import { AppFooter } from '@components/AppFooter/AppFooter'
import { Sidebar } from '@components/Sidebar/Sidebar'

export default class DefaultLayout extends Component {
  static template = 'DefaultLayout'
  static components = { AppHeader, AppFooter, Sidebar, Link }

  setup() {
    this.state = useState({ isSidebarOpen: false })

    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.closeSidebar = this.closeSidebar.bind(this)
  }
  toggleSidebar() {
    this.state.isSidebarOpen = !this.state.isSidebarOpen
  }

  closeSidebar() {
    this.state.isSidebarOpen = false
  }
}
