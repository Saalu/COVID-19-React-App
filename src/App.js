import React, { Component} from 'react'


import {Cards, Chart, CountryPicker} from './components/'
import styles from './App.module.css'
import {fetchData} from './api'

import coroImage from './images/coroImage.png'

 class App extends Component {
    state = {
       data: {},
       country:''

    }
  
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
    
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country:country})

    console.log('data', fetchedData)

  }

  render() {
    const {data, country} =this.state
    return (
      <div className={styles.container}>
        <img  src={coroImage} className={styles.image} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App
