# GitHub Copilot Instructions for MetaOwl

## About This Project
This is a MetaOwl application - a lightweight meta-framework for Odoo OWL (Odoo Web Library) built on Vite.

## Framework Overview

### OWL Components
- Class-based components extending Component from '@odoo/owl'
- Templates defined in separate .xml files
- CSS scoped to component in .css files
- Static properties: template, components
- Lifecycle: setup(), willStart(), mounted(), willUnmount()

### File-Based Routing
- src/pages/ directory structure maps to URLs
- pages/index/Index.js → /
- pages/about/About.js → /about
- pages/user/[id]/User.js → /user/:id (dynamic)
- pages/[...path]/NotFound.js → catch-all

### State Management
Use Store for application state:
```javascript
const useStore = Store.define('storeName', {
  state: () => ({ count: 0 }),
  getters: { double: (state) => state.count * 2 },
  mutations: { increment: (state) => state.count++ },
  actions: { async fetch({ commit }) {} }
})
```

### Common Tasks

When generating components:
1. Create .js file with Component class
2. Create matching .xml file with template
3. Create .css file for scoped styles
4. Update parent component's static components

When adding pages:
1. Create directory in src/pages/
2. Add Page.js, Page.xml, page.css
3. Route is auto-generated from directory name

When using stores:
1. Define store with Store.define()
2. Use in component: const store = useStore()
3. Read state: store.state.property
4. Call mutations: store.commit('mutationName', payload)
5. Call actions: await store.dispatch('actionName', payload)

When setting meta tags:
1. Import { Meta } from 'metaowl'
2. Call in setup(): Meta.title('Title')

### Code Patterns

**New Page Component:**
```javascript
// pages/Feature/Feature.js
import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Feature extends Component {
  static template = 'Feature'
  
  setup() {
    Meta.title('Feature Page')
  }
}
```

**New Child Component:**
```javascript
// components/MyComponent/MyComponent.js
import { Component } from '@odoo/owl'

export default class MyComponent extends Component {
  static template = 'MyComponent'
}
```

**Navigation Guard:**
```javascript
// In metaowl.js
import { router } from 'metaowl'

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})
```

## File Conventions
- Component class names: PascalCase
- Template names: match class name
- CSS classes: kebab-case
- Store names: camelCase
- Page components: default export

## Do Not
- Use JSX (OWL uses XML templates)
- Import React or Vue
- Modify prototype-based inheritance
- Use JSX-style event handlers (onclick -> t-on-click)

## Do
- Use OWL's reactive system
- Follow file-based routing conventions
- Scope CSS to components
- Use Meta helpers for SEO
- Leverage Store for shared state
