# metaowl-docs - MetaOwl Project

## Quick Start for Claude Code

This project uses MetaOwl, a meta-framework for Odoo OWL on Vite.

### Architecture
- **Frontend**: OWL (Odoo Web Library) - reactive components
- **Build Tool**: Vite with MetaOwl plugin
- **Routing**: File-based (pages/ directory)
- **State**: Store pattern with mutations/actions

### Key Files
```
src/
├── metaowl.js          # App bootstrap
├── pages/              # Route components (file-based routing)
│   └── index/
│       ├── Index.js    # Page component
│       ├── Index.xml   # OWL template
│       └── index.css   # Scoped styles
├── components/         # Reusable components
│   ├── AppHeader/
│   └── AppFooter/
└── css.js              # Global styles
```

### Development Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run generate` - Static site generation
- `npm run lint` - Lint with Prettier + ESLint

### OWL Component Pattern
```javascript
import { Component } from '@odoo/owl'
import { Meta, Store } from 'metaowl'

export default class MyPage extends Component {
  static template = 'MyPage'
  static components = { ChildComponent }
  
  setup() {
    // Lifecycle hook
    Meta.title('Page Title')
  }
}
```

### Store Pattern
```javascript
const useCounterStore = Store.define('counter', {
  state: () => ({ count: 0 }),
  mutations: {
    increment: (state) => state.count++
  },
  actions: {
    async fetchData({ commit }) { }
  }
})

// In component:
const store = useCounterStore()
store.commit('increment')
```

### Navigation Guard Pattern
```javascript
import { router } from 'metaowl'

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})
```

### Dynamic Routes
- File: pages/user/[id]/User.js → URL: /user/:id
- File: pages/blog/[slug]/Blog.js → URL: /blog/:slug
- File: pages/[...path]/NotFound.js → URL: /:path(.*)

### API Requests
```javascript
import { Fetch } from 'metaowl'

const data = await Fetch.url('/api/users', 'GET')
const result = await Fetch.url('/api/users', 'POST', { name: 'John' })
```

### Meta Tags
```javascript
import { Meta } from 'metaowl'

Meta.title('Page Title')
Meta.description('Page description')
Meta.ogTitle('Social Title')
Meta.canonical('https://example.com/page')
```

### Best Practices
1. Keep components small and focused
2. Use stores for shared state
3. Use Meta helpers for SEO
4. Leverage file-based routing
5. Scope CSS to components
6. Use navigation guards for auth

### Common Gotchas
- Templates must match t-name attribute exactly
- File-based routing uses directory name, not file name
- OWL uses xml templates, not JSX
- Static properties are required (template, components)
