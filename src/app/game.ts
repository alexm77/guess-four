import { Router } from '@angular/router';

export enum Correctness {
    Miss, Contains, Exact
}

export type guess = [string, Correctness, Correctness, Correctness, Correctness];

export class Game {
    secret: string;
    guesses: Array<guess> = [];
    hard: boolean;

    constructor(hardDifficulty: boolean, private router: Router) {
        this.secret = this.newSecret();
        this.hard = hardDifficulty;
    }

    addGuess(currentGuess: string): void {
        this.guesses.splice(0, 0, this.newGuess(currentGuess));
    }

    private newGuess(currentGuess: string): guess {
        const secretStr = this.secret.toString();
        const tmp: Correctness[] = [];
        for (let index = 0; index < secretStr.length; index++) {
            const guessDigit = currentGuess.charAt(index);
            const secretDigit = this.secret.charAt(index);

            if (guessDigit === secretDigit) {
                tmp.push(Correctness.Exact);
            } else if (secretStr.indexOf(guessDigit) >= 0) {
                tmp.push(Correctness.Contains);
            } else {
                tmp.push(Correctness.Miss);
            }
        }

        if (tmp[0] == Correctness.Exact && tmp[1] == Correctness.Exact && tmp[2] == Correctness.Exact && tmp[3] == Correctness.Exact) {
            this.router.navigate(['/win']);
        }
        if (this.hard) {
            tmp.sort().reverse();
        }

        return [currentGuess, tmp[0], tmp[1], tmp[2], tmp[3]];
    }

    private newSecret(): string {
        let secret = '';

        while (secret.length < 4) {
            let digit = Math.floor(Math.random() * 10).toString();
            if (secret.indexOf(digit) < 0) {
                secret += digit;
            }

        }
        return secret;
    }
}
