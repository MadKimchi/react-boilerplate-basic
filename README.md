# Template

## Dependencies

You must have npm (must) and yarn (recommended) installed.

## Installation

In the project directory,

```
yarn
```

## Run

In the project directory,

```
yarn start
```

Once you run the above command it will open a browser with the url - [http://localhost:3000](http://localhost:3000)

## Build

In the project directory,

```
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

```
src
│
└───components
│   └───base-page
│   └───form-control
│   └───forms
│   │   ...
│
└───core
│   └───contexts
│   └───enums
│   └───hooks
│   │   ...
│
└───pages
│   └───login-page
│   └───not-found-page
│   └───team-page
│   │   ...
│
└───routes
```

#### components

Contains shared ui components, such as BasePage, FormControl and FormSignIn. Those components are used across the application as units of components without any business logic.

#### core

Contains essentials used through out the application for components, such as, contexts, enums, hooks, http, interfaces and services.

#### pages

Contains page components that enclose components that contain business logic specific to the pages.

#### routes

Contains routing related components as well as route config.

## State Management

The statemagement for this application is designed without use of any external library other than the new React Context API. However, RxJS is implemented to facilitate the use of Context API and communication between components.

##### RxJS implementation

RxJS is used to provide a state management stream tool (NOT MANAGEMENT but STREAM). RxJS enables Observable-Oberver pattern in this React application, which takes advantages of such pattern in the following areas specifically:

1. Communicating between components regardless of hierarchical positions
2. Passing data instead of storing data
3. Setting state only when necessary to prevent overuse of setState method
4. Reducing boilertemplate code

Among these 4 factors, the first and the second are the most beneficial aspects of RxJS implemenation in React applications.

## Auth Guard and Routing

Auth Guard is implemented through AuthService class members, which include onLogin Subject to push value to its observers. On logging in, it will trigger to show navigation but on logging out or being expired of auth token the user is pushed out to the login page.

##### Route guard implementation

Route gard is implemented with an array of route object with an extended interface with RouterProps from react-router package. This route object essential defines the following: path, component to be rendered and should require auth. If auth condition is not met, then the user is pushed out to the login page.

## Injector Service

InjectorService class was implemented to have singleton services available throughout the application. It serves as a big branch that has a set of sub-branches called services. Any component has access to the services through the global context. This is to provide a mechanism of dependency inversion into the React components since the direct dependency injection mechanism only works for Props and States.

## HTTP Client

Axios is used as a http client with abstraction layer in order to orchestra its request and response handling behaviors as well as error handling.

##### Abstraction layer

HttpCliet class is defined to have default methods with interceptors for both request and response.

##### Data services

BaseDataService class is created to provide commond methods and members for data services. Each data service requires HttpClient as their dependencies to make HTTP requests and each has its own end point along the base URL and DTOs.

## Environment variables

Not implemented yet but plan to use .env file.

## Deployment

Not implemented yet but will need templating tool to generate .env file on the fly during the deployment process.
