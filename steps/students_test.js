Feature('Students');
const { I, login_page, home_page } = inject();
//import { code } from "../Utils/code.js";
//import { name } from "../Utils/name.js";
const code = require("../Utils/code");
const name = require("../Utils/name");

Scenario('Add student with success', () => {

    let myName = name.getName();
    let myCode = code.getCode();

    login_page.doLogin('teste@teste.com', '123456');
    home_page.registerStudent(myCode, myName);
    home_page.searchStudent(myName, myCode);
});

