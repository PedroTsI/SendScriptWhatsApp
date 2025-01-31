async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
La Belle et la Bête (Beauty and the Beast)
OPENING TITLE:

Children believe what we tell them. 
They have complete faith in us. 
They believe that a rose plucked 
from a garden can bring drama to 
a family. They believe that the 
hands of a human beast will smoke 
when he kills a victim, and that 
this beast will be shamed when 
confronted by a young girl. They 
believe in a thousand other simple 
things. I ask of you a little of 
this childlike simplicity, and to 
bring us luck let me speak four 
truly magic words, childhood's 
Open Sesame: 



			"Once upon a time..." 



Beauty lives in the country with her father, a 17th-century merchant who has 
lost all his money; her brother, Ludovic, whose only interests are drinking 
and gambling; and her two sisters, Felicie and Adelaide, who are motivated 
entirely by spite, selfishness and vanity. Her brother's constant companion, 
Avenant, is a frequent visitor to the house.
 
Ludovic and Avenant are shooting arrows at a target fixed onto the wall of 
the house.

Felicie and Adelaide are inside. 

				FELICIE 
			(angrily) 
		Oh, that wretched girl! 

				ADELAIDE 
		You know she can't do anything right. 

				LUDOVIC 
			(taking aim and shooting)
		A bad one. 

He steps aside. Avenant aims. 

				LUDOVIC
		Your foot.
 
				AVENANT 
		What about my foot?
 
				LUDOVIC
		You're cheating, it's not on the mark.
 
Avenant shoots. The arrow flies straight through the upper window of the 
house and impales itself in the floor next to a silk cushion. A little dog 
leaps up from the cushion, barking furiously. Beauty is attending to her 
sisters who, in sharp, contrast to her simple attire, are dressed in rich 
silks and feathers. 

				FELICIE 
		What's going on? 

				ADELAIDE 
		They've just shot an arrow into the room!
 
 				FELICIE
		Oh!
 
				ADELAIDE 
			(going to the window and shouting)
		You hooligans! You could have hit one of us in 
		the eye!
 
Ludovic and Avenant rush up to the house. 

				AVENANT
		Is Beauty all right?
 
				ADELAIDE 
			(shouting out of the window) 
		Beauty! Always Beauty! Who cares about Beauty? 
		You nearly killed Cabriole! 

Ludovic and Avenant go into the house and wait at the foot of the stairs.

				LUDOVIC 
			(ironically)
		Here they come. 

Felicie and Adelaide hurry down.

				FELICIE 
			(shouting)
		Beauty, you can wash the floor. We'll be late 
		for the duchess.

				ADELAIDE 
			(to the two men) 
		Murderers! 

				LUDOVIC 
			(to Avenant) 
		My sisters are such bitches.
 
				FELICIE 
			(to Adelaide)
		Drinking, chasing women and cheating at cards, 
		that's all they ever think about. They couldn't 
		give a damn about anything else.

				LUDOVIC 
			(to Avenant) 
		When one is poor, one stays at home to do the 
		laundry and polish the pots and pans. Just look 
		at these two sluts -- they think they're 
		princesses. They don't even realize that 
		they're the laughing stock of society.
 
				ADELAIDE 
			(to Felicie)
		Say something! 

				FELICIE 
		He'd be only too pleased. 

They flounce out of the house.
 
				LUDOVIC
		Oh, such beauties! So ravishing!
 
 				ADELAIDE 
			(to Felicie)
		Come on, we'll be late for the concert.
 
				LUDOVIC
 			(following them out of the house) 
		Enchantresses! Goddesses! Shining lights!
 
 				FELICIE 
			(shouting)
		Hey there! Boys! Boys! 

				LUDOVIC
 			(imitating her)
		Boys! Boys!
 
Felicie and Adelaide walk across the yard toward a servant who is dozing in a 
sedan chair. 

				ADELAIDE 
		Oh!
 
The boy leaps out of the chair. Felicie sits down. 

				FELICIE 
			(angrily)
		This is unbelievable!
 
Adelaide walks over to another servant who is lolling against a pile of straw.

				ADELAIDE 
		I suppose you think we pay you to sleep! 

She walks over to a second sedan chair. 

				ADELAIDE 
			(angrily) 
		I've never seen anything like it! 

She opens the door to the chair. Three or four hens cackle and flap, their 
wings as she shoos them out of the chair.

				ADELAIDE 
		Oh, the chairs. 
			(She sits down.)
		Look at them, they're filthy! Boys! Boys!

Two more servant boys come running out of the stable. 

				ONE OF THE BOYS 
			(yawning) 
		Come on, let's go.
 
				FELICIE
		Stop dawdling, wake up now... You've been 
		drinking! 

The four boys pick up the two sedan chairs and stumble their way across the 
yard.  They pass in front of Ludovic, who is leaning against the wall, 
watching in amusement.

				ADELAIDE 
			(to Felice)
		Just look at this drunkard. He doesn't even 
		know his proper role in society.

				FELICIE
		A barefoot guttersnipe!
 
The boy carrying her sedan chair kicks open the gate, jolting the chair as he 
maneuvers it through.
 
				FELICIE
		Yes, they're drunk, drunk!
 
				ADELAIDE
		Come along, come along now! Oh, boys, careful! 

Ludovic comes up behind them and watches them leave.
 
				LUDOVIC
		May the devil splash you with mud and cover you 
		in dung!
 
Back at the house, Beauty is polishing the floor in her sisters' room. 
Avenant comes up to her and plucks the arrow from the floor.
 
				AVENANT 
			(kneeling down beside her)
		Beauty, you were not made to be a servant. 
			(He points to the 
			shining floor boards.) 
		Even the floor would like to mirror you. 
			(He pulls her to her feet.)
		You can't go on working from morning to night 
		for your sisters.
 
				BEAUTY
		If our father's ship hadn't got lost in the 
		storm, then perhaps I'd be able to enjoy myself 
		as they do. But we're ruined, Avenant, so I 
		must work.
 
				AVENANT
		I wonder why your sisters never do any work. 

				BEAUTY
		My sisters are too beautiful, their hands are 
		too white.
 
				AVENANT
		Beauty, you are the most beautiful of them all. 
			(He takes her hands.)
		Look at your hands.
 
 				BEAUTY 
			(trying to free herself)
		Let go of my hands, Avenant. Leave, so that I 
		can finish my work.
 
				AVENANT
		I love you. Marry me.
 
				BEAUTY
		No, Avenant, don't talk to me of marriage; it's 
		useless.
 
				AVENANT
		Well then?
 
				BEAUTY
		I must stay single and live with my father. 

She turns away and walks toward the door. Avenant runs after her and takes 
hold of her.
 
				AVENANT
		Beauty, I shall snatch you away from this 
		senseless existence!

 				BEAUTY 
			(struggling) 
		Leave me alone!
 
				AVENANT
		I displease you. 

				BEAUTY
		No, you don't, Avenant.
 
				LUDOVIC
			(bursting into the room)
		Take your hands off her, or I'll smash your 
		face in!
 
 				BEAUTY
		It's all right, Ludovic. Avenant was asking me 
		to marry him.
  
				LUDOVIC
		And what was your reply? 

				AVENANT
		Your sister has rejected me.
 
 				LUDOVIC
		Well done, Beauty. I know I'm a scoundrel and 
		even proud of it, but I won't have you marry 
		one. 
			(He walks over to Avenant.)
		And you can take that as final. Go on, you 
		louse, get out of here!
 
Avenant strikes him. Ludovic staggers and falls over. 

				BEAUTY 
			(running over to him) 
		Avenant! You're crazy! Ludovic! Ludovic!
 
Downstairs, the merchant enters the house, ushering three men in before him.
 
				THE MERCHANT
		Come in, gentlemen, come in. I want you to feel 
		part of the family when I announce the great 
		news. 
			(He shows them to a table.) 
		Gentlemen.
 
They all sit down. 

				BEAUTY 
			(from the top of the stairs)
		It's my father! 
			(She turns to the others.) 
		He must know nothing of this!
 
				THE MERCHANT 
			(bringing refreshments to the table)
		My daughters are out enjoying the flattery of 
		society life. I shan't wait for them. I just 
		can't hold my tongue any longer. 

