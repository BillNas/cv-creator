(this["webpackJsonpcv-creator"]=this["webpackJsonpcv-creator"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),s=n(11),c=n.n(s),l=(n(16),n(17),n(5)),d=n(6),o=n(1),r=n(8),h=n(7),j=n(4),u=n(0),b=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={mode:"edit",name:"",email:"",phone:"",location:""},i.handleKeyDown=i.handleKeyDown.bind(Object(o.a)(i)),i.handleChange=i.handleChange.bind(Object(o.a)(i)),i.handleSave=i.handleSave.bind(Object(o.a)(i)),i.handleEdit=i.handleEdit.bind(Object(o.a)(i)),i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.Input.focus()}},{key:"handleKeyDown",value:function(e){if("Enter"==e.key){var t=e.target.form,n=Array.prototype.indexOf.call(t,e.target);t.elements[n+1]?t.elements[n+1].focus():(this.setState({mode:"view"}),console.log(this.state))}}},{key:"handleChange",value:function(e){"nameInput"==e.target.id&&this.setState({name:e.target.value}),"emailInput"==e.target.id&&this.setState({email:e.target.value}),"phoneInput"==e.target.id&&this.setState({phone:e.target.value}),"locationInput"==e.target.id&&this.setState({location:e.target.value})}},{key:"handleSave",value:function(e){this.setState({mode:"view"})}},{key:"handleEdit",value:function(e){this.setState({mode:"edit"})}},{key:"render",value:function(){var e,t,n=this;return"view"==this.state.mode?Object(u.jsxs)("div",(e={id:"GeneralInfo",className:"view"},Object(j.a)(e,"className","nes-container with-title"),Object(j.a)(e,"children",[Object(u.jsx)("h2",{className:"title",children:"General Information"}),Object(u.jsx)("form",{children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["name: ",this.state.name]}),Object(u.jsxs)("li",{children:["email: ",this.state.email]}),Object(u.jsxs)("li",{children:["phone no: ",this.state.phone]}),Object(u.jsxs)("li",{children:["location: ",this.state.location]})]})}),Object(u.jsx)("button",{id:"editbtn",onClick:this.handleEdit,className:"nes-btn is-primary",children:"Edit"})]),e)):"edit"==this.state.mode?Object(u.jsxs)("div",(t={id:"GeneralInfo",className:"edit"},Object(j.a)(t,"className","nes-container with-title"),Object(j.a)(t,"children",[Object(u.jsx)("h2",{className:"title",children:"General Information"}),Object(u.jsx)("form",{children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["name:",Object(u.jsx)("input",{type:"text",id:"nameInput",ref:function(e){n.Input=e},onKeyDown:this.handleKeyDown,onChange:this.handleChange,className:"nes-input",value:this.state.name})]}),Object(u.jsxs)("li",{children:["email:",Object(u.jsx)("input",{type:"email",id:"emailInput",ref:function(e){n.Input=e},onKeyDown:this.handleKeyDown,onChange:this.handleChange,className:"nes-input",value:this.state.email})]}),Object(u.jsxs)("li",{children:["phone no:",Object(u.jsx)("input",{type:"text",id:"phoneInput",ref:function(e){n.Input=e},onKeyDown:this.handleKeyDown,onChange:this.handleChange,className:"nes-input",value:this.state.phone})]}),Object(u.jsxs)("li",{children:["location:",Object(u.jsx)("input",{type:"text",id:"locationInput",ref:function(e){n.Input=e},onKeyDown:this.handleKeyDown,onChange:this.handleChange,className:"nes-input",value:this.state.location})]})]})}),Object(u.jsx)("button",{id:"savebtn",onClick:this.handleSave,className:"nes-btn is-success",children:"SAVE"})]),t)):void 0}}]),n}(i.Component),m=n(9),p=n(3),O=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={items:[],input:{position:"",company:"",description:"",startDate:"",endDate:"",ongoing:""},mode:"edit"},i.handleKeyPress=i.handleKeyPress.bind(Object(o.a)(i)),i.handleChange=i.handleChange.bind(Object(o.a)(i)),i.handleSave=i.handleSave.bind(Object(o.a)(i)),i.handleAdd=i.handleAdd.bind(Object(o.a)(i)),i.handleEdit=i.handleEdit.bind(Object(o.a)(i)),i}return Object(d.a)(n,[{key:"handleChange",value:function(e){if("ongoing"===e.target.name){var t=this.state.input,n=e.target.name;this.setState({input:Object(p.a)(Object(p.a)({},t),{},Object(j.a)({},n,e.target.checked))})}else{var i=this.state.input,a=e.target.name;this.setState({input:Object(p.a)(Object(p.a)({},i),{},Object(j.a)({},a,e.target.value))})}}},{key:"handleKeyPress",value:function(e){if("Enter"===e.key){this.handleChange(e);var t=e.target.form,n=Array.prototype.indexOf.call(t,e.target);console.log(t),t.elements[n+1]?t.elements[n+1].focus():(this.setState({mode:"view"}),console.log(this.state))}}},{key:"handleSave",value:function(){var e=Object(p.a)(Object(p.a)({},this.state.input),{},{id:[this.state.items.length]});if(""===this.state.input.position)alert("Please fill empty fields!");else if(""===this.state.input.company)alert("Please fill empty fields!");else if(""===this.state.input.description)alert("Please fill empty fields!");else if(""===this.state.input.startDate)alert("Please fill empty fields!");else{var t=[].concat(Object(m.a)(this.state.items),[e]);this.setState({items:t,mode:"view"})}}},{key:"handleAdd",value:function(){this.setState({mode:"edit",input:{position:"",company:"",description:"",startDate:"",endDate:"",ongoing:""}})}},{key:"handleEdit",value:function(e){var t=this,n={position:this.state.items[e].position,company:this.state.items[e].company,description:this.state.items[e].description,startDate:this.state.items[e].startDate,endDate:this.state.items[e].endDate,ongoing:this.state.items[e].endDate};this.setState({input:n},(function(){var n=t.state.items,i=[].concat(Object(m.a)(n.slice(0,e)),Object(m.a)(n.slice(e+1)));t.setState({items:i,mode:"edit"},(function(){console.log(t.state)}))}))}},{key:"render",value:function(){return"edit"==this.state.mode?(console.log("From inside render"),console.log(this.state),Object(u.jsxs)("div",{id:"WorkExperience",className:"nes-container with-title",children:[Object(u.jsx)("h2",{className:"title",children:"Work Experience"}),0===this.state.items.length?"":Object(u.jsx)(v,{items:this.state.items,handleEdit:this.handleEdit}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"nes-field",children:[Object(u.jsx)("label",{htmlFor:"role",children:"role: "}),Object(u.jsx)("input",{type:"text",id:"roleInput",className:"nes-input",placeholder:"unpaid intern? :(",name:"position",onChange:this.handleChange,onKeyDown:this.handleKeyPress,value:this.state.input.position,required:!0})]}),Object(u.jsxs)("div",{className:"nes-field",children:[Object(u.jsx)("label",{htmlFor:"company",children:"company: "}),Object(u.jsx)("input",{type:"text",id:"companyInput",className:"nes-input",placeholder:"Broke ass $tartup? :/",name:"company",onChange:this.handleChange,onKeyDown:this.handleKeyPress,value:this.state.input.company,required:!0})]}),Object(u.jsxs)("div",{className:"nes-field",children:[Object(u.jsx)("label",{htmlFor:"description",children:"describe your role: "}),Object(u.jsx)("textarea",{id:"descriptionInput",rows:"5",className:"nes-textarea",name:"description",placeholder:"trying to understand old codebases...",onChange:this.handleChange,onKeyDown:this.handleKeyPress,value:this.state.input.description,required:!0})]}),Object(u.jsxs)("div",{id:"startDate",children:[Object(u.jsx)("label",{htmlFor:"startDate",children:"Joining date: "}),Object(u.jsx)("input",{type:"month",className:"nes-input",name:"startDate",id:"startDateInput",onChange:this.handleChange,value:this.state.input.startDate,required:!0})]}),Object(u.jsxs)("div",{id:"endDate",children:[Object(u.jsx)("label",{htmlFor:"endDate",children:"Leaving Date: "}),Object(u.jsx)("input",{type:"month",className:"nes-input",name:"endDate",id:"endDateInput",value:this.state.input.endDate,onChange:this.handleChange})]}),Object(u.jsx)("div",{className:"nes-field",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",className:"nes-checkbox",id:"currentWork",onChange:this.handleChange,value:this.state.input.ongoing?"on":"",name:"ongoing"}),Object(u.jsx)("span",{children:"Currently employed"})]})})]}),Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)("button",{id:"savebtn",onClick:this.handleSave,className:"nes-btn is-success",children:"SAVE"})})]})):"view"==this.state.mode?Object(u.jsxs)("div",{id:"WorkExperience",className:"nes-container with-title",children:[Object(u.jsx)("h2",{className:"title",children:" Work Experience "}),Object(u.jsx)(v,{items:this.state.items,handleEdit:this.handleEdit}),Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)("button",{id:"addbtn",onClick:this.handleAdd,className:"nes-btn is-primary",children:"Add Another"})})]}):void 0}}]),n}(i.Component),v=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).onEdit=i.onEdit.bind(Object(o.a)(i)),i}return Object(d.a)(n,[{key:"onEdit",value:function(e){this.props.handleEdit(e.target.id)}},{key:"render",value:function(){var e=this,t=["January","February","March","April","May","June","July","August","September","October","November","December"];return console.log(this.props.items),this.props.items.map((function(n){var i=n.endDate,a=new Date(n.startDate),s=t[a.getMonth()]+", "+a.getFullYear(),c="";return""==n.endDate?c="Present":(i=new Date(n.endDate),c=t[i.getMonth()]+", "+i.getFullYear()),Object(u.jsxs)("div",{className:"WorkExperienceEntry nes-container",id:n.id,children:[Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["role: ",n.position," "]}),Object(u.jsxs)("li",{children:["company: ",n.company]}),Object(u.jsxs)("li",{children:["job description: ",n.description]}),Object(u.jsxs)("li",{children:["duration: ",s," to ",c]})]}),Object(u.jsx)("button",{id:n.id,className:"nes-btn is-primary",onClick:e.onEdit,children:" Edit "})]})}))}}]),n}(i.Component),x=O,y=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={items:[],input:{qualification:"",institute:"",description:"",startDate:"",endDate:"",ongoing:""},mode:"edit"},i.handleKeyPress=i.handleKeyPress.bind(Object(o.a)(i)),i.handleChange=i.handleChange.bind(Object(o.a)(i)),i.handleSave=i.handleSave.bind(Object(o.a)(i)),i.handleAdd=i.handleAdd.bind(Object(o.a)(i)),i.handleEdit=i.handleEdit.bind(Object(o.a)(i)),i}return Object(d.a)(n,[{key:"handleChange",value:function(e){if("ongoing"===e.target.name){var t=this.state.input,n=e.target.name;this.setState({input:Object(p.a)(Object(p.a)({},t),{},Object(j.a)({},n,e.target.checked))})}else{var i=this.state.input,a=e.target.name;this.setState({input:Object(p.a)(Object(p.a)({},i),{},Object(j.a)({},a,e.target.value))})}}},{key:"handleKeyPress",value:function(e){if("Enter"===e.key){this.handleChange(e);var t=e.target.form,n=Array.prototype.indexOf.call(t,e.target);console.log(t),t.elements[n+1]?t.elements[n+1].focus():(this.setState({mode:"view"}),console.log(this.state))}}},{key:"handleSave",value:function(){var e=Object(p.a)(Object(p.a)({},this.state.input),{},{id:[this.state.items.length]});if(""===this.state.input.position)alert("Please fill empty fields!");else if(""===this.state.input.company)alert("Please fill empty fields!");else if(""===this.state.input.description)alert("Please fill empty fields!");else if(""===this.state.input.startDate)alert("Please fill empty fields!");else{var t=[].concat(Object(m.a)(this.state.items),[e]);this.setState({items:t,mode:"view"})}}},{key:"handleAdd",value:function(){this.setState({mode:"edit",input:{position:"",company:"",description:"",startDate:"",endDate:"",ongoing:""}})}},{key:"handleEdit",value:function(e){var t=this,n={position:this.state.items[e].position,company:this.state.items[e].company,description:this.state.items[e].description,startDate:this.state.items[e].startDate,endDate:this.state.items[e].endDate,ongoing:this.state.items[e].endDate};this.setState({input:n},(function(){var n=t.state.items,i=[].concat(Object(m.a)(n.slice(0,e)),Object(m.a)(n.slice(e+1)));t.setState({items:i,mode:"edit"},(function(){console.log(t.state)}))}))}},{key:"render",value:function(){return"edit"==this.state.mode?Object(u.jsxs)("div",{id:"WorkExperience",className:"nes-container with-title",children:[Object(u.jsx)("h2",{className:"title",children:"Education"}),0===this.state.items.length?"":Object(u.jsx)(g,{items:this.state.items,handleEdit:this.handleEdit}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"nes-field",children:[Object(u.jsx)("label",{htmlFor:"role",children:"Course name: "}),Object(u.jsx)("input",{type:"text",id:"roleInput",className:"nes-input",name:"position",onChange:this.handleChange,onKeyDown:this.handleKeyPress,value:this.state.input.position,required:!0})]}),Object(u.jsxs)("div",{className:"nes-field",children:[Object(u.jsx)("label",{htmlFor:"company",children:"Institute: "}),Object(u.jsx)("input",{type:"text",id:"companyInput",className:"nes-input",placeholder:"Broke ass $tartup? :/",name:"company",onChange:this.handleChange,onKeyDown:this.handleKeyPress,value:this.state.input.company,required:!0})]}),Object(u.jsxs)("div",{className:"nes-field",children:[Object(u.jsx)("label",{htmlFor:"description",children:"Details: "}),Object(u.jsx)("textarea",{id:"descriptionInput",rows:"5",className:"nes-textarea",name:"description",placeholder:"trying to understand old codebases...",onChange:this.handleChange,onKeyDown:this.handleKeyPress,value:this.state.input.description,required:!0})]}),Object(u.jsxs)("div",{id:"startDate",children:[Object(u.jsx)("label",{htmlFor:"startDate",children:"Starting date: "}),Object(u.jsx)("input",{type:"month",className:"nes-input",name:"startDate",id:"startDateInput",onChange:this.handleChange,value:this.state.input.startDate,required:!0})]}),Object(u.jsxs)("div",{id:"endDate",children:[Object(u.jsx)("label",{htmlFor:"endDate",children:"Graduation Date: "}),Object(u.jsx)("input",{type:"month",className:"nes-input",name:"endDate",id:"endDateInput",value:this.state.input.endDate,onChange:this.handleChange})]}),Object(u.jsx)("div",{className:"nes-field",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",className:"nes-checkbox",id:"currentWork",onChange:this.handleChange,value:this.state.input.ongoing?"on":"",name:"ongoing"}),Object(u.jsx)("span",{children:"Ongoing"})]})})]}),Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)("button",{id:"savebtn",onClick:this.handleSave,className:"nes-btn is-success",children:"SAVE"})})]}):"view"==this.state.mode?Object(u.jsxs)("div",{id:"WorkExperience",className:"nes-container with-title",children:[Object(u.jsx)("h2",{className:"title",children:"Education "}),Object(u.jsx)(g,{items:this.state.items,handleEdit:this.handleEdit}),Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)("button",{id:"addbtn",onClick:this.handleAdd,className:"nes-btn is-primary",children:"Add Another"})})]}):void 0}}]),n}(i.Component),g=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).onEdit=i.onEdit.bind(Object(o.a)(i)),i}return Object(d.a)(n,[{key:"onEdit",value:function(e){this.props.handleEdit(e.target.id)}},{key:"render",value:function(){var e=this,t=["January","February","March","April","May","June","July","August","September","October","November","December"];return console.log(this.props.items),this.props.items.map((function(n){var i=n.endDate,a=new Date(n.startDate),s=t[a.getMonth()]+", "+a.getFullYear(),c="";return""==n.endDate?c="Present":(i=new Date(n.endDate),c=t[i.getMonth()]+", "+i.getFullYear()),Object(u.jsxs)("div",{className:"WorkExperienceEntry nes-container",id:n.id,children:[Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Course: ",n.position," "]}),Object(u.jsxs)("li",{children:["Institute: ",n.company]}),Object(u.jsxs)("li",{children:["Course details: ",n.description]}),Object(u.jsxs)("li",{children:["Duration: ",s," to ",c]})]}),Object(u.jsxs)("button",{id:n.id,className:"nes-btn is-primary",onClick:e.onEdit,children:[" ","Edit"," "]})]})}))}}]),n}(i.Component),f=y,D=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={mode:"edit"},i.switchMode=i.switchMode.bind(Object(o.a)(i)),i}return Object(d.a)(n,[{key:"switchMode",value:function(){Array.from(document.getElementsByClassName("nes-btn")).forEach((function(e){e.remove()})),window.print()}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"everything",children:[Object(u.jsx)("h1",{children:" CV Creator"}),Object(u.jsx)(b,{}),Object(u.jsx)(x,{}),Object(u.jsx)(f,{}),Object(u.jsx)("button",{className:"nes-btn is-primary",onClick:this.switchMode,children:"Print"})]})}}]),n}(i.Component);c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.21713d5f.chunk.js.map