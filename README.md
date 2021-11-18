## Educative Test

Demo Firebase project to test its usability on Educative. The goal of this documentation is to log in to Firebase from the terminal.

## Built With

- ReactJS.
- Firebase.

## Steps to Reproduce

1. Clone repo/ Download zip file

```
git clone https://github.com/chideraao/educative-test-repo.git
cd educative-test
```

2. Install the dependencies.

```
npm install
```

3. Initialise your firebase project

- Create a new Firebase project with your Google account. Use this [Link](https://console.firebase.google.com/) to create a new project.
- Name your project. Disable Google Analytics(optional).
- On the console, add a Firebase app to your project. Select a Web app(just beside the android icon).
- Register the app and add the Firebase SDK. The config object should be pasted within the `'firebase.js'` file located in the `'src/services'` folder.

In the event of any errors while initializing the Firebase project, check out the [Firebase Documentation](https://firebase.google.com/docs/web/setup)

4. Install the Firebase CLI

```
npm install -g firebase-tools
```

5. To use the Firebase CLI, you would first need to log in to your Google account via the terminal. The normal way to go about that would be by running the command below:

```
firebase login
```

However, this would require you to provide authentication from within the same browser environment, and I anticipate there might be some limitations due to the docker environment(not so sure lol). If that's the case, I would suggest running this command:

```
firebase login --no-localhost
```

Here are some useful links that I found that might be of help while setting up the Firebase CLI:

- [Firebase CLI Documentation](https://firebase.google.com/docs/cli#sign-in-test-cli)
- [Github](https://github.com/firebase/firebase-tools#configuration-commands)
- [Stack Overflow](https://stackoverflow.com/a/43990831/11698466)

## Conclusion

Logging into Firebase via the terminal proves that every other CLI command required for the course is achievable.

**PS**: You would currently not be able to utilise the signup and login functionality on the actual application as they have not been initialised on the Firebase console.
