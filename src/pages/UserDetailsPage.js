import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
  const { id } = useParams()

  return (
    <div data-testid="user-page">
      USERS
      {' '}
      {id}
      {' '}
      DETAILS PAGE
    </div>
  )
}

export default UserDetailsPage
