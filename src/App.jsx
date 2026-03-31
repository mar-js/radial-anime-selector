import { Container } from './components/container';
import { ContainerActionsButton } from './components/container-actions-button';
import { ContainerRadialButton } from './components/container-radial-button';
import { useData } from './contexts';
import { DataProvider } from './providers';

export const App = () => {
  const { data } = useData();

  return (
    <DataProvider>
      <main data-url-bg={`/public/${data.image}`}>
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
};
