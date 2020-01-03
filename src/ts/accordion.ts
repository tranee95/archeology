export class accordion {
    private $accordion      : JQuery;
    private $filterBtn      : JQuery;
    private $accordionPanel : JQuery;
    
    constructor() {
        this.init();

        this.$filterBtn.click(() => {
            this.$accordion.toggleClass("accordion__active");      

            this.$accordion.hasClass("accordion__active") 
                ? this.$accordion.css({"display": "block", "opacity": "0"})
                                 .show().animate({opacity: 1}, 100)
                : this.$accordion.css({"display": "none"});    
        });
    }

    private init() {
        this.$accordion      = $("#accordion");
        this.$filterBtn      = $("#filterBtn");
        this.$accordionPanel = $("#accordionPanel");
    }
}
