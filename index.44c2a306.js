document.querySelectorAll("form input").forEach(function(e){var t,a=document.createElement("label");a.classList.add("field-label"),a.setAttribute("for",e.id);var l=(t=e.name.replace(/([a-z])([A-Z])/g,"$1 $2")).charAt(0).toUpperCase()+t.slice(1);a.textContent=l,e.placeholder=l,e.parentNode.append(a)});
//# sourceMappingURL=index.44c2a306.js.map
