(this.webpackJsonpgutenberg=this.webpackJsonpgutenberg||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(58),r=a.n(c),m=(a(71),a(72),a(152)),s=a(153),i=a(64),o=a(154),u=a(28),p=a(43),E=a(63),b=a(42),d=a(19),g=a(17),h=a(5),f=a(20),k=a(18),y=a(39),v=a.n(y),N=a(59);var x=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!0),m=Object(k.a)(r,2),s=m[0],i=m[1];function o(){return(o=Object(N.a)(v.a.mark((function t(){var a,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.text();case 5:n=t.sent,c(n),i(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),[l,s]},B=a(60),w=a.n(B);function S(e){return l.a.createElement("img",Object.assign({},e,{className:"img-fluid"}))}function T(){var e=Object(h.f)().topicId,t=x("/article/"+e+".md"),a=Object(k.a)(t,1)[0],n=a.toString().split("\n")[0],c=a.toString().split("\n");c.splice(0,1);var r=c.join("\n");return l.a.createElement(m.a,{className:"text-left mb-4"},l.a.createElement("h4",{className:"mb-4"},n),l.a.createElement(w.a,{renderers:{image:S}},r))}function j(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{className:"text-center"},l.a.createElement(F,null),l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement(s.a,{className:"text-center sticky-top"},l.a.createElement(i.a,null,l.a.createElement(g.b,{onClick:function(){window.scrollTo(0,0)},to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/"},l.a.createElement(O,null))))),l.a.createElement(M,null)))}function I(e){return l.a.createElement(f.a,{className:"mb-3 btn btn-outline-dark"},l.a.createElement(g.b,{className:"text-reset text-decoration-none",to:"/".concat(e.linkToFetch)},l.a.createElement(f.a.Body,null,e.title?l.a.createElement("h6",{className:"mb-1"},e.title):null,e.body?l.a.createElement("p",{className:"mb-1"},e.body):null,e.tags.map((function(e){return l.a.createElement("span",{className:"badge badge-primary mr-1"},e)})))))}function J(e){return l.a.createElement(f.a,{className:"mb-3 btn btn-outline-dark"},l.a.createElement("a",{className:"text-reset text-decoration-none",href:e.link},l.a.createElement(f.a.Body,null,e.title?l.a.createElement("h6",{className:"mb-1"},e.title):null,e.body?l.a.createElement("p",{className:"mb-1"},e.body):null,e.tags.map((function(e){return l.a.createElement("span",{className:"badge badge-primary mr-1"},e)})))))}function O(){return l.a.createElement("div",null,l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/:topicId"},l.a.createElement(T,null)),l.a.createElement(h.a,{path:"/"},l.a.createElement(b.a,{className:"justify-content-between"},l.a.createElement(d.a,{xs:12,sm:6,md:6,lg:6,xl:6},l.a.createElement("h5",{className:"mb-3"},"\u0421\u0442\u0430\u0442\u044c\u0438"),l.a.createElement(I,{title:"\u041f\u043b\u0430\u043d \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432 backend \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443",linkToFetch:"backend-plan",tags:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430","Backend","\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"]}),l.a.createElement(I,{title:"\u041e\u0431\u0437\u043e\u0440 IBM App Connect Enterprise",linkToFetch:"ibm-app-connect-enterprise",tags:["IBM","App Connect Enterprise","Integration Bus"]}),l.a.createElement(I,{title:"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0434\u043e\u043c\u0430\u0448\u043d\u044e\u044e \u043c\u0435\u0442\u0435\u043e\u0441\u0442\u0430\u043d\u0446\u0438\u044e \u0441 Telegram \u0431\u043e\u0442\u043e\u043c \u043d\u0430 Raspberry Pi",linkToFetch:"raspberry-pi-meteo",tags:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"]}),l.a.createElement(I,{title:"Airplane ground handling - \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0430\u0437\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u043c\u043e\u043b\u0435\u0442\u043e\u0432 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u043c \u043d\u0430 \u043f\u0435\u0440\u0440\u043e\u043d\u0435",linkToFetch:"airplane-ground-handling",tags:["\u0410\u0432\u0438\u0430\u0446\u0438\u044f"]}),l.a.createElement(I,{title:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0438 \u0432\u044b\u0441\u043e\u0442\u0430 \u0432 \u0430\u0432\u0438\u0430\u0446\u0438\u0438, \u0438 \u043f\u043e\u0447\u0435\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u043b\u0451\u0442\u0435 \u0431\u0430\u0440\u043e\u043c\u0435\u0442\u0440 \u0438 GPS \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 (\u043f\u043e\u0447\u0442\u0438) \u0431\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u043d\u043e",linkToFetch:"airplane-speed-and-gps",tags:["\u0410\u0432\u0438\u0430\u0446\u0438\u044f"]}),l.a.createElement(I,{title:"\u0412\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f",linkToFetch:"verification-validation",tags:["ISO 9000:2005"]}),l.a.createElement(I,{title:"\u041f\u043e\u0434\u043d\u0438\u043c\u0430\u0435\u043c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u0433 \u043d\u0430 Hugo",linkToFetch:"how-to-blog",tags:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"]})),l.a.createElement(d.a,{xs:12,sm:6,md:6,lg:6,xl:6},l.a.createElement("h5",{className:"mb-3"},"\u0420\u0430\u0431\u043e\u0442\u044b"),l.a.createElement(J,{title:"ChatWords",body:"Telegram \u0431\u043e\u0442 - \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0438 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u0434\u043b\u044f \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u043b\u0435\u043a\u0441\u0438\u043a\u0438",link:"https://chatwords.app",tags:["Java","Telegram"]}),l.a.createElement(J,{title:"Gutenberg",body:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u0433\u0430",link:"https://github.com/axelrodvl/gutenberg",tags:["React"]}),l.a.createElement(J,{title:"IBM MQ Client",body:"CLI \u0434\u043b\u044f IBM MQ",link:"https://github.com/axelrodvl/ibm-mq-client",tags:["Java","IBM MQ"]}),l.a.createElement(J,{title:"Jenkins toolkit for Kubernetes",body:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 pipeline \u043d\u0430 Jenkins \u0432 Kubernetes \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 Java/Gradle",link:"https://github.com/axelrodvl/jenkins-toolkit",tags:["Jenkins","Kubernetes"]}),l.a.createElement(J,{title:"Smirnov Tennis",body:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442 \u0442\u0440\u0435\u043d\u0435\u0440\u0430 \u043f\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u043c\u0443 \u0442\u0435\u043d\u043d\u0438\u0441\u0443",link:"https://smirnovtennis.com",tags:["JavaScript","React","Bootstrap"]}),l.a.createElement(J,{title:"Skyduck Web",body:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 frontend \u0434\u043b\u044f Skyduck",link:"https://skyduck.app/cabinet/",tags:["JavaScript","React","Bootstrap"]}),l.a.createElement(J,{title:"toU \u2013 couple game",body:"Backend \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",link:"https://apps.apple.com/ru/app/tou-couple-game/id1478656277",tags:["Java","Spring","MongoDB"]}),l.a.createElement(J,{title:"youlost.today",body:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u043e\u0432 \u0432\u0430\u043b\u044e\u0442 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 COVID-19",link:"https://youlost.today/",tags:["JavaScript"]}))))))}function F(){return l.a.createElement(o.a,{className:"mt-4"},l.a.createElement("h3",null,"\u0412\u0430\u0434\u0438\u043c \u0410\u043a\u0441\u0435\u043b\u044c\u0440\u043e\u0434"),l.a.createElement("span",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u041f\u041e"),l.a.createElement("p",{className:"mt-1 mb-0"},l.a.createElement("a",{href:"https://github.com/axelrodvl"},l.a.createElement(u.a,{icon:E.a})," axelrodvl")),l.a.createElement("p",{className:"mb-0"},l.a.createElement("a",{href:"mailto:vadim@axelrod.co"},l.a.createElement(u.a,{icon:p.a})," vadim@axelrod.co")),l.a.createElement("p",{className:"mb-0"},l.a.createElement("a",{href:"cv/CV-Axelrod_Vadim.pdf"},l.a.createElement(u.a,{icon:p.b})," \u0420\u0435\u0437\u044e\u043c\u0435")))}function M(){return l.a.createElement(o.a,null,l.a.createElement(m.a,{fluid:!0},l.a.createElement(b.a,{className:"align-items-end"},l.a.createElement(d.a,{className:"col-auto text-left"},l.a.createElement("p",{className:"mb-0 font-weight-bold"},"Vadim Axelrod"),l.a.createElement("small",{className:"d-block"},"\xa9 ",(new Date).getFullYear())),l.a.createElement(d.a,{className:"text-right"},l.a.createElement("p",{className:"mb-0"},"Powered by"),l.a.createElement("p",{className:"mb-0 font-weight-bold"},l.a.createElement("a",{href:"https://github.com/axelrodvl/gutenberg",title:"gutenberg"},"gutenberg"))))))}r.a.render(l.a.createElement(j,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(151)},71:function(e,t,a){},72:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.e8c6cad9.chunk.js.map