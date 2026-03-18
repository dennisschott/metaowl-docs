import './css.js'
import { boot, Fetch } from 'metaowl'

Fetch.configure({
  baseUrl: import.meta.env.VITE_API_URL ?? '',
})

boot()
