class gameObj {
    constructor (type, size, data) {
        this.type = type,
        this.size = size,
        this.data = data
    }
    draw(ctx) {
        ctx.fillStyle = this.data.color;
        ctx.fillRect(this.data.coords.x, this.data.coords.y, this.size.width, this.size.height);
    }
    move(side) {
        if (side === "right")
            this.data.coords.x+=this.data.coords.speed
        else if (side === "left")
            this.data.coords.x-=this.data.coords.speed
    }
}

export default gameObj