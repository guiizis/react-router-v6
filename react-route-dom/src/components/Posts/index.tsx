import { Outlet, useParams, useSearchParams } from 'react-router-dom'

export const Post = () => {
  const { id } = useParams();
  const [qs, setQs] = useSearchParams()
  console.log(id);
  console.log(qs.get('teste'));

  return (
    <>
      <h1>Post</h1>
      <Outlet />
    </>
  )
}