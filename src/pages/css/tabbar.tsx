import classNames from 'classnames'
import { CSSProperties, FC, useState } from 'react'

import styles from './css.less'

const TYPES = {
	home: Symbol.for('0'),
	find: Symbol.for('1'),
	message: Symbol.for('2'),
	user: Symbol.for('3'),
}

const Tabbar: FC = () => {
	// 为了 Symbol 而 Symbol
	const [active, setActive] = useState<Symbol>(TYPES.home)
	return (
		<div className={styles.tabbars}>
			<ul className={classNames(styles.tabbar1)} style={{ '--active-index': Number(active?.description) } as CSSProperties}>
				<li className={classNames(styles.item, active === TYPES.home && styles.active)} onClick={() => setActive(TYPES.home)}>
					<svg
						className={styles.icon}
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="781"
						width="36"
						height="36"
					>
						<path
							d="M555.541333 117.994667l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H640V746.666667c0-70.688-57.312-128-128-128s-128 57.312-128 128v170.666666H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0z"
							p-id="782"
							fill="currentColor"
						></path>
					</svg>
					<span>Home</span>
				</li>
				<li className={classNames(styles.item, active === TYPES.find && styles.active)} onClick={() => setActive(TYPES.find)}>
					<svg
						className={styles.icon}
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="1159"
						width="36"
						height="36"
					>
						<path
							d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m149.162667 222.901334L444.16 386.357333a96 96 0 0 0-57.802667 57.813334l-78.122666 216.992a42.666667 42.666667 0 0 0 54.602666 54.602666l217.002667-78.122666a96 96 0 0 0 57.802667-57.813334l78.122666-216.992a42.666667 42.666667 0 0 0-54.602666-54.602666zM512 565.333333a53.333333 53.333333 0 1 0 0-106.666666 53.333333 53.333333 0 0 0 0 106.666666z"
							p-id="1160"
							fill="currentColor"
						></path>
					</svg>
					<span>Explore</span>
				</li>
				<li className={classNames(styles.item, active === TYPES.message && styles.active)} onClick={() => setActive(TYPES.message)}>
					<svg
						className={styles.icon}
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="2609"
						width="36"
						height="36"
					>
						<path
							d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z"
							p-id="2610"
							fill="currentColor"
						></path>
					</svg>
					<span>Collection</span>
				</li>
				<li className={classNames(styles.item, active === TYPES.user && styles.active)} onClick={() => setActive(TYPES.user)}>
					<svg
						className={styles.icon}
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="2891"
						width="36"
						height="36"
					>
						<path
							d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 586.666667a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m-2.517333-373.333333c-48.416 0-92.746667 24.16-118.613334 63.413333a137.088 137.088 0 0 0-15.978666 33.237333 32 32 0 0 0 60.906666 19.690667c2.016-6.24 4.885333-12.202667 8.522667-17.717333C458.4 375.914667 482.709333 362.666667 509.482667 362.666667 552.277333 362.666667 586.666667 396.266667 586.666667 437.333333s-34.4 74.666667-77.194667 74.666667a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-35.584C603.946667 558.197333 650.666667 503.232 650.666667 437.333333c0-76.757333-63.381333-138.666667-141.194667-138.666666z"
							p-id="2892"
							fill="currentColor"
						></path>
					</svg>
					<span>Help</span>
				</li>
			</ul>
		</div>
	)
}

export default Tabbar
