## Dev
* `react-native init Decider;  mv Decider decider;`
* `npm install native-base --save`
* `react-native link`
* `npm install react-native-router-flux@3.38.0 --save`
* `npm install react-redux --save`
* `npm install redux-thunk --save`
* `npm install --save redux-persist --save`

### Rebuild Cache
* `react-native start --reset-cache`


## Dependencies

`npm list | grep <package>`

| Library | Version | Notes |
|---------|---------|-------|
| node    | v6.11.0 (KMBP) | `>=6.0` by NativeBase |
| npm     | 3.10.10 (KMBP) | `>=4.0` by NativeBase |
| RN CLI  | |`npm install -g react-native-cli` |
| react   | 16.0.0 ||
| react-native | 0.50.4 ||
| react-navigation | @1.0.0-beta.21 ||
| native-base |||
| react-native-router-flux | 3.38.0 ||
| redux |||
| react-redux |||
| redux-thunk |||

## NativeBase
Create custom theme

```
kyle@KMBP:~/src/github.com/kyledinh/decider-mobile$ node node_modules/native-base/ejectTheme.js
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ NativeBase theme has been copied at /Users/kyle/src/github.com/kyledinh/decider-mobile/native-base-theme │
│ Here's how to theme your app                                                                             │
│                                                                                                          │
│ import getTheme from './native-base-theme/components';                                                   │
│ export default class ThemeExample extends Component {                                                    │
│ render() {                                                                                               │
│   return (                                                                                               │
│     <StyleProvider  style={getTheme()}>                                                                  │
│       <Container>                                                                                        │
│         <Content>                                                                                        │
│           ...                                                                                            │
│         </Content>                                                                                       │
│       </Container>                                                                                       │
│     </StyleProvider>                                                                                     │
│   );                                                                                                     │
│ }                                                                                                        │
│                                                                                                          │
│ Head over to the docs (http://docs.nativebase.io/CUSTOMIZE.html#Customize)                               |
| for detailed information on customization                                                                │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────┘
kyle@KMBP:~/src/github.com/kyledinh/decider-mobile$

```

* Move `native-base-theme` to `./app/themes`
* Copy `./app/themes/variables/commonColor.js` to `deciderColor.js`
* To Use:
```
import getTheme from './app/themes/components';
import deciderColor from './app/themes/variables/deciderColor';

<StyleProvider style={getTheme(deciderColor)}>
...
</StyleProvider>

```

## Images

* `ios/<App>/Images.xcassets/AppIcon.appiconset`
* `ios/<App>/Images.xcassets/LaunchImage.appiconset`

Android Assests

| Resolution | icon.png    | screen.png         |
|------------|-------------|--------------------|
| mdpi       | 48x48       | 320x480            |
| hpdi       | 72x72       | 480x800            |
| xhdpi      | 96x96       | 720x1280           |
| xxhdpi     | 144x144     | 960x1600           |
| xxxhdpi    | 192x192     | 1280x1920          |

```
AndroidManifest.xml
     android:icon="@drawable/icons"
```


* Splash Screen - https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae
* Splash Screen - https://github.com/crazycodeboy/react-native-splash-screen
* Image Asset Tool - http://apetools.webprofusion.com/tools/imagegorilla


## References
* [NativeBase Components](https://docs.nativebase.io/Components.html#Components)
* [Icon Set](https://oblador.github.io/react-native-vector-icons/) - Ionic Icons
* Redux - https://medium.com/@mosesesan/tutorial-react-native-redux-boilerplate-4899f5c4f431
* Redux - https://github.com/react-native-training/basic-redux-react-native-boilerplate
* Redux-persist - https://www.youtube.com/watch?v=yaVs--Nhuio


* Dev Tools - https://github.com/facebook/react-devtools/tree/master/packages/react-devtools
