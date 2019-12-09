describe('Visit Sign-up Page', function() {
    function userInput() {
    var userText = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
    userText += possible.charAt(Math.floor(Math.random() * possible.length));

    return userText;
  }

    it('Visits GoReact page', function() {
      cy.visit('https://get.goreact.com/sign-up-select/')
      cy.get('[id="logo"]')
        .should('exist')
      cy.get('[alt="GoReact"]')
        .should('exist')
      
    })

    it('Signup a student account', function() {

      cy.get('[class="et_pb_button et_pb_button_1 et_pb_bg_layout_dark"]')
        .should('exist')
        .invoke('removeAttr', 'target')
        .click()

      cy.server({ delay: 10000 })
      cy.url()
        .should('eq','https://app.goreact.com/user-signup')

      cy.get('[id="signup_form_first_name"]')
        .type('Studentfname',  { force: true })
      cy.get('[id="signup_form_last_name"]')
        .type('Studentlname',  { force: true })
      
      cy.get('[id="signup_form_email"]')
        .type('studentfname@mailinator.com',  { force: true })
      cy.get('[id="signup_form_email_confirm"]')
        .type('studentfname@mailinator.com',  { force: true })
      
      cy.get('[id="signup_form_password"]')
        .type('Zaq12wsx',  { force: true })
      cy.get('[id="signup_form_password2"]')
        .type('Zaq12wsx',  { force: true })
      
      cy.get('[id="termsAgree"]')
        .click()

      cy.get('[id="freeTrialSubmitBtn"]')
        .contains('SUBMIT')
        .click()

      cy.get('[class="ico-add"] input').eq(3)
        .type('Zaq12wsx',  { force: true })
      
      cy.get('[class="btn btn-normal"]').eq(1)
        .click()
      //cy.server({ delay: 10000 })
      //cy.url()
      //  .should('eq','https://app.goreact.com/course-selection')
      
      //cy.get('[class="dialogModeContent course"]')
      //  .should('exist')

      //cy.get('[class="goreact-btn secondary-btn course-selection-form-footer-skip-btn ng-scope"]')
      //  .click()

      //cy.server({ delay: 10000 })
      //cy.url()
      //  .should('eq','https://app.goreact.com/dashboard/')
      
      //cy.get('[class="ficon-times"]')
      //  .click()
       
      })

    it('Signup Instructor account ', function() {
      var fname="";
      var instructor="";
      fname=userInput();
      instructor="Instructor" + fname;
      cy.visit('https://get.goreact.com/sign-up-select/')
      cy.get('[id="logo"]')
        .should('exist')
      cy.get('[alt="GoReact"]')
        .should('exist')

      cy.get('[class="et_pb_button et_pb_button_0 et_pb_bg_layout_dark"]')
        .should('exist')
        .invoke('removeAttr', 'target')
        .click()

      cy.server({ delay: 10000 })
      cy.url()
        .should('eq','https://app.goreact.com/free-trial')
  
      cy.get('[id="signup_form_first_name"]')
        .type(instructor,  { force: true })
      cy.get('[id="signup_form_last_name"]')
        .type('Instructorlname',  { force: true })

      cy.get('[id="signup_form_job_title"]')
        .type('Instructor',  { force: true })
      cy.get('[id="signup_form_phone_number"]')
        .type('123456789',  { force: true })
        
      cy.get('[id="signup_form_email"]')
        .type(instructor +'@mailinator.com',  { force: true })
      cy.get('[id="signup_form_email_confirm"]')
        .type(instructor +'@mailinator.com',  { force: true })
        
      cy.get('[id="signup_form_password"]')
        .type('Zaq12wsx',  { force: true })
      cy.get('[id="signup_form_password2"]')
        .type('Zaq12wsx',  { force: true })
        
      cy.get('[id="termsAgree"]')
        .click()
  
      cy.get('[id="freeTrialSubmitBtn"]')
        .contains('SUBMIT')
        .click()            

      cy.server({ delay: 10000 })
      cy.url()
        .should('eq','https://app.goreact.com/instructor-signup')

      //click first the drop down then the list item
      cy.get('[id="org_type_selector"]')
        .click()
      cy.get('[class="ng-binding"]')
        .contains('Personal Use')
        .click()

      cy.get('[id="course_type_selector"]')
        .click()
      cy.get('[class="ng-binding"]')
        .contains('Admin/Technology')
        .click()

      cy.get('[id="course_format_selector"]')
        .click()
        cy.get('[class="ng-binding"]')
        .contains('Online')
        .click()

      cy.get('[class="btn btn-normal ng-binding"]')
        .contains('SUBMIT')
        .click()

      
      })
     

      it('Checks for negative path test- student signup', function() {
        cy.visit('https://get.goreact.com/sign-up-select/')
        cy.get('[id="logo"]')
          .should('exist')
        cy.get('[alt="GoReact"]')
          .should('exist')

        cy.get('[class="et_pb_button et_pb_button_1 et_pb_bg_layout_dark"]')
          .should('exist')
          .invoke('removeAttr', 'target')
          .click()
  
        cy.server({ delay: 10000 })
        cy.url()
          .should('eq','https://app.goreact.com/user-signup')

         //student click submit on empty profile

        cy.get('[id="freeTrialSubmitBtn"]')
        .contains('SUBMIT')
        .click()

        cy.get('[id="signup_form_first_name"]').then(($input) => {
           expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        
        //instructor click submit on empty profile

        
      })
   
      it('Checks for negative path test- instructor signup', function() {
        cy.visit('https://get.goreact.com/sign-up-select/')
        cy.get('[id="logo"]')
          .should('exist')
        cy.get('[alt="GoReact"]')
          .should('exist')

        cy.get('[class="et_pb_button et_pb_button_0 et_pb_bg_layout_dark"]')
          .should('exist')
          .invoke('removeAttr', 'target')
          .click()
  
        cy.server({ delay: 10000 })
        cy.url()
          .should('eq','https://app.goreact.com/free-trial')

         //instructor click submit on empty profile

        cy.get('[id="freeTrialSubmitBtn"]')
        .contains('SUBMIT')
        .click()

        cy.get('[id="signup_form_first_name"]').then(($input) => {
           expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        

        
      })

  })