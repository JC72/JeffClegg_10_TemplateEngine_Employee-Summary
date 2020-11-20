# JeffClegg_10_TemplateEngine_Employee-Summary

This project was designed as a homework assignment for MSU's coding bootcamp. 

This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [File Structure](#filestructure)
5. [Tests](#tests)
6. [License](#license)
7. [Execution](Execution)
8. [Contains](#contains)
9. [Credit](#credit)
10. [Creators](#creators)

## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_10_TemplateEngine_Employee-Summary)
* [Demo Video](https://drive.google.com/file/d/1mkZOLS0ydBmg6XvwXkJLPno20YCT4KyL/view)

## Project Overview <a name="projectoverview"></a>
* Uses HTML, Jest, Node.js, JQuery, and Inquirer to create a program that prompts the user for team information and then generates a html page for viewing.


## Demo:

![](https://github.com/JC72/JeffClegg_10_TemplateEngine_Employee-Summary/blob/main/Assets/video/NodejsVideo.gif)

Once node index.js is run, the application will ask the user for the number of employees in the team.

Then it will ask the user a series of questions about each individual team member:

* It asks for the team member's Name
* then for the team member's ID
* then for the team member's Email
* then for the team member's Phone Number
* then for the team member's Role
* finally based on the answer the Role, it asks the user for the info for:

    * If for Manager - "what is the office number?"
    * If for Engineer - "what is their github id?"
    * If for Manager - "where do they attend school?"

The application then takes the user responses and generates an html page that shows each team members information in their own individual cards on the page.

![HTML Page](https://github.com/JC72/JeffClegg_10_TemplateEngine_Employee-Summary/blob/main/Assets/screenshots/teamhtml.png)

Finally, fs.writeFile command will take the generated project team html file named team.html and creates a folder called "output"  and saves it there.

![HTML Creation](https://github.com/JC72/JeffClegg_10_TemplateEngine_Employee-Summary/blob/main/Assets/screenshots/htmlcreation.png)

## File Structure <a name="filestructure"></a>

The following folders and what they contain are listed below:

```bash
  |-- JeffClegg_10_TemplateEngine_Employee-Summary
    |-- .gitignore
    |-- app.js
    |-- LICENSE
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- Assets
    |   |-- screenshots
    |   |   |-- htmlcreation.png
    |   |   |-- teamhtml.png
    |   |-- video
    |       |-- NodejsVideo.gif
    |       |-- NodejsVideo.mp4
    |-- lib
    |   |-- Employee.js
    |   |-- Engineer.js
    |   |-- htmlRenderer.js
    |   |-- Intern.js
    |   |-- Manager.js
    |   |-- teamInfo.js
    |-- output
    |   |-- team.html
    |-- templates
    |   |-- engineer.html
    |   |-- intern.html
    |   |-- main.html
    |   |-- manager.html
    |-- test
        |-- Employee.test.js
        |-- Engineer.test.js
        |-- Intern.test.js
        |-- Manager.test.js
```

## Tests

run npm run test in the command prompt and it will check the code that was written for the Employee, Engineer, Intern, and Manager javascript files in the lib folder.

TestResults:

![Test Results](https://github.com/JC72/JeffClegg_10_TemplateEngine_Employee-Summary/blob/main/Assets/screenshots/testResults.png)

## License

This project is licensed under the MIT License License

![Badge for GitHub repo license](https://img.shields.io/github/license/JC72/JeffClegg_10_TemplateEngine_Employee-Summary?style=flat&logo=appveyor)

## Execution
### To Execute File:
> Download Node.js, then clone the repo to your local machine. Next go to the repo directory in the command prompt and run npm install then run node app.js

### Contains:

* Five HTML files
    * engineer.html
    * intern.html
    * main.html
    * manager.html
    * team.html (generated and is in output folder

* Four Test javascript files
    * Employee.test.js 
    * Engineer.test.js
    * Intern.test.js
    * Manager.test.js

* Seven javascript files
    * Employee.js 
    * Engineer.js
    * htmlRenderer.js
    * Intern.js
    * Manager.js
    * teaminfo.js
        
* Package.json
    * Contains:
        * inquirer
        * jest


## Credit

* Would like to thank stackoverflow for helping me find fixes for some of my conflicts.

* [Stack Overflow](https://stackoverflow.com/)

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp