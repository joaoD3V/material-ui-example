import { SidebarMenu } from 'components/SidebarMenu';
import { Toolbar } from 'components/Toolbar';
import { Base } from 'templates/Base';

export function Home() {
  return (
    <>
      <SidebarMenu>
        <Base title="Página Inicial" toolbar={<Toolbar showSearchInput />}>
          Testando
        </Base>
      </SidebarMenu>
    </>
  );
}
