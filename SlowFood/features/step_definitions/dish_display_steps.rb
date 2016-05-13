Given(/^that the following dishes exist in the system$/) do |table|
  table.hashes.each do |dish|
    Dish.create(name: dish[:name], price: dish[:price])
  end
end

Given(/^I am on the home page$/) do
  visit '/'
end

Then(/^I will see "([^"]*)"$/) do |text|
  expect(page).to have_text "No dishes available"
end

Given(/^there are no dishes in the system$/) do
  Dish.all.each do |dish|
    dish.destroy
  end
end
