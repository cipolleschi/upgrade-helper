(this["webpackJsonpupgrade-helper"]=this["webpackJsonpupgrade-helper"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.57 includes 599 commits by 73 different contributors, it has improvements to Accessibility APIs, Babel 7 stable support and more.",links:[{title:"[External] Tutorial on upgrading to React Native 0.57",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.57/"}]}}},128:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.58 is the first release of 2019, it includes work for modernizing and strengthening flow types for core components and  numerous crash fixes and resolutions for unexpected behaviors.",links:[{title:"[External] Tutorial on upgrading to React Native 0.58",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.58/"}]}}},129:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.59 includes React Hooks, performance gains on Android and lots of cool stuff.",links:[{title:"Official blog post about the major changes on React Native 0.59",url:"https://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059"},{title:"[External] Tutorial on upgrading to React Native 0.59",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.59/"}]}}},130:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(2);t.default={usefulContent:{description:"React Native 0.60 includes Cocoapods integration by default, AndroidX support, auto-linking libraries, a brand new Start screen and more.",links:[{title:"Official blog post about the major changes on React Native 0.60",url:"https://facebook.github.io/react-native/blog/2019/07/03/version-60"},{title:"[External] Tutorial on upgrading to React Native 0.60",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.60/"}]},comments:[{fileName:"ios/Podfile",lineNumber:4,lineChangeType:"add",content:Object(a.c)(o.Fragment,null,"All these libraries below have been removed from the Xcode project file and now live in the Podfile. Cocoapods handles the linking now. Here you can add more libraries with native modules.")},{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:9,lineChangeType:"neutral",content:Object(a.c)(o.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-support/issues/14) for an explanation and some help with upgrading this file.")}]}},131:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.61 includes Fast Refresh and more.",links:[{title:"Official blog post about the major changes on React Native 0.61",url:"https://facebook.github.io/react-native/blog/2019/09/18/version-0.61"},{title:"[External] Tutorial on upgrading to React Native 0.61",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.61/"}]}}},132:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(2);t.default={usefulContent:{description:"React Native 0.62 includes built-in integration with Flipper.",links:[{title:"Official blog post about the major changes on React Native 0.62",url:"https://reactnative.dev/blog/2020/03/26/version-0.62"},{title:"[External] Tutorial on upgrading to React Native 0.62",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.62/"},{title:"[iOS] Tutorial on upgrading Xcode-related files to React Native 0.62",url:"https://github.com/react-native-community/upgrade-helper/issues/191"}]},comments:[{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:19,lineChangeType:"add",content:Object(a.c)(o.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-support/issues/13) for an explanation and some help with upgrading this file.")},{fileName:"android/app/build.gradle",lineNumber:81,lineChangeType:"neutral",content:Object(a.c)(o.Fragment,null,"If you are using Hermes Engine and ProGuard, make sure to update the rules in `proguard-rules.pro` to what is specified in the [documentation](https://reactnative.dev/docs/hermes) for `0.62`.")}]}},173:function(e){e.exports=JSON.parse('{"a":"https://react-native-community.github.io/upgrade-helper"}')},174:function(e,t,n){e.exports=n.p+"static/media/logo.74ebf3f4.svg"},186:function(e,t,n){e.exports=n(334)},191:function(e,t,n){},228:function(e,t,n){var o={"./":62,"./0.57":127,"./0.57.js":127,"./0.58":128,"./0.58.js":128,"./0.59":129,"./0.59.js":129,"./0.60":130,"./0.60.js":130,"./0.61":131,"./0.61.js":131,"./0.62":132,"./0.62.js":132,"./__mocks__":68,"./__mocks__/":68,"./__mocks__/index":68,"./__mocks__/index.js":68,"./index":62,"./index.js":62};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=228},334:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(13),r=n.n(i),c=(n(191),n(56)),l=n(11),s=n(15),u=n(4),p=n(336),d=n(151),f=n(120),b=n(59),h=n.n(b),g=n(79),m=n(335),j=n(16),v=n.n(j),O=n(152),y=n.n(O),C=n(62),x="react-native-community/rn-diff-purge",w="https://raw.githubusercontent.com/".concat(x,"/master/RELEASES"),V=function(e){var t=e.fromVersion,n=e.toVersion;return"https://raw.githubusercontent.com/".concat(x,"/diffs/diffs/").concat(t,"..").concat(n,".diff")},k=function(e){var t=e.version,n=e.path;return"https://github.com/".concat(x,"/raw/release/").concat(t,"/").concat(n)},S=function(e,t){return e.replace(new RegExp("".concat(t||"RnDiffApp","/")),"")},N=function(e,t){return t?e.replace(new RegExp("RnDiffApp","g"),t).replace(new RegExp("RnDiffApp".toLowerCase(),"g"),t.toLowerCase()):e},P=function(e){var t=e.fromVersion,n=e.toVersion,o=v.a.valid(v.a.coerce(n));return C.default.filter((function(e){var n=e.version,a=v.a.coerce(n);return-1!==v.a.compare(o,a)&&![0,-1].includes(v.a.compare(a,t))}))},D=function(e){var t=e.version;return"".concat("https://github.com/react-native-community/releases/blob/master/CHANGELOG.md","#v").concat(t.replace(".",""),"0")},T="Show latest release candidates",R=n(10),z=n(337),E=n(2);var A=z.a.Option,_=Object(u.a)("div",{target:"e8azqbf0"})({name:"8atqhb",styles:"width:100%;"}),q=Object(u.a)(z.a,{target:"e8azqbf1"})({name:"8atqhb",styles:"width:100%;"}),F=function(e){var t=e.title,n=e.options,o=Object(s.a)(e,["title","options"]);return Object(E.c)(_,null,Object(E.c)("h4",null,t),Object(E.c)(q,Object(R.a)({size:"large"},o),n.map((function(e){return Object(E.c)(A,{key:e,value:e},e)}))))},I=n(121);var L=Object(u.a)("div",{target:"e8ia1jb0"})({name:"1shcrr",styles:"display:flex;justify-content:center;height:auto;overflow:hidden;margin-top:25px;"}),Y=Object(u.a)(I.a,{target:"e8ia1jb1"})({name:"1fe9jde",styles:"border-radius:3px;"}),M=a.a.forwardRef((function(e,t){var n=e.localFromVersion,o=e.localToVersion,a=e.onShowDiff,i=Object(s.a)(e,["localFromVersion","localToVersion","onShowDiff"]);return Object(E.c)(L,null,Object(E.c)(Y,Object(R.a)({},i,{ref:t,type:"primary",size:"large",onClick:function(){return a({fromVersion:n,toVersion:o})}}),"Show me how to upgrade!"))}));var U=Object(u.a)("div",{target:"e1kwjzpc0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"}),B=Object(u.a)(F,{target:"e1kwjzpc1"})({name:"uux7qa",styles:"padding-right:5px;"}),H=Object(u.a)((function(e){var t=e.popover,n=Object(s.a)(e,["popover"]);return t?a.a.cloneElement(t,{children:Object(E.c)(F,n)}):Object(E.c)(F,n)}),{target:"e1kwjzpc2"})({name:"1sugwtq",styles:"padding-left:5px;"}),K=function(e){var t=e.version,n=e.versionToCompare;return["prerelease","prepatch",null].includes(v.a.diff(t,n))},X=function(e){var t=e.releasedVersions,n=e.toVersion,o=e.latestVersion,a=e.showReleaseCandidates,i=null!==v.a.prerelease(n),r=null!==v.a.prerelease(o);return t.filter((function(e){return a&&function(e){var t=e.version,n=e.latestVersion;return v.a.prerelease(t)&&K({version:n,versionToCompare:t})}({version:e,latestVersion:o})||null===v.a.prerelease(e)||i&&K({version:n,versionToCompare:e})||r&&K({version:o,versionToCompare:e})}))},G=function(e){var t=e.releasedVersions,n=e.minVersion,o=e.maxVersion,a=function(e){return v.a.valid(v.a.coerce(e.find((function(e){return!v.a.prerelease(e)&&0===v.a.patch(e)}))))}(t);return t.filter((function(e){return e.length>0&&(o&&v.a.lt(e,o)||n&&v.a.gt(e,n)&&!((t=e).includes("rc")&&v.a.valid(v.a.coerce(t))===a));var t}))},W=function(e){var t=e.releasedVersions,n=e.versionToCompare;return t.find((function(e){return v.a.lt(e,n)&&"minor"===v.a.diff(v.a.valid(v.a.coerce(e)),v.a.valid(v.a.coerce(n)))}))},J=function(e){var t=e.version,n=e.allVersions,o=e.minVersion;try{return t&&n.includes(t)&&(!o||o&&v.a.gt(t,o))}catch(a){return!1}},$=function(e){var t=e.showDiff,n=e.showReleaseCandidates,a=Object(o.useState)(!0),i=Object(l.a)(a,2),r=i[0],c=i[1],s=Object(o.useState)([]),u=Object(l.a)(s,2),p=u[0],d=u[1],f=Object(o.useState)([]),b=Object(l.a)(f,2),j=b[0],v=b[1],O=Object(o.useState)([]),C=Object(l.a)(O,2),x=C[0],V=C[1],k=Object(o.useState)(!1),S=Object(l.a)(k,2),N=S[0],P=S[1],D=Object(o.useState)(""),T=Object(l.a)(D,2),R=T[0],z=T[1],A=Object(o.useState)(""),_=Object(l.a)(A,2),q=_[0],F=_[1],I=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=function(){var e=y.a.parse(window.location.search);return{fromVersion:e.from,toVersion:e.to}}();(function(){var t=Object(g.a)(h.a.mark((function t(){var o,a,i,r,l,s,u,p,f;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(w);case 2:return o=t.sent,t.next=5,o.text();case 5:a=t.sent.split("\n"),i=J({version:e.fromVersion,allVersions:a}),r=J({version:e.toVersion,allVersions:a,minVersion:e.fromVersion}),l=a[0],s=r?e.toVersion:l,u=X({releasedVersions:a,toVersion:s,latestVersion:l,showReleaseCandidates:n}),d(u),p=i?e.fromVersion:W({releasedVersions:u,versionToCompare:s}),v(G({releasedVersions:u,maxVersion:s})),V(G({releasedVersions:u,minVersion:p})),z(p),F(s),c(!1),P(f=i&&r),f&&I.current.props.onClick();case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[z,F,n]),Object(o.useEffect)((function(){r||(v(G({releasedVersions:p,maxVersion:q})),V(G({releasedVersions:p,minVersion:R})))}),[r,p,R,q,N,n]);return Object(E.c)(o.Fragment,null,Object(E.c)(U,null,Object(E.c)(B,{title:"What's your current React Native version?",loading:r,value:R,options:j,onChange:function(e){return z(e)}}),Object(E.c)(H,{title:"To which version would you like to upgrade?",loading:r,value:q,options:x,popover:"0.60.1"===q&&Object(E.c)(m.a,{visible:!0,placement:"topLeft",content:"We recommend using the latest 0.60 patch release instead of 0.60.1."}),onChange:function(e){return F(e)}})),Object(E.c)(M,{ref:I,localFromVersion:R,localToVersion:q,onShowDiff:function(e){var n=e.fromVersion,o=e.toVersion;t({fromVersion:n,toVersion:o}),function(e){var t=e.fromVersion,n=e.toVersion,o=window.location.href.replace(window.location.search,""),a="?from=".concat(t,"&to=").concat(n);window.history.replaceState(null,null,"".concat(o).concat(a))}({fromVersion:R,toVersion:q})}}))},Q=n(85),Z=n(339),ee=n(27),te=n(38),ne=(n(289),n(80)),oe=n.n(ne),ae=n(342),ie=n(347),re=n(346),ce=n(345),le=n(343),se=n(344),ue=n(350),pe=n(157);var de=Object(u.a)("div",{target:"e1bx3rr90"})({name:"phu3xo",styles:"display:flex;justify-content:space-between;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;color:#24292e;line-height:32px;background-color:#fafbfc;border-bottom:1px solid #e1e4e8;border-top-left-radius:2px;border-top-right-radius:2px;padding:5px 10px;"}),fe=Object(u.a)(ie.a,{target:"e1bx3rr91"})({name:"terggw",styles:"font-size:10px;margin:0 5px;color:#f78206;"}),be=function(e){var t=e.oldPath,n=e.newPath,o=e.type;e.appName;return"delete"===o?Object(E.c)("span",null,t):t!==n&&"add"!==o?Object(E.c)("span",null,t," ",Object(E.c)(fe,null)," ",n):Object(E.c)("span",null,n)},he=function(e){var t=e.type,n=Object(s.a)(e,["type"]);return Object(E.c)(ae.a,Object(R.a)({},n,{color:{add:"blue",modify:"green",delete:"red",rename:"orange"}[t]}),{add:"ADDED",modify:"MODIFIED",delete:"DELETED",rename:"RENAMED"}[t])},ge=function(e){var t=e.visible,n=Object(s.a)(e,["visible"]);return t?Object(E.c)(ae.a,Object(R.a)({},n,{color:"cyan"}),"BINARY"):null},me=Object(u.a)((function(e){var t=e.visible,n=e.version,o=e.path,a=Object(s.a)(e,["visible","version","path"]);return t?Object(E.c)(I.a,Object(R.a)({},a,{type:"ghost",shape:"circle",icon:Object(E.c)(re.a,null),target:"_blank",href:k({version:n,path:o})})):null}),{target:"e1bx3rr92"})({name:"cnzq6",styles:"color:#24292e;font-size:12px;border-width:0;&:hover,&:focus{color:#24292e;}"}),je=Object(u.a)((function(e){var t=e.visible,n=e.version,o=e.path,a=Object(s.a)(e,["visible","version","path"]);return t?Object(E.c)(I.a,Object(R.a)({},a,{type:"link",target:"_blank",href:k({version:n,path:o})}),"View file"):null}),{target:"e1bx3rr93"})({name:"jskc3k",styles:"font-size:12px;color:#24292e;"}),ve="\n  font-size: 13px;\n  line-height: 0;\n  border-width: 0px;\n  width: 22px;\n  height: 22px;\n  margin: 5px 0;\n  border-radius: 50%;\n",Oe=Object(u.a)((function(e){var t=e.visible,n=e.onClick,o=Object(s.a)(e,["visible","onClick"]);return t?Object(E.c)(I.a,Object(R.a)({},o,{type:"ghost",icon:Object(E.c)(ce.a,null),onClick:n})):Object(E.c)(I.a,Object(R.a)({},o,{type:"ghost",icon:Object(E.c)(le.a,null),onClick:n}))}),{target:"e1bx3rr94"})(ve," &,&:hover,&:focus{color:",(function(e){return e.isDiffCompleted?"#52c41a":"#24292e"}),";}"),ye=Object(u.a)((function(e){var t=e.oldPath,n=e.newPath,o=e.type,a=e.onCopy,i=e.copyPathPopoverContent,r=e.resetCopyPathPopoverContent,c=Object(s.a)(e,["oldPath","newPath","type","onCopy","copyPathPopoverContent","resetCopyPathPopoverContent"]);return Object(E.c)(pe.CopyToClipboard,{text:"add"===o?n:t,onCopy:a},Object(E.c)(m.a,{content:i,trigger:"hover",overlayStyle:{width:"175px",textAlign:"center"}},Object(E.c)(I.a,Object(R.a)({},c,{type:"ghost",icon:Object(E.c)(se.a,null),onMouseOver:r}))))}),{target:"e1bx3rr95"})(ve,""),Ce=Object(u.a)("div",{target:"e1bx3rr96"})({name:"t4ptyc",styles:"display:inline-block;&:hover{cursor:pointer;}"}),xe=Object(u.a)((function(e){var t=e.visible,n=(e.isDiffCollapsed,Object(s.a)(e,["visible","isDiffCollapsed"]));return t?Object(E.c)(I.a,Object(R.a)({},n,{type:"link",icon:Object(E.c)(ue.a,null)})):null}),{target:"e1bx3rr97"})("color:#24292e;margin-right:2px;font-size:10px;transform:",(function(e){return e.isDiffCollapsed?"rotate(-90deg)":"initial"}),";transition:transform 0.2s ease-in-out;transform-origin:center;line-height:0;height:auto;&:hover,&:focus{color:#24292e;}"),we=function(e){var t=e.oldPath,n=e.newPath,a=e.toVersion,i=e.type,r=e.diffKey,c=e.hasDiff,l=e.isDiffCollapsed,u=e.setIsDiffCollapsed,p=e.isDiffCompleted,d=e.onCompleteDiff,f=e.onCopyPathToClipboard,b=e.copyPathPopoverContent,h=e.resetCopyPathPopoverContent,g=e.appName,m=Object(s.a)(e,["oldPath","newPath","toVersion","type","diffKey","hasDiff","isDiffCollapsed","setIsDiffCollapsed","isDiffCompleted","onCompleteDiff","onCopyPathToClipboard","copyPathPopoverContent","resetCopyPathPopoverContent","appName"]),j=function(e){var t=e.oldPath,n=e.newPath,o=e.appName,a=N(t,o),i=N(n,o);return{oldPath:S(a,o),newPath:S(i,o)}}({oldPath:t,newPath:n,appName:g});return Object(E.c)(de,m,Object(E.c)("div",null,Object(E.c)(Ce,{onClick:function(e){var t=e.altKey;return u(!l,t)}},Object(E.c)(xe,{visible:c,isDiffCollapsed:l}),Object(E.c)(be,{oldPath:j.oldPath,newPath:j.newPath,type:i,appName:g})," ",Object(E.c)(he,{type:i}),Object(E.c)(ge,{visible:!c})),Object(E.c)(ye,{oldPath:j.oldPath,newPath:j.newPath,type:i,onCopy:f,copyPathPopoverContent:b,resetCopyPathPopoverContent:h})),Object(E.c)("div",null,Object(E.c)(o.Fragment,null,Object(E.c)(je,{visible:c&&"delete"!==i,version:a,path:n}),Object(E.c)(me,{visible:!c&&"delete"!==i,version:a,path:n}),Object(E.c)(Oe,{visible:p,onClick:function(){return d(r)}}))))},Ve=n(33),ke=n(158);var Se=Object(u.a)((function(e){return Object(E.c)("a",Object(R.a)({target:"_blank"},e,{rel:"noopener",onClick:function(e){return e.stopPropagation()}}))}),{target:"e1eys6y60"})({name:"mr5ph2",styles:"text-decoration:none;color:#045dc1;"}),Ne=Object(u.a)("em",{target:"e1eys6y61"})({name:"j8y7sr",styles:"font-style:normal;background-color:rgba(27,31,35,0.07);border-radius:3px;font-size:85%;margin:0;padding:0.2em 0.4em;"}),Pe=function(e){var t=e.forceBlock,n=void 0!==t&&t,o=e.options,a=void 0===o?{}:o,i=Object(s.a)(e,["forceBlock","options"]);return Object(E.c)(ke.a,Object(R.a)({},i,{options:Object(Ve.a)({},a,{forceBlock:n,overrides:Object(Ve.a)({},a.overrides,{a:Se,em:Ne,code:Ne,p:Object(u.a)("p",{target:"e1eys6y62"})({name:"gx0lhm",styles:"margin-bottom:0;"})})})}))};var De={add:"#d6fedb",delete:"#fdeff0",neutral:"#ffffff"},Te=Object(u.a)((function(e){var t=e.isCommentVisible,n=e.children,o=Object(s.a)(e,["isCommentVisible","children"]);return Object(E.c)(ee.c.div,Object(R.a)({},o,{variants:{visible:{height:"auto"},hidden:{height:10}},initial:t?"visible":"hidden",animate:t?"visible":"hidden",transition:{duration:.5},inherit:!1}),Object(E.c)("div",{children:n}))}),{target:"e1qcg9nb0"})("overflow:hidden;& > div{display:flex;flex-direction:row;background-color:",(function(e){var t=e.lineChangeType;return De[t]}),";cursor:pointer;}"),Re=Object(u.a)("div",{target:"e1qcg9nb1"})({name:"lx0a8",styles:"flex:1;position:relative;padding:16px;color:#000;background-color:#fffbe6;user-select:none;"}),ze=Object(u.a)((function(e){var t=e.isCommentVisible,n=Object(s.a)(e,["isCommentVisible"]);return Object(E.c)(ee.c.div,Object(R.a)({},n,{variants:{visible:{scaleX:1},hidden:{scaleX:10}},whileHover:{scale:2},initial:t?"visible":"hidden",animate:t?"visible":"hidden",transition:{duration:.25}}))}),{target:"e1qcg9nb2"})({name:"1vupd63",styles:"background-color:#ffe58f;margin-left:20px;width:10px;cursor:pointer;"}),Ee=Object(u.a)(Pe,{target:"e1qcg9nb3"})("opacity:1;",(function(e){return!e.isCommentVisible&&"\n      opacity: 0;\n    "})," transition:opacity 0.25s ease-out;"),Ae={ADD:"I",DELETE:"D",NEUTRAL:"N"},_e=function(e){var t=e.newPath,n=e.fromVersion,o=e.toVersion,a=e.appName,i=S(t,a);return P({fromVersion:n,toVersion:o}).filter((function(e){var t=e.comments;return t&&t.length>0&&t.some((function(e){return e.fileName===i}))})).reduce((function(e,t){var n=t.comments.reduce((function(e,t){var n=t.fileName,o=t.lineChangeType,a=t.lineNumber,r=t.content;return n!==i?e:Object(Ve.a)({},e,Object(c.a)({},function(e){var t=e.lineChangeType,n=e.lineNumber;return"".concat(Ae[t.toUpperCase()]).concat(n)}({lineChangeType:o,lineNumber:a}),Object(E.c)(qe,{content:r,lineChangeType:o})))}),{});return Object(Ve.a)({},e,{},n)}),{})},qe=function(e){var t=e.content,n=e.lineChangeType,a=Object(o.useState)(!0),i=Object(l.a)(a,2),r=i[0],c=i[1];return Object(E.c)(Te,{isCommentVisible:r,lineChangeType:n,onClick:function(){return c(!r)}},Object(E.c)(ze,{isCommentVisible:r,onClick:function(){return c(!r)}}),Object(E.c)(Re,null,Object(E.c)(Ee,{isCommentVisible:r},t.props.children)))};var Fe=Object(u.a)("div",{target:"ei7z45h0"})({name:"kvrbmd",styles:"border:1px solid #e8e8e8;border-radius:3px;margin-bottom:16px;margin-top:16px;"}),Ie=Object(u.a)("div",{target:"ei7z45h1"})({name:"roblq6",styles:"background-color:#f1f8ff;margin-left:30px;padding-left:4px;color:'#1b1f23b3';"}),Le=Object(u.a)(te.a,{target:"ei7z45h2"})({name:"pon55n",styles:"background-color:#dbedff;"}),Ye=Object(u.a)(te.b,{target:"ei7z45h3"})({name:"m3lb03",styles:".diff-gutter-col{width:30px;}tr.diff-line{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;}td.diff-gutter{color:rgba(27,31,35,0.3);padding:0;text-align:center;font-size:12px;cursor:auto;}td.diff-gutter .diff-line-normal{background-color:#cdffd8;border-color:#bef5cb;}td.diff-gutter:hover{cursor:pointer;color:rgba(27,31,35,0.6);}td.diff-code{font-size:12px;color:#24292e;}td.diff-code-insert .diff-code-edit{background-color:#acf2bd;}td.diff-gutter-omit:before{width:0;background-color:transparent;}td.diff-widget-content{padding:0;}"}),Me=a.a.memo((function(e){var t=e.oldPath,n=e.newPath,a=e.type,i=e.hunks,r=e.fromVersion,c=e.toVersion,s=e.diffKey,u=e.isDiffCompleted,p=e.onCompleteDiff,d=e.selectedChanges,f=e.onToggleChangeSelection,b=e.areAllCollapsed,h=e.setAllCollapsed,g=e.diffViewStyle,m=e.appName,j=Object(o.useState)(function(e){var t=e.type,n=e.hunks;return"delete"===t||n.length>5||void 0}({type:a,hunks:i})),v=Object(l.a)(j,2),O=v[0],y=v[1],C="Click to copy file path",x="File path copied!",w=Object(o.useState)(C),V=Object(l.a)(w,2),k=V[0],S=V[1];return void 0!==b&&b!==O?y(b):u&&void 0===O&&y(!0),Object(E.c)(Fe,null,Object(E.c)(we,{oldPath:t,newPath:n,toVersion:c,type:a,diffKey:s,hasDiff:i.length>0,isDiffCollapsed:O,setIsDiffCollapsed:function(e,t){if(t)return h(e);h(void 0),y(e)},isDiffCompleted:u,onCopyPathToClipboard:function(){S(x)},copyPathPopoverContent:k,resetCopyPathPopoverContent:function(){k===x&&S(C)},onCompleteDiff:p,appName:m}),!O&&Object(E.c)(Ye,{viewType:g,diffType:a,hunks:i,widgets:_e({newPath:n,fromVersion:r,toVersion:c,appName:m}),optimizeSelection:!0,selectedChanges:d},(function(e){var t={enhancers:[Object(te.d)(e)]},n=Object(te.f)(e,t);return e.map((function(e){return[Object(E.c)(Le,{key:"decoration-"+e.content},Object(E.c)(Ie,null,e.content)),Object(E.c)(te.c,{key:e.content,hunk:e,tokens:n,gutterEvents:{onClick:f}})]}))})))}),(function(e,t){return e.isDiffCompleted===t.isDiffCompleted&&e.areAllCollapsed===t.areAllCollapsed&&e.diffViewStyle===t.diffViewStyle}));var Ue=Object(u.a)("h1",{target:"e1jqko7g0"})({name:"l2z0vi",styles:"margin-top:0.5em;"}),Be=function(e){var t=e.diff,n=e.getDiffKey,a=e.title,i=e.completedDiffs,r=e.isDoneSection,c=e.fromVersion,s=e.toVersion,u=e.handleCompleteDiff,p=e.selectedChanges,d=e.onToggleChangeSelection,f=e.diffViewStyle,b=e.appName,h=e.doneTitleRef,g=Object(o.useState)(void 0),m=Object(l.a)(g,2),j=m[0],v=m[1],O=Object(o.useCallback)((function(){var e=oe.a.satisfies(c,">= 0.61.0 <= 0.62.0"),t=oe.a.satisfies(s,">= 0.62.0 <= 0.63.0");return e&&t}),[c,s])();return Object(E.c)("div",null,a&&i.length>0&&Object(E.c)(Ue,{ref:h},a),t.map((function(e){var t=n(e),o=i.includes(t);return r!==o||O&&e.oldPath.match(/gradlew.bat/)&&e.newPath.match(/gradlew.bat/)?null:Object(E.c)(Me,Object(R.a)({key:"".concat(e.oldRevision).concat(e.newRevision)},e,{type:"new"===e.type?"add":e.type,diffKey:t,diffViewStyle:f,fromVersion:c,toVersion:s,isDiffCompleted:i.includes(t),onCompleteDiff:u,selectedChanges:p,onToggleChangeSelection:d,areAllCollapsed:j,setAllCollapsed:v,appName:b}))})))},He=n(116);var Ke=function(){return Object(E.c)(He.a,{speed:1,backgroundColor:"#eee",foregroundColor:"#e6e6e6",viewBox:"0 0 400 100"},Object(E.c)("rect",{width:"250",height:"6",rx:"1.5"}))},Xe=function(){return Object(E.c)(He.a,{speed:1,backgroundColor:"#eee",foregroundColor:"#e6e6e6",viewBox:"0 0 400 100"},Object(E.c)("rect",{x:"0",y:"10",width:"47%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"10",width:"41%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"18",width:"43%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"34",width:"40%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"42",width:"45%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"42",width:"40%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"50",width:"44%",height:"6",rx:"1.5"}))},Ge=Object(u.a)(ee.c.div,{target:"e1q7zk9m0"})({name:"h9hnq2",styles:"margin-top:16px;border:1px solid #e8e8e8;border-radius:3px;"}),We=Object(u.a)("div",{target:"e1q7zk9m1"})({name:"1rk6upi",styles:"color:#24292e;background-color:#fafbfc;padding:10px;height:40px;"}),Je={name:"10nze3y",styles:"padding:5px 10px;"},$e=function(){return Object(E.c)(Ge,{initial:{opacity:0,translateY:100},animate:{opacity:1,translateY:0},transition:{duration:.5}},Object(E.c)(We,null,Object(E.c)(Ke,null)),Object(E.c)("div",{css:Je},Object(E.c)(Xe,null)))},Qe=n(76),Ze=n(77),et=n(86),tt=n(78),nt=n(88),ot=n(349),at=n(182);var it=Object(u.a)((function(e){return Object(E.c)("div",e,Object(E.c)("span",null,"Check out"," ",Object(E.c)(at.a,{placement:"bottom",title:"Upgrade Support is a community-backed place to request and give help when upgrading your app."},Object(E.c)("a",Object(R.a)({href:"https://github.com/react-native-community/upgrade-support",target:"_blank",rel:"noopener noreferrer"},e),"Upgrade Support"))," ","if you are experiencing issues related to React Native during the upgrading process."))}),{target:"e1dzoh7i0"})({name:"omrhug",styles:"padding-top:15px;span > a{color:#045dc1;&:hover{color:#40a9ff;}}"}),rt=function(){return Object(E.c)(Pe,null,"Keep in mind that `RnDiffApp` and `rndiffapp` are placeholders. When upgrading, you should replace them with your actual project's name. You can also provide your app name by clicking the settings icon on the top right.")};var ct=Object(u.a)("div",{target:"e1n00l3l0"})({name:"1aynp02",styles:"position:relative;margin-top:16px;color:rgba(0,0,0,0.65);overflow:hidden;"}),lt=Object(u.a)("div",{target:"e1n00l3l1"})({name:"1ieyl17",styles:"color:rgba(0,0,0,0.65);background-color:#fffbe6;border-width:1px;border-left-width:7px;border-color:#ffe58f;border-style:solid;border-radius:3px;transition:padding 0.25s ease-out;"}),st=Object(u.a)((function(e){var t=e.isContentVisible,n=Object(s.a)(e,["isContentVisible"]);return Object(E.c)(ee.c.h2,Object(R.a)({},n,{variants:{visibleContent:{translateX:0,translateY:0},hiddenContent:{translateX:-5,translateY:-10}},initial:t?"visibleContent":"hiddenContent",animate:t?"visibleContent":"hiddenContent",transition:{duration:.25},inherit:!1}))}),{target:"e1n00l3l2"})({name:"16t2yzh",styles:"font-size:17px;cursor:pointer;margin:0px;padding:18px 0px 0px 14px;"}),ut=Object(u.a)((function(e){var t=e.isContentVisible,n=e.children,o=Object(s.a)(e,["isContentVisible","children"]);return Object(E.c)(ee.c.div,Object(R.a)({},o,{variants:{visible:{opacity:1,height:"auto",translateY:0},hidden:{opacity:0,height:0,translateY:-20}},initial:t?"visible":"hidden",animate:t?"visible":"hidden",transition:{duration:.25},inherit:!1}),Object(E.c)("div",{children:n}))}),{target:"e1n00l3l3"})({name:"1c655gy",styles:"& > div{padding:15px 24px 19px;}"}),pt=Object(u.a)((function(e){return Object(E.c)("span",Object(R.a)({},e,{role:"img","aria-label":"Megaphone emoji"}),"\ud83d\udce3")}),{target:"e1n00l3l4"})({name:"9g4yx1",styles:"margin:0px 10px;"}),dt=Object(u.a)((function(e){var t=e.toggleContentVisibility,n=e.isContentVisible,o=Object(s.a)(e,["toggleContentVisibility","isContentVisible"]);return Object(E.c)(I.a,Object(R.a)({},o,{type:"link",icon:n?Object(E.c)(ot.a,null):Object(E.c)(ue.a,null),onClick:t}))}),{target:"e1n00l3l5"})({name:"1meph0h",styles:"float:right;position:absolute;top:11px;right:12px;font-size:12px;border-width:0px;width:20px;height:20px;color:rgba(0,0,0,0.45);&:hover,&:focus{color:#24292e;}"}),ft=Object(u.a)("hr",{target:"e1n00l3l6"})({name:"94b9fp",styles:"margin:15px 0;background-color:#e1e4e8;height:0.25em;border:0;"}),bt=Object(u.a)("ol",{target:"e1n00l3l7"})({name:"jbbt8s",styles:"padding-inline-start:18px;margin:10px 0 0;"}),ht=function(e){function t(){var e,n;Object(Qe.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(et.a)(this,(e=Object(tt.a)(t)).call.apply(e,[this].concat(a)))).state={isContentVisible:!0},n.handleToggleContentVisibility=function(){return n.setState((function(e){return{isContentVisible:!e.isContentVisible}}))},n}return Object(nt.a)(t,e),Object(Ze.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.props.isLoading&&!e.isLoading,o=this.state.isContentVisible!==t.isContentVisible;return n||o}},{key:"render",value:function(){var e=this.props,t=e.fromVersion,n=e.toVersion,a=this.state.isContentVisible,i=P({fromVersion:t,toVersion:n});if(!i.some((function(e){return!!e.usefulContent})))return null;var r=i.length>1;return Object(E.c)(ct,{isContentVisible:a},Object(E.c)(lt,{isContentVisible:a},Object(E.c)(st,{isContentVisible:a,onClick:this.handleToggleContentVisibility},Object(E.c)(pt,null)," Useful content for upgrading"),Object(E.c)(dt,{isContentVisible:a,toggleContentVisibility:this.handleToggleContentVisibility}),Object(E.c)(ut,{isContentVisible:a},i.map((function(e,t){var n=e.usefulContent,a=e.version.slice(0,4),i=[].concat(Object(Q.a)(n.links),[{title:"React Native ".concat(a," changelog"),url:D({version:a})}]);return Object(E.c)(o.Fragment,{key:t},t>0&&Object(E.c)(ft,null),r&&Object(E.c)("h3",null,"Release ",a),Object(E.c)("span",null,n.description),Object(E.c)(bt,null,i.map((function(e,t){var n=e.url,o=e.title;return Object(E.c)("li",{key:"".concat(n).concat(t)},Object(E.c)(Se,{href:n},o))}))))})),Object(E.c)(it,null),Object(E.c)(ft,null),Object(E.c)(rt,null))))}}]),t}(o.Component),gt=n(340);var mt=Object(u.a)("div",{target:"end0ift0"})({name:"14dwkoc",styles:"position:relative;border-width:1px;margin-top:16px;flex-direction:row-reverse;display:flex;"}),jt=Object(u.a)((function(e){var t=e.handleViewStyleChange,n=e.diffViewStyle;return Object(E.c)(mt,null,Object(E.c)(gt.a.Group,{value:n},Object(E.c)(gt.a.Button,{value:"split",onChange:function(){return t("split")}},"Split"),Object(E.c)(gt.a.Button,{value:"unified",onChange:function(){return t("unified")}},"Unified")))}),{target:"end0ift1"})({name:"zejs5o",styles:"float:right;position:absolute;top:10px;right:10px;font-size:12px;border-width:0px;width:20px;height:20px;margin-right:8px;&,&:hover,&:focus{color:#24292e;}"}),vt=n(160),Ot=n(161),yt=n.n(Ot);function Ct(){var e=Object(vt.a)(["\n  0% {\n    transform: translate(0, 0);\n  }\n\n  10%, 90% {\n    transform: translate(0, -2px);\n  }\n\n  20%, 80% {\n    transform: translate(0, 3px);\n  }\n\n  30%, 50%, 70% {\n    transform: translate(0, -5px);\n  }\n\n  40%, 60% {\n    transform: translate(0, 5px);\n  }\n"]);return Ct=function(){return e},e}var xt=Object(E.d)(Ct()),wt=Object(u.a)((function(e){var t=e.completed,n=e.total,o=e.popoverContent,a=(e.popoverCursorType,Object(s.a)(e,["completed","total","popoverContent","popoverCursorType"]));return Object(E.c)("div",a,Object(E.c)(m.a,{content:o,trigger:"hover",placement:"right",overlayStyle:{position:"fixed"}},Object(E.c)("span",{className:"completedAmount"},0===t?1:t)," ","/",n),Object(E.c)(yt.a,{active:t===n,config:{elementCount:200,angle:130,startVelocity:30}}))}),{target:"eqjubm30"})("position:fixed;bottom:20px;right:20px;background:#d5eafd;padding:10px;border:1px solid #1890ff;border-radius:20px;color:#7dadda;transform:",(function(e){return e.completed?"translateY(0px)":"translateY(70px)"}),";display:flex;align-self:flex-end;transition:transform 0.3s;cursor:",(function(e){return e.popoverCursorType}),";",(function(e){return e.completed===e.total&&Object(E.b)("transform:translateY(70px);animation:",xt,";animation-duration:1.5s;")})," .completedAmount{color:#1890ff;}");var Vt=function(e){return new Promise((function(t){return setTimeout(t,e)}))},kt=Object(u.a)("div",{target:"exsbni10"})({name:"7822g1",styles:"width:90%;"}),St=function(e){var t=e.oldRevision,n=e.newRevision;return"".concat(t).concat(n)},Nt=Object(te.g)({multiple:!0})((function(e){var t=e.shouldShowDiff,n=e.fromVersion,a=e.toVersion,i=e.selectedChanges,r=e.onToggleChangeSelection,c=e.appName,s=Object(o.useState)(!0),u=Object(l.a)(s,2),p=u[0],d=u[1],f=Object(o.useState)(null),b=Object(l.a)(f,2),m=b[0],j=b[1],v=Object(o.useState)([]),O=Object(l.a)(v,2),y=O[0],C=O[1],x=Object(o.useState)(!1),w=Object(l.a)(x,2),k=w[0],S=w[1],N={content:"Scroll to Done section",cursorType:"s-resize"},P={content:"Scroll to Top",cursorType:"n-resize"},D=Object(o.useState)(N),T=Object(l.a)(D,2),z=T[0],A=T[1],_=Object(o.useRef)(null),q=Object(o.useState)(localStorage.getItem("viewStyle")||"split"),F=Object(l.a)(q,2),I=F[0],L=F[1],Y=Object(o.useCallback)(Object(g.a)(h.a.mark((function e(){var t,o,i,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),C([]),e.next=4,Promise.all([fetch(V({fromVersion:n,toVersion:a})),Vt(300)]);case 4:return t=e.sent,o=Object(l.a)(t,1),i=o[0],e.next=9,i.text();case 9:r=e.sent,j(Object(te.e)(r).sort((function(e){return e.newPath.includes("package.json")?-1:1}))),d(!1);case 12:case"end":return e.stop()}}),e)}))),[n,a]);if(Object(o.useEffect)((function(){t&&Y()}),[Y,t]),!t)return null;if(p)return Object(E.c)(kt,null,Object(E.c)(ee.a,null,Object(E.c)($e,null)));var M={diff:m,getDiffKey:St,completedDiffs:y,fromVersion:n,toVersion:a,handleCompleteDiff:function(e){if(y.includes(e))return C((function(t){return t.filter((function(t){return t!==e}))}));C((function(t){return[].concat(Object(Q.a)(t),[e])}))},selectedChanges:i,onToggleChangeSelection:r};return Object(E.c)(kt,null,Object(E.c)(ee.b,null,Object(E.c)(ee.c.div,{initial:{opacity:0,translateY:75},animate:{opacity:1,translateY:0},transition:{duration:.5}},Object(E.c)(ht,{isLoading:p,fromVersion:n,toVersion:a}),Object(E.c)(jt,{handleViewStyleChange:function(e){L(e),localStorage.setItem("viewStyle",e)},diffViewStyle:I}),Object(E.c)(Be,Object(R.a)({},M,{isDoneSection:!1,diffViewStyle:I,appName:c})),function(e){var t=e.diff,n=e.completedDiffs;return t.length===n.length&&Object(E.c)(Z.a,{style:{marginTop:16},message:"Your upgrade is done \ud83c\udf89\ud83c\udf89",type:"success",showIcon:!0,closable:!0})}({diff:m,completedDiffs:y}),Object(E.c)(Be,Object(R.a)({},M,{isDoneSection:!0,title:"Done",appName:c,doneTitleRef:_})),Object(E.c)(wt,{completed:y.length,total:m.length,onClick:function(){S(!k),k?(A(N),window.scrollTo({top:0,behavior:"smooth"})):(A(P),_.current.scrollIntoView({behavior:"smooth"}))},popoverContent:z.content,popoverCursorType:z.cursorType}))))})),Pt=n(348),Dt=n(341),Tt=n(338);var Rt=Object(u.a)("div",{target:"eg18p4w0"})({name:"1yuhvjn",styles:"margin-top:16px;"}),zt=function(e){var t=e.handleSettingsChange,n=e.appName,i=e.setAppName,r=Object(o.useState)(!1),c=Object(l.a)(r,2),s=c[0],u=c[1];return Object(E.c)(m.a,{placement:"bottomRight",content:Object(E.c)(a.a.Fragment,null,Object(E.c)(Dt.a.Group,{onChange:function(e){return t(e)}},Object(E.c)("div",null,Object(E.c)(Dt.a,{value:T},T))),Object(E.c)(Rt,null,Object(E.c)("h4",null,"What's your app name?"),Object(E.c)(Tt.a,{value:n,onChange:function(e){i(e.target.value)},placeholder:"MyAwesomeApp"}))),trigger:"click",visible:s,onVisibleChange:function(e){return u(e)}},Object(E.c)(I.a,{icon:Object(E.c)(Pt.a,null)}))},Et=n(173),At=n(174),_t=n.n(At);var qt=Object(u.a)("div",{target:"el8swy00"})({name:"cqyjk8",styles:"display:flex;align-items:center;justify-content:center;flex-direction:column;padding-top:30px;"}),Ft=Object(u.a)(p.a,{target:"el8swy01"})({name:"1xfqzpp",styles:"width:90%;border-radius:3px;border-color:#e8e8e8;"}),It=Object(u.a)("div",{target:"el8swy02"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),Lt=Object(u.a)("img",{target:"el8swy03"})({name:"9f1yi3",styles:"width:100px;margin-bottom:15px;"}),Yt=Object(u.a)("h1",{target:"el8swy04"})({name:"7kez8b",styles:"margin:0;margin-left:15px;"}),Mt=Object(u.a)((function(e){var t=e.className,n=Object(s.a)(e,["className"]);return Object(E.c)("div",{className:t},Object(E.c)(d.a,n))}),{target:"el8swy05"})({name:"z6j3nc",styles:"margin-top:10px;margin-left:15px;margin-right:auto;"}),Ut=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(""),r=Object(l.a)(i,2),s=r[0],u=r[1],p=Object(o.useState)(!1),d=Object(l.a)(p,2),b=d[0],h=d[1],g=Object(o.useState)(Object(c.a)({},"".concat(T),!1)),m=Object(l.a)(g,2),j=m[0],v=m[1],O=Object(o.useState)(""),y=Object(l.a)(O,2),C=y[0],x=y[1];Object(o.useEffect)((function(){f.a.initialize("UA-136307971-1"),f.a.pageview("/")}),[]);return Object(E.c)(qt,null,Object(E.c)(Ft,null,Object(E.c)(It,null,Object(E.c)(Lt,{alt:"React Native Upgrade Helper logo",title:"React Native Upgrade Helper logo",src:_t.a}),Object(E.c)("a",{href:Et.a},Object(E.c)(Yt,null,"React Native Upgrade Helper")),Object(E.c)(Mt,{href:"https://github.com/react-native-community/upgrade-helper","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star react-native-community/upgrade-helper on GitHub"},"Star"),Object(E.c)(zt,{handleSettingsChange:function(e){var t=e.reduce((function(e,t){return e[t]=!0,e}),{});v(t)},appName:C,setAppName:x})),Object(E.c)($,{showDiff:function(e){var t=e.fromVersion,n=e.toVersion;t!==n&&(a(t),u(n),h(!0))},showReleaseCandidates:j[T]})),Object(E.c)(Nt,{shouldShowDiff:b,fromVersion:n,toVersion:s,appName:C}))},Bt=function(){return Object(E.c)(Ut,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(E.c)(Bt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t,n){"use strict";n.r(t);var o=n(33);t.default=["0.62","0.61","0.60","0.59","0.58","0.57"].map((function(e){return Object(o.a)({},n(228)("./".concat(e)).default,{version:e})}))},68:function(e,t){jest.setMock("../index.js",["0.59","0.58","0.57","0.56"].map((function(e){return{version:e}})))}},[[186,1,2]]]);
//# sourceMappingURL=main.98f1a4a0.chunk.js.map