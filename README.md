## Team-Project-Api
## Introduction
This project provides the backend web server or a basic networking contact list
managment application. The repository for the frontend can be found through the
link provided below.
- [Frontend Repository](https://github.com/SLACK-er-GDI/team-project-frontend)
Curl test scripts can be found in the project scripts folder.
- [Test Scripts](https://github.com/SLACK-er-GDI/team-project-api/tree/master/scripts)

## Instructions
- [Backend Server hosted on Heroku](https://team-project-heroku.herokuapp.com/)
- [Get application frontend Started](https://github.com/SLACK-er-GDI/team-project-frontend)
- As a user you must register for an account. Once an account is created you
  login and can display, create, edit, and delete contacts.

## Technologies used.
- [Express](http://expressjs.com/en/api.html)
  The backend DB API was devloped with Express using the GA api template as a starting
  point.
- [MongoDB](https://www.mongodb.com/)
  None relational data store used in conjunction with Express.
- [ERD for backend DB](https://imgur.com/I5NgK1z)

## API Authentication
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out/:id`        | `users#signout`   |
| PATCH  | `/change-password/:id` | `users#changepw`  |

## API Upload Files
| Verb   | URI Pattern      | Controller#Action |
|--------|------------------|-------------------|
| POST   | `/uploads/`      | `uploads#create`  |
| GET    | `/upload/`       | `uplaods#index`   |
| GET    | `/uploads/:id`   | `uploads#show`    |
| DELETE | `/uploads/:id`   | `uploads#destroy` |
| PATCH  | `/uploads/:id`   | `uploads#update`  |

## The Devlopment Story
[Initial Schedule](https://github.com/ajackson57/aj-networking-contacts-frontend/blob/master/Schedule.pdf)
 - **The Development Process**
 - The development process started with some rough wireframes, some user
   stories, and a quick planning outline. We divided development into feature
   groups and created a branch in Git for each group. The branches for this
   repository (backend) were as follows:
     -
 - **Problem-Solving Strategy**
 - Testing and debugging of the web werver was through curl scripts and frontend
   api calls.

## Current Issues to be resolved in the future
- **Future Enhancements**
- Future enhancements may include the

## Wireframes and User Stories.
- [Front End Wire Frames](https://github.com/SLACK-er-GDI/team-project-frontend/blob/master/wireframes/network-wireframe.pdf)
- [User Stories](https://github.com/SLACK-er-GDI/team-project-frontend/blob/master/user-stories.md)
