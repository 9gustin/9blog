import SimpleButton from "../components/buttons/SimpleButton";

export default function Home(): JSX.Element {
  return (
    <SimpleButton buttonType="PRIMARY" onClick={() => console.log("Hola")}>
      Adios
    </SimpleButton>
  );
}
