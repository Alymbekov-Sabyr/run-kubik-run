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
    move(side, dif) {
        if (side === "right")
            this.data.coords.x+=this.data.coords.speedX*dif
        else if (side === "left")
            this.data.coords.x-=this.data.coords.speedX*dif
        else if (side === "top")
            this.data.coords.y-=this.data.coords.speedY*dif
        else if (side === "down")
            this.data.coords.y+=this.data.coords.speedY*dif
    }
}

export default gameObj