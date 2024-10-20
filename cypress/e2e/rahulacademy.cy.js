describe('Web elements handling',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Basic Elements',()=>{

        //RADIO BUTTON
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[type="radio"]').check('radio2').should('be.checked')
        //cy.get('[value="radio3"]').check().should('be.checked')

        //CHECKBOX ===selecting multiple checkbox by providing value option using Array
        cy.get('fieldset input[type="checkbox"]').check(['option1','option3']).should('be.checked')

        //STATIC DROPDOWN
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        //DYNAMIC DROPDOWN
        cy.get('input#autocomplete').type('canada')
        cy.get('li.ui-menu-item div',{timeout:15000}).each(($country)=>{
            if($country.text().includes('Canada')){                     //u can user strict operator as well
                cy.wrap($country).click({force:true})
            }

            
        //NEW WINDOW HANDLE IN SAME WEBPAGE
/*        cy.window().then((win)=>{
            cy.stub(win,'open').callsFake((url)=>{
                win.location.href=url;
            })
        })
        cy.get('#openwindow').click()
        */
        })
        
        // HIDE AND SHOW 
        cy.get('[class="inputs displayed-class"]').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.wait(5000)
        cy.get('[class="inputs displayed-class"]').should('not.be.visible')

        //WEBTABLE==> Need Clarify
/*
        cy.get('table tbody tr:nth-child(6) td:nth-child(2)').eq(0).each(($cells)=>{
            if($cells.text().includes('JMETER')){
                cy.wrap($cells).then((expdata)=>{
                    cy.log(expdata.text())
                })
            }
        })
        */

        // WEB TABLE PRACTICE

        cy.get('table tbody tr td').each(($eachcell)=>{
            if($eachcell.text().includes('JMETER'))
            {
                cy.wrap($eachcell).then((expdata)=>{
                    cy.log(expdata.text())
                })
            }

        })

        //NEW TAB
        cy.get('fieldset #opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.get('a[href="https://www.qaclickacademy.com/blog"]').click()
            Cypress._.times(2,()=>{
                cy.go('back')
            })
        })

    })

    it.skip ('DRAG AND DROP',()=>{
        cy.visit('https://demo.automationtesting.in/Dynamic.html')
        cy.get('#mongo').drag('#droparea').then((drop)=>{
            assert.isTrue(drop)
        })

       /* cy.get('#mongo') // Select the menu item
        .trigger('mouseover'); // Trigger the hover

        cy.get('#droparea') // Select the dropdown that should appear
        .should('be.visible'); // Assert that the dropdown is visible
*/

  

    })

})