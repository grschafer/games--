Crafty.c("CustomTwoway", {
    _speed: 3,
    _up: false,

    init: function () {
        this.requires("Fourway, Keyboard");
    },

    /**@
    * #.twoway
    * @comp Twoway
    * @sign public this .twoway(Number speed[, Number jumpSpeed])
    * @param speed - Amount of pixels to move left or right
    * @param jumpSpeed - How high the entity should jump
    * 
    * Constructor to initialize the speed and power of jump. Component will
    * listen for key events and move the entity appropriately. This includes
    * ~~~
    * `Up Arrow`, `Right Arrow`, `Left Arrow` as well as W, A, D. Used with the
    * `gravity` component to simulate jumping.
    * ~~~
    * 
    * The key presses will move the entity in that direction by the speed passed in
    * the argument. Pressing the `Up Arrow` or `W` will cause the entity to jump.
    * 
    * @see Gravity, Fourway
    */
    twoway: function (speed, jump, keys) {

        this.multiway(speed, keys);
        /*this.multiway(speed, {
            RIGHT_ARROW: 0,
            LEFT_ARROW: 180,
            D: 0,
            A: 180,
            Q: 180
        });*/

        if (speed) this._speed = speed;
        this._jump = jump || this._speed * 2;

        this.bind("EnterFrame", function () {
            if (this.disableControls) return;
            if (this._up) {
                this.y -= this._jump;
                this._falling = true;
            }
        }).bind("KeyDown", function () {
            if (this.isDown("UP_ARROW") || this.isDown("W") || this.isDown("Z")) this._up = true;
        });

        return this;
    }
});
