(this.webpackJsonpgutenberg=this.webpackJsonpgutenberg||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(58),c=a.n(r),i=(a(71),a(72),a(152)),o=a(153),m=a(64),s=a(154),u=a(28),p=a(43),g=a(63),d=a(42),b=a(19),E=a(17),h=a(5),f=a(20),k=a(18),x=a(39),y=a.n(x),v=a(59);var N=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(!0),i=Object(k.a)(c,2),o=i[0],m=i[1];function s(){return(s=Object(v.a)(y.a.mark((function t(){var a,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.text();case 5:n=t.sent,r(n),m(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),[l,o]},S=a(60),w=a.n(S);function A(e){return l.a.createElement("img",Object.assign({},e,{className:"img-fluid"}))}function T(){var e=Object(h.f)().topicId,t=N("/article/"+e+".md"),a=Object(k.a)(t,1)[0],n=a.toString().split("\n")[0],r=a.toString().split("\n");r.splice(0,1);var c=r.join("\n");return l.a.createElement(i.a,{className:"text-left mb-4"},l.a.createElement("h4",{className:"mb-4"},n),l.a.createElement(w.a,{renderers:{image:A}},c))}function j(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,{className:"text-center"},l.a.createElement(J,null),l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement(o.a,{className:"text-center sticky-top"},l.a.createElement(m.a,null,l.a.createElement(E.b,{onClick:function(){window.scrollTo(0,0)},to:"/"},"Main")),null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/"},l.a.createElement(R,null))))),l.a.createElement(I,null)))}function F(e){return l.a.createElement(f.a,{className:"mb-3 btn btn-outline-dark"},l.a.createElement(E.b,{className:"text-reset text-decoration-none",to:"/".concat(e.linkToFetch)},l.a.createElement(f.a.Body,null,e.lang?l.a.createElement(l.a.Fragment,null,e.title?l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"mb-1"},l.a.createElement("span",{className:"badge badge-pill mr-1"},e.lang),e.title)):null):l.a.createElement(l.a.Fragment,null,e.title?l.a.createElement("h6",{className:"mb-1"},e.title):null),e.body?l.a.createElement("p",{className:"mb-1"},e.body):null,e.tags.map((function(e){return l.a.createElement("span",{className:"badge badge-primary mr-1"},e)})))))}function B(e){return l.a.createElement(f.a,{className:"mb-3 btn btn-outline-dark"},l.a.createElement("a",{className:"text-reset text-decoration-none",href:e.link},l.a.createElement(f.a.Body,null,e.title?l.a.createElement("h6",{className:"mb-1"},e.title):null,e.body?l.a.createElement("p",{className:"mb-1"},e.body):null,e.tags.map((function(e){return l.a.createElement("span",{className:"badge badge-primary mr-1"},e)})))))}function R(){return l.a.createElement("div",null,l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/:topicId"},l.a.createElement(T,null)),l.a.createElement(h.a,{path:"/"},l.a.createElement(d.a,{className:"justify-content-between"},l.a.createElement(b.a,{xs:12,sm:6,md:6,lg:6,xl:6},l.a.createElement("h5",{className:"mb-3"},"Projects"),l.a.createElement(B,{title:"ASATools",body:"Frontend for Apple Search Ads Attribution marketing analytics",link:"https://asa.tools",tags:["JavaScript","React","Antd"]}),l.a.createElement(B,{title:"ChatWords",body:"Telegram bot - translator and dictionary for learning foreign languages",link:"https://chatwords.app",tags:["Java","Spring","MongoDB","Telegram"]}),l.a.createElement(B,{title:"Kartvelian Online",body:"Tool for learning Georgian alphabet",link:"https://kartvelian.online",tags:["JavaScript","React","Antd"]}),l.a.createElement(B,{title:"Axelrod Natalya",body:"Psychologist website",link:"https://axelrodnatalya.com",tags:["TypeScript","React","Antd","Java","Spring"]}),l.a.createElement(B,{title:"Gutenberg",body:"Platform of this blog",link:"https://github.com/axelrodvl/gutenberg",tags:["React"]}),l.a.createElement(B,{title:"Dana | Tattoo artist",body:"Tattoo artist website",link:"https://danatattooist.com",tags:["Bootstrap"]}),l.a.createElement(B,{title:"IBM MQ Client",body:"CLI for IBM MQ",link:"https://github.com/axelrodvl/ibm-mq-client",tags:["Java","IBM MQ"]}),l.a.createElement(B,{title:"Jenkins toolkit for Kubernetes",body:"Java/Gradle building pipelines for Jenkins in Kubernetes",link:"https://github.com/axelrodvl/jenkins-toolkit",tags:["Jenkins","Kubernetes"]}),l.a.createElement(B,{title:"Skyduck Web",body:"Frontend for Skyduck",link:"https://skyduck.app/cabinet/",tags:["JavaScript","React","Bootstrap"]}),l.a.createElement(B,{title:"toU \u2013 couple game",body:"Backend for mobile application",link:"https://apps.apple.com/ru/app/tou-couple-game/id1478656277",tags:["Java","Spring","MongoDB"]})),l.a.createElement(b.a,{xs:12,sm:6,md:6,lg:6,xl:6},l.a.createElement("h5",{className:"mb-3"},"Articles"),l.a.createElement(B,{title:"Project Reactor and WebFlux presentation",link:"https://axelrodvl.github.io/project-reactor-and-webflux-presentation/",tags:["Java","Spring","WebFlux","Project Reactor"]}),l.a.createElement(F,{title:"\u041f\u043b\u0430\u043d \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432 backend \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443",lang:"RU",linkToFetch:"backend-plan",tags:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430","Backend","\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"]}),l.a.createElement(F,{title:"\u041e\u0431\u0437\u043e\u0440 IBM App Connect Enterprise",lang:"RU",linkToFetch:"ibm-app-connect-enterprise",tags:["IBM","App Connect Enterprise","Integration Bus"]}),l.a.createElement(F,{title:"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0434\u043e\u043c\u0430\u0448\u043d\u044e\u044e \u043c\u0435\u0442\u0435\u043e\u0441\u0442\u0430\u043d\u0446\u0438\u044e \u0441 Telegram \u0431\u043e\u0442\u043e\u043c \u043d\u0430 Raspberry Pi",lang:"RU",linkToFetch:"raspberry-pi-meteo",tags:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"]}),l.a.createElement(F,{title:"Airplane ground handling - \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0430\u0437\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u043c\u043e\u043b\u0435\u0442\u043e\u0432 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u043c \u043d\u0430 \u043f\u0435\u0440\u0440\u043e\u043d\u0435",lang:"RU",linkToFetch:"airplane-ground-handling",tags:["\u0410\u0432\u0438\u0430\u0446\u0438\u044f"]}),l.a.createElement(F,{title:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0438 \u0432\u044b\u0441\u043e\u0442\u0430 \u0432 \u0430\u0432\u0438\u0430\u0446\u0438\u0438, \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u043b\u0451\u0442\u0435 \u0431\u0430\u0440\u043e\u043c\u0435\u0442\u0440 \u0438 GPS \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 (\u043f\u043e\u0447\u0442\u0438) \u0431\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u043d\u043e",lang:"RU",linkToFetch:"airplane-speed-and-gps",tags:["\u0410\u0432\u0438\u0430\u0446\u0438\u044f"]}),l.a.createElement(F,{title:"\u0412\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f",lang:"RU",linkToFetch:"verification-validation",tags:["ISO 9000:2005"]}),l.a.createElement(F,{title:"\u041f\u043e\u0434\u043d\u0438\u043c\u0430\u0435\u043c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u0433 \u043d\u0430 Hugo",lang:"RU",linkToFetch:"how-to-blog",tags:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"]}))))))}function J(){return l.a.createElement(s.a,{className:"mt-4"},l.a.createElement("h3",null,"Vadim Axelrod"),l.a.createElement("span",null,"Software Developer"),l.a.createElement("p",{className:"mt-1 mb-0"},l.a.createElement("a",{href:"https://github.com/axelrodvl"},l.a.createElement(u.a,{icon:g.a})," axelrodvl")),l.a.createElement("p",{className:"mb-0"},l.a.createElement("a",{href:"mailto:vadim@axelrod.co"},l.a.createElement(u.a,{icon:p.a})," vadim@axelrod.co")),l.a.createElement("p",{className:"mb-0"},l.a.createElement("a",{href:"cv/CV-Axelrod_Vadim.pdf"},l.a.createElement(u.a,{icon:p.b})," CV")))}function I(){return l.a.createElement(s.a,null,l.a.createElement(i.a,{fluid:!0},l.a.createElement(d.a,{className:"align-items-end"},l.a.createElement(b.a,{className:"col-auto text-left"},l.a.createElement("p",{className:"mb-0 font-weight-bold"},"Vadim Axelrod"),l.a.createElement("small",{className:"d-block"},"\xa9 ",(new Date).getFullYear())),l.a.createElement(b.a,{className:"text-right"},l.a.createElement("p",{className:"mb-0"},"Powered by"),l.a.createElement("p",{className:"mb-0 font-weight-bold"},l.a.createElement("a",{href:"https://github.com/axelrodvl/gutenberg",title:"gutenberg"},"gutenberg"))))))}c.a.render(l.a.createElement(j,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(151)},71:function(e,t,a){},72:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.3f996b59.chunk.js.map