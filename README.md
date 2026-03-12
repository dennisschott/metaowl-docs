# MetaOWL Documentation

Official documentation for [MetaOWL](https://metaowl.org) – a meta-framework for Odoo OWL on Vite.

## About MetaOWL

MetaOWL is a powerful meta-framework for building modern, reactive web applications with [Odoo Web Library (OWL)](https://github.com/odoo/owl). It combines the strengths of OWL with the speed of Vite and provides built-in features for routing, state management, and SEO optimization.

### Key Features

- **File-Based Routing** – Intuitive routing structure based on the `pages/` directory
- **State Management** – Built-in store pattern with mutations and actions
- **Navigation Guards** – Route protection for authentication and permissions
- **SEO Optimization** – Meta tags, Open Graph, and canonical URLs
- **Vite-Powered** – Instant Hot Module Replacement for fast development
- **HTTP Client** – Built-in Fetch wrapper for API requests

## Documentation

The full documentation is available at [metaowl.org](https://metaowl.org):

- **[Getting Started](https://metaowl.org/docs/getting-started)** – Installation and setup
- **[Routing](https://metaowl.org/docs/routing)** – File-based routing and dynamic routes
- **[Store](https://metaowl.org/docs/store)** – State management with mutations and actions
- **[Components](https://metaowl.org/docs/components)** – Creating and using OWL components
- **[Navigation Guards](https://metaowl.org/docs/navigation-guards)** – Route protection
- **[Meta Tags](https://metaowl.org/docs/meta)** – SEO optimization
- **[Fetch](https://metaowl.org/docs/fetch)** – HTTP requests
- **[API Reference](https://metaowl.org/docs/api-reference)** – Complete API reference

## Project Setup

This repository contains the documentation site for MetaOWL. To develop the documentation locally:

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The documentation will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Static Generation

```bash
npm run generate
```

## Contributing

Contributions are welcome! Please create an issue or pull request.

## License

MIT License – See the [LICENSE](LICENSE) file for more information.

## Links

- [MetaOWL on npm](https://www.npmjs.com/package/metaowl)
- [Odoo OWL Documentation](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl.html)
- [Vite Documentation](https://vitejs.dev/)
