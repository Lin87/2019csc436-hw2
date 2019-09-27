# Homework 2

Ethan Lin  
CSC436 Web Applications - Autumn 2019  
https://github.com/Lin87/2019csc436-hw2

## Instruction
`http-server dist/mydist/`

### Dev Notes:
* I do realize that project/app created with `ng new` is actually creating a git repository. I know it is redundant to create a git repository to version control another git repository (the project folder). I did on purpose, so that I might add files that are not related to the app development. In an actual application, I would not do this.
* I know it is not required or extra credit, but I added Twitter Bootstrap framework and applied the its styles.
* For homework instruction #2, I declared a `is-liked` class selector with the `background-color` property in the my-button.component.css file, but I did not use it. Instead, I used Twitter Bootstrap version of the green button (`btn-success`) after the "Liked!" button is clicked.
* For the message timestamp, I did not used hardcoded date and time. I used `Date.now()` and did some math calculation to simulate the message was posted at different time from oldest to latest.
* For the extra credit, I did not had the constructor invoke a member function, because it is only two lines of code, and this is a very small application.