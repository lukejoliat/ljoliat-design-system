(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter((function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable}))),c.push.apply(c,d)}return c}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}Object.keys(preview_namespaceObject).forEach((function(a){var b=preview_namespaceObject[a];switch(a){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(b));case"decorators":return b.forEach((function(a){return Object(ClientApi.d)(a,!1)}));case"loaders":return b.forEach((function(a){return Object(ClientApi.e)(a,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach((function(c){_defineProperty(a,c,b[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach((function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}));return a}({},b),!1);case"argTypesEnhancers":return b.forEach((function(a){return Object(ClientApi.b)(a)}));case"argsEnhancers":return b.forEach((function(a){return Object(ClientApi.c)(a)}));case"render":return Object(ClientApi.g)(b);case"globals":case"globalTypes":var c={};return c[a]=b,Object(ClientApi.f)(c,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(a+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./packages/theme/themeProvider.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DesignSystemTheme}));var theme_ui_theme_provider_esm=__webpack_require__("./node_modules/@theme-ui/theme-provider/dist/theme-ui-theme-provider.esm.js"),theme={space:[0,4,8,16,32,64,128,256,512],fonts:{body:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',heading:"inherit",monospace:"Menlo, monospace"},fontSizes:[12,14,16,20,24,32,48,64,96],fontWeights:{body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.125},colors:{text:"#ffffff",background:"#23272f",primary:"#087ea4",secondary:"#149eca",muted:"#343a46"},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},h1:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5},h2:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:4},h3:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:3},h4:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:2},h5:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:1},h6:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:0},p:{color:"text",fontFamily:"body",fontWeight:"body",lineHeight:"body"},a:{color:"primary"},pre:{fontFamily:"monospace",overflowX:"auto",code:{color:"inherit"}},code:{fontFamily:"monospace",fontSize:"inherit"},table:{width:"100%",borderCollapse:"separate",borderSpacing:0},th:{textAlign:"left",borderBottomStyle:"solid"},td:{textAlign:"left",borderBottomStyle:"solid"},img:{maxWidth:"100%"}}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DesignSystemTheme=function(a){var b=a.children;return Object(jsx_runtime.jsx)(theme_ui_theme_provider_esm.a,{theme:theme,children:b})};DesignSystemTheme.displayName="DesignSystemTheme",DesignSystemTheme.__docgenInfo={description:"",methods:[],displayName:"DesignSystemTheme"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/theme/themeProvider.js"]={name:"DesignSystemTheme",docgenInfo:DesignSystemTheme.__docgenInfo,path:"packages/theme/themeProvider.js"})},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Button.stories.jsx":"./stories/Button.stories.jsx","./Card.stories.jsx":"./stories/Card.stories.jsx","./Input.stories.jsx":"./stories/Input.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":"./stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Button.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Tertiary",(function(){return Tertiary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var themeProvider=__webpack_require__("./packages/theme/themeProvider.js"),theme_ui_jsx_runtime_esm=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js")),_excluded=["children"];function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var StyledButton=styled("button")(typography,space,color),Button=function(a){var b=a.children,c=_objectWithoutProperties(a,_excluded);return Object(theme_ui_jsx_runtime_esm.a)(StyledButton,{"data-aid":"lukesbutton",sx:Object.assign({cursor:"pointer",color:"text",bg:"primary",border:"none",borderRadius:4,fontWeight:"bold",fontSize:1,py:1,px:2},c),children:b})};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button"};var button_button=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/button/button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"packages/button/button.jsx"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Template=(__webpack_exports__.default={title:"Example/Button",component:button_button,argTypes:{backgroundColor:{control:"color"}}},function(a){return Object(jsx_runtime.jsx)(themeProvider.a,{children:Object(jsx_runtime.jsx)(button_button,Object.assign({},a,{children:"Test"}))})});Template.displayName="Template";var Primary=Template.bind({});Primary.args={label:"Button",variant:"primary"};var Secondary=Template.bind({});Secondary.args={label:"Button",variant:"secondary"};var Tertiary=Template.bind({});Secondary.args={label:"Button",variant:"tertiary"},Primary.parameters=Object.assign({storySource:{source:"(args) => <DesignSystemTheme><Button {...args}>Test</Button></DesignSystemTheme>"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <DesignSystemTheme><Button {...args}>Test</Button></DesignSystemTheme>"}},Secondary.parameters),Tertiary.parameters=Object.assign({storySource:{source:"(args) => <DesignSystemTheme><Button {...args}>Test</Button></DesignSystemTheme>"}},Tertiary.parameters)},"./stories/Card.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var themeProvider=__webpack_require__("./packages/theme/themeProvider.js"),theme_ui_jsx_runtime_esm=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js")),_excluded=["children"];function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var StyledButton=styled("button")(typography,space,color),Button=function(a){var b=a.children,c=_objectWithoutProperties(a,_excluded);return Object(theme_ui_jsx_runtime_esm.a)(StyledButton,{"data-aid":"lukesbutton",sx:Object.assign({cursor:"pointer",color:"text",bg:"primary",border:"none",borderRadius:4,fontWeight:"bold",fontSize:1,py:1,px:2},c),children:b})};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button"};var card=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/card/card.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"packages/card/card.jsx"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Template=(__webpack_exports__.default={title:"Example/Card",component:card,argTypes:{backgroundColor:{control:"color"}}},function(a){return Object(jsx_runtime.jsx)(themeProvider.a,{children:Object(jsx_runtime.jsxs)(card,Object.assign({},a,{children:[Object(jsx_runtime.jsx)("h1",{children:"This is a card"}),Object(jsx_runtime.jsx)("p",{children:"This is the card content."})]}))})});Template.displayName="Template";var Primary=Template.bind({});Primary.args={label:"Card",variant:"primary",width:256,p:4},Primary.parameters=Object.assign({storySource:{source:"(args) => <DesignSystemTheme><Card {...args}><h1>This is a card</h1><p>This is the card content.</p></Card></DesignSystemTheme>"}},Primary.parameters)},"./stories/Input.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var themeProvider=__webpack_require__("./packages/theme/themeProvider.js"),theme_ui_jsx_runtime_esm=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js")),_excluded=["style"];function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var Input=function(a){var b=a.style,c=_objectWithoutProperties(a,_excluded);return Object(theme_ui_jsx_runtime_esm.a)("input",Object.assign({"data-aid":"lukes-input",sx:Object.assign({border:"1px solid blue"},b)},c))};Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"};var input=Input;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/input/input.jsx"]={name:"Input",docgenInfo:Input.__docgenInfo,path:"packages/input/input.jsx"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Template=(__webpack_exports__.default={title:"Example/Input",component:input,argTypes:{backgroundColor:{control:"color"}}},function(a){return Object(jsx_runtime.jsx)(themeProvider.a,{children:Object(jsx_runtime.jsx)(input,Object.assign({},a))})});Template.displayName="Template";var Primary=Template.bind({});Primary.args={label:"Input",variant:"primary",placeholder:"email address",type:"text"},Primary.parameters=Object.assign({storySource:{source:"(args) => <DesignSystemTheme><Input {...args} /></DesignSystemTheme>"}},Primary.parameters)},"./stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./stories/assets/code-brackets.svg"),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./stories/assets/colors.svg"),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./stories/assets/comments.svg"),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./stories/assets/direction.svg"),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./stories/assets/flow.svg"),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./stories/assets/plugin.svg"),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./stories/assets/repo.svg"),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./stories/assets/stackalt.svg"),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./stories/assets/code-brackets.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},"./stories/assets/colors.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},"./stories/assets/comments.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},"./stories/assets/direction.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},"./stories/assets/flow.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},"./stories/assets/plugin.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},"./stories/assets/repo.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},"./stories/assets/stackalt.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},4:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},5:function(module,exports){}},[[4,4,5]]]);