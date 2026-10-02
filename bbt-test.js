const CFG={title:"Test de niveau d'anglais – BBT Solutions",passTotal:19,levels:["A1","A2","B1","B2","C1"],
audio:["https://bbt-solution.com/wp-content/uploads/2026/10/track1.mp3","https://bbt-solution.com/wp-content/uploads/2026/10/track2.mp3","https://bbt-solution.com/wp-content/uploads/2026/10/track3.mp3","https://bbt-solution.com/wp-content/uploads/2026/10/track4.mp3","https://bbt-solution.com/wp-content/uploads/2026/10/track5.mp3"],
modes:{mini:{n:3,min:30,label:"Mini test – General English (Tests A–C, Tracks 1–3)"},full:{n:5,min:60,label:"Full test – TOEFL / exams (Tests A–E, Tracks 1–5)"}}};
let N=3,MODE="mini";

const L=[
{key:"acbb",qs:["What did they do every evening?|They listened to the radio.|They went to the cinema.|They watched TV.","Why did he go to school by bicycle?|Because it was six miles away.|Because he didn't study very hard.|Because his parents didn't have a car.","Where did they play football?|At school|Beside the sea.|Near the cinema.","When did he leave Scotland?|When he left school.|When he was fifteen.|When he heard the sound of the sea."]},
{key:"cbba",qs:["What kind of pizza does the customer order?|Perfect Pizza|Pizza to be delivered|Cheese Supreme","What size pizza does the customer order?|extra-large|large|regular","How much is the bottle of diet lemonade?|£11.85|£1.25|£12.60","How much does the customer pay altogether?|£11.85|£12.60|£10.60"]},
{key:"abaa",qs:["New Zealand is …|more than 2,000 kilometres from Australia|near Australia|between Australia and Africa","The two islands, North Island and South Island are …|about 2,000 kilometres apart.|about the same size as Great Britain.|about three and a half square kilometres.","English is …|one of the two official languages.|not the official language.|the language of the original people.","The North Island has got …|volcanoes and a small desert.|fjords and snow-covered mountains.|many important film studios."]},
{key:"caab",qs:["How long had Clare been teaching geography?|Every day.|Until she went to bed exhausted.|About three years.","What did she read in a newspaper?|The country needs more plumbers.|Plumbers earn more money than teachers.|Not enough women are training to be plumbers.","What does Clare dislike about working as a plumber?|She starts work early.|She is the only woman doing the job.|Her male colleagues make jokes.","What does Clare like about her job?|She has a lot of pain.|She can forget about her work at the end of the day.|She'll never have to worry about finding a job."]},
{key:"ccbc",qs:["Where is the woman?|She's in Room 603.|She's in the hotel manager's office.|She's at the hotel reception desk.","The receptionist asked the guest …|when she was going to pay the bill.|if she would be paying the bill by cheque.|how she would be paying the bill.","The guest told the receptionist …|her husband paid for her telephone calls.|she was not going to pay for her telephone call.|she did not use the telephone.","She said she …|wanted to speak to the manager at two thirty.|spent $120 on a phone call.|had spoken her husband for two minutes."]}
];

const KEYA="bbcccbbaacccabcbcabac";
const KEYB="abccbc bacbcabcb bcacb".replace(/ /g,"");
const KEYC="bccbcaaabcbccccbabbb";

