## MEAN Stack

For this project, we are using the MEAN stack (MongoDB, Express.js, AngularJS, Node.js)

## Installs

npm install -g @angular/cli

cd roll-dice

ng serve --open

npm install mongodb
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
*run the 3 commands it lists after successful brew download
brew install mongodb-atlas

How to download homebrew on windows:
https://www.timesmojo.com/can-you-install-homebrew-on-windows-10/
https://brew.sh/

How to use MongoDB with Node.js:
https://www.mongodb.com/languages/mongodb-with-nodejs

Data API Endpoints with MongoDB:
https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/#std-label-data-api-endpoints

Find() method using MongoDB:
https://www.mongodb.com/docs/manual/reference/method/db.collection.find/

## Front End Splits

1. Mub will work on:
	1. login.component.html
	2. login.component.css
    3. game.component.html
	4. game.component.css
    5. leaderboard.component.html
	6. leaderboard.component.css
2. Maya will work on:
	1. home-page.component.html
	2. home-page.component.css
	3. profile.component.html
	4. profile.component.css
3. Umi will work on:
	1. create-account.component.html
	2. create-account.component.css

## Roles

1. A review manager - (Umi) someone to review pull requests and merge or reject them and manage the related discussions
2. A plan manager - (Maya) someone to keep an eye on the overall plan and keep the project tab/to-do list up to date
3. A documentation manager - (Maya) someone to keep the documentation in order and identify what is missing and needs to be documented
4. A release manager - (Umi) someone to manage the packaging and release process for your prototype package
5. A project manager - (Maya) someone keeping track of all the moving parts and make sure that everything that needs to happen is happening.
5. Roles for team members to take charge or different parts of the project. 
    1. Front end lead (Mubashshir)
    2. Back end lead (Umi)
    3. Database lead (Umi)
    4. Design lead (Maya & Mubashshir)

## Pages Outline

1. MUB Sign-In Page with button to “Create Account” if you don’t have one
    1. Username
    2. Password
    3. Sign-in button
    4. Blue hyperlink **Create Account** button?
2. Maya Home Page
    1. Three buttons directing you to profile, the game, leaderboard
    2. Maybe will have a home icon at top of each subpage to get back to home?
3. Umi Create Account Page
    1. First Name
    2. Last Name
    3. Email 
    4. Username
    5. Password
4. Maya Settings/Profile
    1. Allows to delete account
    2. Change username, password
    3. View accuracy score?
5. Mub Roll Dice Game
    1. Picture of dice? 
    2. Box to enter guess
    3. Click roll button to roll dice, changes picture?
    4. To see accuracy score, click on button which brings to a popup with updated score
    5. Include button to take you to leaderboard?
6. Leaderboard
    1. Refreshes page automatically to update leaderboard
    2. Displays username, accuracy score, and ranking