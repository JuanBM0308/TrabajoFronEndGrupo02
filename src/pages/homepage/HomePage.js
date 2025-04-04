import React from 'react';

import Banner from '../../components/banner/Banner';
import Begin from '../../components/layouts/begin/Begin';
import Footer from '../../components/layouts/footer/Footer';
import Productlist from '../../components/layouts/productlist/Productlist';
import Showcase from '../../components/layouts/showcase/Showcase';
import BannerHome from '../../components/banner/bannerHome/BannerHome';
import Testimonial from '../../components/testimonialSlider/Testimonial';

const HomePage= ()=>{
    return(
    <section>
        <Showcase/>
        <BannerHome/>
        <Begin/> 
        <Banner/>
        <Productlist/>
        <Testimonial/>
        <Footer/>
        
    </section>

    )
}
export default HomePage;