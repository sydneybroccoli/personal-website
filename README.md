For the next time I wait too long to work on this repository... Here is a quick walk through on how it works:

## FILE ORGANIAZATION
BRANCH: DEVELOPMENT
| - ASSETS
| | - DATA
| | - IMAGES
| | | - FAVICON
| | | - PORTFOLIO
| | | - RESUME    
| | - JAVASCRIPT
| | | - LIBRARIES
| | | - SCRIPTS
| | | | -ABOUT
| | | | -NAVIGATION
| | | | -PORTFOLIO
| | - PAGES
| | - STYLESHEETS
| | | - BASE
| | | - COMPONENTS
| | | - LAYOUT
| | | - UTILS
| | | - index.scss
| - SRC
| | - index.html
| | - index.js
| | - style.scss
| - WEBPACK_CONFIG
| | - webpack.common.js
| | - webpack.dev.js
| | - webpack.prod.js
| - .eslintrc.json
| - .gitattributes
| - .gitignore
| - package-lock.json
| - package.json
| - postcss.config.js
| - webpack.config.js
| - README.md
<br>
BRANCH: MAIN
| - CNAME
| - SYDNEYBAROVSKYresumeFULL.pdf
| - bundle.js
| - bundle.js.map
| - favicon.ico
| - hero-solo1.jpg
| - hero-solo3.jpg
| - index.html
| - mc-homepage.png
| - mhc-homepage.png
| - rd-homepage.png
<br><br>
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
`npm run prod:build`
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
`git add .`<br>
`git commit -m 'yada yada'`<br>
`git push origin *branch*`<br>
<br>
COMPLETE PULL REQUEST
<br>
<br>
`git branch -d *branch`<br>
`git checkout development`<br>
`git pull origin development`<br>
<br>
`npm run prod:build`<br>
`npm run prod:push`<br>

