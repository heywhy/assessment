# SleepZone Report Builder On-boarding

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# 🎉🎉 **Welcome to the SleepZone Report Builder project** 🎉🎉

This documentation will help you get familiar with the SleepZone Report Builder project very fast and match up to the current progress of the team working on it. Goodluck.

SleepZone Report Builder is a custom report generation app that generates report based on the entered test result by the technician. The client currently uses a custom application to generate this report but they want more customizations which we are taking on the project (isn't that beautiful).

We are in sync with the client's Kintone account so data can be exchanged between the Kintone service and our custom report builder.

## Table Of Contents

- [SleepZone Report Builder On-boarding](#sleepzone-report-builder-on-boarding)
- [🎉🎉 **Welcome to the SleepZone Report Builder project** 🎉🎉](#-welcome-to-the-sleepzone-report-builder-project)
  - [Table Of Contents](#table-of-contents)
    - [Things to learn](#things-to-learn)
  - [Technologies](#technologies)
  - [Installation](#installation)

### Things to learn

1. [Next.js _api_ folder](https://nextjs.org/docs/api-routes/introduction)
2. [Kintone API](https://developer.kintone.io/hc/en-us/articles/212495188-Kintone-REST-API-Overview)

<!-- import notion docs -->

## Technologies

We use the following tech stack in the frontend part of the project:

- [Tailwindcss](https://tailwindcss.com/): We use Tailwindcss to style the webapp.
- [TypeScript](https://www.typescriptlang.org/): We use TypeScript in all our web dev projects in GitStart. this helps us to avoid type errors, write readable code, and maintain consistency throughout our codebase.
- [React](https://reactjs.org/): The most popular JavaScript framework in the world. We majorly use React.js to build projects because it is powerful, fast, and backed by Facebook with a large community. Also, importantly, it is still very in active support and maintained by Facebook.
- [Next.js](https://nextjs.org/): We use Next.js for server-side rendering. Next.js makes it easy to build an SSR-enabled React.js app with almost zero configuration, yet maintaining the powerful features of React.js and highly performant.
- [CSS Module](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css): We use css modules to scope styles so that the application global styles is not polluted.

## Installation

To begin working on the SleepZone project you have to git clone the repo to your local machine. Make you have the git bash installed in your machine.

```bash
# using ssh
git clone git@github.com:GitStartHQ/client-sleepzone-report.git
# using http
git clone https://github.com/GitStartHQ/client-sleepzone-report
```

I recommend you use [VS Code](https://code.visualstudio.com/) because it widely supports the use of Git and makes it very easy to use from its Source Control section.

Now, the git clone must have completed, move into the `client-sleepzone-report` directory:

```bash
cd client-sleepzone-report
```

We will install the project's dependencies, run this command:

```bash
yarn install
```

This will install the dependencies. There will be a _`node_modules`_ folder present now, it is where the dependencies are stored.

Create a `.env.local` file in the root of the directory. In the same root of the directory there is `.env.example` file, this file contains environment variables for the project. Copy the contents from the `.env.example` file and paste in the `.env.local`file. Then you should request for the right values for the env variables.

Now, run the below script command from your terminal. It is recommended you use the terminal in VS Code as it saves us the time of bringing up an external terminal. OK.

```bash
yarn dev
```

This command starts the local server. Open your fav browser and navigate to `localhost:3000` because the default port is `3000`.
