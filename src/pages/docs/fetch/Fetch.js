import { Component, useState } from '@odoo/owl'
import { Meta, Fetch as FetchAPI } from 'metaowl'

export default class Fetch extends Component {
  static template = 'Fetch'
  static components = {}

  setup() {
    Meta.title('Fetch API - MetaOWL')
    Meta.description(
      'Learn how to use the Fetch API for HTTP requests in MetaOWL.',
    )
    this.state = useState({
      users: [],
      loading: true,
      error: null,
    })
    this.fetchUsers()
  }

  async fetchUsers() {
    try {
      this.state.users = await FetchAPI.url(
        'https://jsonplaceholder.typicode.com/users',
      )
    } catch (e) {
      this.state.error = e?.message || 'Failed to load'
    } finally {
      this.state.loading = false
    }
  }
}
