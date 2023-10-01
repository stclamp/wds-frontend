import Container from '@/components/container/Container';

import '@/assets/styles/_global.scss';

const NotFound = () => (
  <main>
    <section className="not-found">
      <Container>
        <h2>Oops!</h2>

        <p>Sorry, an unexpected error has occurred.</p>

        <p>
          <i>Not Found</i>
        </p>
      </Container>
    </section>
  </main>
);

export default NotFound;
