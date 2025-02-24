/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 02.23.2025

FILE: portfolio/public/projects/3/game.js
DESCRIPTION: This is a project made on behalf of Lou DiSimone
             (lou.disimone@g.austincc.edu), Phi Theta Kappa
             Chapter Alpha Gamma Pi, President for the Spring
             2025 Semester. He requested I turn his "The 
             Princess Bride" personality quiz into a working
             website quiz that they can use at the next Phi
             Theta Kappa conference (TRC 2025).
*/


class Game {
    constructor() {
        this.questions = {
            "1": {
                "question": "How do you handle a challenge?", 
                "choices": {
                    "a": "Face it with bravery and wit.",
                    "b": "Outthink your opponent.",
                    "c": "Rely on strength and loyalty",
                    "d": "Seek revenge at all costs",
                    "e": "Use charm and authority.",
                    "f": "Help others with your knowledge.",
                    "g": "Plan from the shadows.",
                    "h": "Go with the flow--it's just a story.",
                    "i": "Offer words of wisdom (and a funny speech).",
                    "j": "Hold steadfastly to my ideals.",
                }
            },
            "2": {
                "question": "What motivates you the most?", 
                "choices": {
                    "a": "Protecting the one I love, no matter what.",
                    "b": "Outsmarting others.",
                    "c": "Protecting my friends.",
                    "d": "Righting a terrible wrong.",
                    "e": "Power and control.",
                    "f": "Helping others, even if they're \"mostly dead\".",
                    "g": "Perfecting my sinister plans",
                    "h": "Sharing a good story.",
                    "i": "Officiating important moments",
                    "j": "Holding onto love, even through hardships.",
                }
            },
            "3": {
                "question": "Pick a weapon for your quest:", 
                "choices": {
                    "a": "Sword.",
                    "b": "My mind.",
                    "c": "My fists.",
                    "d": "Rapier for dueling.",
                    "e": "Crossbow.",
                    "f": "Healing potions and quick wit.",
                    "g": "Torture devices.",
                    "h": "A comfy chair and a book.",
                    "i": "Wedding vows.",
                    "j": "My resilience.",
                }
            },
            "4": {
                "question": "What's your biggest strength?", 
                "choices": {
                    "a": "Courage and loyalty.",
                    "b": "Intelligence and strategy.",
                    "c": "Strength and dependability.",
                    "d": "Passion and persistence.",
                    "e": "Leadership and cunning.",
                    "f": "Resourcefulness and humor.",
                    "g": "Ruthlessness and precision.",
                    "h": "Patience and storytelling.",
                    "i": "Authority in front of a crowd.",
                    "j": "Inner strength.",
                }
            },
            "5": {
                "question": "What's your biggest weakness?", 
                "choices": {
                    "a": "Letting my heart lead me into danger.",
                    "b": "Underestimating others.",
                    "c": "Not always thinking things through.",
                    "d": "Letting my emotions get the best of me.",
                    "e": "Arrogance.",
                    "f": "A grumpy attitude.",
                    "g": "Lack of empathy.",
                    "h": "People getting bored with the story.",
                    "i": "People not taking me seriously.",
                    "j": "Sometimes I can be a little emo.",
                }
            },
            "6": {
                "question": "How do you see yourself in a group?", 
                "choices": {
                    "a": "I simply do what must be done.",
                    "b": "The planner, staying three steps ahead.",
                    "c": "The muscle, protecting my friends.",
                    "d": "The determined one, never giving up.",
                    "e": "The ruler, giving orders.",
                    "f": "The fixer, helping when things go wrong.",
                    "g": "The enforcer, making sure others suffer.",
                    "h": "The observer, telling the story.",
                    "i": "The official, making it \"legally binding\".",
                    "j": "The heart, holding on to hope.",
                }
            },
            "7": {
                "question": "Your ideal weekend looks like:", 
                "choices": {
                    "a": "Rock climbing, sword play, and long walks through the swamp.",
                    "b": "Winning an intense debate.",
                    "c": "Relaxing with close friends.",
                    "d": "Practicing fencing.",
                    "e": "Hunting...for sport.",
                    "f": "Making weird concoctions in your workshop.",
                    "g": "Perfecting your latest contraptions.",
                    "h": "Reading a great book.",
                    "i": "Attending a formal event.",
                    "j": "Horseback riding to clear your mind.",
                }
            },
            "8": {
                "question": "Someone insult you. How do you respond?", 
                "choices": {
                    "a": "I never back down from a challenge.",
                    "b": "Outsmart them with clever words.",
                    "c": "Laugh it off.",
                    "d": "Swear vengeance.",
                    "e": "Crush them politically or literally.",
                    "f": "Sarcastic comeback.",
                    "g": "Take them to the torture chamber.",
                    "h": "Tell a story where you win in the end.",
                    "i": "Give them a stern talking-to.",
                    "j": "Walk away with dignity.",
                }
            },
            "9": {
                "question": "Pick a quote that speaks to you:", 
                "choices": {
                    "a": "\"As you wish.\"",
                    "b": "\"Inconceivable!\"",
                    "c": "\"Anybody want a peanut?\"",
                    "d": "\"Hello. My name is Inigo Montoya...\"",
                    "e": "\"I am your prince. And you will marry me.\"",
                    "f": "\"Have fun storming the castle!\"",
                    "g": "\"I have something special planned for you.\"",
                    "h": "\"When I was your age...\"",
                    "i": "\"Mawwiage is what bwings us togevah today.\"",
                    "j": "\"I will never love again.\"",
                }
            },
            "10": {
                "question": "What's your happy ending?", 
                "choices": {
                    "a": "Riding off into the sunset with your love.",
                    "b": "Proving you're the smartest in the room.",
                    "c": "Sharing a laugh with your friends.",
                    "d": "Honoring your family's memory.",
                    "e": "Sitting on the throne.",
                    "f": "A quiet life with your partner and weird herbs.",
                    "g": "Absolute control over your enemies.",
                    "h": "Passing on a great story.",
                    "i": "A perfect ceremony.",
                    "j": "Finding peace and freedom.",
                }
            },
        }

        this.answers = {
            "a": 0,
            "b": 0,
            "c": 0,
            "d": 0,
            "e": 0,
            "f": 0,
            "g": 0,
            "h": 0,
            "i": 0,
            "j": 0,
        }

        this.winner = "z"
        this.winningTotal = 0;
    }