const T=[
{key:KEYA,secs:[
["Read the text and choose the correct answer (5–8).",`Estelle Dupont was 100 years old in 2000. She was born near Bordeaux in France, where her father was a rich businessman. Today she lives in an old people's home in Paris.
"My father was a rich businessman and we lived in a chateau about ten kilometres from Bordeaux. Our home was very comfortable. The house was very big – there were twenty bedrooms, beautiful gardens and lots of servants. But my childhood wasn't happy. I was an only child, and my mother was always ill. She died when I was eight, and my father died two years later when I was ten. It was a very bad time. I was a very unhappy child, but life is better now."`,[
"How old was Estelle Dupont in 1967?|She was living in Bordeaux.|She was 67 years old.|She was a hundred years old.",
"Where did she live when she was a child?|She lived in the city of Bordeaux, France.|She lived in a chateau near Bordeaux.|She lived in an old people's home in Paris.",
"Did she like the gardens at the chateau?|Yes, she said they were very big.|No, because she had no one to play with.|Yes, she said they were beautiful.",
"What happened to her parents?|Estelle's mother died two years after her father.|She was an only child.|Her father died two years after her mother."]],
["Choose the correct word (9–12).","",[
"My sister likes Mexican food, but I don't like ____.|her|them|it",
"Does ____ friend like classical music?|you|your|yours",
"My parents haven't got calculators, but ____ have a computer at home.|it|they|them",
"I really like Craig David's music. My older brother gave ____ some of his CDs.|me|them|my"]],
["Choose the place where you would hear them (13–16).","",[
"Look at exercise 6 on page 21. Keep quiet, please|a restaurant|a shopping mall|a classroom",
"How much is a sandwich and a bottle of water?|a computer shop|a living room|a café",
"What time does the main film start?|a video shop|a library|a cinema",
"Fasten your seatbelts, put the backs of your seats in the upright position and fold away your tables.|an aeroplane|a train|a police station"]],
["Choose the correct word (17–24).","",[
"We are looking for a green car ____.|every day|at the moment|yesterday",
"I don't usually play tennis ____.|tomorrow|last week|on Thursdays",
"John isn't going to buy a new house ____.|last week|next year|yesterday",
"Where were you at 6 o'clock ____?|tomorrow|in the summer|this morning",
"What time did you leave home ____?|on Thursday|tomorrow|at 6 o'clock",
"There are a lot of clouds in the sky ____.|on Tuesday|at the moment|yesterday",
"Do you like going to the beach ____?|in summer|tomorrow|last month",
"She never drives her car ____.|today|next day|at weekends"]]]},
{key:KEYB,secs:[
["Read the text and choose the best answer (5–8).",`Tim Berners-Lee looks very ordinary. He's about fifty years old and has brown hair. He was born in England but now lives in Massachusetts in the USA. But in 1989 Tim had a very important idea. He invented the world wide web (www).
Tim went to school in London. Both his parents worked with computers so it isn't surprising that he loved computers from an early age. When he was eighteen, he left school and went to Oxford University where he studied physics. At Oxford, he became more and more interested in computers, and he made his first computer from an old television. He graduated in 1976 and got a job with a computer company in Dorset, England. In 1989, he went to work in Switzerland where he first had the idea of an international information network linked by computer. He decided to call it the world wide web, and he also decided to make his ideas free to everyone - that is why today we do not pay to use the Internet.
In 1994 he went to live in the United States where he now works. In 1995 he wrote an article in the New York Times where he said, 'The web is a universe of information and it is for everyone.' Today his idea of a web, where people from all over the world can exchange information, is real.`,[
"Where was Tim Berners-Lee born?|in England|in Massachusetts|in Oxford",
"What did Tim study at Oxford University?|computers|physics|the world wide web",
"What did he make when he was at Oxford?|an old television|the first computer|a computer",
"When did he invent the world wide web?|in Switzerland|in 1994|1989"]],
["Choose the best answer (9–12).","",[
"Which verb is the opposite of sell?|cost|buy|pay",
"Which word means very good?|expensive|important|brilliant",
"Which word is not about family?|aunt|wide|grandfather",
"Which word is not a language?|France|Italian|Japanese"]],
["Choose the best answer (13–16).","",[
"Do you sell toothpaste?|Did you go to the pharmacy?|No, it isn't.|No, we don't. Try the pharmacy.",
"Excuse me, are you Mr Rogers?|I don't know.|No, I'm not. I think he's in the restaurant.|No, he isn't there.",
"What's the time?|It's rather hot at the moment.|It's the 15th August.|I'm sorry, I don't know.",
"Would you like a drink?|Thanks. I'd like an apple juice.|Excuse me, are you drinking?|I don't know. Can you ask someone else?"]],
["Choose the correct word or phrase (17–24).","",[
"____ Peter come from Dublin?|Do|Does|Is",
"Do you like ____ house over there?|those|this|that",
"Where did you ____ when you were a child?|lived|live|living",
"____ it raining in Amsterdam today?|Do|Is|Does",
"Are you ____ José tomorrow?|see|will see|going to see",
"You ____ clean your car.|don't have to|mustn't to|can't have to",
"I went home ____ my new baby.|see|for to see|to see",
"This is ____ picture of my friend.|some|a|any"]]]},
{key:KEYC,secs:[
["Read the text and choose the correct answer (5–8).",`During the last ten years, Ameet has had ten different jobs: he has worked in the import-export business; he has been an estate agent, and now he has just started his own company which sells mobile phones - but he hasn't made a £1 million yet.
Edward has moved to the United States, where he now works designing computer games. His most popular game Death Trap has already sold over ten million copies, and has made him very rich! He isn't married, and in fact he's never had a girlfriend, and he still spends most of his time playing computer games in his bedroom.
Lucy is an actress and a part-time waitress. In the last few years, she's appeared in several plays and a couple of TV commercials but there's been no call from Hollywood yet!
Since leaving university with a brilliant degree, Kate has worked for Greenpeace and other similar organisations, first as a volunteer and now as a manager. She's just had her first baby.
In the last ten years, Hannah has been married three times; and has lived in Italy, Egypt, France and Australia. At present, she is running a small restaurant and bar on the Greek island of Kos with her third husband, Nikos.`,[
"Who has earned the most money?|Lucy|Edward|Hannah",
"Who works in a bar?|Lucy|Edward|Hannah",
"Who has appeared on television?|Ameet|Hannah|Lucy",
"Who worked for no money?|Lucy|Kate|Hannah"]],
["Choose the correct word to complete each phrase (9–12).","",[
"I'm looking ____ to seeing my friend next week.|about|out|forward",
"She thinks all Spanish men look ____ Antonio Banderas!|like|after|same",
"Can you look ____ Bill's address in your address book?|up|out|forward",
"I'm looking ____ my coat. Have you seen it?|for|after|out"]],
["Choose the best answer (13–16).","",[
"Your letter begins 'Dear Sir', what do you write above your signature?|Yours sincerely|Yours faithfully|With love",
"Where exactly is New York?|On the right hand side of the USA.|In the east coast of the USA.|On the east coast of the USA.",
"You walk into a shop. What does the shop assistant say to you?|What do you want?|Can I help you?|What would you like to buy?",
"Your restaurant bill says 'service not included'. What should you do?|Pay by credit card.|Get your own food.|Leave a tip for the waiter."]],
["Choose the correct word or phrase (17–24).","",[
"The Roxy Cinema closed seven years ____.|before|yet|ago",
"You ____ park your car on the pavement.|don't have to|needn't|shouldn't",
"My hair is ____ than my sister's.|straightest|straighter|more straight",
"She's been in India ____ 1999.|since|in|for",
"How long ____ a student?|were you been|have you been|did you be",
"Yes, I'll come to the party but I ____ arrive late.|may be|might|perhaps",
"Stop ____ lazy. Go out and dig the garden!|been|being|to be",
"She said that she ____ never seen him before.|did|had|would"]]]},
{key:"bcababbcbcaabbbcbbab",secs:[
["Read the text and choose the best answer (5–8).",`Pizza has a long history. The ancient Greeks first had the idea of putting vegetables on large flat pieces of bread, and 'pizza ovens' have been found in the ruins of Roman cities. But for centuries one vital ingredient was missing - the first tomatoes were not brought to Europe until the sixteenth century, from South America. It was the nineteenth century before Rafaele Esposito, a baker from Naples, began to sell the first modern pizzas. He was asked to bake a special pizza for a visit by the Italian King and Queen in 1889, and so the first pizza Margarita was created, named after the Queen.
Pizza became a favourite dish in Italy, but it was after the Second World War, when thousands of American soldiers went home from Europe, that pizza really became an international dish. Soon there were pizzerias all over the USA, and American chains like Pizza Hut spread the idea around the world. Today the average American eats over ten kilogrammes of pizza a year, and the world's largest pizza (measuring thirty metres across) was baked not in Italy, but in Havana, Cuba!`,[
"Where were the first pizzas made?|Pizza Hut|Ancient Greece|Roman cities",
"When did the first tomatoes arrive in Europe?|from South America|in the 19th century|in the 16th century",
"Who created the first Pizza Margarita?|Rafaele Esposito|Queen Margarita of Italy|the King of Italy",
"When did pizza become an international dish?|when the Kings of Italy started eating pizza.|after the Second World War|when the world's largest pizza was made in Havana, Cuba"]],
["Choose the word which has the same vowel sound as the word in CAPITALS (9–12).","",[
"I CAN'T read your handwriting.|aunt|want|won't",
"She OUGHT to stay at home and study.|out|sort|tough",
"I'm studying LAW at university.|know|door|flour",
"Have you READ Tolstoy's War and Peace?|made|seed|said"]],
["Choose the correct answer (13–16).","",[
"Which is the normal way to write an address on an envelope in Britain?|London Road 28 / HUDDERSFIELD / HD1 6DD / Miss Longtree Julia|Miss Julia Longtree / 28, London Road / HUDDERSFIELD / HD1 6DD|Miss Julia Longtree / London Road, 28 / HD1 6DD / HUDDERSFIELD",
"What should Peter Thomas say when he answers the telephone?|I am Peter Thomas.|Hello. Who are you?|412 3663 Peter Thomas speaking.",
"How would you recommend that someone should visit the Grand Canyon?|You really should go to the Grand Canyon.|Why don't you go to the Grand Canyon?|You could go to the Grand Canyon if you've nothing better to do.",
"You want to borrow a dictionary from a friend. What do you say?|Can I borrow your dictionary, please?|Give me your dictionary.|Would you be so kind as to lend me your dictionary, please?"]],
["Choose the correct words to complete these sentences (17–24).","",[
"I haven't seen her ____ four days.|since|for|by",
"Don't forget ____ your umbrella. It might rain!|bring|to bring|brought",
"Jill's shorter ____ her brother.|as|than|then",
"I remember ____ delicious fruit in Brazil.|to eat|eaten|eating",
"It was raining when I ____.|arrive|arrived|was arriving",
"She ____ four more detective stories before she died.|has written|wrote|written",
"I won't come to see you if the weather ____ bad.|is|will be|is being",
"They weren't allowed ____ the military base.|to be entered|to enter|entering"]]]},
{key:"acaacbbbccbbacbabcac",secs:[
["Read the text and choose the correct answer (5–8).",`Rather than investing in expensive scientific equipment to predict earthquakes, perhaps scientists should spend more time watching their pets.
Many scientists now believe that the behaviour of certain animals could help them to predict certain natural disasters. For example, Chinese scientists in the 1970s thought that reports of farm animals running round in circles might indicate an impending disaster. They decided to evacuate the city of Haichin, which shortly afterwards was hit by a huge earthquake. Thousands of lives were probably saved as a result.
Japanese scientists have also discovered that catfish become livelier several days before moderately strong earthquakes. Many scientists now accept that this can't be pure coincidence; they believe that the explanation may be linked to slight changes in the Earth's magnetic field. Although human beings can't perceive such changes, it is thought that the sensitive nervous systems of some animals must be affected by them. Now scientists must discover exactly which animals are affected in this way, so that more lives can be saved in the future.`,[
"What is the article about?|Using animal behaviour to predict earthquakes.|Scientific equipment for predicting earthquakes|Saving animals from natural disasters",
"How did Chinese scientists save thousands of lives in Haichin?|They heard that farm animals were behaving strangely.|They decided to stop the earthquake.|They decided to evacuate the city.",
"What have Japanese scientists studied?|The behaviour of catfish before earthquakes.|The behaviour of catfish during earthquakes.|The Earth's magnetic field.",
"What do many scientists now believe?|Animals may be sensitive to changes in the Earth's magnetic field which occur before earthquakes.|Animals are trying to warn people about earthquakes which are going to occur.|Animals run around in circles during earthquakes."]],
["Choose the correct preposition (9–12).","",[
"The car stopped because I had run ____ of petrol.|over|down|out",
"She apologised ____ being late.|over|for|from",
"She has brought ____ a family of five healthy children.|about|up|out",
"If you don't understand, ask your teacher to go ____ it again with you.|between|through|into"]],
["Select the most suitable sympathetic response (13–16).","",[
"My son is having an operation in hospital today.|Calm down!|What a shame!|You must be really worried about him.",
"That wasp is really annoying me!|Many people die from wasp stings!|Never mind, these things happen.|How awful for you!",
"My girlfriend said she didn't like my moustache!|Yes, it looks awful.|Don't worry, she'll get used to it.|Don't take any notice of her.",
"I've been waiting for my bus for 15 minutes!|Yes, I think it's going to snow.|Try not to worry about it.|Maybe it will never come."]],
["Choose the correct words to complete the sentences (17–24).","",[
"I'll phone you ____ I get home.|as soon as|until|while",
"____ is very difficult in Cambridge.|To park|To be parked|Parking",
"The criminals had escaped before the police ____.|have arrived|arrived|had been arrived",
"5% more girls than boys ____ in September 2005.|were born|born|have been born",
"She accused me ____ an affair with another woman.|to have|of having|in have",
"What prevents him from being a good speaker, is his ____.|nervous|nervy|nervousness",
`"Sorry I'm late." She ____ for being late.|apologised|regretted|accused`,
`"I think the government has made a very wise decision." He ____ the government's decision.|criticised|accepted|applauded`]]]}
];

