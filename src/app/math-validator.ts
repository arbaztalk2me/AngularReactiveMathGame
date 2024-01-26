import { AbstractControl } from "@angular/forms";

export class MathValidator {
  static mathAddition(form: AbstractControl) {
    let { a, b, answer } = form.value;
    if (a + b === parseInt(answer)) {
      return null;
    }
    return { mathError: true };
  }
}
