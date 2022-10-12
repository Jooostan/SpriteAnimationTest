title = "Spoopy Stories";

description = `
`;

characters = [
`
 rrrrr
rr   r
rr   r
rrrrrr
 r   r
`,
`
 rrrrr
rr   r
rr   r
rrrrrr
 r   r 
 r   r
`
];

// -TYPE-STUFF-----------------------------------------


let story;

// -GLOBAL-CONSTANTS-----------------------------------
const G = {
	// Screen Size
	WIDTH: 200,
	HEIGHT: 200,
};

/**
 * @type { Color[] }
 */
const peepColors = ["green", "blue", "cyan"];
// ----------------------------------------------------


options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
	isShowingScore: false,
	theme: "dark",
	seed: 71
};

/**
 * @typedef {{
 * pos: Vector
 * }} Sprite
 */

/**
 * @type { Sprite[] }
 */
let candles;

/**
 * @type { Sprite[] }
 */
 let peeps = [];


let curentState;
let states;
let spriteNumber;
let state;

let count;
let prev;
let cur;
let next;

let sec;
let sec2;
let sec3;
let sec4;
let sec5;
let sec6;
let time;
let pause;

let y1;
let y2;
let y3;
let y4;
let y5;

function update() {
	if (!ticks) {
		count = 42;
		sec = 0;
		sec2 = 0;
		sec3 = 0;
		sec4 = 0;
		sec5 = 0;
		sec6 = 0;
		time = 0;

		y1 = G.HEIGHT;
		y2 = y1 + 24;
		y3 = y2 + 24;
		y4 = y3 + 24;
		y5 = y4 + 24;

		pause = false;

		spriteNumber = 3;
		state = "peep3WalkOut"; // HCNAGE LATER

		peeps[0] = {pos: vec(G.WIDTH/2 - 8, G.HEIGHT/2 + 50)};
		peeps[1] = {pos: vec(G.WIDTH/2, G.HEIGHT/2 + 50)};
		peeps[2] = {pos: vec(G.WIDTH/2 + 8, G.HEIGHT/2 + 50)};

		story = [];
		story[0] = "This is a story of bitters";
		story[1] = "and sweets and boxes and bags";
		story[2] = "and the business of adults";
		story[3] = "and the play of children.";
		story[4] = "This is the story of William";
		story[5] = "Hardaker, 1858.";
		story[6] = ""

		story[7] = "William Hardaker made a living";
		story[8] = "selling bags of sweets to the";
		story[9] = "children of Bradford.The";
		story[10] = "children loved him, and everyday";
		story[11] = "the streets were filled with";
		story[12] = "cries for Humbug Billy and his";
		story[13] = "peppermint humbugs.";

		story[14] = "How their faces were filled";
		story[15] = "with joy and candy and laughs";
		story[16] = "and screams.But those Humbugs";
		story[17] = "had to come from somewhere.";
		story[18] = "Somewhere with many ingredients."
		story[19] = "It was the day before All";
		story[20] = "Hallow\’s Eve.";

		story[21] = "A new batch was bought to be";
		story[22] = "sold to the kids.Money from";
		story[23] = "small hands in exchange for the";
		story[24] = "man\’s confections.Halloween,";
		story[25] = "afterall, is the perfect time";
		story[26] = "for humbugs.Then the sickness";
		story[27] = "came.";

		story[28] = "First one, then ten, then 100,";
		story[29] = "until more 200 fell ill.";
		story[30] = "Everyone loved Billy\’s sweets.";
		story[31] = "Everyone ate Billy\’s sweets";
		story[32] = "But Billy didn\’t make his";
		story[33] = "sweets.";
		story[34] = "";

		story[35] = "If he did, he would have seen";
		story[36] = "how arsenic had been mistaken";
		story[37] = "for filler daff.Five pounds of";
		story[38] = "poisoned candy were given that";
		story[39] = "day. 21 were dead.";
		story[40] = "";
		story[41] = "";

		story[42] = "Humbug Billy now lives on as"
		story[43] = "a legend.The one that tells";
		story[44] = "you to always check your candy"
		story[45] = "on Halloween.";
		story[46] = "";
		story[47] = "";
		story[48] = "";

	}

	// -END-OF-INIT-----------------------------------
	switch(state){
		case "start":
			let index = 0;
			peeps.forEach((p) => {
				color(peepColors[index]);
				char("a", p.pos);
				index++;
			});
			if(input.isJustPressed){
				state = "story";
			}
			break;
		
		case "walkOut":
			let i = 0;
			peeps.forEach((p) => {
				p.pos.x += 0.5;
				color(peepColors[i]);
				char("a", p.pos);

				if(i === 2 && p.pos.x > G.WIDTH + 6) {
					state = "story";
				}
				i++;
			});
			break;
			
		case "story":
			let x = 0;
			text("story", G.WIDTH/2, 190);
			peeps.forEach((p) => {
				color(peepColors[x]);
				char("a", p.pos);
				x++;
			});	
			color("black");
			// Timer - 60 ticks --> 1 second
			if(sec%60 == 0){
				time++;
			}
			// CHANGE BACK LATER
			if(sec == 60){ // If change is x (60 * 10 seconds) amount of seconds, then switch text
				count += 7;
				sec = 0;
			} else{ // Otherwise display the current text
				if(count < 43){
					text(time.toString(), 4, 4);
					text(story[count], 12, G.WIDTH/3 + 5);
					text(story[count + 1], 12, G.WIDTH/3 + 13);
					text(story[count + 2], 12, G.WIDTH/3 + 21);
					text(story[count + 3], 12, G.WIDTH/3 + 29);
					text(story[count + 4], 12, G.WIDTH/3 + 37);
					text(story[count + 5], 12, G.WIDTH/3 + 45);
					text(story[count + 6], 12, G.WIDTH/3 + 53);
				} else {
					count = 42; // CHANGE LATER
					state = "peep2WalkOut";
				}
			}
			
			// 	// idea for text rising to top of screen
			// text(story[count], 12, y1);
			// text(story[count + 1], 12, y2);
			// text(story[count + 2], 12, y3);
			// text(story[count + 3], 12, y4);
			// text(story[count + 4], 12, y5);
			// y1 -= 0.5;
			// y2 -= 0.5;
			// y3 -= 0.5;
			// y4 -= 0.5;
			// y5 -= 0.5;

			// Debugging Pausing
			if(input.isJustPressed){
				if(pause == false){
					pause = true;
				} else{
					pause = false;
				}
			}

			// Pausing Stuff
			if(pause == false){
				sec++;
			} else{
				text("paused", G.WIDTH/2, 10);
			}

			break;

		case "peep2WalkOut":
			text("peep2Walkout", G.WIDTH/2, 190);
			let j = 0;
			peeps.forEach((p) => {
				if(j === 1) {
					p.pos.x += 0.5;
				}

				color(peepColors[j]);
				char("a", p.pos);

				if(j === 1 && p.pos.x > G.WIDTH + 6) {
					state = "peep1and3Dialogue";
				}
				j++;
			});

			break;
		
		case "peep1and3Dialogue":
			text("peep1and3Dialogue", G.WIDTH/2, 190);
			let k = 0;
			peeps.forEach((p) => {
				if(k !== 1) {
					color(peepColors[k]);
					char("a", p.pos);
				}
				k++;
			});

			sec2++;

			console.log(sec2);
			if(sec2 === 100) {
				state = "peep2WalkIn";
			}
			break;
		
		case "peep2WalkIn":
			text("peep2WalkIn", G.WIDTH/2, 190);
			let l = 0;
			peeps.forEach((p) => {
				if(l === 1) {
					p.pos.x -= 0.5;
				}

				color(peepColors[l]);
				char("a", p.pos);

				if(l === 1 && p.pos.x == (G.WIDTH/2)) {
					state = "peep2and3Dialogue";
				}
				l++;
			});
			break;
		
		case "peep2and3Dialogue":
			text("peep2and3Dialogue", G.WIDTH/2, 190);
			let m = 0;
			peeps.forEach((p) => {
				color(peepColors[m]);
				char("a", p.pos);
				m++;
			});

			sec3++;
			console.log("in peep2&3 dialogue " + sec3);

			if(sec3 === 100) {
				state = "story2";
			}
			break;
		
		case "story2":
			let n = 0;
			text("story", G.WIDTH/2, 190);
			peeps.forEach((p) => {
				color(peepColors[n]);
				char("a", p.pos);
				n++;
			});	
			color("black");
			// Timer - 60 ticks --> 1 second
			if(sec%60 == 0){
				time++;
			}
			// CHANGE BACK LATER
			if(sec == 60){ // If change is x (60 * 10 seconds) amount of seconds, then switch text
				count += 7;
				sec = 0;
			} else{ // Otherwise display the current text
				if(count < 43){
					text(time.toString(), 4, 4);
					text(story[count], 12, G.WIDTH/3 + 5);
					text(story[count + 1], 12, G.WIDTH/3 + 13);
					text(story[count + 2], 12, G.WIDTH/3 + 21);
					text(story[count + 3], 12, G.WIDTH/3 + 29);
					text(story[count + 4], 12, G.WIDTH/3 + 37);
					text(story[count + 5], 12, G.WIDTH/3 + 45);
					text(story[count + 6], 12, G.WIDTH/3 + 53);
				} else {
					count = 42;
					state = "peep3Dialogue";
				}
			}
			
			// 	// idea for text rising to top of screen
			// text(story[count], 12, y1);
			// text(story[count + 1], 12, y2);
			// text(story[count + 2], 12, y3);
			// text(story[count + 3], 12, y4);
			// text(story[count + 4], 12, y5);
			// y1 -= 0.5;
			// y2 -= 0.5;
			// y3 -= 0.5;
			// y4 -= 0.5;
			// y5 -= 0.5;

			// Debugging Pausing
			if(input.isJustPressed){
				if(pause == false){
					pause = true;
				} else{
					pause = false;
				}
			}

			// Pausing Stuff
			if(pause == false){
				sec++;
			} else{
				text("paused", G.WIDTH/2, 10);
			}

			break;
		
		case "peep3Dialogue":
			text("peep3Dialogue", G.WIDTH/2, 190);
			let o = 0;
			peeps.forEach((p) => {
					color(peepColors[o]);
					char("a", p.pos);
				o++;
			});

			sec4++;

			console.log(sec4);
			if(sec4 === 100) {
				state = "peep3WalkOut";
			}
			break;
		
		case "peep3WalkOut":
			text("peep3Walkout", G.WIDTH/2, 190);
			let q = 0;
			peeps.forEach((p) => {
				if(q === 2) {
					p.pos.x += 0.5;
				}

				color(peepColors[q]);
				char("a", p.pos);

				if(q === 2 && p.pos.x > G.WIDTH + 6) {
					state = "peep1and2Dialogue";
				}
				q++;
			});

			break;

		case "peep1and2Dialogue":
			text("peep1and2Dialogue", G.WIDTH/2, 190);
			let r = 0;
			peeps.forEach((p) => {
				if(r !== 2) {
					color(peepColors[r]);
					char("a", p.pos);
				}
				r++;
			});

			sec5++;

			console.log(sec5);
			if(sec5 === 100) {
				state = "story3";
			}
			break;

		case "story3":
			let s = 0;
			text("story", G.WIDTH/2, 190);
			peeps.forEach((p) => {
				color(peepColors[s]);
				char("a", p.pos);
				s++;
			});	
			color("black");
			// Timer - 60 ticks --> 1 second
			if(sec%60 == 0){
				time++;
			}
			// CHANGE BACK LATER
			if(sec == 60){ // If change is x (60 * 10 seconds) amount of seconds, then switch text
				count += 7;
				sec = 0;
			} else{ // Otherwise display the current text
				if(count < 43){
					text(time.toString(), 4, 4);
					text(story[count], 12, G.WIDTH/3 + 5);
					text(story[count + 1], 12, G.WIDTH/3 + 13);
					text(story[count + 2], 12, G.WIDTH/3 + 21);
					text(story[count + 3], 12, G.WIDTH/3 + 29);
					text(story[count + 4], 12, G.WIDTH/3 + 37);
					text(story[count + 5], 12, G.WIDTH/3 + 45);
					text(story[count + 6], 12, G.WIDTH/3 + 53);
				} else {
					state = "snuffCandle";
				}
			}
			
			// 	// idea for text rising to top of screen
			// text(story[count], 12, y1);
			// text(story[count + 1], 12, y2);
			// text(story[count + 2], 12, y3);
			// text(story[count + 3], 12, y4);
			// text(story[count + 4], 12, y5);
			// y1 -= 0.5;
			// y2 -= 0.5;
			// y3 -= 0.5;
			// y4 -= 0.5;
			// y5 -= 0.5;

			// Debugging Pausing
			if(input.isJustPressed){
				if(pause == false){
					pause = true;
				} else{
					pause = false;
				}
			}

			// Pausing Stuff
			if(pause == false){
				sec++;
			} else{
				text("paused", G.WIDTH/2, 10);
			}

			break;
			
		case "snuffCandle":
			text("SnuffCandle", G.WIDTH/2, 190);
			let t = 0;
			peeps.forEach((p) => {
				if(t !== 2) {
					color(peepColors[t]);
					char("a", p.pos);
				}
				t++;
			});

			sec6++;

			console.log(sec6);
			if(sec6 === 100) {
				state = "peep1WalkOut";
			}
			break;
		
		case "peep1WalkOut":
			text("peep1Walkout", G.WIDTH/2, 190);
			let u = 0;
			peeps.forEach((p) => {
				if(u === 0) {
					p.pos.x += 0.5;
				}

				color(peepColors[u]);
				char("a", p.pos);

				if(u === 0 && p.pos.x > G.WIDTH + 6) {
					state = "bleh";
				}
				u++;
			});

			break;


		default: 
		text("ERROR D:<", 12, G.WIDTH/3 + 5);
	}
}
// -END-OF-UPDATE-------------------------------------

//http://localhost:4000/?SpriteAnimation