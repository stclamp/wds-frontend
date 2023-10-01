import '@/assets/styles/_global.scss';

interface ContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container">{children}</div>
);

export default Container;
