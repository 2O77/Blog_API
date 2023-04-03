# blog-api
a blog api. provides creating, updating and deleting posts as a unique user. 

i build this project for develop my node.js,typescript,mongoose,jwt skills. i used typescript, mongoose and jwt for the first time on this project. 
and another dimension for me, i started to use clean architecture schema for my projects with this project. i developed my oop skills. writing
interfaces and implementing them correctly was a hard topic to understand for me. you can analyze this repo for understand these topics too.

basically every folder refers to a specific job and every file is refers to database collection. for example post-controller.ts file containts
functions and classes (in this project every file has a 1 file max but that could be much more) that are related with post collection and htttp requests. 
or user-authentication.ts file contains stuffs that are related with user collection and jwt authorizations. 

index.ts is includes everything that has relationing modules, database connecting, http routing and server connecting. you have to write your access token 
and database path for your use case on .env file. and api works. 
