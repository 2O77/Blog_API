# blog-api
This project is a blog API that allows for creating, updating, and deleting posts as a unique user. I built this project to develop my skills in Node.js, TypeScript, Mongoose, and JWT. It was my first time using TypeScript, Mongoose, and JWT, and I also incorporated clean architecture schema into my projects for the first time. Developing my object-oriented programming skills was also a major focus of this project. Writing interfaces and correctly implementing them was initially challenging, but I was able to improve through this project.

Each folder in this project corresponds to a specific job, and each file corresponds to a database collection. For example, the post-controller.ts file contains functions and classes (in this project, each file contains only one class or function, but it could be more) that are related to the post collection and HTTP requests. The user-authentication.ts file contains materials related to the user collection and JWT authorizations.

The index.ts file includes everything related to modules, database connections, HTTP routing, and server connections. To use this API, you must write your access token and database path in the .env file, and then the API will work.