Beauty, Ludovic and Avenant come down the stairs into the room.
 
				THE  MERCHANT 
		Come here next to me, Beauty. Come closer,
		Ludovic. You too, Avenant, you're most welcome. 
		These gentlemen are willing to forgive you for 
		all your pranks. And the Public Prosecutor has 
		very generously decided to drop the charges he 
		was going to bring against me. We're going to 
		be rich! One of my ships has come into port!

				LUDOVIC 
			(angrily) 
		Avenant must have known!
 
 				AVENANT 
			(protesting)
		Ludovic!
 
				LUDOVIC 
		He knew! And he took advantage of it to ask 
		Beauty to marry him!
 
				BEAUTY 
		That wasn't the first time he's asked me to 
		marry him since we lost all our money.

				THE MERCHANT 
			(to Beauty) 
		So you want to leave me. 

				BEAUTY 
		No, father, I'll never leave you. 

Felicie and Adelaide burst into the room.
 
				FELICIE 
		We were told that the duchess was not 
		receiving, though the court rang with laughter 
		and music. 
			(angrily) 
		Let me congratulate you, father, we are 
		gathering the fruits of your foolish deeds.
 
 				ADELAIDE 
		Yes, you can feel proud of yourself.
 
 				FELICIE 
		And here you are entertaining people with 
		drinks, while your daughters are insulted and 
		doors are slammed in their faces!

				THE MERCHANT
		Children! Children!
 
				LUDOVIC
		The duchess would appear to be a most admirable 
		woman. 

				ADELAIDE
		I nearly died of shame!
 
				FELICIE
		Come on, Adelaide, let them drink to our 
		misfortunes. 

They flounce out of the room. 

				BEAUTY 
		Oh father, father.
 
				THE MERCHANT
		They're real little devils, aren’t they? Let 
		them sulk; I'll soon console them. Tomorrow 
		morning I'll go to the port to see to my 
		business. Then one can marry a duke and the 
		other a prince! 
			(He raises his glass in a toast.) 
		Gentlemen!



  
The following morning.
 
The merchant is on his way out of the house. 

				FELICIE 
		Bring us back brocade dresses. 

				ADELAIDE 
		And jewels, fans and ostrich feathers.

				FELICIE 
		I want the whole town to burst with envy! A 
		monkey! I'd like a monkey! 

				ADELAIDE
		A parrot!
 
The merchant laughs and mounts his horse.
 
				THE MERCHANT 
			(turning to Beauty:)
		What about you? Beauty, what shall I bring you? 

				BEAUTY 
		Father, bring me a rose, for they don't grow 
		here. 

Adelaide and Felicie burst out laughing.
 
 


Later.
 
Ludovic and Avenant are seated at the table drinking. They are waiting for 
the usurer.
 
				LUDOVIC  
		If I don't pay off my debt tonight I shall be 
		arrested and thrown in Jail.
 
				AVENANT
		The moneylender is very understanding. I 
		explained the whole situation to him. Look 
		confident, here he comes.
 
				THE USURER 
			(entering the house)
		You're asking for a very large sum, you know, 
		very large...
 
 				AVENANT
		You do know that one of the lost ships has come 
		into port, don't you? 

				LUDOVIC
		I'll pay you back as soon as my father returns. 

				THE USURER
		You know the law, don't you? If you're 
		insolvent, I can claim the sum of money from 
		your father and if he's insolvent I can seize 
		his furniture.
 
				AVENANT 
			(to Ludovic) 
		Sign, you're not risking anything, are you? 

The usurer gives him a document. Ludovic signs.
 



In town. A lawyer's office.
 
				THE LAWYER
		But my dear Sir, what can I do? 

				THE MERCHANT 
			(in despair)
		As there's nothing left from this last ship, 
		what's to become of me?
 
				THE LAWYER
		Your creditors at the port moved faster than 
		the ones in town. Sue them.
 
				THE MERCHANT 
		Sue them! I haven't even got enough to pay for 
		a room tonight.
 
				THE LAWYER
		Well, go home then.
 
				THE MERCHANT 
		But I'll have to go through the forest in the 
		middle of the night. I'll get lost.
 
				THE LAWYER
		You came through it at night on your way here, 
		didn't you? 

				THE MERCHANT
		Yes, but there was a full moon then, and it's 
		getting foggy now. I know I'll get lost.

				THE LAWYER 
			(losing his patience)
		Well then, get lost. 

The lawyer shows him out.
 
				THE MERCHANT
		I don't understand you; I'm sure you'd feel the 
		same if you were in my shoes. It's very 
		frightening.
 
				THE LAWYER
		Good night!

The merchant fetches his horse, mounts and starts off.
 
				THE LAWYER
		Good luck!

The merchant rides deeper into the forest. It grows dark and a storm breaks. 
After a while he realizes that he has lost his way. He dismounts and leads 
his horse along the narrow forest paths, peering anxiously through the 
thickening mist. During a flash of lightning through the leaves he suddenly 
sees a magnificent castle. With a puzzled look on his face he walks slowly 
through the trees across a courtyard toward the castle gates. As he makes his 
way, the branches silently close in behind him. When he reaches the gates, 
they open before him. Surprised, he lets go of the horse's reins. The horse 
walks in ahead of him. The merchant follows, but the gates close in front of 
him. He runs back across the courtyard and looks up at the castle.
 


The castle.

				THE MERCHANT
		Is there anyone there?
 
In front of him is a wide stone staircase leading to a door in the castle 
wall.
 
				THE MERCHANT 
			(running up the stairs)
		Is there anyone there?
 
He goes through the door and is confronted by a row of human arms holding 
candelabras, showing him the way down a corridor to a large hall. He stops 
and stares in disbelief. Two of the human arms release the candelabras, which 
remain magically suspended, pointing toward the hall. Awed, the merchant 
backs into the room toward a huge fireplace. A clock on the mantlepiece 
strikes eleven. He turns around and looks from the fire to a dining table, 
which is sumptuously set with food and drink.
 
				THE MERCHANT
		Is there anyone there?
 
He puts his hat on the table, sits down and removes his gloves. A marble 
bust, which supports one end of the vast mantlepiece, slowly turns its head 
toward him. At the other side of the fireplace, its counterpart, breathing 
smoke through its nostrils, also moves its head around to look at him.
 
The merchant reaches for a silver goblet. A hand appears from the candelabra 
in the middle of the table. The merchant starts back. The hand takes hold of 
a wine decanter, fills the goblet, and returns to the candelabra. The 
merchant lifts up the edge of the tablecloth and peers underneath it. He 
stares at the candelabra on the table, stands up and turns to look once more 
at the row of candelabras leading out of the room.
 
He sits down again, picks up the goblet, sniffs at it suspiciously, and 
drinks. He falls into a deep sleep. The marble busts turn their heads again.
 
The merchant slowly wakes up. His hand is resting on the wooden arm of his 
chair, which is carved in the image of a lion's head. The lion's head comes 
to life under his hand and roars.

The merchant leaps to his feet and grabs his gloves. The marble bust breathes 
smoke. The candelabra on the dining table extinguishes itself.
 
The merchant takes a last look around the room, walks hurriedly down the 
corridor past the row of candelabras and leaves the castle. The door shuts 
silently behind him. He walks slowly down the stairs and along a balustrade 
decorated with stone statues of fierce-looking dogs. He stop and looks around 
him.
 
				THE MERCHANT
		Hey there! 

				ECHO
		'Hey there!' 

				THE MERCHANT 
			(walking along the balustrade) 
		Hey there! 

				ECHO
		'Hey there!' 

				THE MERCHANT 
			(coming to the end of the balustrade)
		Hey there! 

				ECHO
		'Hey there!' 

He goes down some steps and finds himself in a beautiful rose garden. He 
looks around nervously and walks over toward the flowers. Suddenly he 
stumbles over the body of a dead deer. 

				THE MERCHANT 
			(starting back with a look of horror) 
		Hey there! 

He looks down and sees a perfect rose, which changes color as he watches. 
Just as the merchant plucks the rose, the Beast appears through a curtain of 
leaves. 

				THE BEAST
		Hey there!
 
