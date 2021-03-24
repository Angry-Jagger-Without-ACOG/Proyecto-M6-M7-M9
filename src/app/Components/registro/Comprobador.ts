import { FormGroup } from '@angular/forms';

// Validador personalizado para comprobar que Contra (Contraseña) y RepContra (Repetir Contraseña) coinciden
export function Comprobacion(new_cont: string, rep_contra: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[new_cont];
        const matchingControl = formGroup.controls[rep_contra];

        if (matchingControl.errors) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ Comprobacion: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
