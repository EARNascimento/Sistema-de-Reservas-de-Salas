import {Room,Reservation,User} from '@/types';
export const users:User[]=[
{id:'u1',name:'Mariana Costa',email:'aluno@instituicao.edu.br',role:'student',avatar:'MC'},
{id:'u2',name:'Rafael Lima',email:'rafael@instituicao.edu.br',role:'student',avatar:'RL'},
{id:'u3',name:'Beatriz Souza',email:'beatriz@instituicao.edu.br',role:'student',avatar:'BS'},
{id:'admin',name:'Camila Oliveira',email:'admin@instituicao.edu.br',role:'admin',avatar:'CO'}];
export const rooms:Room[]=[
{id:'r1',name:'Sala Horizonte',building:'Bloco A',floor:'1º andar',capacity:8,features:['TV 4K','Videoconferência'],status:'available',accent:'violet'},
{id:'r2',name:'Sala Aurora',building:'Bloco A',floor:'1º andar',capacity:12,features:['Projetor','Quadro branco'],status:'occupied',accent:'blue'},
{id:'r3',name:'Lab. Inovação',building:'Bloco B',floor:'2º andar',capacity:24,features:['Computadores','Ar-condicionado'],status:'available',accent:'cyan'},
{id:'r4',name:'Sala Conexão',building:'Bloco B',floor:'2º andar',capacity:6,features:['TV 4K','Videoconferência'],status:'available',accent:'orange'},
{id:'r5',name:'Auditório Central',building:'Bloco C',floor:'Térreo',capacity:80,features:['Palco','Som profissional'],status:'blocked',accent:'rose'},
{id:'r6',name:'Sala Ipê',building:'Bloco C',floor:'1º andar',capacity:10,features:['Projetor','Luz natural'],status:'available',accent:'emerald'},
{id:'r7',name:'Estúdio Criativo',building:'Bloco D',floor:'3º andar',capacity:16,features:['Iluminação','TV 4K'],status:'available',accent:'pink'},
{id:'r8',name:'Sala Ágora',building:'Bloco D',floor:'3º andar',capacity:32,features:['Projetor','Videoconferência'],status:'available',accent:'indigo'},
{id:'r9',name:'Sala Nexo',building:'Bloco A',floor:'2º andar',capacity:18,features:['Quadro branco','Café'],status:'available',accent:'amber'}];
const future=new Date(); future.setDate(future.getDate()+2); const d=future.toISOString().slice(0,10);
export const reservations:Reservation[]=[
{id:'res1',roomId:'r2',userId:'u2',date:d,start:'09:00',end:'10:30',reason:'Reunião de projeto',status:'confirmed'},
{id:'res2',roomId:'r3',userId:'u3',date:d,start:'14:00',end:'16:00',reason:'Estudo em grupo',status:'confirmed'},
{id:'res3',roomId:'r1',userId:'u1',date:d,start:'11:00',end:'12:00',reason:'Orientação de TCC',status:'confirmed'},
{id:'res4',roomId:'r6',userId:'u2',date:d,start:'16:00',end:'17:30',reason:'Workshop',status:'confirmed'},
{id:'res5',roomId:'r7',userId:'u3',date:d,start:'08:00',end:'09:30',reason:'Gravação de apresentação',status:'confirmed'},
{id:'res6',roomId:'r8',userId:'u1',date:d,start:'13:00',end:'14:00',reason:'Trabalho em equipe',status:'confirmed'},
{id:'res7',roomId:'r4',userId:'u2',date:d,start:'10:00',end:'11:30',reason:'Mentoria',status:'confirmed'},
{id:'res8',roomId:'r9',userId:'u3',date:d,start:'15:00',end:'16:30',reason:'Pesquisa',status:'confirmed'},
{id:'res9',roomId:'r2',userId:'u1',date:d,start:'17:00',end:'18:00',reason:'Reunião',status:'confirmed'},
{id:'res10',roomId:'r3',userId:'u2',date:d,start:'18:00',end:'19:00',reason:'Monitoria',status:'confirmed'},
{id:'res11',roomId:'r6',userId:'u1',date:d,start:'19:00',end:'20:00',reason:'Projeto',status:'confirmed'}];
