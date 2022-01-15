For the next time I wait too long to work on this repository... THE BASICS!

## ATTRIBUTIONS
FAVICON:
<a href="https://www.vecteezy.com/free-vector/broccoli-icon">Broccoli Icon Vectors by Vecteezy</a>

## FILE ORGANIAZATION
```
DEVELOPMENT
| .eslintrc.json
| .gitattributes
| .gitignore
| package-lock.json
| package.json
| postcss.config.js
| webpack.config.js
| README.md
| 
| - ASSETS
| | - DATA
| | - IMAGES
| | | - FAVICON
| | | - PORTFOLIO
| | | - RESUME
| | - JAVASCRIPT
| | - PAGES
| | - STYLESHEETS
|
| - SRC
| | index.html
| | index.js
| | style.scss
|
| - WEBPACK_CONFIG
| | webpack.common.js
| | webpack.dev.js
| | webpack.prod.js


MAIN (GH-PAGES)
| CNAME
| SYDNEYBAROVSKYresumeFULL.pdf
| bundle.js
| bundle.js.map
| favicon.ico
| hero-solo1.jpg
| hero-solo3.jpg
| index.html
| mc-homepage.png
| mhc-homepage.png
| rd-homepage.png
```

## DEVELOPMENT
DEVELOPMENT BUILD<br>
`npm run dev:build`<br>
`webpack --config webpack.config.js --env.env=dev`
<br><br>
DEVELOPMENT "PUSH"<br>
`npm run dev:start`<br>
`webpack-dev-server --open --config webpack.config.js --env.env=dev`

## PRODUCTION
PRODUCTION BUILD<br>
`npm run prod:build`<br>
`webpack --config webpack.config.js --env.env=prod`
<br><br>
PRODUCTION PUSH<br>
`npm run prod:push`<br>
`git add dist --force 
&& git commit -m "production" 
&& git push origin --delete main 
&& git subtree push --prefix dist origin main`
<br><br>
PRODUCTION EMPTY PUSH<br>
`npm run prod:emptypush`<br>
`git add dist --force 
&& git commit --allow-empty -m "trigger push" && git push origin --delete main 
&& git subtree push --prefix dist origin main`

### WEBPAGE BUILD ROUTINE
1. `git add .`<br>
2. `git commit -m 'yada yada'`<br>
3. `git push origin *branch*`<br>
4. PULL REQUEST <br>
5. `git branch -d *branch`<br>
6. `git checkout development`<br>
7. `git pull origin development`<br>
8. `npm run prod:build`<br>
9. `npm run prod:push`<br>
10. IF YOU CANNOT COMPLETE A PUSH, YOU MAY NEED AN EMPTY PUSH TO FORCE GH-PAGES TO REBUILD <br> `npm run prod:emptypush`

