describe('validation basic elemts of alert and conform',()=>{
    beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')   
    })
  it('validation the alert and conform',()=>{
    //how to check next tap
    // cy.get('fieldset a#opentab').invoke('removeAttr','target').click()
    //alert option in browser
    cy.get('#alertbtn').click()
    cy.on('window:alert',(alerttxt)=>{
      expect(alerttxt).to.eq("Hello , share this practice page and share your knowledge")
      return true;
    })
    //confirm option in browser
    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(confimtxt)=>{
      expect(confimtxt).to.eq("Hello , Are you sure you want to confirm?")
      return true;
    })
    //New window
//     cy.window().then((win)=>{
//       cy.stub(win,'open').callsFake((url)=>{
//         win.location.href=url;
//       })
//     })
// cy.get('#openwindow').click()
//hide and show 
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.wait(3000)
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

  
//webtables
cy.get('table tr td:nth-child(2)').each(($cells)=>{
  if($cells.text().includes('JMETER')){
    cy.wrap($cells).then((expData)=>{
      cy.log(expData.text())
    })
  }
})
})

})