const app=document.querySelector("#app"),answers={},players=[];
let left=0,tick,done=false;

const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");

function qHTML(id,n,s){const p=s.split("|");return `<div class="q"><b>${n}. ${esc(p[0])}</b>`+["a","b","c"].map((l,i)=>`<label><input type="radio" name="${id}" value="${l}">${l}) ${esc(p[i+1])}</label>`).join("")+"</div>"}

function intro(){
app.innerHTML=`<div class="card"><h2>Votre profil</h2>
<p class="note">Partie 1 : Listening (une piste par niveau, <b>écoute unique</b>). Partie 2 : Reading (20 questions par niveau). Une seule réponse par question. Un niveau est validé avec <b>${CFG.passTotal}/24</b>.</p>
<div class="hp">🎧 <b>Écouteurs ou casque conseillés.</b> Les enregistrements ne seront diffusés qu'une seule fois, sans pause possible. Installez-vous dans un endroit calme avant de commencer.</div>
<p><input type="text" id="name" placeholder="Full name"></p>
<p class="q"><label><input type="radio" name="mode" value="mini" checked> ${CFG.modes.mini.label} – ${CFG.modes.mini.min} min</label>
<label><input type="radio" name="mode" value="full"> ${CFG.modes.full.label} – ${CFG.modes.full.min} min</label></p>
<button id="go">Start</button></div>`;
document.querySelector("#go").onclick=()=>{const n=document.querySelector("#name").value.trim();if(!n){document.querySelector("#name").focus();return}window.cand=n;MODE=document.querySelector("input[name=mode]:checked").value;N=CFG.modes[MODE].n;left=CFG.modes[MODE].min*60;start()};
}

