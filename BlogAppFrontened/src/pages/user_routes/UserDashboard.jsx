import React from 'react'
import Base from '../../Components/Base'
import AddPost from '../../Components/AddPost'
import { Container } from 'reactstrap'

function UserDashboard() {
  return (
    <>
      <Base>
        <Container>
        <AddPost />
        </Container>
      </Base>
    </>
  )
}

export default UserDashboard