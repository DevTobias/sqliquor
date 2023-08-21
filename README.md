<div id="top" />

<br />
<div align="center">
  <a href="https://github.com/DevTobias/sqliquor">
    <img src=".github/assets/brand.svg" alt="sqliquor logo" />
  </a>

  <br />
  <br />

  <p align="center">
   SQLiqour is an ideal platform for students, developers and anyone who wants to improve their SQL skills by gaining hands-on experience in managing a virtual cocktail bar.
    <br />
    <strong>Master SQL and lead your virtual bar to success!</strong>
    <br />
    <a href="https://github.com/DevTobias/sqliquorissues/newtemplate=bug_report.md">Report an error</a>
    ·
    <a href="https://github.com/DevTobias/sqliquorissues/newtemplate=feature_request.md">Feature request</a>
  </p>

  <p align="center">
  	<a href="https://github.com/DevTobias/sqliquorblob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/DevTobias/sqliquorblob?style=for-the-badge" alt="license" />
		</a>
  </p>
</div>

<details>
  <summary>Table of contents</summary>
  <ol>
    <li><a href="#👋-getting-started">Getting Started</a></li>
    <li><a href="#🧑‍💻-development">Development</a></li>
    <li><a href="#🔓-license">License</a></li>
    <li><a href="#💌-contact">Contact</a></li>
  </ol>
</details>

## 👋 Getting Started

❗This section is still being written.

## 🧑‍💻 Development

To setup the dev environment, you need to make sure to have the following tools installed on your system first. Bun can only be installed on Linux based systems for the moment. If you are on windows, make sure you setup this repository inside of wsl2.

- [docker](https://www.docker.com/)
- [nodejs](https://nodejs.org/de) with [yarn](https://yarnpkg.com/getting-started/install)
- [bun](https://bun.sh/)
- (optional) [Taskfile](https://taskfile.dev/installation/) - If you decide to not install it, you have to type in every command you want to use from `Taskfile.yml` files manually in your command line. It is encouraged to use this utility.

You can install all the dependencies of the `backend`, `frontend` und `documentation` projects with this simple command: `task run -- install`. If you don't want to install all dependencies of all projects, navigate to the desired one and run `yarn install`.

Now we have to setup the databases. For this to work, you have to create a `backend/app/.env.development` file which includes all secrets like database passwords, api tokens and other stuff you want to keep secret. Just copy the `backend/app/.env.template` and fill the empty spaces and/or adjust the other values as you like. After this, you can now start the backend (database) containers with `task setup`.

If the database is ready, you can now move on to start the actually backend development server inside the `backend/app` directory with `bun start`.

If the server hast started successfully, you can now move on to the frontend. This should be pretty simple tho. Navigate to the `frontend` directory and type `yarn turbo dev` to start the next.js development server.

## 🔓 License

This software ist distributed under the MIT license. For more information you can have a look at the [license file](./LICENSE).

## 💌 Contact

The maintainers and original developers of the project are

- [Tobias Kärst](https://github.com/DevTobias)
- [Lucian Gerasch](https://github.com/LucianGerasch)

For all questions regarding access to the project, technologies and so on you can just send use an [email](mailto:).

<p align="right">(<a href="#top">Back on top</a>)</p>
