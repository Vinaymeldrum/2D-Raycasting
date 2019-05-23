class Food {
  constructor(x1, y1) {
    this.poi = createVector(0, 0);
    this.pos = createVector(x1, y1);

  }

  // Displays food on canvas
  show() {
    rect(this.pos.x, this.pos.y, 10, 10);
  }

  //
  update(x, y) {
    this.pos.set(x, y);
  }

  // Determines if particle can see food
  see(particle, wall) { //(b-b/m-m)
    this.m = (particle.pos.y - this.pos.y) / (particle.pos.x - this.pos.x);
    this.b = this.pos.y - (this.m * this.pos.x);
    text("Equation: " + Math.round(this.m) + ", " + Math.round(this.b), width/2, width/2);
    this.poi.x = (wall.intercept - this.b) / (this.m - wall.slope);
    this.poi.y = (this.m * this.poi.x) - this.b;
    fill(255);
    text("POI: (" + Math.round(this.poi.x) + ", " + Math.round(this.poi.y) + ")", this.poi.x, this.poi.y + 10);
    if ((wall.a.x < this.poi.x && wall.b.x > this.poi.x || wall.b.x < this.poi.x && wall.a.x > this.poi.x) &&
        (wall.a.y < this.poi.y && wall.b.y > this.poi.y || wall.b.y < this.poi.y && wall.a.y > this.poi.y) &&
        (particle.pos.y < this.poi.y && this.pos.y > this.poi.y || this.pos.y < this.poi.y && particle.pos.y > this.poi.y) &&
        (particle.pos.x < this.poi.x && this.pos.x > this.poi.x || this.pos.x < this.poi.x && particle.pos.x > this.poi.x)) {
      return true;
    }
    return false;
  }
}