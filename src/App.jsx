import { Container } from './components/container';
import { ContainerActionsButton } from './components/container-actions-button';
import { ContainerRadialButton } from './components/container-radial-button';
import { DataProvider } from './providers';

export const App = () => (
  <DataProvider>
    <Container>
      <section>
        <ContainerRadialButton>
          <ContainerActionsButton />
        </ContainerRadialButton>
      </section>
    </Container>
  </DataProvider>
);
