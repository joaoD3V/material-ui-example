import { SidebarMenu } from 'components/SidebarMenu';
import { useDrawer } from 'hooks/useDrawer';
import { useTheme } from 'hooks/useTheme';
import { Base } from 'templates/Base';

export function Home() {
  return (
    <>
      <SidebarMenu>
        <Base title="Página Inicial" toolbar={<>Barra de Ferramentas</>}>
          Testando
        </Base>
      </SidebarMenu>
    </>
  );
}
