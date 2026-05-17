/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.TutorialStage = tm.createClass(
/** @lends {gls2.TutorialStage.prototype} */
{
    superClass: gls2.Stage,

    keyboard: null,
    lines: null,

    init: function(gameScene) {
        this.superInit(gameScene);

        var lines = this.lines = [];
        var kb = this.keyboard = tm.input.Keyboard(null, true);

        var player = gameScene.player;

        this.seq.add(  0, function() {
            gameScene.ground.direction = Math.PI*0.5;
            gameScene.ground.speed = 1;
        });

        var showText = function(text) {
            return function() {
                lines.splice(0);
                for (var i = 0; i < text.length; i++) {
                    lines.push(text[i]);
                }
            };
        };
        var input = function(key, press) {
            return function() {
                kb.clearKey();
                kb.setKey(key, press);
                kb._update();
            };
        };

        this.seq.add(300, input("down",  true));
        this.seq.add( 20, input("down",  false));

        this.seq.add( 30, showText([
            "方向键移动！"
        ]));
        this.seq.add(  1, input("left",  true));
        this.seq.add( 30, input("up",    true));
        this.seq.add( 30, input("right", true));
        this.seq.add( 30, input("right", true));
        this.seq.add( 30, input("down",  true));
        this.seq.add( 30, input("left",  true));
        this.seq.add( 30, input("left",  true));
        this.seq.add( 30, input("up",    true));
        this.seq.add( 30, input("right", true));
        this.seq.add( 30, input("right", true));
        this.seq.add( 30, input("down",  true));
        this.seq.add( 30, input("left",  true));
        this.seq.add( 30, input("left",  true));
        this.seq.add( 30, input("up",    true));
        this.seq.add( 30, input("right", true));
        this.seq.add( 30, input("right", true));
        this.seq.add( 30, input("down",  true));
        this.seq.add( 30, input("left",  true));
        this.seq.add( 30, input("left",  false));

        this.seq.add( 30, showText([
            "连按C键发射射击！"
        ]));
        for (var i = 0; i < 40; i++) {
            this.seq.add(  4, input("c",  true));
            this.seq.add(  4, input("c",  false));
        }
        this.seq.add(  1, showText([]));

        this.seq.add( 30, showText([
            "长按C键发射激光！"
        ]));
        this.seq.add(  1, input("c",  true));
        this.seq.add(220, input("c",  false));
        this.seq.add(  1, showText([]));

        this.seq.add( 30, showText([
            "长按Z键自动连射"
        ]));
        this.seq.add(  1, input("z",  true));
        this.seq.add(220, input("z",  false));
        this.seq.add(  1, showText([]));

        this.seq.add( 50, showText([
            "X键发射炸弹！"
        ]));
        this.seq.add( 10, input("x",  true));
        this.seq.add(  1, input("x",  false));
        this.seq.add( 90, showText([]));

        this.seq.add(150, showText([
            "·击败敌人",
            "·收集星星道具",
            "等方式可提升超级量表！"
        ]));
        this.seq.add(  1, input("c",  true));
        for (var i = 0; i < 23; i++) {
            this.seq.add(20, "heri2-T-center");
        }
        this.seq.add(200, input("c",  false));
        this.seq.add(  1, showText([]));

        this.seq.add( 60, input("z",  true));
        this.seq.add(150, showText([
            "超级量表充满时",
            "按X键可发动超级模式！"
        ]));
        this.seq.add(  1, input("x",  true));
        this.seq.add(  1, input("x",  false));
        this.seq.add(  1, input("z",  true));
        for (var i = 0; i < 3; i++) {
            this.seq.add(40, "heri1-4-left");
            this.seq.add(40, "heri1-4-center");
            this.seq.add(40, "heri1-4-right");
        }
        this.seq.add(  1, showText([
            "超级模式中",
            "射击可以破坏敌弹！"
        ]));
        for (var i = 0; i < 2; i++) {
            this.seq.add(40, "heri1-4-left");
            this.seq.add(40, "heri1-4-center");
            this.seq.add(40, "heri1-4-right");
        }
        this.seq.add(200, input("z",  false));
        this.seq.add(  1, showText([]));

        this.seq.add(180, function() {
            gls2.core.mode = 0;
            gls2.core.replaceScene(gls2.TitleScene());
        });
    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(230,50%,20%)" },
            { offset:1, color:"hsl(230,50%,10%)" },
        ]).toStyle();
    }
});

})();
