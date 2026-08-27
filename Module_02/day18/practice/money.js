export const vat=0.15;
export function addvat(price){
    return price*(1+vat);
}