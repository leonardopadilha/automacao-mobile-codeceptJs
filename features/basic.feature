@login
Feature: Login
  Eu como usuário
  Gostaria de fazer Login na aplicação
  Para acessar o sistema

  @login_sucesso
  Scenario: Login with Success
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button
