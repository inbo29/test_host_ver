import React from "react";
import styles from "./loadingScreen.module.css";
import loadVideo from "../../../public/video/loadingV.mp4";

function Loading(props) {
	return (
		<div className={props.loading ? styles.body_loading : styles.none}>
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
			{/* <div
				className={styles.lds_ellipsis}
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				
			</div> */}
		</div>
	);
}

export default Loading