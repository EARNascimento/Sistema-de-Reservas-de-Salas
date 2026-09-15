export type Role='student'|'admin';
export type RoomStatus='available'|'occupied'|'blocked';
export type User={id:string;name:string;email:string;role:Role;avatar:string};
export type Room={id:string;name:string;building:string;floor:string;capacity:number;features:string[];status:RoomStatus;accent:string};
export type Reservation={id:string;roomId:string;userId:string;date:string;start:string;end:string;reason:string;status:'confirmed'|'cancelled'};
