export const player = (playerStart: { x: number; y: number }, ctx: CanvasRenderingContext2D) => {
    const props = {
        pos: { x: playerStart.x, y: playerStart.y },
        vel: { x: 0, y: 0 },
        moving: false,
        direction: 'none',
        speed: 3,
        size: 20,
    }

    const update = () => {
        if (props.moving) {
            if (props.direction === 'up') {
                const y = (props.pos.y - (props.pos.y % props.size)) / props.size
                if (y <= 0) {
                    props.vel.y = 0
                    props.pos.y = 0
                    props.moving = false
                }
            } else if (props.direction === 'down') {
                const y = (props.pos.y - (props.pos.y % props.size)) / props.size
                if (y >= 19) {
                    props.vel.y = 0
                    props.pos.y = 380
                    props.moving = false
                }
            } else if (props.direction === 'left') {
                const x = (props.pos.x - (props.pos.x % props.size)) / props.size
                const xx = (props.pos.x - (props.pos.x % props.size)) / props.size;
                if (x <= -1) {
                  props.vel.x = 0;
                  props.pos.x = 0;
                  props.moving = false;
                }
            } else if (props.direction === 'right') {
                const x = (props.pos.x - (props.pos.x % props.size)) / props.size
                if (x >= 9) {
                    props.vel.x = 0
                    props.pos.x = 180
                    props.moving = false
                }
            }
        }

        props.pos.x += props.vel.x
        props.pos.y += props.vel.y
    }

    const show = () => {
        ctx.fillStyle = 'green'
        ctx.strokeStyle = 'red'

        ctx.beginPath()
        ctx.rect(props.pos.x, props.pos.y, props.size, props.size)
        ctx.fill()
        ctx.stroke()
    }

    const input = (key: string) => {
        if (props.moving) return
        if (key === 'w' || key === 'W') {
            props.vel.y = -props.speed
            props.direction = 'up'
            props.moving = true
        }
        if (key === 's' || key === 'S') {
            props.vel.y = props.speed
            props.direction = 'down'
            props.moving = true
        }
        if (key === 'a' || key === 'A') {
            props.vel.x = -props.speed
            props.direction = 'left'
            props.moving = true
        }
        if (key === 'd' || key === 'D') {
            props.vel.x = props.speed
            props.direction = 'right'
            props.moving = true
        }
    }

    return { update, show, input }
}