The Beast walks over to the merchant. He has the appearance of a werewolf, 
with long fangs and grotesque features. His huge gnarled hands end in claws 
and, like the rest of him, are covered in thick matted fur. He is wearing a 
long jeweled cloak over a doublet with slashed sleeves and a broad lace 
collar, a pair of velvet breeches and high leather boots.

As he speaks, the wind blows and the leaves and branches rustle.
 
				THE BEAST
		So, my dear Sir, you steal my roses. My roses 
		which are the most precious things in the whole 
		world to me. You are most unfortunate since you 
		could have taken anything but my roses. The 
		penalty for such a simple theft is death.

				THE MERCHANT
			(flinging himself to his knees)
		My Lord, I did not know. I did not think I 
		would offend anyone by plucking a rose for my 
		daughter. She asked for one.

				THE BEAST 
		One does not call me "my Lord"; one calls me 
		"Beast." I don't like compliments. No, don't 
		try to understand. You have fifteen minutes in 
		which to prepare yourself for your death. 

				THE MERCHANT
		My Lord!
 
				THE BEAST 
			(angrily)
		Again! The Beast orders you to be silent. You
		stole my rose and you shall die. Unless ...  
		unless one of your daughters .... How many do 
		you have? 

				THE MERCHANT
		Three.
 
				THE BEAST 
		Unless one of your daughters agrees to pay the 
		penalty and take your place. 

				THE MERCHANT
		But...
 
				THE BEAST 
			(angrily)
		Don't argue! Go! Take advantage of the one 
		chance I have given you. And if your daughters 
		refuse to die instead of you, swear that you'll 
		return in three day's time. Swear!
 
				THE MERCHANT
		I swear. But I don't know my way through the 
		forest ...
 
 				THE BEAST 
		You'll find a white horse in my stables. His 
		name is 'Magnificent One.' Just whisper in his 
		ear, "Go where I am going, Magnificent One, go, 
		go." He'll take you home and lead you back to 
		the castle if your daughters are too cowardly 
		to mount him. Now leave.

The Beast backs away into the curtain of leaves and disappears. The merchant 
runs off toward the stables. A beautiful white stallion awaits him there. He 
mounts him and sets off.

As the white; horse carries the merchant through the forest, the Beast 
watches him through the leaves. The branches close in silently behind the 
merchant as he makes his way home.
 


Later.

The merchant is at home, surrounded by his family.
 
				THE MERCHANT
		I can't tell you anything about my journey 
		home. The Magnificent One is in the stable. 
		That's the end of my story. Beauty, take this 
		rose, I'm paying a high price for it. 

				FELICIE 
		That's what happens when an idiotic girl asks 
		for roses. This is the result of that silly 
		creature's vanity.
 
				ADELAIDE
		And she pretends to be modest, and set us an 
		example. She's not even crying.
 
				BEAUTY 
		You won't die, father. It's my fault; it's only 
		right that I go in your place.
 
				AVENANT
		Are you mad? We'll go with Ludovic and we'll 
		kill this horrible beast.
 
				THE MERCHANT
		The Beast is so powerful that we have no hope 
		of overcoming him. Don't worry Beauty, I'm 
		growing old. I promised, so I shall go.
 
				FELICIE 
		You mustn't go, father, you may yet win your 
		case. 

				ADELAIDE 
		How will we live?

				THE MERCHANT
		You can sell the furniture.

				LUDOVIC
		Why don't you go, Felicie? You're too tough for 
		anyone to eat!
 
				FELICIE
		It's a great pity that the Beast isn't 
		demanding boys. He would devour you and die of 
		poison!
 
 				THE MERCHANT
		Children, keep calm...
 
 				BEAUTY
		Father, I'd rather be devoured by the monster 
		than die of the heartbreak of losing you.
 
				AVENANT
		You will not go to the monster.
 
				FELICIE 
			(angrily)
		What's it got to do with you?
 
				AVENANT
		It's none of your business!

				FELICIE 
		Are you in love with that stupid girl? What a 
		couple! 

				LUDOVIC
		Avenant, hit her.
 
				THE MERCHANT
		Keep calm, please... 

				AVENANT
		Go on, repeat what you just said! 

				FELICIE 
		A stupid girl and a stupid boy! 

Avenant hits her. 

				FELICIE
		He hit me!
 
				LUDOVIC 
			(angrily) 
		You dared to strike my sister!
 
				AVENANT 
			(to Ludovic)
		There's more where that one came from... 

				ADELAIDE
		You villain!

				THE MERCHANT 
			(in a faltering voice) 
		Children ... children... 

				BEAUTY 
		He's unwell.
 
				AVENANT
		Let's carry him to his room. 

Avenant and Ludovic help him out. 

				FELICIE 
			(angrily) 
		He hit me, Adelaide. 

				ADELAIDE
		And we're penniless. 

				FELICIE
		We mustn't give up.
 
				ADELAIDE
		The Beast will gobble them all up, and we'll 
		marry princes.
 


Meanwhile, Beauty comes out of the side of the house, wearing a long dark 
cloak. Making sure that no one sees her, she goes to the stable and mounts 
the white horse.
 
				BEAUTY 
		Go where I'm going, Magnificent One, go, go!
 
The horse trots out of the stable. The farm gates open before him. He carries 
Beauty through the forest to the castle. She dismounts and leads him through 
the foliage, which closes in behind her.
 
As though in a dream she enters the castle and floats past the rows of 
candelabras, through the large hall with the fireplace, and up a flight of 
stairs. She goes through a door which leads to a long gallery with billowing 
white curtains. Seemingly carried along by some magical force, she comes to a 
door flanked on each side by human arms carrying candelabras. The arms move 
toward the door, casting their light onto her.
 
				VOICE 
			(whispering as the door opens)
		Beauty, I am the door to your room.
 
 
Beauty enters the room hesitantly. The door closes silently behind her. She 
looks round the room which is spacious, elegantly furnished, and full of 
flowers and plants. A marble bust on one of the walls moves its head around 
toward her.
 
Beauty rushes over to the open window as though seeking her freedom.  
Realizing the futility of her action, she sits down at a dressing table and, 
in despair, puts her head in her hands.
 
				VOICE FROM THE 
				DRESSING TABLE MIRROR 
			(whisperingly) 
		Beauty, I am your mirror; reflect in me; I will 
		reflect for you.
 
Beauty puts her hands out toward the mirror and gazes into it. The glass is 
black.  Then she sees her father lying on his sickbed. The mirror turns black 
again. She stands up and looks round the room. On the large bed, a luxurious 
fur cover is pulled back by invisible hands. Beauty runs out of the room, 
along the corridor, out of the castle, down the stone staircase into the 
courtyard.
 
Across the courtyard the doors open and the Beast makes his appearance. 
Beauty lets out a cry of fear and horror. 

				THE BEAST 
		Where are you going?
 
She falls to the ground in a faint. The Beast walks over to her, gathers her 
gently in his arms and carries her carefully up the stone staircase with a 
look of anguish mingled with tenderness.
 
He takes her back into the castle, past the row of candelabras, up the stairs 
into her room. As he crosses the threshold of the room, Beauty's clothes are 
transformed. She is dressed like a princess in a richly embroidered silk 
dress with sparkling jewels. The Beast puts her down gently onto the bed and 
stares at her intently. She awakens, opens her eyes, and turns her head 
toward the Beast. As she sees him she lets out a cry. He backs away across 
the room.
 
				THE BEAST 
		Beauty, you mustn't look me in the eyes. Do not 
		fear, you will never see me, except every 
		evening at seven, when you dine. I shall come 
		to the great hall. 
			(He backs out of the room.) 
		You mustn't look me in the eyes.
 
The door closes silently behind him.
 


