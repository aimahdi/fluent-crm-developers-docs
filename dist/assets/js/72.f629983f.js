(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{493:function(t,s,n){"use strict";n.r(s);var e=n(68),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"custom-profile-section-for-fluentcrm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-profile-section-for-fluentcrm"}},[t._v("#")]),t._v(" Custom Profile Section for FluentCRM")]),t._v(" "),n("p",[t._v("This code adds a custom profile section to the FluentCRM plugin.")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'fluentcrm_loaded'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'my_custom_section'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sectionTitle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'My Custom Section'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$callback")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contentArr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contentArr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'heading'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Content Heading'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contentArr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content_html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\n                       <div>\n                            <h4>My Content</h4>\n                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard \n                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ...</p>\n                       </div>\n               "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriber")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contentArr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FluentCrmApi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'extender'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addProfileSection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sectionTitle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("h3",{attrs:{id:"how-it-works"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),n("p",[t._v("The custom section is added via the "),n("code",[t._v("addProfileSection")]),t._v(" method of the FluentCRM Extender API. This method takes three arguments:")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("$key")]),t._v(": The key of the custom section which will be used to identify the section.\nIt is recommended to have your own plugin prefix.\nFor example, if your plugin prefix is "),n("code",[t._v("mcp")]),t._v(", then you can use "),n("code",[t._v("mcp_my_custom_section")]),t._v(" as the key so that it will not conflict with Profile sections.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("$sectionTitle")]),t._v(": This is the title of the new section within fluent crm profile sections.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("callback")]),t._v(": Third argument is a callback function that will be called when the custom section is displayed.\nThe function takes two arguments: "),n("code",[t._v("$contentArr")]),t._v(" and "),n("code",[t._v("$subscriber")]),t._v(". "),n("code",[t._v("$contentArr")]),t._v(" is an array containing the content of the custom section,\nand "),n("code",[t._v("$subscriber")]),t._v(" is an object representing the subscriber whose profile is being displayed.")])])]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("$contentArr")]),t._v(" includes two elements:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("heading")]),t._v(": A string containing the heading for the custom section. This heading will be displayed at the top of the section.")]),t._v(" "),n("li",[n("code",[t._v("content_html")]),t._v(": A string containing the HTML content of the custom section. This content will be displayed below the heading.\nYou may use any html tags you wish. You will enjoy the flexibility of using any HTML tags to display your custom content.")])]),t._v(" "),n("p",[t._v("Finally, the modified "),n("code",[t._v("$contentArr")]),t._v(" is returned.")]),t._v(" "),n("p",[t._v("The following Image shows the custom section added by the above code:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/assets/img/modules/custom_profile_section.jpg"),alt:"My Custom Section"}})])}),[],!1,null,null,null);s.default=a.exports}}]);