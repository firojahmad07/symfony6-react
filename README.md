# Spygar Community Standard
 PIM - Product Information Management System
# Installation:
`composer install`
`yarn install`

# Database Setup
    APP_DATABASE_HOST=localhost
    APP_DATABASE_NAME=db_name
    APP_DATABASE_USER=root
    APP_DATABASE_PASSWORD=password
    APP_DATABASE_PORT=null

# Fixture data setup(locales, currencies)
`php bin/console spygar:installer:db`

# Asset Installation
`rm -rf var/cache/** && php bin/console ca:cl && php bin/console assets:install --symlink --relative && yarn run webpack`
