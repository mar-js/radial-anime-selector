import { Container } from './components/container';
import { ContainerActionsButton } from './components/container-actions-button';
import { ContainerRadialButton } from './components/container-radial-button';

export const App = () => {
  return (
    <Container>
      <section>
        <ContainerRadialButton>
          <ContainerActionsButton />
        </ContainerRadialButton>
      </section>
    </Container>
  );
};
