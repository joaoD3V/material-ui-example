import { SidebarMenu } from 'components/SidebarMenu';
import { Base } from 'templates/Base';
import { DetailTool } from 'components/DetailTool';

export function Home() {
  return (
    <>
      <SidebarMenu>
        <Base
          title="Página Inicial"
          toolbar={<DetailTool showButtonSaveBack />}
        >
          Testando
        </Base>
      </SidebarMenu>
    </>
  );
}
