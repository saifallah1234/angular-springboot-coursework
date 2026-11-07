# Angular and Spring Boot coursework

Coursework from the Web Frameworks module, second year of the engineering cycle (CI2), Faculty of Sciences of Bizerte, February to April 2026.

The repository holds two separate exercises:

| Folder | What it is | Stack |
|---|---|---|
| `frontend/` | Contact manager web app | Angular 17, TypeScript, RxJS, Bootstrap 5, json-server |
| `backend/` | Product catalogue REST API | Spring Boot, Spring Web MVC, Spring Data JPA, MySQL, Lombok, Java 21 |

The two apps are not connected: the Angular app reads its data from json-server, and the API serves its own product catalogue.

## frontend: contact manager (Angular)

- Components for the contact list, contact details, editing, comments, about and home pages, with routing and a 404 page.
- Sign-in page, auth service and a route guard: every page except sign-in requires a logged-in user.
- Services that call a REST backend through `HttpClient` (list, get, create, update, delete).
- Template-driven forms bound with `ngModel`.

Run it:

```bash
cd frontend
npm install
npx json-server --watch json-server/db.json --static json-server/public --port 3000
npm start
```

Then open http://localhost:4200. The sample contacts in `json-server/db.json` were supplied with the course.

## backend: product catalogue API (Spring Boot)

- Layered structure: controller, DTO, service interface and implementation, JPA entity and repository.
- CRUD endpoints under `/api/products/` (`GET`, `POST`, `PUT /{id}`, `DELETE /{id}`).
- Global exception handling with a custom error response and a duplicate-code exception.
- CORS configuration for a browser frontend.

Run it with a local MySQL database. The connection is read from environment variables:

| Variable | Default |
|---|---|
| `DB_URL` | `jdbc:mysql://localhost:3307/gestproduct` |
| `DB_USERNAME` | `root` |
| `DB_PASSWORD` | empty |

```bash
cd backend
./mvnw spring-boot:run
```

The API listens on http://localhost:8081. Hibernate creates the tables on first run.