function start(){tick=setInterval(()=>{left--;draw();if(left<=0)finish()},1000);draw();listening()}

function draw(){const m=Math.max(0,left);document.querySelector("#timer").textContent=String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0")}

function audioHTML(i){return `<div class="aud"><button type="button">▶ Écouter (une seule fois)</button><div class="bar"><i></i></div><span class="st">Prêt</span><audio preload="auto" src="${CFG.audio[i]}" oncontextmenu="return false"></audio></div>`}

function bindAudio(){document.querySelectorAll(".aud").forEach(box=>{
const a=box.querySelector("audio"),b=box.querySelector("button"),bar=box.querySelector("i"),st=box.querySelector(".st");let started=false,ended=false;
a.addEventListener("timeupdate",()=>{if(a.duration)bar.style.width=(a.currentTime/a.duration*100)+"%"});
a.addEventListener("pause",()=>{if(started&&!ended&&!box.dataset.stop)a.play().catch(()=>{})});
a.addEventListener("ended",()=>{ended=true;b.disabled=true;b.textContent="✔ Écoutée";st.textContent="Terminé";bar.style.width="100%"});
a.addEventListener("error",()=>{st.textContent="Audio indisponible"});
b.onclick=()=>{if(started)return;
if(players.some(p=>p.a!==a&&!p.a.paused)){st.textContent="Attendez la fin de l'autre piste";return}
started=true;b.disabled=true;b.textContent="🔊 Lecture en cours…";st.textContent="Ne quittez pas la page";
a.play().catch(()=>{started=false;b.disabled=false;b.textContent="▶ Écouter (une seule fois)";st.textContent="Appuyez de nouveau"})};
players.push({a,box})})}

function stopAudio(){players.forEach(p=>{p.box.dataset.stop=1;p.a.pause()});players.length=0}

function listening(){
let h=`<div class="card"><h2>Part 1 – Listening</h2><p class="note">You will hear short recordings. Mark the correct response a, b or c.</p>
<div class="hp">🎧 <b>Il est conseillé d'utiliser des écouteurs ou un casque.</b> Chaque piste ne peut être écoutée <b>qu'une seule fois</b>, sans pause ni retour en arrière : lancez-la seulement quand vous êtes prêt(e), dans un endroit calme.</div></div>`;
L.slice(0,N).forEach((t,i)=>{h+=`<div class="card"><h3>${CFG.levels[i]} – Track ${i+1}</h3>${audioHTML(i)}`+t.qs.map((q,j)=>qHTML(`L${i}_${j}`,j+1,q)).join("")+"</div>"});
app.innerHTML=h+`<button id="nx">Next: Reading →</button>`;scrollTo(0,0);bindAudio();
document.querySelector("#nx").onclick=()=>{if(!confirm("Passer au Reading ? Vous ne pourrez plus réécouter les pistes."))return;stopAudio();save();reading()};
}

function reading(){
let h=`<div class="card"><h2>Part 2 – Reading</h2></div>`;
T.slice(0,N).forEach((t,i)=>{h+=`<div class="card"><h3>${CFG.levels[i]}</h3>`;let n=0;
t.secs.forEach(([ins,p,qs])=>{h+=`<p><b>${ins}</b></p>`+(p?`<div class="pass">${esc(p)}</div>`:"")+qs.map(q=>qHTML(`R${i}_${n}`,++n,q)).join("")});h+="</div>"});
app.innerHTML=h+`<button id="fin">Submit test</button>`;scrollTo(0,0);
document.querySelector("#fin").onclick=()=>{if(confirm("Submit the test?"))finish()};
}

function save(){document.querySelectorAll("input[type=radio]:checked").forEach(r=>answers[r.name]=r.value)}

function finish(){
if(done)return;done=true;stopAudio();clearInterval(tick);save();
const res=CFG.levels.slice(0,N).map((nm,i)=>{let ls=0,rs=0;
L[i].key.split("").forEach((k,j)=>{if(answers[`L${i}_${j}`]===k)ls++});
T[i].key.split("").forEach((k,j)=>{if(answers[`R${i}_${j}`]===k)rs++});
return{nm,ls,rs,tot:ls+rs,ok:ls+rs>=CFG.passTotal}});
let lvl=-1;
for(let i=0;i<res.length;i++){
if(!res[i].ok){break;}
lvl=i;
}
const lvlLabel=lvl<0?"Below "+CFG.levels[0]:CFG.levels[lvl];
const waMsg="Bonjour, je viens de passer le test de niveau d'anglais gratuit sur bbt-solution.com ("+CFG.modes[MODE].label+"). Mon résultat : "+lvlLabel+". Je souhaite avoir plus d'informations pour m'inscrire.";
const shareMsg="Je viens de passer le test de niveau d'anglais gratuit de BBT Solutions à Cotonou (A1→C1, résultat immédiat). Découvre ton niveau : https://bbt-solution.com/test-niveau-anglais/";
app.innerHTML=`<div class="card"><h2>Result</h2><p>${esc(window.cand||"")} – ${CFG.modes[MODE].label}</p>
<div class="lvl">${lvlLabel}</div>
<p class="note">Niveau = plus haut niveau validé consécutivement depuis le premier.</p>
<table><tr><th>Level</th><th>Listening /4</th><th>Reading /20</th><th>Total /24</th><th></th></tr>`+
res.map(r=>`<tr><td>${r.nm}</td><td>${r.ls}</td><td>${r.rs}</td><td>${r.tot}</td><td class="${r.ok?"ok":"ko"}">${r.ok?"Validated":"Not validated"}</td></tr>`).join("")+
`</table><div class="res-actions">
<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/2290197619263?text=${encodeURIComponent(waMsg)}">💬 Envoyer mon résultat sur WhatsApp</a>
<a class="btn" href="https://bbt-solution.com/cours-anglais-cotonou/">Voir les cours adaptés à mon niveau</a>
<button onclick="print()" class="alt">Print / Save PDF</button>
<a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(shareMsg)}">Partager le test</a></div></div>`;
scrollTo(0,0);
}

intro();
