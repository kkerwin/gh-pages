import { FC, useEffect } from 'react'
import { Canvas, Page } from '@/components'
import { useFn, useImmer } from '@/hooks'
import { ISize } from '@/components/canvas'

const w = innerWidth
const h = innerHeight

class Particle {
	ctx: CanvasRenderingContext2D
	x: number
	y: number
	size: number
	speedX: number
	speedY: number

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx
		this.size = Math.random() * 50 + 1
		this.x = Math.random() * w + 1
		this.y = Math.random() * h + 1

		this.speedX = Math.random() * 3 - 1.5
		this.speedY = Math.random() * 3 - 1.5
	}

	update() {
		if (this.x + this.size >= innerWidth || this.x - this.size <= 0) {
			this.speedX = -this.speedX
		}
		if (this.y + this.size >= innerHeight || this.y - this.size <= 0) {
			this.speedY = -this.speedY
		}
		this.x += this.speedX
		this.y += this.speedY
		if (this.size > 2) {
			this.size -= 0.1
		}
	}

	draw() {
		const { ctx } = this
		ctx.fillStyle = '#58b368'
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
		ctx.fill()
	}
}

const Frank: FC = () => {
	const [particles, setParticle] = useImmer<Particle[]>([])

	const handleCanvasReady = useFn((ctx: CanvasRenderingContext2D) => {
		const ps = Array.from(new Array(500).keys()).map(() => new Particle(ctx))
		console.log(ps)

		setParticle(ps)
		animate(ctx)
	})

	const draw = useFn(() => {
		particles.forEach((i) => {
			i.update()
			i.draw()
		})
	})

	function animate(ctx: CanvasRenderingContext2D) {
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
		draw()
		requestAnimationFrame(animate.bind(null, ctx))
	}

	return (
		<Page>
			<Canvas resize className="resizeCanvas" onMount={handleCanvasReady} />
		</Page>
	)
}

export default Frank
