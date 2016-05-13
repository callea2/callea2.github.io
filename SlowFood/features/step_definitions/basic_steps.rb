Given(/^I am on the "([^"]*)"$/) do |page|
  visit '/'
end

Given(/^I click on the "([^"]*)" link$/) do |link|
  click_link_or_button link
end

Then(/^I should be on the registration page$/) do
  expect(current_path).to eq '/auth/login'
end



#user_log_in.feature
Given(/^a User exists$/) do
  user = User.new
  user.username = "test"
  user.password = "test"
  user.save
end

Given(/^I am on the "([^"]*)" page$/) do |page|
  visit '/auth/login'
end

Then(/^I fill in "([^"]*)" with "([^"]*)"$/) do |field, value|
  fill_in field, with: value
end

Then(/^I click on "([^"]*)"$/) do |link|
  click_link_or_button link
end

Then(/^I should be on the home page$/) do
  expect(current_path).to eq '/'
end

Then(/^I should see "([^"]*)"$/) do |text|
  expect(page).to have_text 'Successfully logged in'
end
