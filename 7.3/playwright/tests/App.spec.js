const { test, expect } = require("@playwright/test");

const {email} = require('./user.js');
const {password} = require('./user.js');

test('successfulAuthorization', async ({ page }) => {

  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Email').press('Enter');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();

  await expect(page).toHaveURL('https://netology.ru/profile');
  await expect(page).toHaveTitle('Мои программы обучения');

});

test('unsuccessfulAuthorization', async ({ page }) => {

  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kate@mail.ru');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('123');
  await page.getByTestId('login-submit-btn').click();

  await expect(page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль');

});
