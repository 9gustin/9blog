import LongHeader from "../components/header/LongHeader";

export default function Home(): JSX.Element {
  return (
    <>
      <LongHeader backgroundImageUrl="https://docs.microsoft.com/es-es/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg">
        header!
      </LongHeader>
      <p>hello world!</p>
    </>
  );
}
