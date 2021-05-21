# Fitness Tracker

A health and wellness application that tracks daily workouts and uses a Mongo database.

## Description

This full-stack application utilizes back-end technologies such as Node.js, Express.js, Mongoose, and a Mongo database. Users can create workouts with multiple exercises, and view their progress on their dashboard (the stats page). Tracking workouts can help identify areas of success and improvement, which is valuable for those seeking to meet their fitness goals.

I learned a lot about the differences between MySQL and NoSQL databases by creating this application. My initial idea to create a separate model for each type of exercise (cardio and resistance) would have made sense in a relational database, but it proved to be difficult to work with later on. By combining all exercises into one model, I was able to successfully retrieve and modify data as needed.

It was also interesting to learn more about the .reduce() method in JavaScript; it is definitely an efficient way to sum up values in an array. I also enjoyed becoming more comfortable with using forEach and .map to avoid using a lot of for loops in the application.

I came across a few challenges with making sure the back-end code was connected correctly with the front-end code, as well as several errors that I was able to successfully troubleshoot. It was interesting to learn more about the syntax and order of code necessary to make the application run as expected.

A few ideas for future development include:

- Adding delete functionality (i.e. deleting an exercise/workout)
- Creating additional stats (i.e. most common workouts, monthly stats)
- Creating options to set goals, then track workout stats in comparison to the goal stats
- Creating log in/log out functionality so that multiple users can use the app

## Technologies Used

- HTML5
- CSS3
- Semantic UI
- JavaScript
- Moment.js
- Node.js
- Express.js
- NoSQL/MongoDB
- Mongoose

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
            
## Installation

The application can be viewed live on Heroku here:

For this application to run correctly on your local machine, run ```npm init -y ``` in the working directory of your choice. Next, install the relevant dependencies by running ```npm i```. Alternatively, you can install the dependencies one at a time. Please note that it may take a few minutes for all dependencies to download on your local machine.

You will need to make sure that the command ```mongod``` is running on your computer, whether that be in a separate Terminal window or if you have chosen the option to allow Mongo to run on your local machine at all times.

Optional: run the command ```npm run seed``` to seed data to the database.

Run ```npm start``` to start the application. This application runs locally at port 3001.

A view of the home page:

<!-- ![homepage](assets/homepage-screenshot-full.png) -->

An view of adding an exercise/workout:

A view of the dashboard:

## Usage

This application is intended to track simple workouts for one user.

## License

This project has not yet been licensed, and thus, standard copyright laws apply.
            
## Contributing

Valerie Russell is the sole contributor to this project. Starter code was provided by the MSU Coding Bootcamp/Trilogy Education Services.
            
## Tests

There are currently no tests written for this project.
            
## Questions

If you have any questions about this application my GitHub username is vruss14 and you can view my GitHub profile at https://github.com/vruss14.

If you have additional questions, feel free to reach out to me at vruss14@gmail.com.
