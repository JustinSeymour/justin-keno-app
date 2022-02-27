# Justin Keno App

This a simple react native application to fulfull the requirements of the Keno App test provided by Amelco.

<br>

## Environment requirements

<br>

In order to run this aplication locally you need to ensure that you have Node version 16.x installed on your machine.

<br>

If you have you have `nvm` installed on your machined you can verify by:

````bash
$ nvm ls
````

To install the correct version of node you can run:

````bash
$ nvm install v16.13.0
````
Then you can set the version of node to v16.13.0 using:

````bash
$ nvm use v16.13.0
````

<br>

## Running the Application

<br>

### Step 1 - Install dependencies

<br>

This application makes use of `Expo`. If you don't have expo installed, you can run `--legacy-peer-deps`, to ensure it get's installed with the standard `npm install`.

<br>

````bash
$ npm install --legacy-peer-deps
````

<br>

You will be prompted to install the expo client globally, and you can proceed with `y` or `n` depending on your environment requirements.

<br>

### Step 2 - Start the app

<br>

````bash
$ npm start
````

Once the command has successfully completed you can visit the expo dev tools by visiting the specified localhost address in the terminal output.
