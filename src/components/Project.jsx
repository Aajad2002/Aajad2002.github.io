import styled from "styled-components"
// import "../CSS/Project.css"
// import myntra from "../images/Screenshot (251).png"
import { SimpleGrid, Box, Image, Text, Heading } from "@chakra-ui/react"
import { GoMarkGithub } from "react-icons/go"

import { SiNetlify } from "react-icons/si"
import { Link } from "react-router-dom"
function Project() {


    return (
        <DIV id="projects" style={{ marginTop: "10%" }}>
            <Heading mt='90px' color='#FF004F' fontSize={35}><Text as='span' color='black'>Projects</Text> </Heading>
            <SimpleGrid columns={[1, 2, 2]} spacing={10} mt={10} className="Project_grid">
                <Box className="project-card">
                    <Image src="https://user-images.githubusercontent.com/115489722/213989789-29c596a2-af1b-4521-9f6f-6d93121ab736.png" alt="" />
                    <h2 className="project-title">Refurbay(Quicker Bazaar clone)</h2>
                    <Text className="project-description">This website provides a comprehensive e-commerce platform that is easy to use, well-designed, and secure. It provides all the necessary features for an e-commerce website and it is designed to provide a great user experience for the customers</Text>
                    <p className="project-tech-stack">Tech stack: HTML,CSS,JavaScript</p>
                    <Box style={{ display: "flex", justifyContent: "space-around","margin-top":"20px" }}>
                    <Link to='https://github.com/AviSingh017/short-rod-3165'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link> 
                    <Link to='https://imaginative-mochi-4ca96c.netlify.app/'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link> 
                    </Box>

                </Box>
                <Box className="project-card" >
                    <Image src="https://user-images.githubusercontent.com/115461550/229465563-d6f7f749-3070-4214-887d-f38f9bf949ac.png" alt="" />
                    <h2 className="project-title">TripMate(Make my trip Clone)</h2>
                    <p className="project-description">MakeMyTrip is an Indian online travel company. the company provides online travel services including airline tickets, domestic and international holiday packages, hotel reservations, rail, and bus tickets. MakeMyTrip has also numerous international offices.</p>
                    <p className="project-tech-stack">Tech Stack: HTML, CSS, JavaScript, Chakra UI, React, Redux, Firebase</p>
                    <Box style={{ display: "flex", justifyContent: "space-around","margin-top":"20px" }}>
                    <Link to='https://github.com/Aajad2002/tropical-action-4372'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link> 
                    <Link to='https://lighthearted-vacherin-70cdeb.netlify.app/'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link> 
                    </Box>

                </Box>
                <Box className="project-card">
                    <Image src="https://user-images.githubusercontent.com/115461550/235879768-f40cbc2c-8f6a-42e5-9bff-2eecc1939c86.png" alt="" />
                    <h2 className="project-title">Apni Dukaan(PaytmMall Clone)</h2>
                    <p className="project-description">Paytm Mall is an Indian e-commerce website. Paytm Mall strives hard to make your online shopping a more pleasant and cost-effective experience by providing the top quality products at the best price rates in India. Our collection of products consist of electronic appliances, clothes, grocery, home and kitchen products, backpacks, automobiles, books and stationery, to name a few.

</p>
                    <p className="project-tech-stack">Tech stack: HTML,CSS,JavaScript,React,Chakra-Ui</p>
                    <Box style={{ display: "flex", justifyContent: "space-around","margin-top":"20px" }}>
                    <Link to='https://github.com/Aajad2002/grateful-reaction-8709'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link> 
                    <Link to='https://freedomrctproject.netlify.app/'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link> 
                    </Box>

                </Box>
                <Box className="project-card" >
                    <Image src="https://user-images.githubusercontent.com/115461550/235879423-9eed2aab-910e-454b-a3a9-e39cc38a7a69.png" alt="" />
                    <h2 className="project-title">Freedom Shoppers(Shop Clone)</h2>
                    <p className="project-description">Shop is a e-commerce India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. </p>
                    <p className="project-tech-stack">Tech stack: HTML,CSS,React,ChakraUi,Redux</p>
                    <Box style={{ display: "flex", justifyContent: "space-around","margin-top":"20px" }}>
                    <Link to='https://github.com/Aajad2002/fine-rail-608'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link> 
                    <Link to='https://silver-souffle-f18f11.netlify.app/'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link> 
                    </Box>

                </Box>

            </SimpleGrid>
        </DIV>
    )

} export default Project

const DIV = styled.div`

.project-card{
    /* border: 1px solid #333; */
    padding: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* background-color: #fc89ad; */
}
.project-github-link,.project-deployed-link{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #FF004f;
    width: 120px;
    border-radius: 50px;
    padding: 4px;
    font-family: monospace;
    font-size: 16px;
    font-weight: 300;
    text-transform:uppercase;
    transition: transform 0.5s ease-in-out;
}
.project-github-link:hover,.project-deployed-link:hover{
    transform: scale(1.1);
    color:#fff;
    background: #FF004F;
}

`