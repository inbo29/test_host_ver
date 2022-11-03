import React from 'react'
import styles from './Loader.module.css'

const Loader = ()  => {
	return (
		<div className={styles.loaderContainer}>
			<img src="loading.svg" alt="" />
			<div>Loading...</div>
		</div>
	)
}

export default Loader