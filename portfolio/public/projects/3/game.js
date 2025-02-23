/*
AUTHOR: Rikki Tomiko Ehrhart (rikki.ehrhart@g.austincc.edu)
LAST UPDATE: 02.22.2025

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
                    "a": "True love.",
                    "b": "Outsmarting others.",
                    "c": "Protecting my friends.",
                    "d": "Righting a terrible wrong.",
                    "e": "Power and control.",
                    "f": "Helping others, even if they're \"mostly dead\".",
                    "g": "Perfecting my sinister plans",
                    "h": "Sharing a good story.",
                    "i": "Officiating important moments",
                    "j": "Also true love.",
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
        Object.keys(this.answers).forEach(function(key) {
            if (this.answers[key] > this.winningTotal) {
                this.winner = key;
                this.winningTotal = this.answers[key];
            } else if (this.answers[key] == this.winningTotal && this.winningTotal != 0) {
                var coinFlip = Math.floor(Math.random() * 2)+1;

                if (coinFlip == 2) {
                    this.winner = key;
                    this.winningTotal = this.answers[key];
                }
            }
        });

        return this.winner;
    }


}