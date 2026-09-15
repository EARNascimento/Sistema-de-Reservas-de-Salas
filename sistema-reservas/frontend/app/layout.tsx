import './globals.css'; import type {Metadata} from 'next';
export const metadata:Metadata={title:'Nexo Salas | Reservas acadêmicas',description:'Sistema inteligente de reservas de salas'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
