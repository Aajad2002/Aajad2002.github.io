import {
    Box,
    Text,
    Image,
    VStack,
    Heading
  } from '@chakra-ui/react'

  import GitHubCalendar from 'react-github-calendar';
  import AOS from 'aos';
import 'aos/dist/aos.css'
  AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 90, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 129, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
 

export const GithubStats = () => {


    return <Box pb = '50px' mt={"10%"} id='github' >


      <Heading color = '#FF004F;' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Calender</Heading>


          <VStack mt = '70px' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

            <GitHubCalendar username="Aajad2002"></GitHubCalendar>

          </VStack>


          <Heading mt ='50px' color = '#FF004F;' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Stats</Heading>

          <VStack mt = '70px' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              
                  <Image data-aos="zoom-in-up" id="github-stats-card" borderRadius = '20px' src = 'https://camo.githubusercontent.com/228127f96b04c2111ac23f8f16516ad13c6463eea7f8775456e23f3a5e241dff/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d41616a616432303032267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365'></Image>

          </VStack> 


          <Heading mt ='50px'color = '#FF004F;' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Streaks</Heading>

          <VStack mt = '70px' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              
                  <Image data-aos="zoom-in-up" id="github-streak-stats" borderRadius = '20px' src = 'https://camo.githubusercontent.com/b59d781c17262da01ce8e723494882e932203e506c7920d573c44cb0e3a1a83f/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d41616a616432303032267468656d653d6461726b26686964655f626f726465723d66616c7365'></Image>

          </VStack> 

          <Heading mt ='50px' color = '#FF004F;' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Languages</Heading>

          <VStack mt = '70px' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              
                  <Image data-aos="zoom-in-up" id="github-top-langs" borderRadius = '20px' src = 'https://camo.githubusercontent.com/888f8478bce38ec2f9edf2ed336355d33bf93820a510914a31e4c70ea20fd11a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d41616a616432303032267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374'></Image>

          </VStack>       

         
        </Box>

}
export default GithubStats