

import { CarList } from '../cmps/CarList'
import { useState, useEffect } from 'react'

export function Board() {


    return (
        <main className="car-index">
            <header>
                <h2>Cars</h2>
                {userService.getLoggedinUser() && <button onClick={onAddCar}>Add a Car</button>}
            </header>
            <CarFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <CarList 
                cars={cars}
                onRemoveCar={onRemoveCar} 
                onUpdateCar={onUpdateCar}/>
        </main>
    )
}