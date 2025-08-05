# Demo — Insurance Premium Calculator (Lua)

This project contains a simple Lua script that simulates how an insurance premium might be calculated based on several customer factors. It is designed to reflect the kind of business rules and rating logic a Junior Customer Support Engineer might implement.

## What’s Included

- insurance_rating.lua:  
    A Lua script that calculates an insurance premium based on:  
    - Customer age  
    - Accident history  
    - Coverage level (standard, premium)

- formConfig.ts 
    A TypeScript module defining the quote form fields, including:
    - Field indentifier (name)
    - display labels for users (label)
    - input type (type)
    - required flags (required)
    -conditional visibility function (visibleIf)

- runFormConfig.ts
    A script that imports the form config, applies sample user data, and logs which fields would be visible based on that data.

## How to Run 'insurance_rating.lua'

1. Make sure Lua is installed on your system. On macOS, you can install via Homebrew:

   ```bash
   brew install lua


2. Run 

    lua insurance_rating.lua


## Output 

    Calculated premium: $1500.0



## How to Run 'runFormConfig.ts'

    npm install -g ts-node typescript

    npx ts-node runFormConfig.ts

## Output

    Full Name: [text]
    Age: [number]
    Have you had any accidents?: [boolean]
    Accident Details: [text]

