import { AbstractControl, ValidatorFn } from '@angular/forms';


export function titleValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const title = control.value;
    

    if (title && title.length <  2) {
      return { 'invalidTitle': true };
    }
    
    return null; 
  };
}

export function descriptionValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const description = control.value;

    if (description && description.length < 10) {
      return { 'invalidDescription': true };
    }
    
    return null; 
  };
}

export function priceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const price = control.value;
    
    if (price === null || isNaN(price) || price <= 0) {
      return { 'invalidPrice': true };
    }
    
    return null; 
  };
}

export function imagesValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const images = control.value;

    if (images && !isValidImageUrl(images)) {
      return { 'invalidImages': true };
    }
    
    return null; 
  };
}

function isValidImageUrl(url: string): boolean {
  if (url && url.length <10){
    return false;
  }else
  return true;
  
}