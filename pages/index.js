import {Container} from "react-bootstrap";
import MutantNav from "../components/MutantNav";
import ContentSection from "../components/ContentSection";
import ContentTitle from "../components/ContentTitle";
import ContentBody from "../components/ContentBody";
import SplashContent from "../components/SplashContent";
import PrizesSection from "../components/PrizesSection";
import GuidelinesSection from "../components/GuidelinesSection";

export default function Home() {
  return (
    <div className={"appContainer"}>
      <MutantNav/>
      <Container style={{paddingTop: "50px"}}>
        <SplashContent/>
        <ContentSection>
          <ContentTitle>About Us</ContentTitle>
          <ContentBody>
            <p>Mutant Cats released in early October 2021 was the first DAO to purchase and fractionalize Cool Cats, CryptoPunks and more valuable blue chip NFTs so they can be distributed to its members. The $FISH token, an ERC20 token on Ethereum, represents fractional shares of blue chip NFTs held in the vault but also is the primary token used for utility in the Mutant World. Each Mutant Cat NFT earns 10 $FISH per day from staking.</p>
            <p>As November 2021 began MutantGorillas were released at Auction. MutantGorillas can be staked to earn SERUM NFTS which can be used to cure MutantCats which, inturn, allows breeding of virtual reality VX Cats for the Metaverse. MutantGorillas play an important role as the first $FISH sink and $FISH utility project to go live. $FISH token is used by staked gorillas to speed up SERUM production.</p>
            <p>The MutantDAO has requested we setup a hackathon to expedite the number of innovative and creative ways we, as a community, can provide further $FISH and SERUM utility aside from simply speeding up SERUM production or curing MutantCats. This hackathon is seen as a means to accomplish this.</p>
          </ContentBody>
        </ContentSection>
        <ContentSection>
          <ContentTitle>Rules</ContentTitle>
          <ContentBody>Cras laoreet, lectus at hendrerit interdum, odio tellus interdum diam, ac egestas lectus lacus sit amet dui. Phasellus nec luctus sem. Nunc ligula nisl, ullamcorper in diam nec, lobortis euismod arcu. Aenean ut pharetra orci. Phasellus lacinia diam non sapien mattis commodo. Etiam congue magna leo, id laoreet diam egestas id. Vestibulum scelerisque at sapien in venenatis. Duis sit amet justo bibendum, hendrerit neque vitae, ultricies lacus. Curabitur ornare sapien rhoncus sem tempor convallis.</ContentBody>
        </ContentSection>
        <PrizesSection/>
        <GuidelinesSection/>
      </Container>
    </div>
  )
}
