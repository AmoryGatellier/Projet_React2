import React from 'react';

function Carousels() {
    let series = ['tt16419018','tt7335184','tt10795658','tt13443470','tt7134908','tt11126994']
    let post = []

    for (let i in series){
        fetch(`https://www.omdbapi.com/?apikey=681400f5&i=${series[i]}`)
        .then((response) => response.json())
        .then((data) => {
        post.push(data.Poster)
        })
    }
    console.log(post)

    return (

        <div id='slides'>
            <div className="img-slides">
                <h1 className='t'>Séries du moments</h1>
                <div className="wrapper">
                    <section id="section1">
                        <a href="#section2">‹</a>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BZmUxYTllMzEtNmNmMi00OWNkLTg0ZmItZDdkYTJkOTAxZmJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BYTI1NzQwMTctOTRhZC00ZDE4LThmZTgtMjAwNjFjYTExYjU1XkEyXkFqcGdeQXVyMTUxOTg5ODE5._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BMmNlODYwMjEtYTZjZi00NzdhLTg5M2YtYzMxMmNkMTE1ODc0XkEyXkFqcGdeQXVyMTM4ODE2MjM5._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"/>
                        </div>
                        <a href="#section2">›</a>
                    </section>
                    <section id="section2">
                        <a href="#section1">‹</a>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BZjEyMmUyYmYtNTAwYi00OWUwLWJlNzEtMDM2N2QxNzIwMTdjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BYmU5N2YzYjQtM2Q4Yi00NWY4LWI5NDQtMzE4OTlhY2Q5NmJlXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BMmZlYTQ3NjQtZmIxNC00MzA4LTg1NDgtMmEzODk0MzA4NjQxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"/>
                        </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/M/MV5BNzFkNWI4ZGEtZDhhOC00MGE5LWEzYmYtZGU5MGYxYjc5ZmZmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"/>
                        </div>
                        <a href="#section1">›</a>
                    </section>

                </div>

                <div className="img-slides2">
                    <h1>Films du Moments</h1>
                    <div className="wrapper">
                        <section id="section3">
                            <a href="#section4">‹</a>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BNGY2OTg3ZjAtNTYyMC00MzAwLTg5NzEtZTdkNmFlMzA2ZGY5XkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BZDliNjMwYjktMGI5Zi00OWVkLWJmOWYtNjAxNGI1YzA3MTYxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BODQzZmE5NWUtODIyMi00MWVlLWJmMTYtNjAyN2ZjNGQ0ZmNkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_SX300.jpg"/>
                            </div>
                            <a href="#section4">›</a>
                        </section>
                        <section id="section4">
                            <a href="#section3">‹</a>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BNDk2YTA1MGYtMGNjMi00YTJlLWI1YjItMjBjOGJlZGIwZmYzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BOWQzMDc5OTMtMjFiMy00M2I3LWIyZWMtODM4NTRhMGI2ZTRkXkEyXkFqcGdeQXVyNDAxNzcyNw@@._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BNWEyOThlZTAtMzExMy00NDBhLTk4Y2QtMDg3OTRkNzgyNjEyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BNDhjZjc4NDMtMDZjNC00ZjhiLWE0OTItM2M0NGM1MThjYTQ4XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"/>
                            </div>
                            <div className="item">
                                <img src="https://m.media-amazon.com/images/M/MV5BYTk2YjBkYWUtNmYxNS00M2Q5LTkyN2MtYzA0NDMwMTlkNDA0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg"/>
                            </div>
                            <a href="#section3">›</a>
                        </section>
                    </div>

                </div>
            </div>
        
        </div>
    );
    }
    

    


export default Carousels;
