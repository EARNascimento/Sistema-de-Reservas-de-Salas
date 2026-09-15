import {Reservation,Room,User} from '@/types'; import {rooms,reservations} from '@/data/mock';
const keys={user:'sr_user',reservations:'sr_reservations',rooms:'sr_rooms'};
export function loadState(){if(typeof window==='undefined')return {user:null,reservations,rooms}; const raw=localStorage.getItem(keys.reservations); const br=localStorage.getItem(keys.rooms); return {user:JSON.parse(localStorage.getItem(keys.user)||'null') as User|null,reservations:raw?JSON.parse(raw):reservations,rooms:br?JSON.parse(br):rooms};}
export function saveState(user:User|null,reservations:Reservation[],rooms:Room[]){localStorage.setItem(keys.user,JSON.stringify(user));localStorage.setItem(keys.reservations,JSON.stringify(reservations));localStorage.setItem(keys.rooms,JSON.stringify(rooms));}
export const clearSession=()=>localStorage.removeItem(keys.user);
