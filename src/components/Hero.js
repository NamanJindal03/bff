import React from 'react'
import { Link } from 'react-router-dom';

import Button from './common/Button';

import './css/hero.css'

export default function Hero({data}) {
    const {mainHeading, subHeading, para, button, heroImage} = data;
  return (
    <section className='hero-section'>
        <div className='hero-content flex'>
            <div className='hero-text flex'>
                <div>
                    <h3>{mainHeading.head1}</h3>
                    <h3
                        // style={{backgroundImage: `url(/assets/${mainHeading.head2Bg})`}}
                    >
                        <span>{mainHeading.head2}</span>
                    </h3>
                </div>
                <div>
                    <h6>{subHeading}</h6>
                </div>
                {para && 
                <div>
                    {para}
                </div>
                }
                <Link to={button.link}>
                    <Button btnColor={'white'}>{button.content}</Button>
                </Link>
            </div>
            <div className='hero-image'>
                <img src={`/assets/${heroImage}`} alt="" />
            </div>
        </div>
    </section>
  )
}
