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

5. Then run the server, tailwind should be integrated.