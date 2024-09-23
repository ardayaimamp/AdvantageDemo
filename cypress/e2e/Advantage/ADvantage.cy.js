// var should = require('chai').should();

describe("Login", () => {
    beforeEach(() => {
      cy.visit("https://advantageonlineshopping.com/#/")
      cy.wait(6000)
    })


    it("Icon Header", () => {
      cy.get('#menuUserLink').should('be.visible')
      cy.get('#shoppingCartLink').should('be.visible')
      cy.get('#helpLink').should('be.visible')

    })

    it("Image home page", () => {
      cy.get('#speakersImg').should('be.visible')
      cy.get('#speakersTxt').should('be.visible').contains('SPEAKERS')
      cy.get('#speakersLink').should('be.visible').contains('Shop Now')

      cy.get('#tabletsImg')
      cy.get('#tabletsTxt').should('be.visible').contains('TABLETS')
      cy.get('#tabletsLink').should('be.visible').contains('Shop Now')

      cy.get('#laptopsImg')
      cy.get('#laptopsTxt').should('be.visible').contains('LAPTOPS')
      cy.get('#laptopsLink').should('be.visible').contains('Shop Now')

      cy.get('#miceImg')
      cy.get('#miceImg').should('be.visible').contains('MICE')
      cy.get('#miceImg').should('be.visible').contains('Shop Now')

      cy.get('#headphonesImg')
      cy.get('#headphonesTxt').should('be.visible').contains('HEADPHONES')
      cy.get('#headphonesLink').should('be.visible').contains('Shop Now')


    })

    it("SPECIAL OFFER", () => {
      cy.get('#special_offer_items > .roboto-regular').should('be.visible').contains('SPECIAL OFFER')
      cy.get('#img-special-offer > figure > img').should('be.visible')
      cy.get('#div-special-offer > div > .roboto-light').should('be.visible').contains(' EXPLORE THE NEW DESIGN ')
      cy.get('.roboto-thin').should('be.visible').contains(' HP Pavilion 15z Touch Laptop ')
      cy.get('#div-special-offer > div > p.ng-binding').should('be.visible').contains(' Supremely thin, yet incredibly durable ')
      cy.get('#see_offer_btn').should('be.visible').contains('SEE OFFER')
  })

  it("ALL YOU WANT FROM A TABLE > Image slader", () => {
    cy.get('[ng-class="{selected : (true)}"]').click().wait(4000)
    cy.get(':nth-child(1) > .container > .roboto-light').should('be.visible').contains('ALL YOU WANT FROM A TABLET')
    cy.get(':nth-child(1) > .container > .ng-scope').should('be.visible').contains('EXPLORE NOW')
    
  })



  it("POPULAR ITEMS", () => {
    cy.get('#popular_items > .roboto-regular').should('be.visible').contains('POPULAR ITEMS')


    cy.get('[name="popular_item_16"] > figure > img').should('be.visible')
    cy.get('[name="popular_item_16"] > .center').should('be.visible').contains('HP ELITEPAD 1000 G2 TABLET')
    cy.get('#details_16').should('be.visible').contains('View Details')

    cy.get('[name="popular_item_10"] > figure > img').should('be.visible')
    cy.get('[name="popular_item_10"] > .center').should('be.visible').contains('HP ELITEBOOK FOLIO')
    cy.get('#details_10').should('be.visible').contains('View Details')

    cy.get('[name="popular_item_21"] > figure > img').should('be.visible')
    cy.get('[name="popular_item_21"] > .center').should('be.visible').contains('HP ROAR PLUS WIRELESS SPEAKER')
    cy.get('#details_21').should('be.visible').contains('View Details')
  })

  it("Contact Us", () => {
    cy.get(':nth-child(2) > .roboto-bold').should('be.visible').contains('CONTACT US')
    cy.get('[a-hint="Category"] > .inputContainer').click().contains('Select Category')
    cy.get('[a-hint="Category"] > .inputContainer > .ng-pristine').select('Speakers').should('have.value', 'object:63')
    cy.wait(6000)

    cy.get('[a-hint="Product"] > .inputContainer').click().contains('Select Product')
    cy.get('[a-hint="Product"] > .inputContainer > .ng-pristine').select('Bose SoundLink Wireless Speaker').should('have.value', 'object:124')
    cy.wait(6000)

    cy.get('.inputMargin > [a-hint="Email"] > .inputContainer > .ng-pristine').type('ardaya@gmail.com').should('have.value', 'ardaya@gmail.com')

    cy.get('.textarea > .inputContainer > .ng-pristine').type('Dummy Test').should('have.value', 'Dummy Test')

    cy.get('#send_btn').click()
    
    cy.get('#registerSuccessCover > .center > .roboto-regular').contains('Thank you for contacting Advantage support.')
    cy.wait(6000)
    

  })

})