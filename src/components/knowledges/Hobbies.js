import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérets</h3>
            <div className='list'>
                <ul>
                    <li><i className='fas fa-plane'></i>Voyages</li>
                    <li><i className='fab fa-ethereum'></i>BlockChain</li>
                    <li><i className='fas fa-euro-sign'></i>Investissement</li>
                    <li><i className='fas fa-pen'></i>Dessin/Design</li>
                    <li><i className='fas fa-book'></i>Mangas</li>
                    <li><i className='fas fa-briefcase'></i>Entreprenariat</li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbies;