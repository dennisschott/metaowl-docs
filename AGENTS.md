# Agent Instructions for MetaOWL Documentation Site

## Project Overview

This is the MetaOWL documentation site, built with MetaOWL (a meta-framework for Odoo OWL on Vite) and styled with TailwindCSS.

## Tech Stack

- **Framework**: MetaOWL (based on Odoo OWL)
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4
- **Language**: JavaScript (ES Modules)
- **Routing**: File-based routing via `src/pages/`
- **State**: MetaOWL Store pattern

## Architecture

### Directory Structure

```
src/
├── components/     # Reusable UI components (.js, .xml, .css)
├── layouts/        # Page layouts
├── pages/          # File-based routes
│   ├── index/      # → /
│   ├── docs/       # → /docs/*
│   └── [...path]/  # Catch-all 404
├── css.js          # TailwindCSS imports
└── metaowl.js      # App entry point
```

### Component Structure

Each component consists of:
- **`.js` file**: Component class extending `@odoo/owl` Component
- **`.xml` file**: OWL template (not JSX)
- **`.css` file**: Component-scoped styles

### Key Conventions

**OWL Templates** (NOT JSX):
- `t-on-click` for event handlers (not `@click` or `onClick`)
- `t-model` for two-way binding
- `t-if`, `t-foreach`, `t-esc` for directives
- Static `template` property references the `.xml` filename

**Routing**:
- `src/pages/docs/routing/[slug]/Post.js` → `/docs/routing/:slug`
- `src/pages/[...path]/NotFound.js` → catch-all

**State Management**:
```javascript
import { Store } from 'metaowl'

const useStore = Store.define('storeName', {
  state: () => ({ key: 'value' }),
  mutations: { setKey: (state, payload) => { state.key = payload } },
  actions: { async fetch({ commit }) {} }
})
```

## Commands

```bash
npm run dev      # Start dev server (metaowl-dev)
npm run build    # Production build (metaowl-build)
npm run generate # Static generation (metaowl-generate)
npm run lint     # Lint files (metaowl-lint)
```

## Code Patterns

**New Page**:
```javascript
// src/pages/example/Example.js
import { Component } from '@odoo/owl'
import { Meta } from 'metaowl'

export default class Example extends Component {
  static template = 'Example'

  setup() {
    Meta.title('Page Title')
    Meta.description('Description for SEO')
  }
}
```

**Child Component**:
```javascript
// src/components/Button/Button.js
import { Component } from '@odoo/owl'

export default class Button extends Component {
  static template = 'Button'
  static components = { /* nested components */ }
}
```

**Link Component**:
```javascript
import { Link } from 'metaowl'

// In template: <Link to="/docs">Documentation</Link>
```

**Navigation Guards** (in `src/metaowl.js`):
```javascript
import { router } from 'metaowl'

router.beforeEach((to, from, next) => {
  // to.meta, to.path, etc.
  next()
})
```

## TailwindCSS

TailwindCSS v4 is configured via `@tailwindcss/postcss`. Styles are imported in `src/css.js` and processed automatically. Use Tailwind utility classes in `.xml` templates and `.js` className properties.

## SEO

Use `Meta` from `metaowl` in component `setup()`:
```javascript
Meta.title('Title')
Meta.description('Description')
Meta.og('og:title', 'Open Graph Title')
```

## Common Tasks

1. **Add a new documentation page**: Create `src/pages/docs/[topic]/[Page].js` with matching `.xml` and `.css`
2. **Add a reusable component**: Create `src/components/[Name]/[Name].js`, `.xml`, `.css` then import in parent
3. **Update styling**: Add Tailwind classes directly in templates or use the `.css` file
4. **Add store state**: Define in `src/metaowl.js` using `Store.define()`, use via `useStore()` in components

## What NOT To Do

- Do not use JSX syntax (OWL uses XML templates)
- Do not use React/Vue patterns
- Do not use `onclick` (use `t-on-click`)
- Do not import from `react` or `vue`
- **In XML code blocks, escape special characters**: use `&amp;` for `&`, `&lt;` for `<`, `&gt;` for `>`, `&amp;&amp;` for `&&`, etc. XML entities must be escaped inside `<code>` or `<pre>` blocks.

## Best Practices Resources

When working on specific features, search these documentation pages for best practices:

- **Components**: `/docs/components` - component structure, lifecycle, patterns
- **Routing**: `/docs/routing` - file-based routing, dynamic routes
- **Store**: `/docs/store` - state management, mutations, actions
- **Layouts**: `/docs/layouts` - page layouts, nested layouts
- **Composables**: `/docs/composables` - reusable logic patterns
- **Forms**: `/docs/forms` - form handling, validation
- **Fetch**: `/docs/fetch` - HTTP requests, error handling
- **Navigation Guards**: `/docs/navigation-guards` - route protection
- **Error Boundaries**: `/docs/error-boundaries` - error handling
- **i18n**: `/docs/i18n` - internationalization
- **Meta/SEO**: `/docs/meta` - meta tags, Open Graph
- **Project Structure**: `/docs/project-structure` - directory conventions

## Framework Reference

For comprehensive framework documentation and API details, refer to the [MetaOWL README](https://github.com/dennisschott/metaowl) on GitHub. It covers:

- Full API reference for all modules (boot, Fetch, Cache, Meta, Store, Router, etc.)
- Odoo JSON-RPC Service for backend integration
- Composables documentation (useAuth, useLocalStorage, useFetch, etc.)
- Form handling with useForm()
- i18n with I18n.load() and I18n.t()
- Error boundaries with ErrorBoundary.wrap()
- CLI commands and configuration options
- Vite plugin setup and PostCSS config