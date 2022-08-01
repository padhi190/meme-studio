import { useRouter } from "next/router";

function ViewMemePage() {
    const router = useRouter();
  return (
      <div>ViewMemePage { router.query.id }</div>
  )
}

export default ViewMemePage