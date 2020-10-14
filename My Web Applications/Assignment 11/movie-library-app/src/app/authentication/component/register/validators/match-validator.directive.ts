import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const matchValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const secondPassword = control.get('passwordConfirm');

  return password && secondPassword && password.value !== secondPassword.value
    ? { noMatch: true }
    : null;
};
