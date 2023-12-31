import React from 'react'
import "./HomeScreen.css"
import Nav from "./Nav";
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* Nav */}
            <Nav />

            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentariesMovies} />



        
        </div>
    )
}

export default HomeScreen
