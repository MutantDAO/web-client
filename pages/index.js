import { Container } from "react-bootstrap";
import MutantNav from "../components/MutantNav";
import ContentSection from "../components/ContentSection";
import ContentTitle from "../components/ContentTitle";
import ContentBody from "../components/ContentBody";
import SplashContent from "../components/SplashContent";
import PrizesSection from "../components/PrizesSection";

export default function Home() {
  return (
    <div className={"appContainer"}>
      <MutantNav />
      <Container style={{ paddingTop: "50px" }}>
        <SplashContent />
        <ContentSection>
          <ContentTitle>About i Us</ContentTitle>
          <ContentBody>
            <p>
              Mutant Cats released in early October 2021 was the first DAO to
              purchase and fractionalize Cool Cats, CryptoPunks and more
              valuable blue chip NFTs so they can be distributed to its members.
              The FISH token, an ERC20 token on Ethereum, represents fractional
              shares of blue chip NFTs held in the vault but also is the primary
              token used for utility in the Mutant World. Each Mutant Cat NFT
              earns 10 FISH per day from staking.
            </p>
            <p>
              As November 2021 began MutantGorillas were released at Auction.
              MutantGorillas can be staked to earn SERUM NFTS which can be used
              to cure MutantCats which, inturn, allows breeding of virtual
              reality VX Cats for the Metaverse. MutantGorillas play an
              important role as the first FISH sink and FISH utility project to
              go live. FISH token is used by staked gorillas to speed up SERUM
              production.
            </p>
            <p>
              The MutantDAO has requested we setup a hackathon to expedite the
              number of innovative and creative ways we, as a community, can
              provide further FISH and SERUM utility aside from simply speeding
              up SERUM production or curing MutantCats. This hackathon is seen
              as a means to accomplish this.
            </p>
          </ContentBody>
        </ContentSection>
        <ContentSection>
          <ContentTitle>Rules</ContentTitle>
          <ContentBody>
            Cras laoreet, lectus at hendrerit interdum, odio tellus interdum
            diam, ac egestas lectus lacus sit amet dui. Phasellus nec luctus
            sem. Nunc ligula nisl, ullamcorper in diam nec, lobortis euismod
            arcu. Aenean ut pharetra orci. Phasellus lacinia diam non sapien
            mattis commodo. Etiam congue magna leo, id laoreet diam egestas id.
            Vestibulum scelerisque at sapien in venenatis. Duis sit amet justo
            bibendum, hendrerit neque vitae, ultricies lacus. Curabitur ornare
            sapien rhoncus sem tempor convallis.
          </ContentBody>
        </ContentSection>
        <PrizesSection />
        <ContentSection>
          <ContentTitle>Guidelines</ContentTitle>
          <ContentBody>
            <p>
              In facilisis nisi id sollicitudin sagittis. Sed enim massa,
              tincidunt eu nunc et, dictum ultricies orci. In tempor arcu vel mi
              ornare consectetur. Aenean a felis ut nulla ornare scelerisque.
              Nulla fringilla orci risus, a dictum libero porta sit amet. Aenean
              in ante erat. Nulla egestas bibendum massa, ac laoreet neque
              ornare in. Quisque augue ipsum, varius vitae luctus at, faucibus
              vel libero. Nulla tristique dui et aliquam elementum. Donec augue
              nulla, pretium ullamcorper sem id, faucibus volutpat lorem.
            </p>
          </ContentBody>
          <ContentBody>
            <p>
              Sed lobortis pretium lectus fermentum dignissim. Vestibulum ex
              ligula, sollicitudin in viverra ut, consectetur a quam. Fusce at
              elit consequat orci placerat ultrices. Aenean turpis mauris,
              malesuada a risus sed, commodo tincidunt ante. Suspendisse ac
              congue metus. Ut ultricies vestibulum quam, in interdum elit
              imperdiet pretium. Nunc placerat euismod tellus. Integer nisl
              diam, convallis in sem vitae, gravida vehicula tortor. Donec sed
              accumsan ex. Nam a cursus neque. Vivamus ac odio a odio volutpat
              vestibulum. Nullam sed mi pellentesque, convallis enim non,
              vehicula tellus. Quisque dignissim iaculis egestas.
            </p>
          </ContentBody>
        </ContentSection>
      </Container>
    </div>
  );
}
