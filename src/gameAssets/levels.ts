export const level1 = [
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ]

 export const mapShow = (map: any, ctx: CanvasRenderingContext2D) => {
    for (let y = 0; y < map.content.length; y++) {
        for (let x = 0; x < map.content[y].length; x++) {
            switch (map.content[y][x]) {
                case 'X':
                    ctx.fillStyle = 'red'
                    ctx.strokeStyle = 'purple'

                    ctx.beginPath()
                    ctx.rect(x * map.blockSize, y * map.blockSize, map.blockSize, map.blockSize)
                    ctx.fill()
                    ctx.stroke()
                    break
                case '.':
                    ctx.strokeStyle = 'purple'
                    ctx.rect(x * map.blockSize, y * map.blockSize, map.blockSize, map.blockSize)
                    ctx.stroke()
                    break
            }
        }
    }
}