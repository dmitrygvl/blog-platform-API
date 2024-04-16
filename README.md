<div align="center">
  <h1><code>blog platform API</code></h1>

<strong>This is the server of a fullstack blog-platform-app</strong>
<br/>
<strong>**[blog-platform-client is here](https://github.com/dmitrygvl/blog-platform-client)**</strong>

  <p>
  <a href=""><img src="https://img.shields.io/azure-devops/build/rustwasm/gloo/6.svg?style=flat-square" alt="Build Status" /></a>
    <img alt="Badge" src="https://github.com/dmitrygvl/gameOfLife/actions/workflows/sanity-check.yml/badge.svg" />
  </p>

_**[Deployed here](http://158.160.161.140/)**_

## </div>

## Table of Contents

- [About](#about)
  - [Built with](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [License](#license)

## About <a name="about"></a>

This is a API created using node.js and express. [Client app is here](https://github.com/dmitrygvl/blog-platform-client).

- Prisma ORM with MongoDB.
- Routes: user, posts, comments, likes, follow.
- Controllers for this routes.
- JWT authentication.
- Generating an avatar when creating a new account using the jdenticon library.
- Dockerfile configuration.
- Docker-compose configuration: express-app, database and client-app containers.

### Built with <a name="built-with"></a>

<p align="center"><a href="https://nodejs.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="node.js" width="60" height="60"/> </a> <a href="https://expressjs.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" width="60" height="60"/> </a> <a href="https://www.prisma.io/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" alt="prisma" width="60" height="60"/> </a> <a href="https://www.mongodb.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="60" height="60"/> </a> <a href="https://www.docker.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="docker" width="60" height="60"/> </a> <a href="https://www.docker.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/docker/compose/main/logo.png" alt="docker-compose" width="60" height="60"/> </a>
</p>

## Getting started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

:warning: Before installing the project latest version of **npm** should be installed.

```
npm install -g npm@latest
```

:warning: You will also need Docker. It can be installed from the [official Docker website](https://www.docker.com/products/docker-desktop/).

### Installing <a name="installing"></a>

1. Clone the repo with API:

```
git clone https://github.com/dmitrygvl/blog-platform-API.git
```

2. Clone the repo with client app:

```
git clone https://github.com/dmitrygvl/blog-platform-client.git
```

3. Open a terminal (or command line) and go to the root directory of the server:

```
cd blog-platform-API
```

4. Rename the .env.local file to .env:

```
mv .env.sample .env
```

5. Rename the env.local file to env:

```
mv .env.sample .env
```

6. Set your secret key in the env file. it can be any string:

```
SECRET_KEY='YOUR_SECRET_KEY'
```

7. Run the docker build command. The blog-platform-API and blog-platform-client folders must be in the same directory:

```
docker compose up
```

8. Open your browser and go to http://localhost:80 to see the running project.

## License <a name="license"></a>

[![MIT License][license-shield]][license-url]

[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
