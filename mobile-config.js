App.launchScreens({
  // iOS
    'iphone_2x':	'resources/splash-640x960.png',
'iphone5':	'resources/splash-640x1136.png',
 'iphone6': 'resources/splash-750x1334.png',
'iphone6p_portrait':	'resources/splash-1242x2208.png',
'iphone6p_landscape':	'resources/splash-2208x1242.png'
   
    });
App.icons({
   'iphone': 'resources/icon-60x60.png',
  'iphone_2x': 'resources/icon-120x120.png',
  'iphone_3x': 'resources/icon-180x180.png',
  'ipad': 'resources/icon-76x76.png',
  'ipad_2x': 'resources/icon-152x152.png', 
});
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*', {
  API_KEY: 'AIzaSyCVMkSkqyzF5IvqhRJI_EiiHQi0yqzYZmI'
});
App.accessRule('*.gstatic.com/*');

