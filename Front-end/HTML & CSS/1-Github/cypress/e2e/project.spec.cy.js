import {
  PATH,
  formElement,
  emailInputElement,
  passwordInputElement,
  loginButtonElement,
  emailExample,
  passwordExample,
} from './constants/values';

describe('1 - Adicione no seu site um formulário para login', () => {
  beforeEach(() => {
    cy.visit(PATH);
  });

  it('Será verificado se o id do formulário é login-form', () => {
    cy.get(formElement).should('exist');
  });
});

describe('2 - Adicione um campo de texto que conterá o email', () => {
  beforeEach(() => {
    cy.visit(PATH);
  });

  it('Será verificado se o seu id deve ser email-input', () => {
    cy.get(emailInputElement).should('exist');
  });

  it('Será verificado se é possível digitar no input corretamente', () => {
    cy.get(emailInputElement).type(emailExample).should(($input) => {
      const value = $input.val();

      expect(value).to.equal(emailExample);
    });
  })
});

describe('3 - Adicione um campo de texto que conterá a senha', () => {
  beforeEach(() => {
    cy.visit(PATH);
  });

  it('Será verificado se o seu id deve ser password-input', () => {
    cy.get(passwordInputElement).should('exist');
  });

  it('Será verificado se o campo de texto possui o type de password', () => {
    cy.get(passwordInputElement).should('have.attr', 'type').and('equal', 'password');
  });

  it('Será verificado se é possível digitar no input corretamente', () => {
    cy.get(passwordInputElement).type(passwordExample).should(($input) => {
      const value = $input.val();

      expect(value).to.equal(passwordExample);
    });
  })
});

describe('4 - Adicione um botão para realizar o login', () => {
  beforeEach(() => {
    cy.visit(PATH);
  });

  it('Será verificado se o seu id deve ser login-button', () => {
    cy.get(loginButtonElement).should('exist');
  });

  it('Será verificado se o elemento possui conteúdo', () => {
    cy.get(loginButtonElement).invoke('text').should('not.be.empty');
  })
});