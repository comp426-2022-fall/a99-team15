For this project, we are using the MEAN stack (MongoDB, Express.js, AngularJS, Node.js)

npm install -g @angular/cli
cd roll-dice
ng serve --open

npm install mongodb
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
*run the 3 commands it lists after successful brew download
brew install mongodb-atlas

Need to link this in your head for css to work:
****change the style.css to whatever css file name yours is****
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

  <link rel="stylesheet" type="text/css" href="login.component.css">

Remember to change href name

Mub will work on:
	-login.component.html
	-login.component.css
    -game.component.html
	-game.component.css
    -leaderboard.component.html
	-leaderboard.component.css
Maya will work on:
	-home-page.component.html
	-home-page.component.css
	-profile.component.html
	-profile.component.css
Umi will work on:
	-create-account.component.html
	-create-account.component.css

Roles:
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


1. MUB Sign-In Page with button to “Create Account” if you don’t have one
    1. Username
    2. Password
    3. Sign-in button
    4. Blue hyperlink **Create Account** button
2. Maya Home Page
    1. Three buttons directing you to settings, the game, leaderboard
    2. Will have a home icon at top of each subpage to get back to home
3. Umi Create Account Page
    1. First Name
    2. Last Name
    3. Email 
    4. Username
    5. Password
4. Settings/Profile
    1. Allows to delete account
    2. Change username, password, email
    3. View accuracy and leaderboard ranking
5. Roll Dice Game
    1. Picture of dice 
    2. Box to enter guess
    3. Click roll button to roll dice, changes picture
    4. “Spot on!” Or “better luck next time” w/ updated accuracy
    5. Include button to take you to leaderboard
6. Leaderboard
    1. Refreshes page automatically to update leaderboard
    2. Displays username, accuracy score, and ranking




How to download homebrew on windows:
https://www.timesmojo.com/can-you-install-homebrew-on-windows-10/
https://brew.sh/

How to use MongoDB with Node.js:
https://www.mongodb.com/languages/mongodb-with-nodejs

Data API Endpoints with MongoDB:
https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/#std-label-data-api-endpoints

Find() method using MongoDB:
https://www.mongodb.com/docs/manual/reference/method/db.collection.find/


