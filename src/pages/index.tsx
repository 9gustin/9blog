import Card from "../components/items/Card";
import Post from "../components/items/Post";

export default function Home(): JSX.Element {
  const description =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, illum? Deleniti culpa commodi vitae error facilis aperiam animi, fugit harum.";
  const profile = "https://thispersondoesnotexist.com/image";
  return (
    <Card
      backgroundImageUrl={
        "https://cdn.pixabay.com/photo/2017/08/03/12/44/nature-2576047_960_720.jpg"
      }
      isBluredBackground
      isDefaultSize>
      <Post
        profile={profile}
        title="Titulo de texto con texto"
        description={description}
        likes={2}
        comments={5}
        shares={3}
      />
    </Card>
  );
}
