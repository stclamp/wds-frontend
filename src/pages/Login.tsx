import Container from '@/components/container/Container';
import Form from '@/components/form/Form';

import '@/assets/styles/_global.scss';

const Login = () => (
  <main>
    <Container>
      <h2 className="title">Log In</h2>
      <Form />
    </Container>
  </main>
);

export default Login;
