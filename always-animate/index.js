(function(u,a,o,d){"use strict";const c=o.findByProps("getStatusSize"),l=o.findByName("DisplayBanner",!1),s=o.findByProps("getAvatarDecorationURL","default"),p=o.findByName("RowManager"),t=[],y=function(){if(typeof o.findByName("GuildIcon").prototype.render<"u"){const e=o.findByName("GuildIcon");t.push(a.before("render",e.prototype,function(){this.props.animate=!0}))}else{const e=o.findByName("GuildIcon",!1);t.push(a.before("default",e,function(n){let[f]=n;f.animate=!0}))}t.push(a.before("type",c.default,function(e){let[n]=e;n.animate=!0})),t.push(a.after("default",l,function(e,n){const f=d.findInReactTree(n,function(r){return r.accessibilityRole=="image"&&r.onPress!=null}),i=d.findInReactTree(f,function(r){return r.type?.name=="ProfileBanner"});i&&i.key.endsWith("-false")&&i.props.bannerSource?.uri?.indexOf("/a_")>-1&&f.onPress()})),t.push(a.before("getAvatarDecorationURL",s,function(e){let[n]=e;n.canAnimate=!0})),t.push(a.before("getUserAvatarURL",s,function(e){e[1]=!0})),t.push(a.before("getGuildMemberAvatarURLSimple",s,function(e){let[n]=e;n.canAnimate=!0})),t.push(a.after("generate",p.prototype,function(e,n){let[f]=e;if(f.rowType!==1)return;const{message:i}=n;i.avatarURL?.indexOf("a_")>-1&&(i.avatarURL=i.avatarURL.replace(".webp",".gif"))}))},m=function(){for(const e of t)e?.()};return u.onLoad=y,u.onUnload=m,u})({},vendetta.patcher,vendetta.metro,vendetta.utils);
