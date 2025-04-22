class ExamplePage {
    url = '/';
    
    locator = {
        example: {
            text: () => cy.get('.example-text')
        }
    }

    visit() {
        cy.visit(this.url);
    }

    getExampleText() {
        return this.locator.example.text().invoke('text');
    }
}

export default new ExamplePage();