# Code for [helloalinato.com](https://helloalinato.com)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## To run app locally:
- `npm start`
- http://localhost:3000

## Work flow!
_`develop` is our safe and stable branch with all the code._

- Delete `/build` folder from previous build before pushing to `master`
- Branch off `develop`
- Develop on `feature` branch
- Push up `feature` branch
- Open Pull Request to merge `feature` branch into `develop` (for preservation)

- On `feature` branch: `npm run build` to create /build folder
- Push up `/build` folder and static content
- Open Pull Request to merge `feature` branch `/build` folder content into `develop`

- Deploy from `master`

*!!!DO NOT PULL from `master`!!!*

*`master` branch should only have static files!*

## Deployment steps
https://github.com/gitname/react-gh-pages
https://pages.github.com/

- ??? From `master`: `npm run deploy`

