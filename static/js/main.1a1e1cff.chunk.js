(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),r=a.n(c),l=(a(14),a(1)),i=a(2),o=a(4),m=a(3),d=a(5),u=(a(7),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleCheckItem,n=t.lock?"fas fa-ban hidden":t.selected?"far fa-check-square":"far fa-square";return s.a.createElement("div",{className:"item"},s.a.createElement("span",null,t.name),s.a.createElement("div",{className:"btnCheckbox",onClick:function(){return a()}},s.a.createElement("i",{className:n})))}}]),t}(n.Component)),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={showList:!0},a.toggleList=function(){a.setState({showList:!a.state.showList})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.handleCheckAllItem,c=t.handleCheckItem,r=a.lock?"far fa-minus-square hidden":a.selected?"far fa-minus-square":"far fa-square",l=a.itemList.map(function(e,t){return s.a.createElement(u,{key:t,item:e,handleCheckItem:function(){return c(a.id,e.id)}})}),i=this.state.showList?"itemList":"itemList hide";return s.a.createElement("div",{className:i},s.a.createElement("div",{className:"nameList"},s.a.createElement("div",{className:"btnToggle",onClick:function(){return e.toggleList()}},s.a.createElement("i",{className:"fas fa-caret-down"}),s.a.createElement("i",{className:"fas fa-caret-right"})),s.a.createElement("span",null,a.title),s.a.createElement("div",{className:"btnCheckbox",onClick:function(){return n(a.id)}},s.a.createElement("i",{className:r}))),s.a.createElement("div",{className:"boxItems"},l))}}]),t}(n.Component),h=[{id:"mobile",name:"Moblie Only"},{id:"desktop",name:"Desktop Only"}],p=[{id:"facebook",title:"Facebook",itemList:[{id:"feed",name:"Feeds",default:!0},{id:"instant_article",name:"Instant Articles",device:"mobile",default:!0},{id:"right_hand_column",name:"Right column",default:!0},{id:"marketplace",name:"Marketplace",device:"mobile",default:!0},{id:"story",name:"Stories",default:!0}]},{id:"instagram",title:"Instagram",itemList:[{id:"stream",name:"Stream"},{id:"story",name:"Stories",default:!0}]},{id:"audience_network",title:"Audience Network",itemList:[{id:"classic",name:"Classic",default:!0},{id:"instream_video",name:"In-stream Video",default:!0},{id:"rewarded_video",name:"Rewarded Video",default:!0}]},{id:"messenger",title:"Messenger",itemList:[{id:"messenger_home",name:"Messenger Home",default:!0},{id:"sponsored_messages",name:"Sponsored Mssages",default:!1},{id:"story",name:"Stories",device:"mobile",default:!0}]}],k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={device:"",platforms:[],alert:!1,contentAlert:""},a.handleCheckAllItem=function(e){var t=a.state.platforms,n=[];t.map(function(t){return t.selected=t.id===e?!t.selected:t.selected,t.itemList.map(function(a){return a.selected=t.id===e?t.selected:a.selected,n[t.id+a.id]=a.selected,a}),t}),a.checkRules(n),a.setState({platforms:t})},a.handleCheckItem=function(e,t){var n=a.state.platforms,s=!1,c=[];n.map(function(a){return s=!1,a.itemList.map(function(n){return a.id===e&&n.id===t&&(n.selected=!n.selected),s=!!n.selected||s,c[a.id+n.id]=n.selected,c}),a.selected=s,a}),a.checkRules(c),a.setState({platforms:n})},a.checkRules=function(e){return e.facebookinstant_article&&!e.facebookfeed?a.setState({alert:!0,contentAlert:"To use Facebook Instant-Articles, please select the Facebook Feeds placement."}):e.facebookmarketplace&&!e.facebookfeed?a.setState({alert:!0,contentAlert:"To use Facebook Marketplace, please select the Facebook Feeds placement."}):e.instagramstory&&e.instagramstream?a.setState({alert:!0,contentAlert:"Cannot select both options (Instagram Stream, Instagram Stories) for the same ad set."}):e.messengermessenger_home&&!e.facebookfeed?a.setState({alert:!0,contentAlert:"To use Messenger Home, please select the Facebook Feeds placement."}):!e.messengerstory||e.facebookfeed||e.instagramstory?a.setState({alert:!1,contentAlert:""}):a.setState({alert:!0,contentAlert:"To use Messenger Story, please select the Facebook Feeds or Instagram Story placement."})},a.changeValueSelect=function(e){var t=e.target.value,n=a.state.platforms;n.map(function(e){return e.itemList.map(function(e){return e.lock="desktop"===t&&"mobile"===e.device,e}),e}),a.setState({device:t,platforms:n})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=[];p.map(function(t){var a=t,n=!1;return a.itemList.map(function(e){return e.lock=!1,e.selected=e.default,n=!!e.default||n,e}),a.lock=!1,a.selected=n,e.push(a)}),this.setState({platforms:e})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=h.map(function(e,t){return s.a.createElement("option",{value:e.id,key:t},e.name)}),a=this.state,n=a.alert,c=a.contentAlert,r=a.platforms.map(function(t,a){return s.a.createElement(f,{key:a,list:t,handleCheckAllItem:function(t){return e.handleCheckAllItem(t)},handleCheckItem:function(t,a){return e.handleCheckItem(t,a)}})});return s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("a",{href:"https://github.com/thientam59/reactAssignment_tctav",target:"_blank",rel:"noopener noreferrer"},"View all the source files")),s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"title"},"Device types"),s.a.createElement("select",{value:this.state.device,onChange:function(t){return e.changeValueSelect(t)}},s.a.createElement("option",{value:"all"},"All devices (recommended)"),t)),s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"title"},"Platforms"),n&&s.a.createElement("div",{className:"alert"},s.a.createElement("span",null,s.a.createElement("i",{className:"fas fa-exclamation-circle"})),s.a.createElement("p",null,c)),s.a.createElement("div",{className:"content"},r)))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(k,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.1a1e1cff.chunk.js.map