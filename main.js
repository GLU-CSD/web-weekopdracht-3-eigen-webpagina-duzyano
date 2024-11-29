var tl = gsap.timeline({defaults: {duration: 7, ease: "none"}});

tl.to("#scramble", {duration: 7, scrambleText:{text:"Graduation is the third studio album by American rapper Kanye West released on September 11, 2007, through Def Jam Recordings and Roc-A-Fella Records. Recording.", chars:"lowercase", revealDelay:0.0, tweenLength:false}})

.to("#charsCustom", {duration: 7, scrambleText:{text:"sessions took place between 2005 and 2007 at several studios in New York and Los Angeles. It was primarily produced by West himself, with contributions from various", chars:"kanye west", revealDelay:0.1, tweenLength:false, speed:0.0}})

.to("#charsNumbers", {duration: 7, scrambleText:{text:"other producers, including DJ Toomp. The album features guest appearances from recording artists such as Dwele, T-Pain, Lil Wayne, Mos Def, DJ Premier, and Chris Martin.", chars:"0123456789"}})

.to("#newClass", {scrambleText:{text:"The cover art and its interior artwork were designed by contemporary artist Takashi Murakami..", chars:"lowerCase", speed:0.3, newClass:"orange", revealDelay:0.0, tweenLength:false}})

GSDevTools.create({animation: tl, minimal: true});

