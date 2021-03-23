import React from 'react'

const Filter = (props) => {
    return (
        <div className="container">

        
        <div className="row justify-content-space-between">
            <div className="col-md-4">
                Num of products
            </div>
            <div className="col-md-4">
                <label>
                    <select className = "form-control" onChange = {props.handleChangeSort}>
                        <option value="select">
                            Select
                        </option>
                        <option value="low">
                            Low-to-High
                        </option>
                        <option value="high">
                            High-to-Low
                        </option>
                    </select>
                </label>
            </div>
            <div className="col-md-4">
            <label>
                    <select className = "form-control" onChange = {props.handleChangeSize}>
                        <option value="select">
                            Select
                        </option>
                        <option value="XS">
                            XS
                        </option>
                        <option value="S">
                            S
                        </option>
                        <option value="L">
                            L
                        </option>
                        <option value="XL">
                            XL
                        </option>
                    </select>
                </label>
            </div>
            
        </div>
        </div>
    )
}

export default Filter
