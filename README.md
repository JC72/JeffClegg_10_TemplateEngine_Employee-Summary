# JeffClegg_10_TemplateEngine_Employee-Summary

This project was designed as a homework assignment for MSU's coding bootcamp. 

This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [License](#license)
5. [Execution](Execution)
6. [Contains](#contains)
7. [Credit](#credit)
8. [Creators](#creators)

## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_10_TemplateEngine_Employee-Summary)
! [Demo Video](https://github.com/JC72/JeffClegg_09_GoodReadMe_Generator/blob/main/Assets/video/NodejsVideo.mp4)

## Project Overview <a name="projectoverview"></a>
* Uses HTML, Jest, Node.js, JQuery, and Inquirer to create a program that prompts the user for team information and then generates a html page for viewing.


## Demo:

![](https://github.com/JC72/JeffClegg_09_GoodReadMe_Generator/blob/main/Assets/video/NodejsVideo.gif)

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

Finally, fs.writeFile command will take the generated project team html file named team.html and creates a folder called "output"  and saves it there. 

## File Structure

The following folders and what they contain are listed below:

  <div>JeffClegg_10_TemplateEngine_Employee-Summary<ul style="list-style-type:none;padding:0"><li>output<ul></ul></li><li>lib<ul></ul></li><li>templates<ul></ul></li><li>Assets<ul><li><a href="video">video</a></li><li><a href="screenshots">screenshots</a></li></ul></li><li>test<ul></ul></li><li><a href="README">README</a></li></ul></div>

## Tests

run npm run test in the command prompt and it will check the code that was written for the Employee, Engineer, Intern, and Manager javascript files in the lib folder.

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

* [credit](https://stackoverflow.com/)

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp