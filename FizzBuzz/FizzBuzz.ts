export function fizzBuzz(valeur:number):string {
    if( valeur % 15 == 0){
        return "FizzBuzz";
    }
    if( valeur % 3 == 0 ){
        return "Fizz";
    }
    if( valeur % 5 == 0){
        return "Buzz";
    }
    return valeur.toString();    
}