import React from 'react'

const AdminVans = () => {

  const [vans, setVans] = React.useState([])

  React.useEffect( () => {
      fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data))
  }, [])


  return (
    <div className='container'>
      <p>Your listed vans</p>
      <div className='admin-van d-flex mt-2 p-2'>
        <img src="/images/vans/1.jpg" className='admin-van-img'/>
        <div className='admin-van-data'>
          <p>Modest Explorer</p>
          <p>$30/day</p>
        </div>
      </div>
    </div>
  )
}

export default AdminVans