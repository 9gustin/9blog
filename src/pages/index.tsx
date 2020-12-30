import Card from "../components/items/Card";

export default function Home(): JSX.Element {
  return (
    <>
      <p>hello world!</p>
      <Card
        backgroundImageUrl="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        isBluredBackground>
        Helardo!
      </Card>
    </>
  );
}