    /* QUESTIONS FUNCTIONS */
    getQuestion(num){
        return this.questions[num][question];
    }

    getChoices(num) {
        return this.question[num][choices];
    }



    /* ANSWERS FUNCTIONS */

    getLetterTotal(letter) {
        return this.answers[letter];
    }

    increaseLetterTotal(letter) {
        this.answers[letter]++;
    }

    getTotalAnswers() {
        var answerKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        var total = 0;



        for (var i = 0; i < answerKey.length; i++) {
            total += (this.answers[answerKey[i]]);
        }

        return total;
    }



    /* GAMEPLAY FUNCTIONALITY */
    returnWinner() {
    let maxCount = 0;
    let potentialWinners = [];

    for (let key in this.answers) {
        if (this.answers[key] > maxCount) {
            maxCount = this.answers[key];
            potentialWinners = [key]; 
        } else if (this.answers[key] === maxCount && maxCount !== 0) {
            potentialWinners.push(key); 
        }
    }

    // If there's a tie, randomly select one from the potential winners
    this.winner = potentialWinners[Math.floor(Math.random() * potentialWinners.length)];
    
    return this.winner;
    }

    winnerInfo() {
        var winner = this.returnWinner();

        var info = [];

        switch(winner) {
            case "a":
                info.push("Westley (The Man in Black)");
                info.push("Brave, romantic and clever. You'll do anything for love.");
                info.push("westley.png");
                break;
            case "b":
                info.push("Vizzini");
                info.push("Sharp-witted and confident. You always think you’re the smartest person around.");
                info.push("vizzini.png");
                break;
            case "c":
                info.push("Fezzik");
                info.push("Kind-hearted and strong. A loyal friend who stands by those you care about.");
                info.push("fezzik.png");
                break;
            case "d":
                info.push("Inigo Montoya");
                info.push("Passionate and determined. You never forget your purpose.");
                info.push("inigo.png");
                break;
            case "e":
                info.push("Prince Humperdinck");
                info.push("Ambitious and power-hungry. You crave control and victory.");
                info.push("humperdinck.png");
                break;
            case "f":
                info.push("Miracle Max");
                info.push("Resourceful and sarcastic. You help people—reluctantly, but with skill.");
                info.push("max.png");
                break;
            case "g":
                info.push("Count Rugen (The Six-Fingered Man)");
                info.push("Ruthless and calculating. You get what you want, no matter the cost.");
                info.push("rugen.png");
                break;
            case "h":
                info.push("The Grandfather (Narrator)");
                info.push("Wise and patient. You believe in the power of a good story.");
                info.push("grandfather.png");
                break;
            case "i":
                info.push("The Clergyman");
                info.push("Light-hearted and formal. You bring people together… even if you fumble the delivery.");
                info.push("clergyman.png");
                break;
            default:
                info.push("Buttercup");
                info.push("Resilient and hopeful. You endure hardships and never give up on love.");
                info.push("buttercup.png");
                break;
        }

        return info;
    }

}