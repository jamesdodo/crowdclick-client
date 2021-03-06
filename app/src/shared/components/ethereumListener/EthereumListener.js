// theirs
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// components
import { navAuthFalseAction } from '../../../redux/NavAuth/navAuthActions'
// constants
import { HOME_ROUTE } from '../../../config/routes-config'
// utils
import crowdclickClient from '../../../utils/api/crowdclick'

const EthereumListener = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const checkAccountChange = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async () => {
        console.log('ETHEREUM LISTENER HAS BEEN CALLED ###############')
        await crowdclickClient.logout()
        window.localStorage.removeItem('userPubKey')
        dispatch(navAuthFalseAction)
        history.push(HOME_ROUTE)
      })
    }
  }

  useEffect(() => {
    checkAccountChange()
  })

  return <></>
}
export default EthereumListener
