import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/bg-banner.jpg'),
    title: 'The perfect website to choose your food',
    link: 'https://www.google.com'
  },
  
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-70"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <div class="dropdown">
                    <button class="dropbtn">Choose your country</button>
                     <div class="dropdown-content">
                    <a href="#">Albania</a>
                   <a href="#">Kosovo</a>
  </div>
</div>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;