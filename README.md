# NextDots core mobile React Native Typescript RN 0.61.5

NextDots core mobile React Native with Typescript template React Native 0.61.5

## Create a new project from the core app

### Fetch Apollo or Redux branch

For Apollo / GraphQL branch: 
`$ git fetch origin 0.60.4-apollo && git checkout 0.60.4-apollo`

For Redux branch: 
`$ git fetch origin 0.60.4-redux && git checkout 0.60.4-redux`

This is a core app for new project, so the second step is `renaming` the project.

### Renaming project: Install React Native Rename Globally

```
$ yarn global add react-native-rename
```

### Rename the project

```
$ react-native-rename <newName>
```

## Getting started

```
$ yarn install

$ cd ios && pod install
```

## VSCode extensions

- Prettier
- TSLint
- Editorconfig

## Create the .env file

The content of each key was added in 1Password for security purposes.

There is a `.env.example` file in the root of the project, you have to rename to `.env` and add the proper values for each key.

## launch iOS

`$ react-native run-ios` or from XCode opening the workspace file

## launch Android

`$ react-native run-android` or from Android Studio

## Utils

- Execute `yarn run ts` for typescript live reload check (Compile ts project)
- Use [react-native-elements](https://react-native-training.github.io/react-native-elements/docs/overview.html)

## Libraries used

- React Native version: 0.61.5.
- TypeScript
- Redux / Redux forms with Yup
- Apollo for GraphQL
- Styled Components
- React Native Dot Env (.env file)
- React Navigation v4
- React Native Sentry

:v: **Enjoy!**
