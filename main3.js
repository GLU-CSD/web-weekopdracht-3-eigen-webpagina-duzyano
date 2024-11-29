var tl = gsap.timeline({defaults: {duration: 7, ease: "none"}});

tl.to("#scramble", {duration: 7, scrambleText:{text:"808s & Heartbreak is the fourth studio album by the American rapper Kanye West. It was released by Def Jam Recordings and Roc-A-Fella Records on November 24, 2008, having been recorded earlier that year in September and October at Glenwood Studios.", chars:"lowercase", revealDelay:0.0, tweenLength:false}})

.to("#charsCustom", {duration: 7, scrambleText:{text:"in Burbank, California and Avex Recording Studio in Honolulu, Hawaii. Dominating its production, West was assisted by fellow producers No I.D., Plain Pat, Jeff Bhasker, and Mr Hudson, while also utilizing guest vocalists for some tracks, including Kid Cudi,", chars:"kanye west", revealDelay:0.1, tweenLength:false, speed:0.0}})

.to("#charsNumbers", {duration: 7, scrambleText:{text:"Conceived in the wake of West's breakup with his then-fiancée Alexis Phifer and the death of his mother Donda West in 2007, 808s & Heartbreak marked a major artistic departure from his previous rap records.", chars:"0123456789"}})

.to("#newClass", {scrambleText:{text:"Instead, West performed sung vocals that were processed through an Auto-Tune processor against an electronic production and minimalist sonic palette, including prominent use of minor keys and the Roland TR-808.", chars:"lowerCase", speed:0.3, newClass:"orange", revealDelay:0.0, tweenLength:false}})

GSDevTools.create({animation: tl, minimal: true});
