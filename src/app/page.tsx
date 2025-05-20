import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
}
