import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileRequest } from 'src/redux/user/actions'
import Profile from './Profile'
import LinkButton from 'src/components/common/LinkButton'

const User: FC = () => {
  const user = useSelector((state: Store.RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user.profile) {
      dispatch(getProfileRequest({ id: 1 }))
    }
  }, [])

  return (
    <>
      <Profile profile={user.profile} isLoading={user.isLoading} />
      <LinkButton href="/">Back</LinkButton>
    </>
  )
}

export default User
