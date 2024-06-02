"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6752],{4556:(e,t,s)=>{s.d(t,{c:()=>v});s(1504);var n=s(5456),a=s(5864),i=s(5492),o=s(3376),l=s(867),c=s(4357),r=s(964),d=s(7624);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.cp)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.c,{"aria-label":(0,c.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,d.jsx)(l.c,{className:a,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function p(e){let{children:t,active:s,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.c)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function v(){const e=(0,i.js)(),t=(0,o.Y5)();return e?(0,d.jsx)("nav",{className:(0,n.c)(a.W.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,c.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:n,index:s,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:n,children:t.label})},s)}))]})}):null}},7580:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var n=s(1504),a=s(5756),i=s(1100),o=s(7624);const l=n.createContext(null);function c(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,o.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,n.useContext)(l);if(null===e)throw new i.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=r();return(0,o.jsx)(a.U7,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(5456),m=s(1432),h=s(9236);function b(){const{metadata:e}=r();return(0,o.jsx)(h.c,{previous:e.previous,next:e.next})}var x=s(2136),p=s(472),v=s(5864),g=s(4357),j=s(3020);const f={tags:"tags_jXut",tag:"tag_QGVx"};function _(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(g.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.c)(f.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:f.tag,children:(0,o.jsx)(j.c,{...e})},e.permalink)))})]})}var C=s(2936);function N(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,l=!!(t||s||n);return i||l?(0,o.jsxs)("footer",{className:(0,u.c)(v.W.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.c)("row margin-top--sm",v.W.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(_,{tags:a})})}),l&&(0,o.jsx)(C.c,{className:(0,u.c)("margin-top--sm",v.W.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var L=s(8448),T=s(3088);const k={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function M(e){let{collapsed:t,...s}=e;return(0,o.jsx)("button",{type:"button",...s,className:(0,u.c)("clean-btn",k.tocCollapsibleButton,!t&&k.tocCollapsibleButtonExpanded,s.className),children:(0,o.jsx)(g.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const w={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function B(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,L.a)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.c)(w.tocCollapsible,!i&&w.tocCollapsibleExpanded,s),children:[(0,o.jsx)(M,{collapsed:i,onClick:l}),(0,o.jsx)(L.U,{lazy:!0,className:w.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(T.c,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const I={tocMobile:"tocMobile_ITEo"};function H(){const{toc:e,frontMatter:t}=r();return(0,o.jsx)(B,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.c)(v.W.docs.docTocMobile,I.tocMobile)})}var V=s(5124);function y(){const{toc:e,frontMatter:t}=r();return(0,o.jsx)(V.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.W.docs.docTocDesktop})}var E=s(6448),A=s(5936);function W(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=r();return t.hide_title||void 0!==s?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.c)(v.W.docs.docMarkdown,"markdown"),children:[s&&(0,o.jsx)("header",{children:(0,o.jsx)(E.c,{as:"h1",children:s})}),(0,o.jsx)(A.c,{children:t})]})}var U=s(4556),P=s(1528);const F={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function R(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=r(),s=(0,m.U)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,o.jsx)(H,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(y,{})}}(),{metadata:{unlisted:n}}=r();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.c)("col",!s.hidden&&F.docItemCol),children:[n&&(0,o.jsx)(P.c,{}),(0,o.jsx)(x.c,{}),(0,o.jsxs)("div",{className:F.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(U.c,{}),(0,o.jsx)(p.c,{}),s.mobile,(0,o.jsx)(W,{children:t}),(0,o.jsx)(N,{})]}),(0,o.jsx)(b,{})]})]}),s.desktop&&(0,o.jsx)("div",{className:"col col--3",children:s.desktop})]})}function S(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,o.jsx)(c,{content:e.content,children:(0,o.jsxs)(a.cr,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(R,{children:(0,o.jsx)(s,{})})]})})}},9236:(e,t,s)=>{s.d(t,{c:()=>c});s(1504);var n=s(4357),a=s(5456),i=s(867),o=s(7624);function l(e){const{permalink:t,title:s,subLabel:n,isNext:l}=e;return(0,o.jsxs)(i.c,{className:(0,a.c)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,o.jsx)("div",{className:"pagination-nav__label",children:s})]})}function c(e){const{previous:t,next:s}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(l,{...t,subLabel:(0,o.jsx)(n.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,o.jsx)(l,{...s,subLabel:(0,o.jsx)(n.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},472:(e,t,s)=>{s.d(t,{c:()=>c});s(1504);var n=s(5456),a=s(4357),i=s(5864),o=s(9920),l=s(7624);function c(e){let{className:t}=e;const s=(0,o.E)();return s.badge?(0,l.jsx)("span",{className:(0,n.c)(t,i.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},2136:(e,t,s)=>{s.d(t,{c:()=>p});s(1504);var n=s(5456),a=s(8264),i=s(867),o=s(4357),l=s(2840),c=s(5864),r=s(4592),d=s(9920),u=s(7624);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(o.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(o.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,u.jsx)(o.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.c,{to:s,onClick:n,children:(0,u.jsx)(o.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,a.c)(),{pluginId:o}=(0,l.UF)({failfast:!0}),{savePreferredVersionName:d}=(0,r.iy)(o),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.i8)(o),p=m??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,n.c)(t,c.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const s=(0,d.E)();return s.banner?(0,u.jsx)(x,{className:t,versionMetadata:s}):null}},3020:(e,t,s)=>{s.d(t,{c:()=>l});s(1504);var n=s(5456),a=s(867);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=s(7624);function l(e){let{permalink:t,label:s,count:l,description:c}=e;return(0,o.jsxs)(a.c,{href:t,title:c,className:(0,n.c)(i.tag,l?i.tagWithCount:i.tagRegular),children:[s,l&&(0,o.jsx)("span",{children:l})]})}}}]);