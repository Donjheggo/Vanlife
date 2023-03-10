import React from 'react'
import { Link, useLocation, defer, Await, useLoaderData } from 'react-router-dom'
import backimg from '/images/backicon.svg'
import {getVanDetail} from "../../api/api"

export const vanDetailLoader = ({params}) => {
    return defer({vans: getVanDetail(params.id)})

}

const VanDetails = () => {
    
    const loader = useLoaderData()
    const location = useLocation()
    const urlParams = location ? location.state.search : null
    const vanType = location.state.type || "all"

    const renderVanDetails = (van) => {
        const btnColor = {
            backgroundColor: (() => {
              switch (van.type) {
                case 'Simple':
                  return '#E17654'
                case 'Rugged':
                  return '#115E59'
                default:
                  return '#161616'
              }
            })()
          }
    return (
            <>
                <img src={van.image} alt="van-img" className='van-img' />
                    <div>
                    <button className='van-btn' style={btnColor}>{van.type}</button>
                    </div>
                    <p className='van-name' style={{marginTop: '15px'}}>{van.name}</p>
                    <p className='van-price' style={{marginTop: '-15px'}}>${van.price}/day</p>
                    <p className='van-desc'>{van.description}</p>
                    <div className="rent-btn">
                        <Link>Rent this van</Link>
                </div>
            </>
        )   
    }
    

    return (
        <div className='van-details container'>
            <div>
                <Link to={`../?${urlParams}`} relative="path"> <img src={backimg} /> Back to {vanType} vans</Link>
            </div>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={loader.vans}>
                    {renderVanDetails}
                </Await>
            </React.Suspense>

        </div>
    )
}

export default VanDetails