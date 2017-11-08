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
- [Get Started](https://slack-er-gdi.github.io/team-project-frontend/)
- As a user you must register for an account. Once an account is created you are able to upload files, view all files, your own files and download any file availble to you.

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
[Initial Schedule](https://github.com/SLACK-er-GDI/team-project-frontend/blob/master/Slackers.pdf)
 - **The Development Process**
 - The development process started with some rough wireframes, some user stories, and a quick planning outline. We divided development into feature groups and created a branch in Git for each group. We pushed and merged to dev often and used pull requests to review work. We worked mostly in pairs and worked on some features individually. We ran into some issues with security with our 3rd party Filestack application.
     -
 - **Problem-Solving Strategy**
 - We used the debugging facilities in the DevTools. We analyized error messages, setup breakpoints, and stepped through the code examining values of objects as we stepped through. We worked as a full team to go through the full planning process prior to starting the project and worked in pairs or more when attemping to work through harder problems we encountered.

## Current Issues to be resolved in the future
- **Future Enhancements**
- Allow uers to search by tags and other search functionality
- Add default images for file types other than images
- Organize images by date created or voting system
