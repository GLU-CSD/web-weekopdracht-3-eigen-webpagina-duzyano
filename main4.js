var tl = gsap.timeline({defaults: {duration: 7, ease: "none"}});

tl.to("#scramble", {duration: 7, scrambleText:{text:"his public image since 808s & Heartbreak, depicting his out-of-control world. According to author Bernadette Marie Calafell, West used My Beautiful Dark Twisted Fantasy to celebrate monstrosity after his troubled year.", chars:"lowercase", revealDelay:0.0, tweenLength:false}})

.to("#charsCustom", {duration: 7, scrambleText:{text:"West ventures into the id of his own ego on My Beautiful Dark Twisted Fantasy, showing his perspective as a celebrity. He poses a risk of self-destruction with the id, while perusing any goal or girl he can and driven by the buzz of consumer culture,", chars:"kanye west", revealDelay:0.1, tweenLength:false, speed:0.0}})

.to("#charsNumbers", {duration: 7, scrambleText:{text:"despite ultimately being unsatisfied. Ann Powers of the Los Angeles Times depicted the songs as pornographic boasts, romantic disaster stories, devil-haunted dark nights of the soul and perceived West as not welcome nor sure about the purpose of his.", chars:"0123456789"}})

.to("#newClass", {scrambleText:{text:"presence due to the discussion of race. Powers felt that rather than an issue for West, it is the inherent curse of author Michael Eric Dyson's theory of the exceptional black man whose talents are welcomed, but he is excluded for his skin color. According to Rolling Stone's Rob Sheffield, the album serves as a rock-star manifesto in a world where expectations have generally lowered.", chars:"lowerCase", speed:0.3, newClass:"orange", revealDelay:0.0, tweenLength:false}})

GSDevTools.create({animation: tl, minimal: true});
