# To the Team
Hi all, thank you for the opportunity to work on this project!
The technologies used were Javascript, React, and SCSS.

For the project, I treated it as a real appication and tried to think ahead. The tree, paths and runes were all seperated into individual components so that they would be easy to re-use for future endeavors.

I utilized a runesData JSON object that had each rune's information, with the intent of treating it like a response from a API call. If additional rune branches were to be displayed, the 'back-end team' would simply need to add another branch with its runes to the JSON.

For an additional feature, I focused on adding readability and clarity for desktop users. I created a tooltip that displays the name of the rune after hovering over it for 1.5 seconds. I thought of the idea after not being quite sure what the fifth rune was. I labelled it Skiing as a best guess.

## Installation and Usage
Clone the project to your local machine:
```sh
git clone https://github.com/richiejiang9/front-end-developer-challenge.git
```

Then open up the project folder in a command line or your preferred compiler or code editor.
Install the necessary packages:
```sh
$ npm install
```
Run:
```sh
$ npm start
```
Open http://localhost:3000 to view it in the browser.


# Front-End Developer Challenge
In this repo you will find a mock-up and all the necessary assets (in a separate folder). The design is of a tool for a fictitious game called “TitanStar Legends”, and will not be repurposed or otherwise utilized by D&D Beyond – it is only a coding challenge.


Below are specific requirements we have which cannot be adequately expressed through the mock-up. This is not a timed assignment, but it should probably take a couple of hours. When you're done, submit a link to your test's Github repository. We ask that you have your assessment completed and returned within 7 days of receiving it. Good luck!

If you feel that you have a personal project that closely resembles this project, send us the repo and we’ll evaluate that project instead. Only your contributions will be evaluated and the project must demonstrate the following competencies with:
- Making an app mobile-friendly/responsive
- Creating and utilizing modern styling
- Creating a stateful JS application

## Assessment expectations

Code reviewers will be directed to pay special attention to the following:

- Styles of submission match the provided mock
- All functionality defined above is present in the submission
- Code organisation and maintainability
- If a JS framework is used, are that libraries best practices followed
- Any novel, or additional features beyond the given scope
- You may utilize SCSS/LESS/CSS Modules/CSS-in-JS to create necessary styles, but please avoid utilizing any frameworks or libraries that are already styled. (You may utilize a reset or normalize file if you would like)

## Rune Mastery Loadout Talent Calculator 9000
Players of TitanStar Legends can spend talent points that they’ve collected on runes within a tree. We need to write a js application that simulates the rune tree within the game so players can replicate their in-game loadouts to share with the TitanStar Legends community.

![Example](assets/example.png)

- Left click to add points.
- Right click to remove points.
- The user may only use up to 6 points.
- Each item only accounts for one point.
- Displays current point total
- The user must select the items in order.
    - For example: The user may not put a point in the cake without first having put points in the chevrons and the silverware (in that order).
