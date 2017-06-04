import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'capitalize'})
export class Capitalize implements PipeTransform {
  transform(value: string): string {
    // return value[0].toUpperCase()+value.substring(1); 
    return "Tomato"; 
  }
}
