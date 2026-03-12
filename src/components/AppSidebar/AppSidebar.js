import { Component } from '@odoo/owl'

export const AppSidebar = class AppSidebar extends Component {
  static template = 'AppSidebar'

  static props = ['links']
}
