import Container from '../custom/Container';
import Logo from '../custom/Logo';
import MobileButton from './MobileButton';
import Row from '../custom/Row';
import IconsGroups from './IconsGroups';
import MainMenu from './MainMenu';

export default function Main() {
  return (
    <section>
      <Container>
        <Row>
          <MobileButton />
          <Logo />
          <MainMenu />
          <IconsGroups />
        </Row>
      </Container>
    </section>
  );
}
