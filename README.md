For the next time I wait too long to work on this repository... Here is a quick walk through on how it works:

## FILE ORGANIAZATION
BRANCH: DEVELOPMENT
  ASSETS
    DATA
    IMAGES
      FAVICON
      PORTFOLIO
      RESUME    
    JAVASCRIPT
      LIBRARIES
      SCRIPTS
        ABOUT
        NAVIGATION
        PORTFOLIO
    PAGES
    STYLESHEETS
      BASE
      COMPONENTS
      LAYOUT
      UTILS
      _index.scss
  SRC
    index.html
    index.js
    style.scss
  WEBPACK_CONFIG
    webpack.common.js
    webpack.dev.js
    webpack.prod.js
  .eslintrc.json
  .gitattributes
  .gitignore
  package-lock.json
  package.json
  postcss.config.js
  webpack.config.js
  README.md
BRANCH: MAIN
<br><br>
## DEVELOPMENT
DEVELOPMENT BUILD
`npm run dev:build`
`webpack --config webpack.config.js --env.env=dev`


DEVELOPMENT "PUSH"
`npm run dev:start`
`webpack-dev-server --open --config webpack.config.js --env.env=dev`


## PRODUCTION
PRODUCTION BUILD
`npm run prod:build`
`webpack --config webpack.config.js --env.env=prod`
<br>
PRODUCTION PUSH
`npm run prod:push`
`git add dist --force 
&& git commit -m "production" 
&& git push origin --delete main 
&& git subtree push --prefix dist origin main`
<br>
PRODUCTION EMPTY PUSH
`npm run prod:emptypush`
`git add dist --force 
&& git commit --allow-empty -m "trigger push" && git push origin --delete main 
&& git subtree push --prefix dist origin main`

## WEBPAGE BUILD ROUTINE
`git add .`
`git commit -m 'yada yada'`
`git push origin *branch*`
`git checkout development`
COMPLETE PULL REQUEST
`git branch -d *branch`
<br>
`npm run prod:build`
`npm run prod:push`

