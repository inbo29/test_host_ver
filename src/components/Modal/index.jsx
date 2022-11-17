import React from 'react';
// import Modal from './Modal';
import loadVideo from "../../../public/video/loadingV.mp4";
import styles from "./modal.module.css";

const Modal = ({open,onClose}) => {
	if(!open) return null
	return (
		<div className='overlay'>
			<div className="container">
				<p onClick={onClose} className='closeBtn'>X</p>
				<video 
				className={styles.video}
				playsInline
				id="LoadVideo"
				autoPlay={true}
				loop={true}
				muted
				src={loadVideo} 
				type="video/mp4"
				>
				</video>
			</div>
		</div>
	)
}

export default Modal