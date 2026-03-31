import { Container } from './components/container';
import { ContainerActionsButton } from './components/container-actions-button';
import { ContainerRadialButton } from './components/container-radial-button';
import { DataProvider } from './providers';

export const App = () => (
  <DataProvider>
    <main>
      <section>
        <Container>
          <ContainerRadialButton>
            <ContainerActionsButton />
          </ContainerRadialButton>
        </Container>
      </section>
    </main>
  </DataProvider>
);
