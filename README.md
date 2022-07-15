# Blog UNINASSAU Project

Sample modular project using Java Spring Boot and React JS frameworks.

## Project Structure

```
blog-uninassau
├── blog
│ ├── controller
│ ├── dto
│ ├── exception
│ ├── helper
│ ├── mapper
│ ├── model
│ ├── service
├── blog-js
│ ├── assets
│ ├── components
│ ├── helper
│ ├── service
```

## Requirements
* Java JDK 11+
* MySQL Server (or any other preffered database)
* Node JS v14+
* Postman (optional)
* Visual Studio Code (optional)

## Project Startup
* Inside `blog` directory, run `mvn spring-boot:run` to start the backend module.
* Inside `blog-js` directory, run `npm start` to start the frontend module.

## Making requests using POSTMAN
* Import `Blog_Uninassau.postman_collection.json` file in POSTMAN.
* Make requests by using each HTTP method call defined within it.
* **POST** resquest **body** example to add a new article by the URL: http://localhost:8080/blog/article
```
{
    "title": "Article #1",
    "author": "Alexandre de Souza Jr.",
    "date": "07/05/2022",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat nulla."
}
```

## References
* Access [Spring.io](https://start.spring.io/) to start your own Java project using Spring Boot framework.
* Learn how to create your React module by accessing [React Documentation](https://reactjs.org/docs/getting-started.html).
* Check [this link](https://restfulapi.net/resource-naming/) to know more about consistent and robust REST resource naming best practices.