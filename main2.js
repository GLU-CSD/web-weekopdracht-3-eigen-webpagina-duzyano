var tl = gsap.timeline({defaults: {duration: 7, ease: "none"}});

tl.to("#scramble", {duration: 7, scrambleText:{text:"As fans demanded he return to music, West grew frustrated. If the fashion industry wouldn’t let him be himself, he knew that the music industry would.", chars:"lowercase", revealDelay:0.0, tweenLength:false}})

.to("#charsCustom", {duration: 7, scrambleText:{text:"The resulting album, Yeezus, (a portmanteau of ‘Jesus’ and Kanye’s nickname, ‘Ye’) is, without a doubt, one of the most tasteless and arrogant albums ever produced. It", chars:"kanye west", revealDelay:0.1, tweenLength:false, speed:0.0}})

.to("#charsNumbers", {duration: 7, scrambleText:{text:"revels in its ugliness, its vulgarity, and its unbridled hedonism in a way that the crowd-pleasing Twisted.", chars:"0123456789"}})

.to("#newClass", {scrambleText:{text:"Fantasy never truly did. While that album saw West admitting that he was ‘not too good’ with ‘females’,", chars:"lowerCase", speed:0.3, newClass:"orange", revealDelay:0.0, tweenLength:false}})

GSDevTools.create({animation: tl, minimal: true});

