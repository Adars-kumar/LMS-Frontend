#LMS Frontend

### Setup instruction

1. Clone the Project

-----
    git clone https://github.com/Adars-kumar/LMS-Frontend.git
-----

2.Move into the directory

-----
    cd LMS-Frontend
-----

3. Install dependencies

-----
    npm install
-----

4. Run the server

-----
    npm run dev
-----


### How to setup Tailwind in your project [Link](https://tailwindcss.com/docs/guides/vite)

1. Install tailwind and other dependencies
-----
    npm install -D tailwindcss postcss autoprefixer
-----

2. Create the 'tailwind.config.js' file
-----
    npx tailwindcss init -p
-----

3. Add the file and extensions to tailwind config int the content property
-----
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
-----

4. Add the tailwind directives on the top of index.css file
-----
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
-----

5. Then run the server, tailwind should be integrated....


### Adding plugins and dependencies

-----
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
-----

### Adding auto import sort for eslint

1. Install the plugin
-----
    npm i -D eslint-plugin-simple-import-sort   
-----

2. Add rule in '.eslintrc.config.js '
-----
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
-----

3. Add simple-import-sort in the plugin of '.eslintrc.config.js' file
-----
    plugins: {"simple-import-sort": simpleImportSort,}
-----

4. Open settin.json in vs code configuration settings

5. Add the following line.
-----
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
-----
