import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Spacer from '../../components/Spacer'
import Card from '../../components/Card'
import CardTitle from '../../components/CardTitle'
import CardContent from '../../components/CardContent'
import Label from '../../components/Label'
import Xbox from '../../assets/product/xbox.jpg'
import God from '../../assets/product/god.png'
import BscxLogo from '../../assets/img/logo-icon.svg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import useModal from '../../hooks/useModal'
import WalletProviderModal from '../../components/WalletProviderModal'
// import PageHeader from '../../components/PageHeader'


const Markets: React.FC = () => {
  const { ethereum, account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
   
        <Box className="mt-4">   
      <Card>
      
        <CardContent>
                    
              <img src={Xbox} alt="Game Balance"  />
              <Spacer size="lg" />
              
              <CardTitle text="Xbox Live 12 Months" />
              <Spacer size="lg" />
              
              <Button
            text="Buy Now"
            />
        </CardContent>
        
        <Spacer size="sm" />
      </Card>
      <Spacer />
      <Card>
      
        <CardContent>
                    
              <img src={God} alt="Game Balance" />
              <Spacer size="lg" />
              
              <CardTitle text="God Of War PS4 CD-Key" />
              <Spacer size="lg" />
               
              <Button
            text="Buy Now"
            />
              {!account && <StyledCardsWrapper>
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Button variant="secondary"
                onClick={onPresentWalletProviderModal}
                text="🔓 Unlock Wallet To Continue"
              />
            </div>
        </StyledCardsWrapper>}
        </CardContent>
        
        <Spacer size="sm" />
      </Card>
    <Spacer />
    
    <Spacer />
   
    <Spacer />
    </Box> 
   
  )
}
 

const Box = styled.div`
    &.mt-4 {
        margin-top: 40px;
        @media (max-width: 250px) {
            margin-top: 30px;
        }
    }
    display: flex;
  align-items: start;
  justify-content: center;
    
`
const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 767px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`
export default Markets
