import { FormPage } from "../../pageObjects/formPage";

describe("DEMO QA", () => {
    context("Form tests", () => {
        beforeEach(() => {
            FormPage.visit();
        });

        it("Fill the form test", () => {
            FormPage.firstnameField().type("Alice");
            FormPage.lastnameField().type("Johnson");
            FormPage.emailField().type("alice.johnson@example.com");
            FormPage.genderRadio().contains("Female").click();
            FormPage.phonenoField().type("9988776655");

            FormPage.dateOfBirthInput().click();
            FormPage.monthSelect().select("February");
            FormPage.yearSelect().select("1930");
            FormPage.dayClick().click();

            FormPage.subjectInput().type("History{enter}");
            FormPage.hobbiesCheckbox().contains("Sports").click();

            FormPage.imageUpload().selectFile("cypress/e2e/pictures/lebron.jpeg");

            FormPage.addressInput().type("456 Elm Street");
            FormPage.stateInput().click();
            FormPage.menu().contains("Haryana").click();

            FormPage.cityInput().click();
            FormPage.menu().contains("Karnal").click();

            FormPage.submit().click();

            FormPage.dataCheck().contains("Student Name").next().should("contain.text", "Alice Johnson");
            FormPage.dataCheck().contains("Student Email").next().should("contain.text", "alice.johnson@example.com");
            FormPage.dataCheck().contains("Gender").next().should("contain.text", "Female");
            FormPage.dataCheck().contains("Mobile").next().should("contain.text", "9988776655");
            FormPage.dataCheck().contains("Date of Birth").next().should("contain.text", "28 February,1930");
            FormPage.dataCheck().contains("Subjects").next().should("contain.text", "History");
            FormPage.dataCheck().contains("Hobbies").next().should("contain.text", "Sports");
            FormPage.dataCheck().contains("Picture").next().should("contain.text", "lebron.jpeg");
            FormPage.dataCheck().contains("Address").next().should("contain.text", "456 Elm Street");
            FormPage.dataCheck().contains("State and City").next().should("contain.text", "Haryana Karnal");
        });
    });
});
