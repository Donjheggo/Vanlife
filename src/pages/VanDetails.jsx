import React from 'react'
import { useParams, Link } from 'react-router-dom'
import backimg from '/images/backicon.svg'

const VanDetails = () => {
    const params = useParams()
    const [van, setVan] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [params.id])

    const btnColor = {
        backgroundColor: van.type === 'Simple' ? '#E17654' : van.type === 'Rugged' ? '#115E59' : '#161616'
    }

    return (
        <div className='van-details container'>
            <div>
                <Link to="/vans" style={{color: "inherit"}}> <img src={backimg} /> Back to all vans</Link>
            </div>
            <img src={van.image} alt="van-img" className='van-img' />
            <div>
             <button className='van-btn' style={btnColor}>{van.type}</button>
            </div>
            <p className='van-name' style={{marginTop: '15px'}}>{van.name}</p>
            <p className='van-price' style={{marginTop: '-15px'}}>${van.price}/day</p>
            <p className='van-desc'>{van.description}</p>
            <div className="rent-btn">
                <Link style={{color: 'inherit'}}>Rent this van</Link>
            </div>
        </div>
    )
}

export default VanDetails