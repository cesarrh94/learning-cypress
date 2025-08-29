declare namespace Cypress {
    interface Chainable {
        /**
         * Command to open Home page of application
         */
        openHomePage(): Chainable<void>
    }
}