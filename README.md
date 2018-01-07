# parcel-boilerplate
A simple project boilerplate with Parcel web app bundler.
Even though Parcel is *zero configuration, blazing fast* you need to spend a couple of minutes to configure your basic project. So I have done it to save some time.

Instructions:
1. Run ```npm install``` to install all the packages (also Parcel in case you do not have it installed globally)
2. To start a web server with hot reload just run ```parcel index.html``` in the terminal
3. If you want to watch for changes only, run ```parcel watch index.html```
4. If you are ready to build your project for production, run ```parcel build index.html```

Simple as that :)

What is included?
- Babel
- node-sass
- autoprefixer
- postcss
- posthtml-img-autosize (as an example form parcel docs)

Stylesheets are linked in ```index.js``` instead of index.html due to an issue with hot reloading css/scss files linked in html.
