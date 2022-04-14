# React Portfolio ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

A single-page application created using React, displaying information about myself, showcasing project work, and giving the user a means of contact.

You can see the deployed application [here!](https://fudge88.github.io/react-portfolio/)

![screenshot](./src/img/screenshot.png)

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the contact page
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Installation Instructions:

You are able to clone this repository, by clicking [here](https://github.com/fudge88/social-network-backend) and then clicking on the `code` button. Select how you would like to clone the repository.

If you have your SSH keys set up, you are able to copy the link from the drop down and paste the following into your terminal application:

```
git clone git@github.com:fudge88/react-portfolio.git
```

Then change your directory so you are now in your newly cloned project and then open the code in your chosen source-code editor.

You need to install all dependencies that are listed in the `package.json` file:

```
npm install --save
```

Check to see that the following code is in the `package.json`, this will ensure npm to 'start' the application from your entry file

```
"start": node src/index.js
```

## How to run the application:

To run the start script, use the following code in the terminal.

```
npm start
```

## Tools Used:

- React
- Material Ui
- React Smooth Scroll
- React Responsive

#### Languages:

- JavaScript

#### React:

React.js is a popular JavaScript library that is used to create graphical interfaces of web applications. Often used to create Single Page Applications, but it can also be the basis of mobile applications. Now, React.js is the most popular front-end JavaScript library for web development.

Notable features of React include components, which are are autonomous, reusable bits of code. They are used for the same use as JavaScript functions, but run in isolation and return HTML. React allows you to define components as classes or functions through properly implemented methods and inheritance. Each component has several lifecycle methods that you can override so that your code runs at a specific time in your program.

### References

[React](https://reactjs.org/)

[StackOverflow](https://stackoverflow.com/questions/)

[Material UI](https://mui.com/)

[React-Scroll](https://www.npmjs.com/package/react-scroll)

[React Responsive](https://www.npmjs.com/package/react-responsive)

## License

![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

This project is licensed under the terms of the MIT license.

## Questions

- If you have any questions about this project
- would like further information
- would like to report and issue

please contact me through the links below:

[GitHub](https://github.com/fudge88) Profile

Email: akhlaq.fahra@gmail.com
