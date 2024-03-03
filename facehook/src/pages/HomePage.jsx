import { useAuth } from "../hooks/useAuth";
export default function HomePage() {
  const { auth } = useAuth();
  // console.log(auth);
  return (
    <>
      <h2>my home</h2>
    </>
  );
}
