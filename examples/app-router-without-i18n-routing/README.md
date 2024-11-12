# app-router-without-i18n-routing (Cookie value)

An example that showcases how an app can provide a locale in `i18n.ts` to `next-intl` in an App Router setup ([without i18n routing setup](https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing)).

This app uses Server Actions in two places:

1. The locale is managed in a cookie that can be updated via `setUserLocale` in [`src/services/locale.ts`](./src/services/locale.ts).
2. The login is handled via an action that uses [`zod`](https://zod.dev/) to provide validation and returns localized error messages right from the server.

## Deploy your own

By deploying to [Vercel](https://vercel.com), you can check out the example in action. Note that you'll be prompted to create a new GitHub repository as part of this, allowing you to make subsequent changes.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amannn/next-intl/tree/main/examples/example-app-router-without-i18n-routing)

## Overview

This is a starter template using the following stack:

|              |                                                             |
| ------------ | ----------------------------------------------------------- |
| Framework    | [Next.js (App Router)](https://nextjs.org)                  |
| Language     | [TypeScript](https://www.typescriptlang.org)                |
| Translations | [next-intl](https://next-intl-docs.vercel)                  |
| Deployment   | [Vercel](https://vercel.com/docs/concepts/next.js/overview) |
| Styling      | [Tailwind CSS](https://tailwindcss.com)                     |
| Components   | [@radix-ui](https://www.radix-ui.com/)                      |
| Icons        | [@heroicons/react](https://heroicons.com/)                  |
| Formatting   | [Prettier](https://prettier.io)                             |

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level, and more.

## Getting Started

During the deployment, Vercel will prompt you to create a new Postgres database. This will add the necessary environment variables to your project.

Recomended use `bun` or `pnpm` or `npm`:

```bash
bun install
```

or

```bash
pnpm install
```

or

```bash
npm install
```

Finally, run the following commands to start the development server:

```bash
bun dev
```

You should now be able to access the application at http://localhost:3000.
