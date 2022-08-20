import React from "react";
import img2 from "../images/Drake.jpg"
import gif1 from "../images/DL.gif"
import {Card} from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function About(){
    return(<div id = "about">
        <div className="aimg">
            <img src = {img2} alt = "Drake"/>
        </div>
        <div className="about">
            <h1>Hello there!</h1>
            <hr></hr>
            <h2>About me!</h2>
            <h5 className="texto">I am Aubrey Drake Graham born October 24, 1986 is a Canadian rapper, singer, and actor. An influential figure in contemporary popular music, Drake has been credited for popularizing singing and R&B sensibilities in hip hop. Gaining recognition by starring as Jimmy Brooks in the CTV teen drama series Degrassi: The Next Generation, Drake pursued a career in music releasing his debut mixtape Room for Improvement in 2006; he released the mixtapes Comeback Season  and So Far Gone  before signing with Young Money Entertainment

Drake's first three albums, 
Thank Me Later, Take Care  and Nothing Was the Same , were all critical successes and propelled him to the forefront of hip hop. His fourth album, Views , saw exploration of dancehall and stood atop the Billboard 200 for 13 non-consecutive weeks, making it the first album by a male artist to do so in over a decade, and featured the chart record-setting lead single "One Dance".[8] In 2018, Drake released the double album Scorpion, which contained the Billboard Hot 100 number-one singles "God's Plan", "Nice for What", and "In My Feelings" Drake's widely anticipated sixth album, Certified Lover Boy , achieved nine top 10 hits on the Hot 100, setting the record for most US top-ten hits from one album, with its lead single "Way 2 Sexy" reaching number one.[10] In 2022, Drake released the house-inspired album Honestly, Nevermind . Known for frequent accompanying releases to his albums, Drake has also achieved critical and commercial success with the mixtapes If You're Reading This It's Too Late , the Future-collaborated What a Time to Be Alive , More Life , and Dark Lane Demo Tapes .

As an entrepreneur, Drake founded the OVO Sound record label with longtime collaborator 40 in 2012. In 2013, Drake became the new "global ambassador" of the Toronto Raptors, joining the executive committee of the NBA franchise, while owning naming rights to its practice facility. In 2016, he began collaborating with American entrepreneur Brent Hocking on the bourbon whiskey Virginia Black; it eventually broke sale records in Canada. Drake is also a fashion designer, most notably a sub-label collaboration with Nike, alongside other business ventures, including entertainment production and a fragrance house. In 2018, Drake was reportedly responsible for 5 percent (CAD$440 million) of Toronto's CAD$8.8 billion annual tourism income.

Among the world's best-selling music artists, with over 170 million records sold, Drake is ranked as the highest-certified digital singles artist in the United States by the RIAA. He has won four Grammy Awards, six American Music Awards, a record 34 Billboard Music Awards, two Brit Awards, and three Juno Awards. Drake has achieved 10 number-one hits on the Billboard Hot 100 and holds further Hot 100 records; he has the most top 10 singles , the most charted s, the most simultaneously charted songs in one week , the most Hot 100 debuts in one week , and the most continuous time on the Hot 100 (431 weeks). He additionally has the most number-one singles on the R&B/Hip-Hop Airplay, Hot R&B/Hip-Hop Songs, Hot Rap Songs, and Rhythmic Airplay charts.</h5>
<hr></hr>
            <h3>These are my most popular songs recently.</h3>
            
            <iframe title = "Drake_Music" className="IF" src="https://open.spotify.com/embed/track/5zyZM1EiSqrniyqtprwxpv?utm_source=generator&theme=0" width="350" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe title = "Drake_Music" className="IF" src="https://open.spotify.com/embed/track/1MJHXJ8bdoynpEtCLCbkWf?utm_source=generator" width="350" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe title = "Drake_Music" className="IF" src="https://open.spotify.com/embed/track/5KW4KhJIAbVVSH6pJ4GPkb?utm_source=generator&theme=0" width="350" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <Link to="/portfolio"><Button className="bz" size="lg" variant="dark">Click here to check for more!</Button></Link>
            <h3>Hope you love them</h3>
            
            <img src = {gif1} alt = "Love"/>
            <hr></hr>
            <h3>Frequently Asked Questions(FAQ)</h3>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://thumbs.gfycat.com/AromaticElaborateCarpenterant-max-1mb.gif" />
        <Card.Body>
          <Card.Title>Who inspired me to be a rapper?</Card.Title>
          <Card.Text>
            
Being musically inspired by Jay-Z and Clipse, I self-released his debut mixtape, Room for Improvement, in 2006.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://c-fa.cdn.smule.com/rs-s78/arr/50/f1/ca763370-ab2d-473c-8a78-704becd419a5.jpg" />
        <Card.Body>
          <Card.Title>What does Drake do for fun?</Card.Title>
          <Card.Text>
            He's a good skater. As Drake hails from Canada, does this even come as a surprise? He's a triple threat for music, acting and (maybe) dancing, and now he can add ice-skating to his showbiz résumé. One of Drake's sources confirmed that he took Rihanna ice skating on a friendly type of date to help her work on her moves.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i0.wp.com/ratingsgamemusic.com/wp-content/uploads/2022/06/1655436530_7c26553a676dfb64978b26ae135bb863.jpeg?resize=600%2C600&ssl=1" />
        <Card.Body>
          <Card.Title>How many awards have I won?</Card.Title>
          <Card.Text>
            
Overall, I have won 192 awards, including 4 Grammy Awards from 47 nominations. I have won a record 29 awards from 81 nominations at the Billboard Music Awards, including Artist of the Decade.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <hr></hr>
    <h3 className= "Fnf">Try this Rhythmic game and feel inspired to make music like Drake!</h3>
    <iframe title= "FNF" id="embed" src="https://w8.snokido.com/games/html5/friday-night-funkin/indiecross29/index4.html" allow="autoplay" scrolling="no" allowFullScreen="" height="600" width="1080"></iframe>
        </div>
    </div>)
}

export default About