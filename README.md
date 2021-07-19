This demo runs on **Node.js**.

The program runs on command line. It receives a filepath as parameter, search the file for matches of the file's last line search term, sanitizes it and output the results.
> The sanitization was provided based on the results examples, where it ignores everything but letters and replace underscores ("\_") by blank spaces.

## To run this program

### Run locally
To run this demo locally, you must have Node.js installed on you machine.
- clone the repository
- open a console, navigate to the repository folder and type in `node disse.js example1`.
- to run **Jest** automated test, proceed as folows:
  - in the console, install Jest modules `yarn add --dev jest` or `npm install --save-dev jest`
  - run the test `yarn test` or `npm run test`

### Run online
To run online on Gitpod:
- Open [https://gitpod.io/#https://github.com/ulyssespotiguara/disse](https://gitpod.io/#https://github.com/ulyssespotiguara/disse)
- Login with your Github account and give the necessary permissions
- Gitpod will automaticaly deploy configurated Jest test and shows its results
- To run, type in the terminal
`node disse.js example1`

<br>
There are 2 example files within this repo, named example1 and example2.
<br><br>

Have fun :)