In the great hall the clock strikes seven. On each side of the blazing fire 
the marble busts turn their heads. Beauty is sitting at the table, wearing a 
dark jeweled dress, with matching jewels round her neck and wound into her 
hair. The hand from the candelabra on the table picks up the silver wine 
decanter to serve her. She leans back in her chair with a sigh of despair and 
closes her eyes. The door opens behind her and the Beast crosses the room. He 
stands behind her, leaning on the back of the chair.
 
				THE BEAST 
		Don't be afraid.
 
				BEAUTY 
			(summoning up all her courage)
		I ... I won't be afraid. 

				THE BEAST 
		Beauty, do you mind if I watch you while you 
		dine?
 
				BEAUTY
		You are the master.
 
 				BEAST 
		No, I'm not. 
			(He pauses for a moment.) 
		There is no master here but you. 
			(He moves around to 
			the side of the chair.) 
		I revolt you; you must find me very ugly.
 
 				BEAUTY
		I cannot lie, Beast.
 
				THE BEAST 
		Is everything here to your liking?
 
				BEAUTY 
		I feel uneasy dressed in such finery, nor am I 
		used to being waited upon. But I know you're 
		doing your utmost to help me forget your 
		ugliness.

				THE BEAST 
			(walking over to the fireplace)
		My heart is kind, but I am a monster.
 
				BEAUTY
		Many men are more monstrous than you, but they 
		hide it well.

				THE BEAST 
		Besides my ugliness, I am lacking in wit. 

				BEAUTY
		You have wit enough to realize it.

				THE BEAST 
		Everything in this castle is yours. Your every 
		whim will be fulfilled.
  
				THE BEAST 
			(walking back to the dining table)
		I shall appear every evening at seven. Before 
		leaving I shall ask you a question; it will 
		always be the same one.
 
				BEAUTY
		What is your question?
 
 				THE BEAST 
		Beauty, will you be my wife? 

				BEAUTY 
		No, Beast.

				THE BEAST 
		Farewell then, Beauty. Until tomorrow. 

He leaves the room.
 


Later.
 
Beauty walks fearfully across the hall. She is wearing a long white silk 
gown. She hears a sound like the roar of wild beasts followed by the screams 
of an animal in pain. She walks along the gallery, keeping close to the wall 
as though looking for protection. The white curtains billow in the breeze. 
She stops by a marble bust, aware of some presence. The Beast appears and 
walks past with a look of hideous despair. He doesn't see her hidden behind 
the statue. He stares at his huge grotesque hands, the sharp claws, and 
buries his head in his arms. Beauty watches him in horror. He turns, goes to 
the door of her room, leans against it for a moment with the same look of 
anguish. He enters the room, searching desperately for her. He sits down at 
the dressing table, picks up the mirror and stares into it.

				THE BEAST 
		Where is Beauty? 
			(shouting) 
		Where is Beauty? 

Smoke billows out of the mirror. He gazes into it and sees her edging her way 
slowly along the gallery to the door, listening carefully for any sound from 
within. The Beast puts down the mirror, stands up and looks at the door.
 
Beauty enters the room.
 
				BEAUTY 
			(angrily)
		What are you doing in my room?
 
				THE BEAST 
			(meekly)
		I wanted to ... I was ... I came to your room 
		to bring you a gift.

He holds out his hand. A pearl necklace magically appears in the palm of his 
hand.

				BEAUTY 
			(shouting)
		Leave!
 
She runs out of the room. Disconsolately, the Beast puts the necklace down on 
the dressing table.
 
				BEAUTY 
			(in a softer voice)
		Leave.
 
The Beast walks slowly out of the room. 

Beauty walks across the room to the dressing table and picks up the pearl 
necklace. She looks at it pensively.
 



Later.
 
Beauty is walking through the castle grounds. She comes to a door. She pushes 
it open and looks through onto a pool of water surrounded by plants and 
trees. The Beast is on his knees by the edge of the pool, lapping up the 
water like an animal. Beauty closes the door and backs away with a concerned 
look on her face. She continues her walk through the grounds. She is wearing 
the pearl necklace that the Beast left in her room. The Beast appears among 
the stone statues of dogs.
 
				THE BEAST 
		I thought you were dining, Beauty.
 
				BEAUTY
		I'm not hungry, Beast. I'd prefer to walk with 
		you.
 
				THE BEAST 
			(in a gentle voice) 
		Beauty, you're doing me a great honor ... 
		
They walk side by side along the stone balustrade. 

				THE BEAST 
		... a very great honor. 

				BEAUTY
		Your voice seems gentler. 

They stop.
 
				THE BEAST
		Beauty, I hope you don't find the days too 
		tedious. 

				BEAUTY 
			(walking on) 
		I do find the days long. And this evening I 
		admit I was almost looking forward to seven 
		o'clock.
 
				THE BEAST 
		You are so kind that I can hardly bring myself 
		to ask you the question which torments me so.
 
				BEAUTY
		Ask, I shall always give the same reply. Let's 
		be friends, Beast, don't ask any more of me. 

They walk on through the grounds.

				BEAUTY
		Tell me, Beast, how do you pass the day? 

