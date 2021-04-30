# Expat Exchange
Do you always find yourself typing "EUR to CAD" into Google? Save a keystroke with "Expat Exchange". As a Canadian expat in the Netherlands, I know how tedious it can be to convert currencies from in EUR to CAD, with this small application, set up with a sensible default, you can save 500ms a day. But it's not just for Canadians in Europe! USD is also available for Americans. :)

Aside: this was also an experiment in component organization.

## Architecture Description

Make currency conversion calculations more convenient for expats.

### Users

Users per day are expected to be in the low tens.

### Requirements

- Convert any amount from one currency to another.
- See how the exchange rate has varied over the last 30 days.
- Mobile friendly and efficient: minimize the number of API requests to make the app as efficient as possible.

### Additional context

- API provider is not stable, and might need to be quickly switched

## Architecture characteristics

The only two architecture characteristics that require special desgin consideration for this application are:
- Localization: the app will need to support multiple currencies and currency formatting, and eventually multiple languages (for now we will only support English).
- Maintainability: It must be easy to change API providers

## Components
There is a single user type, an expat, who needs to
- select currencies
- view the exchange rate of the currencies for some amount
which can be organized in a component, "currency tracker" that has a pipeline architecture "style": currency input -> amount calculator -> currency output.

## Stories
1. [x] As an expat, I want to see what 1 dollar in CAD is in EUR
2. [x] As an expat, I want to change the dollar amount and see it updated in EUR
3. [x] As an expat, I want to change the currencies from CAD and EUR to any currency
4. [x] As an expat, I want to see the exchange rates from the last 30 days in a list
5. [x] As an expat, I want to see the trend in exchange rates in the last 30 days (i.e. in a graph)

## Improvements
- Theme!
- Extract strings to localized JSON file
- Localize currency formatting
- Define custom error codes and pass to loader
- Handle unhappy paths, right now network errors, data invalid errors are no-ops
- Display loading states