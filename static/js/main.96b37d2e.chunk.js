(this["webpackJsonpreact-simple-boilerplate"]=this["webpackJsonpreact-simple-boilerplate"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},22:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(23),i=c.n(s),r=c(6),l=(c(28),c(3)),o=(c(29),c(2)),j=(c(30),c(0));var u=function(){var e=a.a.useState(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=a.a.useState(""),i=Object(l.a)(s,2),r=i[0],o=i[1],u=a.a.useState(""),h=Object(l.a)(u,2),b=h[0],d=h[1],O=a.a.useState(""),x=Object(l.a)(O,2),m=x[0],g=x[1];return Object(j.jsx)("div",{className:"formulaireContact",id:"sectionContact",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Would you like to contact us?"}),Object(j.jsx)("h3",{children:"Your Name"}),Object(j.jsx)("label",{htmlFor:"contact",children:Object(j.jsx)("input",{type:"text",id:"name",value:c,onChange:function(e){return n(e.target.value)},placeholder:"Wilder"})}),Object(j.jsx)("h3",{children:"Your Email"}),Object(j.jsx)("label",{htmlFor:"contact",children:Object(j.jsx)("input",{type:"text",id:"email",value:r,onChange:function(e){return o(e.target.value)},placeholder:"wilder@email.com"})}),Object(j.jsx)("h3",{children:"Objet"}),Object(j.jsx)("label",{htmlFor:"contact",children:Object(j.jsx)("input",{type:"text",id:"objet",value:b,onChange:function(e){return d(e.target.value)},placeholder:"I love your website"})}),Object(j.jsx)("h3",{children:"Message"}),Object(j.jsxs)("label",{htmlFor:"contact",children:[Object(j.jsx)("textarea",{type:"message",id:"message",value:m,onChange:function(e){return g(e.target.value)},placeholder:"Hello Wild!"}),Object(j.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log("Your name:".concat(c)),console.log("Your email:".concat(r)),console.log("Your email subject:".concat(b)),console.log("Your mail message:".concat(m)),n(" "),o(" "),d(" "),g(" ")},className:"submitCocktails",children:"Send"})]})]})})};c(32);var h=function(){var e=a.a.useState(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=a.a.useState(""),i=Object(l.a)(s,2),r=i[0],o=i[1],u=a.a.useState(""),h=Object(l.a)(u,2),b=h[0],d=h[1],O=[],x=[],m=[];return Object(j.jsx)("div",{className:"formulaire",id:"sectionCr\xe9ation",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"What about creating your own cocktail?"}),Object(j.jsx)("h3",{children:"Cocktail name"}),Object(j.jsx)("label",{htmlFor:"nameofthecocktail",children:Object(j.jsx)("input",{type:"text",id:"name",value:c,onChange:function(e){return n(e.target.value)},placeholder:"Tequila Sunwild"})}),Object(j.jsx)("h3",{children:"Ingredients"}),Object(j.jsx)("label",{htmlFor:"nameofthecocktail",children:Object(j.jsx)("input",{type:"text",id:"ingredient",value:r,onChange:function(e){return o(e.target.value)},placeholder:"Tequila"})}),Object(j.jsx)("h3",{children:"Preparation"}),Object(j.jsxs)("label",{htmlFor:"nameofthecocktail",children:[Object(j.jsx)("textarea",{type:"message",id:"preparation",value:b,onChange:function(e){return d(e.target.value)},placeholder:"Mix it!"}),Object(j.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),O.push("".concat(c)),x.push("".concat(r)),m.push("".concat(b)),console.log("Le nom de votre cocktail : ".concat(O)),console.log("Les ingr\xe9dients de votre cocktail : ".concat(x)),console.log("La pr\xe9paration de votre cocktail : ".concat(m)),n(" "),o(" "),d(" ")},className:"submitCocktails",children:"Suggest"})]})]})})};c(12),c(13);var b=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"section",to:{pathname:"/Home",hash:"#sectionHome"},children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"section",to:{pathname:"/Search",hash:"#accueil"},children:"Cocktails"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"link",to:"/mapbar",children:"Find a Bar"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"section",to:{pathname:"/Creation",hash:"#sectionCr\xe9ation"},children:"Creation"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"section",to:{pathname:"/Contact",hash:"#sectionContact"},children:"Contact"})})]})})},d=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("header",{id:"home",className:"".concat(c?"is-open":"","  "),children:[Object(j.jsxs)("button",{type:"button",onClick:function(){a(!c)},className:"burger-menu",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]}),c?Object(j.jsx)(b,{}):null,Object(j.jsx)("div",{className:"title",children:"Undefined Cocktails"})]})};var O=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:"nav",children:Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"link",to:"/",children:"Home"})})})})},x=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("header",{id:"home",className:"".concat(c?"is-open":"","  "),children:[Object(j.jsxs)("button",{type:"button",onClick:function(){a(!c)},className:"burger-menu",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]}),c?Object(j.jsx)(O,{}):null,Object(j.jsx)("div",{className:"title",children:"Undefined Cocktails"})]})},m=c(7),g=c.n(m);c(51);function p(e){var t=e.searchValue,c=e.handleValue,n=e.handleEnter,s=e.showSuggestions,i=e.setShowSuggestions,r=a.a.useState([]),o=Object(l.a)(r,2),u=o[0],h=o[1],b=a.a.useState([]),d=Object(l.a)(b,2),O=d[0],x=d[1];a.a.useEffect((function(){g.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then((function(e){for(var t=[],c=0;c<e.data.drinks.length;c++)t.push(e.data.drinks[c].strIngredient1);h(t)})).catch((function(e){return console.log(e)}))}),[]);var m=function(){return Object(j.jsx)("ul",{className:"suggestion",children:O.map((function(e){return Object(j.jsx)("li",{children:e})}))})};return Object(j.jsxs)("div",{className:"search",id:"sectionHome",children:[Object(j.jsx)("input",{type:"text",className:"search-bar",value:t,placeholder:"  \ud83d\udd0e   Search by ingredient",onChange:c,onKeyUp:n,onKeyDown:function(){console.log(u);var e=u.filter((function(e){return e.toLowerCase().indexOf(t)>-1}));x(e),i(!0)}}),s&&t&&Object(j.jsx)(m,{})]})}c(22);function f(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){g.a.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(e){return console.log(e.data.drinks),a([e.data.drinks[0]])})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)("section",{id:"accueil",children:[Object(j.jsx)("h1",{children:"Lacking inspiration? Try today's cocktail : "}),c.map((function(e){return Object(j.jsxs)("div",{className:"cocktail-cart",children:[Object(j.jsx)("img",{src:e.strDrinkThumb,alt:"cocktail",className:"cocktail-image"}),Object(j.jsxs)("ul",{className:"ingredients",children:[Object(j.jsx)("li",{children:Object(j.jsx)("h2",{children:e.strDrink.toUpperCase()})}),Object(j.jsxs)("li",{children:[e.strIngredient1," ",e.strMeasure1]}),Object(j.jsxs)("li",{children:[e.strIngredient2," ",e.strMeasure2]}),Object(j.jsxs)("li",{children:[e.strIngredient3," ",e.strMeasure3]}),Object(j.jsxs)("li",{children:[e.strIngredient4," ",e.strMeasure4]}),Object(j.jsxs)("li",{children:[e.strIngredient5," ",e.strMeasure5]}),Object(j.jsxs)("li",{children:[e.strIngredient6," ",e.strMeasure6]})]}),Object(j.jsx)("h2",{children:"MIX IT"}),Object(j.jsx)("p",{className:"recipe",children:e.strInstructions})]})}))]})}c(52);var v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s="https://www.google.com/maps/embed/v1/search?key=AIzaSyAI78nOfLNuKORIctvLjdEQhd17OZvMkN8&q=bar+cocktail+near+".concat(c);return Object(j.jsxs)("div",{className:"map-bar",children:[Object(j.jsx)("h1",{children:"Are you looking for a Bar?"}),Object(j.jsx)("input",{className:"map-search",type:"text",placeholder:"Where are you ?",value:c,onChange:function(e){a(e.target.value)}}),Object(j.jsx)("iframe",{className:"map",title:"barmap",loading:"lazy",allowFullScreen:!0,src:s})]})};c(53);var k=function(){return Object(j.jsxs)("footer",{children:[Object(j.jsx)("p",{className:"textAlcool",children:"Excessive drinking is dangerous for your health; alcoholic beverages should be consumed with moderation."}),Object(j.jsxs)("div",{className:"containerGeo",children:[Object(j.jsx)("p",{className:"textGeo",children:"Feeling lazy? Why not go to a nearby bar? "}),Object(j.jsx)("a",{href:"https://www.google.fr/maps/search/bar/@48.4675239,1.0156517,14.76z?hl=fr&authuser=0",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABzCAYAAAAR4LWGAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAflJREFUeNrs3FuSgzAMRNG0iv1vWbODJJXBqCVd/QPmuGPxqigzX9TzFRAADzwFPPAU8MBTwANPAQ88BbxNXY3G+u3TPAH/DPSn7QT8Oexv9yngz4O/O462w2fxccsmIApPPBf90izg3d41loQglqOXjS1ArxljgF4z1gC9ZswBes3YA/SacwjQdz8y+KZUNOl54g73Mk+7/rFNOuPHgIS/29722XwYpv1usLv2l5MTr6b7LoXPBjBySX0sSLpl8sMg7S1eTnd7ZDDxiiknwGvpxK/+oEnd4ZO0k/g2k8+3k0UNFngSDzyXkSQeeLvmBDwFPPDceAHv2muicPZXN9gg7Tvhk8ST9kfvuu+CF6nvmfgceqxH4NUAxObbH7c1Pqcn3bm5nvjMOg1+0UfhZYZl27hPfB+vG0/4lz+AyEPnZA8/bY0+8rYsOg2W6/g9+OoI3x1fXRNP0ovhBXpd4mm2LDUeAYmJJ0Xie+FrMjzohfAsOS++Fi4bC0vNwstJbU379sRra+JXN9pYmjwBT+LXpF7AL+4pAQrwp/EFPGUJr+lp35J4kXgabYvEa/IE0lyBvz2xAp4e0RJ+ZKONgQkW8NQIeE1J+7TEi8SDOzLxmjAhNFfgf059y+XnahwakXgKeOAp4IGngAceeAp44CnggaeAb1x/AgwAkoREEyz4JxQAAAAASUVORK5CYII=",alt:"marqueur",className:"geoImgLogo"})})]})]})};c(54);function A(e){var t=e.idCocktail,c=e.handleCocktail,n=a.a.useState(),s=Object(l.a)(n,2),i=s[0],r=s[1];return console.log("idDrink pass\xe9e ".concat(t)),a.a.useEffect((function(){g.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(t)).then((function(e){r(e.data.drinks[0])})).catch((function(e){return console.log(e)}))}),[t]),Object(j.jsx)("section",{id:"card",role:"button",tabIndex:0,onKeyDown:c,onClick:c,children:i&&Object(j.jsxs)("div",{className:"cocktail-cart",children:[Object(j.jsx)("img",{src:i.strDrinkThumb,alt:"cocktail",className:"cocktail-image"}),Object(j.jsxs)("ul",{className:"ingredients",children:[Object(j.jsx)("li",{children:Object(j.jsx)("h2",{children:i.strDrink.toUpperCase()})}),Object(j.jsxs)("li",{children:[i.strIngredient1," ",i.strMeasure1]}),Object(j.jsxs)("li",{children:[i.strIngredient2," ",i.strMeasure2]}),Object(j.jsxs)("li",{children:[i.strIngredient3," ",i.strMeasure3]}),Object(j.jsxs)("li",{children:[i.strIngredient4," ",i.strMeasure4]}),Object(j.jsxs)("li",{children:[i.strIngredient5," ",i.strMeasure5]}),Object(j.jsxs)("li",{children:[i.strIngredient6," ",i.strMeasure6]})]}),Object(j.jsx)("h2",{children:"MIX IT"}),Object(j.jsx)("p",{className:"recipe",children:i.strInstructions})]})})}function N(e){var t=e.searchValue,c=a.a.useState([]),n=Object(l.a)(c,2),s=n[0],i=n[1],r=a.a.useState(!0),o=Object(l.a)(r,2),u=o[0],h=o[1],b=function(){h(!u)},d=a.a.useState(""),O=Object(l.a)(d,2),x=O[0],m=O[1],p=a.a.useState(!1),f=Object(l.a)(p,2),v=f[0],k=f[1],N=function(){k(!v)};return a.a.useEffect((function(){g.a.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(t)).then((function(e){if(e.data.drinks){for(var t=[],c=e.data.drinks,n=0;c.length>0&&n<12;n++){var a=c.splice(Math.floor(Math.random()*c.length),1)[0];t.push(a)}console.log(t),i(t)}else alert("Please enter a valid ingredient")})).catch((function(e){return console.log(e)}))}),[t,u]),Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsxs)("h1",{children:["Here is a cocktail selection mixed with ",t]}),Object(j.jsxs)("div",{className:"grid-search",children:[v?Object(j.jsx)(A,{idCocktail:x,handleCocktail:N}):null,s.map((function(e,t){return Object(j.jsxs)("section",{className:"hover",id:t.toString(),onClick:function(){m(e.idDrink.toString()),console.log("idDrink recup\xe9r\xe9e ".concat(x)),N()},role:"button",tabIndex:0,onKeyDown:N,children:[Object(j.jsx)("img",{src:e.strDrinkThumb,alt:"cocktail",className:"result-image"}),Object(j.jsx)("h4",{children:e.strDrink.toUpperCase()})]})})),Object(j.jsx)("button",{type:"button",className:"search-button",onClick:b,children:"Click here if you want more results"})]}),Object(j.jsxs)("div",{className:"grid-search-mobi",children:[v?Object(j.jsx)(A,{idCocktail:x,handleCocktail:N}):null,s.slice(-6).map((function(e,t){return Object(j.jsxs)("section",{className:"hover",id:t.toString(),onClick:function(){m(e.idDrink.toString()),console.log("idDrink recup\xe9r\xe9e ".concat(x)),N()},role:"button",tabIndex:0,onKeyDown:N,children:[Object(j.jsx)("img",{src:e.strDrinkThumb,alt:"cocktail",className:"result-image"}),Object(j.jsx)("h4",{children:e.strDrink.toUpperCase()})]})})),Object(j.jsx)("button",{type:"button",className:"search-button",onClick:b,children:"Click here if you want more results"})]})]})}c(55);function C(){return Object(j.jsx)("button",{type:"button",className:"arrow",onClick:function(){window.scroll({top:0,behavior:"smooth"})}})}var S=function(){var e=a.a.useState(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=a.a.useState(!1),i=Object(l.a)(s,2),r=i[0],b=i[1],O=a.a.useState(!1),m=Object(l.a)(O,2),g=m[0],A=m[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)(C,{}),Object(j.jsx)(p,{handleValue:function(e){n(e.target.value),b(!1)},searchValue:c,handleEnter:function(e){"Enter"===e.key&&(b(!0),A(!1),console.log(c))},showSuggestions:g,setShowSuggestions:A}),c&&r?Object(j.jsx)(N,{searchValue:c}):Object(j.jsx)(f,{}),Object(j.jsx)(h,{}),Object(j.jsx)(u,{}),Object(j.jsx)(k,{})]})}),Object(j.jsx)(o.a,{path:"/mapbar",element:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(v,{})]})})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(S,{})})}),document.getElementById("root")),w()}},[[56,1,2]]]);
//# sourceMappingURL=main.96b37d2e.chunk.js.map