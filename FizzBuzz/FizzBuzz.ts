export function fizzBuzz(valeur: number): string {
    if (fizz(valeur) && buzz(valeur)) {
        return "FizzBuzz";
    }
    if (fizz(valeur)) {
        return "Fizz";
    }
    if (buzz(valeur)) {
        return "Buzz";
    }
    return valeur.toString();
}

function fizz(valeur: number): boolean {
    return valeur % 3 == 0;
}

function buzz(valeur: number): boolean {
    return valeur % 5 == 0;
}