A deer leaps through the bushes. The Beast stares at it greedily as it runs 
away into the woods.
 
				BEAUTY
		Did you hear me, Beast? I'm talking to you.

				THE BEAST 
			(in a troubled voice) 
		For ... forgive me. 

				BEAUTY 
			(putting her hand on the Beast's arm)
		Beast! What is it? 

The Beast puts his head in his hands and turns away in shame. 

				THE BEAST 
		Forgive me, please forgive me, it's nothing. 

Beauty hesitantly puts out her hand. He takes it, and leads her down the 
stone staircase. They come to a fountain. The Beast puts his head in his hand 
again.
 
 				BEAUTY 
		What's the matter, Beast?
 
 				THE BEAST 
		I'm thirsty, Beauty.
 
Beauty goes to the fountain and fills her hands with water. 

				BEAUTY 
			(holding out her hands)
		Drink from my hands. 

The Beast laps the water from her hands and stares at her intently. 

				THE BEAST 
		Doesn't it revolt you to give me drink?

				BEAUTY
			(looking him straight in the eyes)
		No, Beast, it gives me pleasure. I would never 
		wish to cause you any pain. 

				THE BEAST 
		And yet your dream is to be far away from me.




Beauty is in the great hall, walking up and down in front of the fire. She is 
wearing a dark velvet dress. The marble busts at each end of the mantlepiece 
turn their heads to watch her. The clock strikes half past seven. Beauty 
looks up at the clock and sees the Beast's reflection in the mirror above it. 
She turns round as he walks across the room.
 
				BEAUTY 
		How late you are!

				THE BEAST 
		Thank you, Beauty, for noticing.

				BEAUTY 
		Yes, I was awaiting you with great impatience, 
		Beast. 

She throws herself to her knees and grabs his cloak.

				BEAUTY 
		I must talk to you!

				THE BEAST 
			(shocked)
 		Beauty! Beauty!
 
 				BEAUTY 
			(still on her knees, pleading) 
		I cannot live another day without seeing my 
		father again. Please let me go, I beg you!
 
				THE BEAST 
		Stand up, Beauty, stand up.

He pulls her to her feet and leads her to a chair. He sits down beside her.
 
				THE BEAST 
		I should be on my knees taking orders from you. 

				BEAUTY 
			(almost in tears) 
		Let me go. I promise to return. 

				THE BEAST
		And when you return, will you be my wife? 

				BEAUTY 
			(in despair)
		You're torturing me.
 
				THE BEAST 
		I know I'm repulsive. But I would die of 
		heartbreak if I let you go and you took 
		advantage of your freedom never to return.
 
				BEAUTY 
		I'd come back in a week's time. I respect you 
		too much to cause your death.

The Beast lowers his head. Beauty strokes it.

				THE BEAST 
			(looking up at her)
		You coax me as though I were an animal.
 
				BEAUTY 
			(gently) 
		But you are an animal.
 
 				THE BEAST 
		Your request is a very serious matter. I must 
		think about it. 
			(He stands up.)
		Beauty, will you come into the garden with me?
 
He takes her hand and leads her out of the castle.
 
				THE BEAST 
		Beauty, has someone already asked for your hand 
		in marriage? 

				BEAUTY
		Yes, Beast.
 
 				THE BEAST 
		Ah! ... And ... who asked for your hand?  A 
		young man?
 
				BEAUTY 
		Yes, Beast.
 
				THE BEAST
		Is he handsome? 

				BEAUTY 
		Yes, Beast.
 
				THE BEAST
		Why did you not marry him? 

				BEAUTY 
		I didn't want to leave my father.

				THE BEAST 
		And what is this handsome young man's name, 
		Beauty? 

				BEAUTY 
		Avenant.
 
The Beast looks at her, turns away as though in pain and suddenly runs away 
through the trees.

				BEAUTY 
			(shouting)
		Beast! What's the matter? ... Beast! Beast! 
		What is it? ... Beast!
 
 


Later.
  
Beauty is lying in bed. Suddenly she hears a noise outside the door. She runs 
to the door which opens before her. The Beast is standing in the shadows.
 
				BEAUTY 
		What are you doing at my door at such a late 
		hour? 

The Beast moves into the light.
 
				BEAUTY 
		My God! You're covered in blood! 

She starts back in horror. 

				THE BEAST 
		Forgive me ... 

				BEAUTY 
		For what?

				THE BEAST 
			(almost groveling) 
		For being a beast, forgive me. 

				BEAUTY 
			(firmly) 
		It doesn't become you to talk in that way. 
		Aren't you ashamed of yourself? Go and clean 
		yourself and go to sleep.

She stands there looking at him in all her innocence and purity. The Beast is 
overcome with shame and self-disgust.
 
				THE BEAST
			(in despair)
		Close the door! Close the door! 
			(She doesn't move.) 
		Quick ... quick, close the door. Your look is 
		burning me, I can't bear it.

He backs away. The door closes gently behind him. Beauty walks slowly toward 
the bed with a troubled look on her face.
 



Later.
 
At the merchant's house.
 
The bailiffs are removing the furniture on instructions from the usurer. 
Avenant and Ludovic are sitting at the table, watching. 

				AVENANT
		They're taking every single thing. 

				LUDOVIC
		I don't suppose they'll even leave the table. 

				AVENANT
		Let's play cards.
 
He picks up a pack of cards. The usurer walks over to them with a 
disapproving look.
 
				THE USURER 
			(to Ludovic)
		Go up to your father. He doesn't understand 
		what's going on, which is only natural. I can't 
		very well explain the situation to him. 

Ludovic looks doubtfully at Avenant. 

				AVENANT 
			(resigned) 
		Go on.
 
 

Later.
 
Upstairs the merchant is lying ill in bed. Ludovic stands beside him, looking 
sorry for himself.

				THE MERCHANT 
			(in a weak voice)
		Ludovic ... Ludovic ... is it true? 

				LUDOVIC
		I'm afraid it is.
 
				THE MERCHANT
		Ludovic, how could you have done such a thing? 

The usurer hurries into the room.
 
				AVENANT
			(following him)
		Sir, he's a very sick man, you must leave the 
		bed.
 
				THE USURER
		Yes, yes, we won't take the beds.

They go downstairs into the hall. Adelaide and Felicie run down the stairs 
and hurry out of the house.
 
				LUDOVIC
		I bet they've seen to it that no one touches 
		their things! 

				THE USURER
		No, no, they too owe me money.

				THE BAILIFFS 
			(coming through the door 
			with more furniture)
		Come on, it's all got to go!
 
The usurer leaves the house. Avenant and Ludovic sit down at the table in the 
otherwise bare room. Ludovic brings out a purse and pours money on to the 
table with a smile. Avenant picks up the pack of cards and deals. Ludovic 
looks at his hand.
 
				LUDOVIC 
			(piling up his stake)
		A pair! 

				AVENANT 
			(throwing down a card)
		Ace! 

				LUDOVIC
		Oh, I nearly had you.

				AVENANT 
			(laughing)
		That's not good enough! 

				LUDOVIC 
			(picking up the cards 
			and shuffling them) 
		My deal. 

The usurer bursts into the house.
 
				THE USURER 
			(angrily) 
		You cheats! Give me my money! 

He tries to pick up the money from the table. Ludovic strikes him and knocks 
him out.
 
				LUDOVIC
		What shall we do?
 
				AVENANT 
		Throw him out. The streets are empty at this 
		time of night.
 
 
				LUDOVIC
		What time is it? Wait a minute.
 
He leans down and takes the watch and chain off the usurer's frock coat. He 
looks at it.
 
				LUDOVIC 
			(grinning) 
		Ten o'clock. 

He puts the watch inside his jacket.
 
 

At the castle.
 
Beauty is lying on the bed. The Beast walks over to the foot of the bed.

				THE BEAST
		Beauty, are you ill? 

				BEAUTY
		Yes, Beast. I am. 

				THE BEAST 
		What ails you?
 
				BEAUTY 
		I know my father's dying.
 
				THE BEAST
		I can't bear to see you waste away.
 
				BEAUTY 
		Send me home to my father.
 
				THE BEAST 
		If I agree, will you promise to return in a 
		week's time, to the very day?
 
				BEAUTY 
			(smiling at him)
		I promise.

				THE BEAST
			(going to the edge of the 
			bed and putting out his hand)
		Come with me, Beauty.

He helps her down from the bed and leads her through the French windows out 
onto the balcony. 

				THE BEAST
		Look over there, Beauty. 

He points to an ornately decorated small pavilion.

				THE BEAST
		You see that pavilion? It's called the pavilion 
		of Diana. It's the only part of my domain where 
		no one may enter. Not even you or I. Everything 
		I possess, I possess by magic powers. But my 
		true riches lie locked in that pavilion. A 
		golden key opens the door. Here it is ... 
			(He shows her the key.) 
		Beauty, I couldn't give you greater proof of my 
		faith in you. If you don't return I shall die. 
		After my death, you risk nothing more and all 
		my riches will be yours. Take this key, Beauty. 
			(He hands it to her.) 
		I have faith in you. The key will be your 
		pledge to return.

				BEAUTY 
			(looking at him with 
			an expression of joy)
		You agree to send me home to my father? 

				THE BEAST
		You'll be there this very morning. My night 
		here is not the same as yours. It is night in 
		my world, but it is morning in yours. 
			(He leads her hack into the room.) 
		Beauty, a rose that has already played its 
		part, my mirror, my golden key, my horse and my 
		glove are the five secrets of my power ... I 
		surrender them to you. 
			(He removes his glove 
			and gives it to her.) 
		Just put the glove on your right hand, it will 
		carry you wherever you wish. 

He walks slowly to the door, turns round and looks at her intently. 

				THE BEAST
		Remember your promise. 
			(The door opens; he 
			leaves the room.) 
		Farewell, Beauty.
 
The door closes silently behind him. Beauty paces up and down the room, 
staring at the glove. She puts it onto her right hand. In a flash she is 
transported to her father's bedroom.
 
The merchant is sleeping. Beauty throws the glove onto the bed and sits down. 
Gently, she puts her hand out toward him. He wakes up. 

				THE MERCHANT
		I must be dreaming!
 
				BEAUTY
		No, father, you're not dreaming. It is I, 
		Beauty, talking to you.
 
 				THE MERCHANT
		I thought you were dead, and it was killing me. 
		But you managed to escape?
 
 				BEAUTY
		No, father, the Beast set me free to visit you. 

				THE MERCHANT
		So the monster has a heart.
 
 				BEAUTY 
		He suffers greatly, father. One half of him is 
		in constant struggle with the other. I think he 
		is more cruel to himself than he is to others.
 
 				THE MERCHANT
		But Beauty, I've seen him, he's so hideous. 

 				BEAUTY 
		Yes, at first he's very frightening, father. 
		Yet now, he sometimes makes me want to burst out 
		laughing. Rut then I see his eyes, and they're 
		so sad that I turn away so as not to weep. 

				THE MERCHANT
		Beauty, my little Beauty, don't tell me that 
		you're willing to live with this monster!
 
 				BEAUTY
		I must father. Certain powers obey him, but 
		others control him. If I escaped I'd be 
		committing a crime against him and against you.
 
				THE MERCHANT
		Does he threaten you?
 
 				BEAUTY
		He only comes to me when his cruelty need not 
		be feared. Sometimes his bearing is regal, but 
		sometimes he almost limps, as though he were 
		the victim of some terrible affliction.
 
 				THE MERCHANT
		How can you feel sorry for him?
 
				BEAUTY 
		I can bear his presence because I would be 
		happy if I could make him forget his ugliness.
 
 				THE MERCHANT
		Beauty ... Beauty, you're paying a high price 
		for being so good.
 
				BEAUTY
		But father, the monster is good.
 
A tear falls from her eyes onto her hand. It is magically transformed into a 
diamond.

				THE MERCHANT
		Good God! A diamond!
 
He picks it up, looks at her, and puts his hand to her cheek where another 
tear glistens. 

				THE MERCHANT
		Another one!
 
				BEAUTY
		It is proof that he is protected, for I wept 
		thinking of him. 

				THE MERCHANT
		Maybe the devil sent these diamonds! 

				BEAUTY 
		Rest assured, father, keep them. They are a 
		gift from him. Now you'll be able to support 
		yourself. But if you tell my sisters of this 
		miracle, they'll take them from you and you'll 
		have nothing.
 
 


Later.
 
Outside in the yard, Felicie and Adelaide are hanging up the washing. They 
are dressed in peasant clothes. Ludovic is feeding the chickens.
 
				FELICIE
		I'd rather lie on the sheets than have to hang 
		them up. My hands are in the most dreadful 
		state!
 
				LUDOVIC 
			(ironically) 
		How appalling.
 
				ADELAIDE
		Look at mine! A kitchen maid! That's what I've 
		been reduced to!
 
				LUDOVIC
		Well, my lovely princesses, when one is 
		penniless, one has to work! 

				FELICIE
		You fool!

				ADELAIDE 
			(to Ludovic)
		Yes, you can talk, you good-for-nothing. If we 
		hadn't lost all the furniture, we'd still have 
		a maid. 

Avenant is chopping wood across the yard.

				AVENANT 
			(joining them)
		It's all my fault. And you may have noticed 
		that I'm paying for it now.
 
				ADELAIDE 
		Yes, when you're not drinking or gambling.

				AVENANT
		Oh, you're so charming. 
			(He pauses.)
		How was your father this morning?
 
				LUDOVIC
		As if they cared! I'm the only one that looks 
		after him. He's still very weak. He can't get 
		up.
 
Suddenly they hear the merchant shouting in a strong voice. 

				THE MERCHANT
		Felicie! Adelaide! Ludovic!

Felicie climbs up onto a stool and peers out over the line of washing. 

				FELICIE 
		Well, I never! A lady from the court, walking 
		with my father!

				ADELAIDE 
		And here we are dressed in rags!
 
 				AVENANT
		It's Beauty! 

				LUDOVIC
		Beauty! It can't be! 

				ADELAIDE 
		It is!

The merchant and Beauty walk across the yard. Beauty looks like a princess. 
She is wearing a long white silk dress with full sleeves and a low-cut 
neckline. Her hair flows down her back in elaborate curls, and on her head 
she wears a jeweled coronet from which floats a translucent pearl-studded 
train.  Her only piece of jewelry is a magnificent pearl necklace with a 
diamond clasp. The two sisters stare at her in disbelief. Avenant helps 
Felicie down off the stool.
 
				FELICIE
		Leave me alone, will you!
 
				AVENANT
		You become sweeter by the moment. 

				THE MERCHANT
		Beauty came to my room and cured me. 

				LUDOVIC
		Where have you come from? 

				FELICIE 
			(staring greedily at 
			Beauty's necklace) 
		What a magnificent necklace!
 
 				BEAUTY 
			(removing it and 
			offering it to her)
		Take it, Felicie, it will look even better on 
		you.
 
Felicie grabs it eagerly. It turns into a bunch of dirty twisted rags. 

				THE MERCHANT
		My God! 

				ADELAIDE
		Put it down!

				FELICIE
		How disgusting!
 
She drops it. As it touches the ground it turns back into pearls. The 
Merchant picks up the necklace and puts it on Beauty. 

				THE MERCHANT
		What the Beast gave you is for you alone. You 
		can't give it away.

				FELICIE 
			(angrily)
		Come on Adelaide, let's go and get dressed. We 
		must look simply ghastly.
 
				LUDOVIC
		Good-bye, you sweet young things! 

The two sisters stalk out of the yard.

				BEAUTY 
			(looking at the 
			washing on the line)
		Who did my washing? 

				AVENANT
		We did!
 
				BEAUTY 
		The sheets are badly hung, they're trailing on 
		the ground. 

				LUDOVIC
		So, this Beast wasn't savage? 

				BEAUTY 
		No, Ludovic, he's a good beast. 

				AVENANT
		You're not going back to him, are you?

				BEAUTY 
		I must, Avenant, I promised. The Beast set me 
		free for one week, and if I don't return he'll 
		die of heartbreak. 

				AVENANT 
			(angrily) 
		Do you love him?
 
				BEAUTY
		No, Avenant, I'm fond of him. It's not the same 
		thing.
 


Inside the house, the two sisters are dressing.
 
				ADELAIDE 
		The Church Committee would be most interested 
		in that little exhibition of witchcraft we've 
		just witnessed.
 



In the yard.

				THE MERCHANT 
			(kissing Beauty on the cheek)
		I'll see you later. 

He leaves.

				LUDOVIC
		Let's go to the stable. We can talk seriously 
		there. My dear sisters won't be able to hear 
		us.
 
They walk across the yard and go into the stable.
 
				LUDOVIC
		Tell us everything.

				BEAUTY 
			(sitting down on a wooden bench) 
		He gave me the key to all his treasures. He 
		trusts me implicitly. I'd be the monster if I 
		didn't return to him.

				LUDOVIC
		What about your servants? Are there many?
 
				BEAUTY 
		Invisible hands serve me, dress me, arrange my 
		hair, open and close the doors. I never see 
		anyone.
 
 				AVENANT
		And this Beast speaks like a human being?
 
 				BEAUTY
		Yes, Avenant, he speaks just like you and I do.
 
				LUDOVIC 
		Does he crawl on all fours? What does he drink? 
		What does he eat?
 
 				BEAUTY 
		Sometimes I help him drink -- and I know he'll 
		never eat me.
 



Inside the house. The two sisters are dressed up in all their finery. 

				FELICIE 
		Well, I never! 

				ADELAIDE
		It's incredible!
 
				FELICIE
		That little fool is happier than we are -- and 
		she's rich. After all, so many husbands are no 
		better than her Beast. 

				ADELAIDE
		She's bursting with pride!
 
				FELICIE
		Don't worry, I've got a good head on my 
		shoulders. We must be very friendly and let the 
		boys worm out her secrets.
 
 


Later.

Downstairs. Avenant and Ludovic are sitting at the table. Ludovic empties his 
pockets.

				AVENANT
		Show me how much you've got.

				LUDOVIC 
			(throwing a coin onto the table) 
		There you are. It's pretty bad.
 
				AVENANT
		We must do something. I've come to a decision. 

				LUDOVIC
		There's nothing we can do.
 
				AVENANT
		Ludovic, the idea of Beauty returning to that 
		Beast tomorrow is intolerable. We must slay 
		the Beast. 

				LUDOVIC
		And take his treasure! But do you appreciate 
		the power of magic? 

				AVENANT
		I don't believe in magic. I'm sure the monster 
		hypnotizes Beauty and makes her believe anything 
		he wants her to.
 
 				LUDOVIC
		I'm scared.
 
 				AVENANT
		When it comes to rescuing Beauty no magic power 
		in the world could scare me. Anyway we have no 
		choice. So don't be ridiculous. Butter up your 
		sisters -- when they see what's in it for them, 
		they'll stop Beauty from leaving. Tempt them 
		with the promise of riches.
 
				LUDOVIC
		And by what miracle will you find the Beast? 

				AVENANT
		I'll question Beauty and find out her secret.




Later.
 
In the kitchen.
 
				FELICIE 
		We'll rub our eyes with onions and pretend to 
		cry. 

				ADELAIDE 
			(holding up an onion)
		She'll smell it. Ludovic's ideas are ludicrous.

				FELICIE
		She's too stupid to notice. Ludovic's idea 
		isn't all that silly. Leave it to me. 

She hands the onion to Adelaide who rubs it in Felicie's face. 

				FELICIE
		Charming! ... Go on ... go on ... 

They run into Beauty's room, holding handkerchiefs to their faces. Beauty is 
wearing her simple peasant clothes.

				FELICIE 
			(dramatically)
		Beauty, you can't leave us, you mustn't go! 

				ADELAIDE 
			(flinging herself to her 
			knees at Beauty's feet)
		Beauty, stay with us!

				FELICIE
		I know we have been unfair to you, but at the 
		thought of losing you we realize just how much 
		we love you! 

				BEAUTY
		You're crying!
 
				FELICIE 
			(pretending to sob)
		If the Beast loves you, he won't mind if you 
		stay a little longer.
 
 				ADELAIDE 
		Stay another week! 

				BEAUTY
		It's not possible.
 
 				FELICIE 
		Do you want us to die of heartbreak? Your 
		father? Your sisters? Stay ... Stay, Beauty 
		... Stay with us!
 
				BEAUTY 
			(turning away) 
		I can't. 

				FELICIE
		Don't be cruel. Stay! 

Adelaide pretends to sob hysterically.

				BEAUTY 
			(stroking her forehead)
		Adelaide, Adelaide! My dear sister. 

				FELICIE 
		Adelaide said to me, "We have got our dear 
		Beauty back. I shall die if she leaves!"
 
				BEAUTY 
		Don't tempt me. 

				ADELAIDE
		Beauty!
 
				FELICIE 
		Don't abandon us tomorrow. Tell the Beast that 
		it was your sisters' fault.
 
She turns away in false despair and walks over to the dressing table. She 
sees the golden key lying there and snatches it while no one is looking.

				BEAUTY 
			(sighing)
		I didn't realize that you were so fond of me. 

				FELICIE 
			(smiling falsely) 
		You're an angel. 

She runs up to Beauty and embraces her. 

				ADELAIDE 
			(kissing her) 
		We're so happy! So happy! 

Beauty throws herself onto the bed in despair. The sisters leave the room.

				ADELAIDE
		Oh, I'm so happy!
 
Felicie closes the door behind her and listens.

				FELICIE 
		She's crying!

				ADELAIDE 
		She'll stay behind, and we'll share all the 
		treasure! 

				FELICIE 
		Let's wash our faces. You stink! 

They go downstairs. Ludovic is waiting for them. 

				LUDOVIC
		Well? 

				FELICIE
		Well what? 

				LUDOVIC
		Is she staying? 

				FELICIE 
		She's staying.
 
				LUDOVIC
		Did you get the key? 

				FELICIE 
		Look! 

She opens her hand.

				LUDOVIC
		Give it to me.

				FELICIE 
			(putting her hand behind her back) 
		What do you take me for?

				ADELAIDE 
			(to Ludovic)
		Who knows what you'd do with it; it's solid 
		gold, you know. 

				LUDOVIC
		You stupid fool.
 
				FELICIE
		Don't start fighting. I'll give it to Avenant 
		-- if he decides to go.

				LUDOVIC
		Oh, women! You really are incredible! Typical. 
		Go how? Go where?
 
				FELICIE 
			(shrugging her shoulders) 
		Avenant will just have to find a way.
 



Later.

The family is dining.
 
				THE MERCHANT
		Beauty, you seem so sad. 
 
				BEAUTY
		No, I'm not, father. 

				FELICIE 
		She misses her luxuries. Our wretched way of 
		life upsets her.

				THE MERCHANT 
			(angrily)
		Felicie! Felicie!

				ADELAIDE
		The Beast must have certain attractions that 
		we don't possess.
 
Beauty gets up to serve the wine.
 
				THE MERCHANT
		Oh!
 
				FELICIE 
		Doubtless Madam feels that it's beneath her to 
		wait on us. 

Beauty runs out of the room. 

				THE MERCHANT
		Beauty! Beauty!
 
She goes outside with her head in her hands, sobbing. 

				AVENANT 
			(coming up to her) 
		What have they done to you now? It's your 
		sisters, isn't it? They didn't wait long! Damn 
		it! Beauty, listen to me, don't cry. I must wake 
		you from this nightmare. I must take you away. 
		I know what you're thinking -- that I'm a good-
		for-nothing. But with you beside me, I'd work. 
		We'd leave the town and its taverns behind us. 
		Answer me. 
			(She is silent.)
		What is it? I see, it's the Beast. Tell me how 
		to get to him, I'll go and kill him. 
			(He pauses.)
		You don't answer. I was sure of it; the Beast 
		has bewitched you or at least you can't bring 
		yourself to wish him harm. 
			(Beauty listens to him 
			with tears in her eyes.) 
		Well, Beauty, let me tell you -- that monster 
		can't be suffering as I do or he would fly to 
		you and make you follow him. Rest assured, 
		Beauty, he has forgotten you.
 
She shakes her head and leaves him.
 



Later. At the castle.
 
The Beast is pacing up and down in Beauty's room. He looks at his bare right 
hand in despair. He goes over to the dressing table and fingers the mirror. 
He walks slowly round the room and stares at the empty bed. He picks up the 
fur bedspread and strokes it, as he holds it to his cheek and clutches it to 
his breast with a look of anguish.
 



Later.
 
At the merchant's house. The stable.

Felicie opens the door to let in Avenant and Ludovic. 

				FELICIE 
		Come in, no one will find us here. 

				ADELAIDE
		You're late, of course. 

				FELICIE 
		Well? 

				AVENANT
		I have reached a decision. There's no looking 
		back now! 

				LUDOVIC
		That's all very well, but how can we get to the 
		Beast? 

				FELICIE
		Didn't you find out how Beauty got here?

				AVENANT
		Beauty only tells us what the Beast has allowed 
		her to tell. We know every detail about the 
		domain, but she won't say anymore.
 
				FELICIE
		To hell with her; if she won't tell, I'll 
		torture her till she does!
 
				AVENANT
		If you do that, don't count on any more help 
		from me! 
			(They hear a sound.)
		What's that? I'll go and see. 

He goes to the door. The Magnificent One trots into the yard. 

				AVENANT
		A riderless white horse! It's the Magnificent 
		One, I'm sure. He jumped over the gate and came 
		into the yard. 

				FELICIE
		Heaven sent him!
 
 				LUDOVIC 
		More likely Hell. 

				ADELAIDE
		I'm scared!
 
 				FELICIE 
		Shut up, you fool. Avenant, open the door 
		quietly and bring him in.
 
 				AVENANT
		Don't move, I'll go.
 
He goes out into the yard and leads the horse into the stable.
 
				FELICIE 
		The Beast has sent him for Beauty. What luck. 
		Avenant, the horse can take you and Ludovic to 
		the domain.

				LUDOVIC
		It's easy for you to talk!
 
				FELICIE 
		Are you a man, or aren't you?
 
				AVENANT
		We mustn't waste a second. 
			(He mounts the horse.)
		Come on, Ludovic, jump up behind me.

				LUDOVIC 
			(getting up behind him) 
		May God protect us. 

				FELICIE 
			(picking up their bows and arrows) 
		Your bows! 

She hands them to Avenant. He looks down. Something is hanging from the 
saddle.
 
				AVENANT
		What's that?
 
				FELICIE 
		It's a bag. If it were gold, I'd only have to 
		touch it and it would turn to straw. 
			(to Adelaide) 
		Open it.
 
 				ADELAIDE 
			(looking inside the bag)
		A mirror!
 
She takes it out. It's the mirror from Beauty's room in the castle.
 
				FELICIE 
		His message to her is clear: Look and you will 
		see the ugly face of a girl who breaks her 
		promises.
 
 				LUDOVIC 
		You see, the Beast's not all that stupid after 
		all. 

				FELICIE
			(giving Avenant the key) 
		Here's the key -- off you go, and good luck!
 
				AVENANT
		I've forgotten the magic words.
 
				LUDOVIC
		It's something like "Go, go." 

				FELICIE
		If I depended on you we'd get nowhere! Go where 
		I am going, Magnificent One, go, go.

 				AVENANT
		Go where I am going, Magnificent One, go, go. 

The horse neighs and gallops out of the yard. 

				ADELAIDE
			(running after them) 
		Ludovic! 

				FELICIE
		What's the matter?

				ADELAIDE
		Suppose we've sent them to their death ...
 
				FELICIE
		Don't be stupid. 
			(They go into the house.) 
		The mirror! 

				ADELAIDE
		I don't feel happy about it.
 
				FELICIE 
			(holding up the mirror)
		Look at you, green with fear. 

Adelaide lets out a cry of horror. The mirror reflects the cruel and ugly 
face of an old hag. 

				ADELAIDE
		Look!

She holds the mirror up to Felicie. Felicie looks into it and sees an ape.

				FELICIE 
		Oh!
 
				ADELAIDE 
		What can you see? 

				FELICIE 
		Nothing. Let's take it to Beauty, it's her 
		turn. 

They go to Beauty's room. She is wearing the fabulous clothes and jewels that 
she had on when she arrived.

				FELICIE 
		Ah! So Madam dolls herself up like a princess 
		when she's alone in her room.
 
				ADELAIDE
		Yes, just who do you think you are?
 
				FELICIE
		Here, Beauty, here's a mirror that was 
		mysteriously left at the door for you. 
			(She throws it on the bed.) 
		To show you how a Beauty must look to please a 
		Beast. 

They leave the room.

Beauty goes over to the bed and picks up the mirror. She holds it to her 
cheek and props it up on the dressing table. She lies down on the bed and 
stares into it. At first she sees her own reflection. Then the Beast appears 
to her, with a look of intense suffering. The mirror goes black. Beauty lies 
back on the bed in despair. Suddenly she sits up. She looks at the mirror 
again, hurriedly picks up the Beast's glove which is lying next to it and 
puts it on her right hand.
 
She is transported to her bed in the castle. She removes the glove and sits 
up.
 
 				BEAUTY 
		Oh! the key! 

She puts the glove on again. She is taken back to the house. She removes the 
glove and looks round the room for the key.
 
				BEAUTY 
		The key! 
			(desperately) 
		Where is the key? My God! 

She throws herself onto the bed and hurriedly puts on the glove again.
 



Back in her room in the castle, she rushes to the door which opens silently 
before her.

				BEAUTY
		Beast! My Beast! 

She runs out of the castle, down the stone staircase. She stops and searches 
in vain for the Beast.
 
				BEAUTY
		Beast!  
			(in despair)  
		Beast!  

She runs through the garden shouting for him. Suddenly she sees him lying on 
the ground by the edge of the pool. 

				BEAUTY
		My Beast! 

She runs to his side and kneels over him. 

				BEAUTY
		My Beast, answer me, Beast! Oh, my Beast, 
		forgive me! 
			(She tries to lift up his head.) 
		Answer me, Beast. Look at me. Your glove will 
		revive you. 
			(She puts it on his right hand.) 
		Help me! 
			(She looks at him.) 
		I'm the monster, Beast. You shall live, you 
		shall live!
 
				THE BEAST 
			(whispering)
		It's too late.
 
Meanwhile, Avenant and Ludovic have reached the pavilion.
 
				LUDOVIC 
		We're here!
 
				AVENANT
		Yes, we're here. First we must kill the Beast. 

				LUDOVIC
		We'll kill him later. Have you got the key? 

Avenant brings out the key and is about to put it into the lock.
  
				LUDOVIC
		Wait! This key may release some evil trap. We 
		must be very careful.
 
 				AVENANT
		You're right. We won't go in through the door. 
		Follow me.
 
They walk round the side of the pavilion. The walls are covered in plants. 
Avenant tests the branches.
 
				AVENANT
		Climb up after me. 
			(Ludovic hesitates.) 
		Come on, take heart. You're scared of course. 

				LUDOVIC
		I'm not scared, I'm thinking.
 
				AVENANT
		It looks the same to me. Are you coming? 

				LUDOVIC 
			(following him up onto the roof) 
		Where are we? 

				AVENANT
		We're on a skylight. 

He pulls back the foliage and peers down into the pavilion.

				AVENANT
		Look!
 
They gaze down at innumerable jewels, gold and other treasures piled up 
around a statue in the middle of the pavilion. 

				LUDOVIC
		It's fantastic! 
			(He points to the statue.) 
		What's that? 

				AVENANT
		The goddess Diana.
 
Meanwhile, Beauty is still desperately trying to revive the Beast. 

				BEAUTY
		You're no coward, I know the strength of your 
		claws. Clutch at life with them, fight! Sit up, 
		roar, frighten death away!
 
				THE BEAST 
		Beauty, if I were a man ... doubtless I would 
		... do as you say ... but poor beasts who would 
		prove their love ... only know ... how to lie 
		on the ground ... and die.
 
He gives her a look full of tenderness and dies.


On the roof of the pavilion Avenant is spurred into action by the sight of 
the Beast's treasure.
  
 				AVENANT
		I'm going to break the pane. 
			(Ludovic tries to hold him back.) 
		Leave me alone! 
			(He breaks the glass with 
			the heel of his boot.) 
		After all, it's only glass. You hold me by the 
		arms, and lower me down as far as possible, 
		then I'll jump.
 
 				LUDOVIC 
		It's too high. 

				AVENANT
		I'll jump. 

				LUDOVIC
		How will we get the treasure out?
 
				AVENANT
		We'll think of something. First we've got to 
		get in there. Stand square on your feet. 
			(Ludovic takes hold of his arm.) 
		Get a good grip.
 
Ludovic lowers Avenant down through the skylight. The statue of Diana comes 
to life, puts an arrow in her bow and aims at Avenant.
 
 				AVENANT
		Wait, wait Ludovic, don't let go yet. Wait 
		until I tell you to.
 
Diana shoots the arrow. It hits Avenant between his shoulder blades. He lets 
out a cry. Ludovic stares at him in horror. Before his very eyes Avenant's 
features turn into those of the Beast. Ludovic lets go of him, he falls to 
the ground -- there is no sign of the treasure, only dead leaves and 
branches.
 


At the edge of the pool Beauty starts back with a cry.

				BEAUTY
		Where is the Beast?
 
A handsome young man stands in front of her.
 
 				THE PRINCE
		The Beast is no more. It was I, Beauty. My 
		parents wouldn't believe in fairy tales. The 
		fairies punished them through me. I could only 
		be saved by a look of love.
 
				BEAUTY 
			(amazed) 
		Are such miracles possible?
 
 				THE PRINCE
		We are the proof. Love can make a Beast of a 
		man. It can also make an ugly man handsome. 
			(She looks away) 
		What is it Beauty? Do you regret my ugliness?
 
				BEAUTY 
		No, my Lord. You resemble someone I once knew. 

				THE PRINCE
		Who?
 
				BEAUTY
		My brother's friend. 

				THE PRINCE
		You loved him? 

				BEAUTY
		Yes.
 
				THE PRINCE
		Did he know? 

				BEAUTY 
		No.
 
				THE PRINCE
		But you loved the Beast? 

				BEAUTY 
		Yes, I did.
 
				THE PRINCE
		You are a strange girl, Beauty, a strange girl 
		indeed. 

				BEAUTY 
			(kneeling at his feet) 
		I am at your service.
 
				THE PRINCE 
			(lifting her to her feet) 
		Does my resemblance to your brother's friend 
		displease you?
 
				BEAUTY 
			(turning away) 
		Yes ... 
			(She turns back to him and smiles.) 
		No.
 
				THE PRINCE 
			(taking her in his arms) 
		The first time I carried you in my arms I was 
		the Beast ... 

In the pavilion the remains of the Beast lie smoking on the ground.

				THE PRINCE 
		Are you happy? 

				BEAUTY
		I shall have to get accustomed to you. Where 
		will you take me?
 
 				THE PRINCE
		To my kingdom, where you will be Queen. There 
		you'll find your father, and your sisters will 
		carry your train. 

				BEAUTY 
		Is it far?
 
				THE PRINCE
		We'll fly through the air. 
			(He picks her up in his arms.) 
		You won't be afraid, will you?
 
 	 			BEAUTY 
		I don't mind being afraid ... with you.
 
He carries her out into the courtyard. In the pavilion dead leaves flutter 
onto the remains of the Beast. The Prince kisses Beauty's hand.

				THE PRINCE
		Beauty! I will take you! Come, away! 

Hand in hand they are magically carried aloft through the clouds into the sky.

 



				The End
 


 
Screenplay by Jean Cocteau
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
