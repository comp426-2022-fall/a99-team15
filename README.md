# Test Your Clairvoyance 

## Summary 
This project is a game in which a user guesses what the result of a 6-sided die roll will be. 

The game page has a field to enter a guess and a button to roll the die. Each time they submit a guess, 
the result of the die roll will show up. To view their accuracy score, they can click a button on this page which
brings up a popup. 

Users can view their accuracy score on the profile page, which also displays their user information and allows
them to change their username and password or delete their account. 

The leaderboard page lists the top ten users with the highest accuracy scores. 

To access the home page, which directs users to the game, profile, and leaderboard pages, users will first see a 
login page. The login page presents instructions of the game and a place to enter their username and password. 
If they don't have an account, they may click the hyperlink, which directs them to a new page
to create an account. 

## First Steps

Other steps that you will need to take after your team has accepted the assignment:

1. Choose a license and update the LICENSE file accordingly. 
2. Edit this README.md file and use it as the main location of your technical documentation with links out to information contained under `/docs/`.
3. Create a `/docs/` directory for more elaborate documentation of your API, planning notes, etc.
4. Make sure that all of your team members have access to the repository as administrators.
5. Create a project under the **Projects** tab. Use this to manage your planning. Create a To-do list, etc. Explore the tools available and user them to manage your project.
7. Assign team roles and include a listing of those roles in this README.md file or in another file under `/docs/`.
8. Then put your entire development workflow in this repository.
9. Use **Pull requests** to propose changes and incorporate them into your code from various team members. 
10. Use **Issues** to identify and track bugs and also to communicate about various aspects of the project.

## Team Mangement
Our communications were done through GroupMe, Zoom call meetings, and the GitHub teams pages. Our planning outline can be
found [here](https://github.com/comp426-2022-fall/a99-team15/blob/main/docs/planning.md).

Our roles:
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

## Setup

### Install Dependencies
Using the npm install command, install the `minimist` and `express` packages. 

In addition to these, you must install Angular. This can be done with the following command:

`npm install -g @angular/cli`

### Run Instructions

To open the website, change directories to roll-dice. Then, type the following in the command prompt:

`ng serve --open`

## API Specifications
...

## Demo Video
Our demo video can be found [here]().

## Future Extensions

In the future, we would like to update the front end by adding icons in the game, profile, and leaderboard pages which would take you back to the home page. We would like to add an animation/picture of dice when we click roll. We would also like to have a 
functional leaderboard page which shows the top ten players with the best accuracy scores. 